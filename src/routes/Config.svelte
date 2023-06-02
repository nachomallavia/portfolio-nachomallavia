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
		/* flex-direction: column; */
		gap: 1rem;
		padding-top: 0.75rem;
		align-items: center;
		justify-content: center;
		padding-right: 1rem;
		width: 100%;
	}
</style>
