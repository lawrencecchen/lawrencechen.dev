import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import util from 'util';
import path from 'path';

const readdir = util.promisify(fs.readdir);

// ty https://qwtel.com/posts/software/async-generators-in-the-wild
async function getFiles(dir) {
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map((dirent) => {
			const res = path.resolve(dir, dirent.name);
			return dirent.isDirectory() ? getFiles(res) : res;
		})
	);
	return Array.prototype.concat(...files);
}

export const get: RequestHandler = async ({ query }) => {
	const blogDirname = path.dirname(import.meta.url);
	const files = await getFiles(blogDirname);
	const paths = files.filter((file) => path.extname(file) === '.md');
	const data = await paths
		.map(async (postPath) => {
			// Using mdsvex's frontmatter: https://mdsvex.com/docs#frontmatter-1
			const post = await import(postPath);
			// console.log(post.default.render());
			const relativePath = path.relative(blogDirname, postPath);
			const slug = relativePath.replace(/\.[^/.]+$/, '');
			const frontmatter = post.metadata;

			return {
				layout: null,
				title: null,
				publishedOn: null,
				showRelativeTime: false,
				updatedOn: null,
				published: null,
				abstract: '',
				slug,
				...frontmatter
			};
		})
		.filter((post) => !query.get('published') || !!post.published);

	return {
		body: {
			routes: await Promise.all(data)
		}
	};
};
