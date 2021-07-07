import externalLinks from 'remark-external-links';
import footnotes from 'remark-footnotes';
import autolinkHeadings from 'rehype-autolink-headings';
import slug from 'rehype-slug';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		article: './src/lib/layouts/ArticleLayout.svelte'
	},
	remarkPlugins: [
		[externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		[footnotes, { inlineNotes: true }]
	],
	rehypePlugins: [
		slug,
		[
			autolinkHeadings
			// {
			// 	properties: {
			// 		ariaHidden: false,
			// 		tabIndex: 0,
			// 		class: 'underline-none border-black hover:border-b hover:border-dotted transition',
			// 		style: 'text-decoration: none'
			// 	},
			// 	behavior: 'wrap'
			// }
		]
	]
};

export default config;
