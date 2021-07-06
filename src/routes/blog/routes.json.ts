import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import util from 'util';
import path from 'path';
import matter from 'gray-matter';

const readdir = util.promisify(fs.readdir);
const BYPASS_KEY = import.meta.env.VITE_PREVIEW_SECRET as string;

// ty https://qwtel.com/posts/software/async-generators-in-the-wild
async function getFiles(dir: string) {
	// Ignore config files
	if (dir.includes('.obsidian') || dir.includes('_templates')) {
		return [];
	}
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map((dirent) => {
			const res = path.resolve(dir, dirent.name);
			return dirent.isDirectory() ? getFiles(res) : res;
		})
	);
	return Array.prototype.concat(...files);
}

export interface PostRoute {
	layout: string;
	title: string;
	publishedOn: string;
	showRelativeTime: boolean;
	updatedOn: any;
	isPublished: boolean;
	abstract: string;
	slug: string;
}

export const get: RequestHandler = async ({ query }) => {
	const blogDirname = 'src/routes/blog';
	const files = await getFiles(blogDirname);
	const filePaths = files.filter((file) => path.extname(file) === '.md');
	const posts: PostRoute[] = await Promise.all(
		filePaths.map((filePath) => {
			const relativePath = path.relative(blogDirname, filePath);
			const slug = relativePath.replace(/\.[^/.]+$/, '');
			const post = matter.read(filePath);
			const frontmatter = post.data;

			return {
				layout: null,
				title: null,
				publishedOn: null,
				showRelativeTime: false,
				updatedOn: null,
				isPublished: null,
				abstract: '',
				slug,
				...frontmatter
			};
		})
	);

	// TODO: figure out proper types
	const publishedPosts: any = posts
		.sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime())
		.filter((post) => post.isPublished || query.get('bypass_key') === BYPASS_KEY);

	return {
		body: {
			routes: publishedPosts
		}
	};
};
