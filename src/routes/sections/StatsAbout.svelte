<script>
	import { onMount } from 'svelte';
	import { lang } from '../configStore';
	// $: selectedLang = $lang;

	import StatBox from './StatBox.svelte';
	let about = {
		Age: 36,
		Country: 'Argentina',
		Experience: '1+ years'
	};
	let selectedStats = about;
	let aboutEsp = {
		Edad: 36,
		País: 'Argentina',
		Experiencia: '1+ años'
	};
	$: if ($lang === 'ES') {
		selectedStats = aboutEsp;
	}
	$: if ($lang === 'ENG') {
		selectedStats = about;
	}
</script>

<div class="stats">
	{#each Object.entries(selectedStats) as [key, value]}
		<StatBox title={key} stat={value} />
	{/each}
</div>

<style>
	.stats {
		margin-top: 2rem;
		width: 100%;
		max-width: 700px;
		padding: 2rem;
		background-color: var(--background-color-2);
		/* border: 1px solid var(--text-color); */
		border-radius: 0.5rem;
		display: flex;
		justify-content: space-between;
	}
</style>
