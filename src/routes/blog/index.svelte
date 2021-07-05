<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	// export const prerender = true;
	// export const hydrate = false;

	export const load: Load = async ({ fetch }) => {
		try {
			const data = await fetch('blog/routes.json').then((r) => r.json());
			if (data) {
				return {
					props: { data }
				};
			}
		} catch (e) {
			console.log(e);
		}
	};
</script>

<script lang="ts">
	import { getRelativeTime } from '$lib/utils/getRelativeTime';

	export let data;
</script>

<main>
	<section class="w-full text-center border-b border-t py-12 space-y-8">
		<h1 class="font-bold text-4xl text-gray-900">Blog</h1>
		<p class="text-gray-500 text-sm">Thoughts, ideas, and stuff for self reference.</p>
	</section>

	<ul class="divide-y w-full">
		{#each data.routes as { title, publishedOn, slug }}
			<li class="py-12 w-full">
				<article class="mx-auto max-w-prose space-y-3">
					<a class="font-semibold text-xl py-2" href="blog/{slug}" sveltekit:prefetch>{title}</a>
					<dl>
						<dt class="sr-only">Published on</dt>
						<dd class="text-sm text-gray-500">
							<time datetime={publishedOn}>
								{new Date(publishedOn).toLocaleDateString(undefined, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
								({getRelativeTime(new Date(publishedOn))})
							</time>
						</dd>
					</dl>
				</article>
			</li>
		{/each}
	</ul>
</main>
