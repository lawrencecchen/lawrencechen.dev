<script lang="ts">
	import { getRelativeTime } from '$lib/utils/getRelativeTime';

	export let title = '';
	export let publishedOn;
	export let updatedOn;
	export let layout;
	const publishedDate = new Date(publishedOn);
</script>

<main class="">
	<section class="w-full text-center border-b border-t py-12 space-y-8">
		<h1 class="font-bold text-4xl text-gray-900">{title}</h1>
		<time datetime={publishedOn} class="block text-sm text-gray-500">
			{publishedDate.toLocaleDateString(undefined, {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})} ({getRelativeTime(publishedDate)})
		</time>
	</section>
	<!-- <h1>
		{title}
	</h1> -->
	<div class="prose max-w-prose mx-auto py-12 px-5">
		<slot />
	</div>
</main>
