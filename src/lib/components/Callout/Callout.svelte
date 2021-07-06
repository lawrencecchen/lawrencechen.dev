<script lang="ts">
	export let emoji = '💡';
</script>

<div class="bg-yellow-50 dark:text-gray-800 flex w-full my-6">
	<div class="pl-3 pr-2 py-2 select-none text-xl">{emoji}</div>
	<div class="pr-4 py-2">
		<slot />
	</div>
</div>
