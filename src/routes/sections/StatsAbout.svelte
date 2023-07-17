<script>
	import { onMount } from 'svelte';
	import { lang } from '../configStore';
	
	
	// $: selectedLang = $lang;

	import StatBox from './StatBox.svelte';
	let about = {
		Age: '36 y/o',
		Country: 'Argentina',
		'Coding Experience': '1+ years'
	};
	let selectedStats = about;
	let aboutEsp = {
		Edad: '36 años',
		País: 'Argentina',
		'Experiencia con código': '1+ años'
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
		<StatBox title={key} stat={value}/>
	{/each}
</div>

<style>
	.stats {
		margin-top: 2rem;
		/* width: 100%; */
		/* max-width: 700px; */
		/* padding-inline: 2rem; */
		padding-block: 1rem;
		background-color: var(--background-color);
		/* border: 1px solid var(--text-color); */
		border-radius: 0.25rem;
		display: flex;
		gap: 4rem;
		justify-content: space-between;
	}
</style>
