<script>
	import { lang } from '../configStore.svelte.js';

	import StatBox from './StatBox.svelte';

	function calculateAge(birthDate) {
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	const birthDate = new Date(1987, 3, 23); // April 23, 1987 (months are 0-indexed)
	let currentAge = $derived(calculateAge(birthDate));

	const designStartYear = 2013;
	let designYears = $derived(new Date().getFullYear() - designStartYear);

	const codingStartYear = 2022;
	let codingYears = $derived(new Date().getFullYear() - codingStartYear);

	let about = $derived({
		Age: `${currentAge} y/o`,
		Country: 'Argentina',
		'Design Experience': `${designYears}+ years`,
		'Coding Experience': `${codingYears}+ years`
	});
	let aboutEsp = $derived({
		Edad: `${currentAge} años`,
		País: 'Argentina',
		'Experiencia en diseño': `${designYears}+ años`,
		'Experiencia con código': `${codingYears}+ años`
	});

	let selectedStats = $derived(lang.value === 'ES' ? aboutEsp : about);
	
</script>

<div class="stats">
	{#each Object.entries(selectedStats) as [key, value]}
		<StatBox title={key} stat={value}/>
	{/each}
</div>

<style>
	.stats {
		margin-top: 2rem;
		width: 100%;
		max-width: 900px;
		/* padding-inline: 2rem; */
		padding-block: 1rem;
		background-color: var(--background-color);
		/* border: 1px solid var(--text-color); */
		border-radius: 0.25rem;
		display: flex;
		gap: 3rem;
		justify-content: space-between;
	}
	@media screen and (max-width:512px){
		.stats{
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
