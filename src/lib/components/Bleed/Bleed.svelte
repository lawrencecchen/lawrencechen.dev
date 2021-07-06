<script lang="ts">
	export let full = false;
</script>

<div class="relative {full ? 'bleed-full' : '-mx-6 md:-mx-20 lg:-mx-36 w-auto'}">
	<slot />
</div>

<style>
	.bleed-full {
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}
</style>
