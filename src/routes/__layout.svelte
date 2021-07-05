<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import { page } from '$app/stores';

	const nonExternalPaths = [{ slug: 'blog', match: 'blog', value: 'Blog' }];
</script>

<svelte:head>
	<title>Lawrence Chen's Blog</title>
	<meta name="description" content="Lawrence Chen's Blog" />
	<meta property="og:title" content="Lawrence Chen's Blog" />
	<meta property="og:site_name" content="Lawrence Chen's Blog" />
	<meta name="twitter:site" content="@lawrencecchen" />
</svelte:head>

<div class="min-h-screen w-screen">
	<div
		class="w-full p-2 top-0 backdrop-filter backdrop-blur-xl backdrop-saturate-200 bg-opacity-70 firefox:bg-opacity-95 bg-white z-10 transition duration-300 "
	>
		<div class="grid sm:grid-cols-3 place-items-center items-center max-w-6xl w-full mx-auto">
			<a
				class="font-semibold text-gray-700 transition px-3 py-2 rounded focus-visible:ring-2 ring-black outline-none"
				href="/">lawrence</a
			>

			<div class="flex items-center">
				{#each nonExternalPaths as { slug, value, match }}
					<a
						class="text-gray-500 font-light text-sm px-3 py-2 rounded hover:text-black transition focus-visible:ring-2 ring-black outline-none
                    {$page.path.includes(match) ? 'text-black selected' : 'text-gray-500'}"
						href="/{slug}"
					>
						{value}
					</a>
				{/each}
				<a
					class="text-gray-500 font-light text-sm px-3 py-2 rounded hover:text-black transition focus-visible:ring-2 ring-black outline-none"
					href="mailto:lawrencechen2002@gmail.com"
				>
					Contact
				</a>
				<a
					class="text-gray-500 font-light text-sm px-3 py-2 rounded hover:text-black transition focus-visible:ring-2 ring-black outline-none"
					href="https://twitter.com/lawrencecchen"
					target="_blank"
					rel="external noopener noreferrer"
				>
					Twitter
				</a>
				<a
					class="text-gray-500 font-light text-sm px-3 py-2 rounded hover:text-black transition focus-visible:ring-2 ring-black outline-none"
					href="https://github.com/lawrencecchen"
					target="_blank"
					rel="external noopener noreferrer"
				>
					GitHub
				</a>
			</div>
		</div>
	</div>
	<slot />
</div>
