const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		// Does not specify src because we have some tailwind classes in mdsvex.config.js
		content: ['./**/*.{html,js,svelte,ts,md}']
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				amber: colors.amber,
				orange: colors.orange
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};
