import externalLinks from 'remark-external-links';
const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		article: './src/lib/layouts/ArticleLayout.svelte'
	},

	remarkPlugins: [
		[externalLinks, { target: '_blank', rel: ['external', 'noopener', 'noreferrer'] }]
	],
	rehypePlugins: []
};

export default config;
