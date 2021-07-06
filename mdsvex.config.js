import externalLinks from 'remark-external-links';
import footnotes from 'remark-footnotes';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		article: './src/lib/layouts/ArticleLayout.svelte'
	},

	remarkPlugins: [
		[externalLinks, { target: '_blank', rel: ['external', 'noopener', 'noreferrer'] }],
		[footnotes, { inlineNotes: true }]
	],
	rehypePlugins: []
};

export default config;
