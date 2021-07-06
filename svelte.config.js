import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
// import vercel from '@sveltejs/adapter-vercel';
import adapter_static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter_static()
		// adapter: vercel({ out: 'public' })
	}
};

export default config;
