<script lang="ts">
  import "@/lib/stores/LightDark";
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style lang="scss">
	:global(html) {
		height: 100svh;
   	overflow: hidden;
	}
	:global(body) {
		height: 100%;
	}
</style>