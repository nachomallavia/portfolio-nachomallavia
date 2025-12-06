<script>
	import {lang} from '../../configStore.svelte.js';
	
	let { skillNameAr = '', skillNameUs = '', score = 10 } = $props();
	let scoreArray = [];

	for (let i = 1; i <= 10; i++) {
		if(i == 10 && score==10){
			scoreArray.push(10);
		} else if(i == 1){
			scoreArray.push(1)
		} else if (i <= score) {
			scoreArray.push(2);
		} else {
			scoreArray.push(0);
		}
	}
</script>

<div class="skill-container">
	
	<div class="title-score">
		<h3>{lang.value==="ES"?skillNameAr:skillNameUs}</h3>
		<div class="score-container">
			{#each scoreArray as point}
				{#if point === 1}
					<div class="score first point" />
				{:else if point === 2}
					<div class="score point" />
				{:else if point === 0}	
					<div class="score empty" />
				{:else if point === 10}
					<div class="score last point" />
				{:else}
					<div class="score last empty" />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.skill-container {
		display: flex;
	}
	.title-score {
		display: flex;
		flex-direction: column;
	}
	.score-container {
		display: flex;
		/* gap: 0.1rem; */
	}
	.score {
		width: 0.75rem;
		height: 0.25rem;
	}
	.point {
		background-color: var(--accent-color);
	}
	.empty {
		background-color: var(--background-color-3);
	}
	.first{
		border-radius: 1rem 0 0 1rem;
	}
	.last{
		border-radius: 0 1rem 1rem 0;
	}
</style>
