<script>
	import ThemeToggle from './ThemeToggle.svelte';
	import LangToggle from './LangToggle.svelte';
</script>

<div class="config">
	<LangToggle />
	<ThemeToggle />
</div>

<style>
	.config {
		display: flex;
		min-height: 5rem;
		gap: 1rem;
		
		align-items: center;
		justify-content: center;
		padding-right: 2rem;
		width: 100%;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
</style>
