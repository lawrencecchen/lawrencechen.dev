<script context="module" lang="ts">
	export const prerender = true;
	// export const hydrate = false;
</script>

<script lang="ts">
	import { prefetchRoutes } from '$app/navigation';
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		prefetchRoutes();
	});
</script>

<main class="max-w-prose mx-auto p-5">
	<section>
		<h1 class="font-bold text-5xl lg:text-6xl my-10 text-gray-900">Hi, I'm Lawrence Chen</h1>
		<div class="prose my-10">
			<p>I love clean design, playing clarinet, and making stuff.</p>
			<p>
				Currently automating biology over at
				<a href="https://transistor.bio" target="_blank" rel="external noopener noreferrer"
					>Transistor.bio</a
				>.
			</p>
			<p>
				Read my <a href="blog" sveltekit:prefetch>blog</a>. Check out its
				<a
					href="https://github.com/lawrencecchen/lawrencechen.dev"
					target="_blank"
					rel="external noopener noreferrer">source</a
				>.
			</p>
		</div>
	</section>
	<!-- <section>
		<h2 class="font-bold text-3xl lg:text-4xl mb-4">Mailing List</h2>
		<div class="prose">
			<p>Want to join my mailing list?</p>
			<form id="form01" method="post">
				<div class="text-left leading-none space-y-2 w-full max-w-sm">
					<div class="flex flex-col">
						<label for="form01-fname" class="text-sm text-gray-500">Name:</label>
						<input
							type="text"
							name="fname"
							id="form01-fname"
							placeholder="Jane Eyre"
							maxlength="128"
							class="mt-1 block flex-1 text-sm border-gray-300 rounded focus:outline-none focus:ring-black focus:border-black transition"
							required=""
						/>
					</div>
					<div class="flex flex-col">
						<label for="form01-email" class="text-sm text-gray-500">Email:</label>
						<input
							type="email"
							name="email"
							id="form01-email"
							placeholder="jane@eyre.org"
							maxlength="128"
							class="mt-1 block flex-1 text-sm border-gray-300 rounded focus:outline-none focus:ring-black focus:border-black transition"
							required=""
						/>
					</div>
					<div class="field" style="display: none;">
						<input
							type="text"
							name="your-url"
							id="form01-your-url"
							placeholder="Your Url"
							maxlength="128"
							disabled=""
						/>
					</div>
					<button
						class="relative grid grid-cols-6 p-2 group bg-black rounded text-gray-50 border border-transparent transition motion-reduce:transition-none focus:outline-none mt-2 w-full text-gray-600 text-base sm:text-sm
     svelte-1chnjmt"
						type="submit"
						><div class="h-full grid place-items-center col-span-1" />
						<div class="col-start-2 col-span-4 whitespace-nowrap">Subscribe ➤</div></button
					>
				</div>
				<input type="hidden" name="id" value="form01" />
			</form>
		</div>
	</section> -->
	<section>
		<h2 class="sr-only">Contact and Social Information</h2>
		<div class="flex space-x-3">
			<a
				class="group"
				href="https://twitter.com/lawrencecchen"
				target="_blank"
				rel="external noopener noreferrer"
			>
				<span class="sr-only">@lawrencecchen</span>
				<TwitterIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
			<a
				class="group"
				href="https://github.com/lawrencecchen"
				target="_blank"
				rel="external noopener noreferrer"
			>
				<span class="sr-only">Lawrence Chen's GitHub</span>
				<GitHubIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
			<a class="group" href="mailto:lawrencechen2002@gmail.com">
				<span class="sr-only">lawrencechen2002@gmail.com</span>
				<MailIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
		</div>
	</section>
</main>
