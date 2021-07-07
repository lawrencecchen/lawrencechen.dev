<script lang="ts">
	import { getRelativeTime } from '$lib/utils/getRelativeTime';

	export let title = '';
	export let publishedOn;
	export let showRelativeTime;
	export let updatedOn = null;
	const publishedDate = new Date(publishedOn);
	const updatedOnDate = new Date(updatedOn) ?? null;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="">
	<section class="w-full text-center border-b border-t py-12 space-y-8">
		<h1 class="font-bold text-4xl text-gray-900">{title}</h1>
		<p class="text-sm text-gray-500">
			<a
				href="https://twitter.com/lawrencecchen"
				target="_blank"
				rel="external noopener noreferrer"
				class="underline"
			>
				@lawrencecchen
			</a>
			/
			<time datetime={publishedDate.toString()}>
				{publishedDate.toLocaleDateString(undefined, {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
				{#if showRelativeTime}
					({getRelativeTime(publishedDate)})
				{/if}
			</time>
			{#if updatedOn}
				(Updated on <time datetime={updatedOnDate.toString()}>
					{updatedOnDate.toLocaleDateString(undefined, {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>)
			{/if}
		</p>
	</section>

	<div class="prose max-w-prose mx-auto py-12 px-5">
		<slot />
	</div>
</main>
