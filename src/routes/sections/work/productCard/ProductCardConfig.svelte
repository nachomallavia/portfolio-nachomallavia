<script>
	import { browser } from '$app/environment';
	import {
		currentProductId,
		currentDesignId,
		currentColorId,
		currentBackgroundId
	} from './productCardStore';
	import { lang } from '../../../configStore';
	import { colorList } from './colorList.js';
	import { productList } from './productList.js';
	import { designList } from './designList.js';
	import { backgroundList } from './backgroundList.js';
	import ColorSelector from './ColorSelector.svelte';

	import { beforeUpdate, onMount } from 'svelte';

	$: product = productList.find((product) => product.id === $currentProductId);
	$: design = designList.find((design) => design.id === $currentDesignId);
	$: color = colorList.find((color) => color.id === $currentColorId);
	$: background = backgroundList.find((background) => background.id === $currentBackgroundId);

	function randomize(subject = 'all') {
		if (subject === 'product') {
			let newProductId = Math.floor(Math.random() * productList.length) + 1;
			if ($currentProductId != newProductId) {
				$currentProductId = newProductId;
			} else {
				randomize('product');
			}
		}
		if (subject === 'design') {
			let newDesignId = Math.floor(Math.random() * designList.length) + 1;
			if ($currentDesignId != newDesignId) {
				$currentDesignId = newDesignId;
			} else {
				randomize('design');
			}
		}
		if (subject === 'background') {
			let newBackgroundId = Math.floor(Math.random() * backgroundList.length) + 1;
			if ($currentBackgroundId != newBackgroundId) {
				$currentBackgroundId = newBackgroundId;
			} else {
				randomize('background');
			}
		}
		if (subject === 'all') {
			$currentProductId = Math.floor(Math.random() * productList.length) + 1;
			$currentDesignId = Math.floor(Math.random() * designList.length) + 1;
			$currentBackgroundId = Math.floor(Math.random() * backgroundList.length) + 1;
		}
	}
	onMount(() => {
		randomize('all')
		if (browser) {
			
			let btnAll = document.getElementById('randomize-all');
			let btnBackground = document.getElementById('randomize-background');
			btnAll?.click()
			btnBackground?.click()
		}
	});
</script>

<div class="container">
	<div class="title-random">
		<h3>{$lang === 'ES' ? 'Cambiar opciones' : 'Change options'}</h3>
		<button id="randomize-all"
			on:click={() => {
				randomize('all');
			}}
		>
			{$lang === 'ES' ? 'Randomizar todas' : 'Randomize all'}
		</button>
	</div>
	<div class="selects">
		<div class="option">
			<label for="design">{$lang === 'ES' ? 'Diseño:' : 'Design:'}</label>
			<select bind:value={$currentDesignId} name="design" >
				{#each designList as design}
					<option value={design.id}>{$lang === 'ES' ? design.nameAr : design.nameUs}</option>
				{/each}
			</select>
			<div class="random">
				<button
					on:click={() => {
						randomize('design');
					}}
				>
					{$lang === 'ES' ? 'Randomizar' : 'Randomize'}
				</button>
			</div>
		</div>
		<div class="option">
			<label for="product">{$lang === 'ES' ? 'Producto:' : 'Product:'}</label>
			<select bind:value={$currentProductId} name="product" >
				{#each productList as product}
					<option value={product.id}>{$lang === 'ES' ? product.nameAr : product.nameUs}</option>
				{/each}
			</select>
			<div class="random">
				<button
					on:click={() => {
						randomize('product');
					}}
				>
					{$lang === 'ES' ? 'Randomizar' : 'Randomize'}
				</button>
			</div>
		</div>
		<div class="option">
			<label for="background">{$lang === 'ES' ? 'Fondo:' : 'Background:'}</label>
			<select bind:value={$currentBackgroundId} name="background" >
				{#each backgroundList as background}
					<option value={background.id}
						>{$lang === 'ES'
							? background.categoryAr + ' ' + background.id
							: background.category + ' ' + background.id}</option
					>
				{/each}
			</select>
			<div class="random">
				<button id="randomize-background"
					on:click={() => {
						randomize('background');

					}}
				>
					{$lang === 'ES' ? 'Randomizar' : 'Randomize'}
				</button>
			</div>
		</div>
	</div>

	<ColorSelector />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 360px;
	}
	.title-random {
		display: flex;
		gap: 1rem;
		align-items: baseline;
		justify-content: space-between;
	}

	.selects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.option {
		display: flex;
		align-items: center;

	}
	.option > label{
		margin-right:.5rem;
	}
	select {
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--background-color);
		border: 1px solid var(--background-color-3);
		color: var(--text-color);
		font-size: 1rem;
		overflow: hidden;
		/* max-width: 9rem; */
		flex-grow: 1;
		/* margin-right: 1rem; */
	}
	/* select > option{
		color:var(--lightmode-text);
	} */
	button {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--background-color);
		border: 1px solid var(--background-color-3);
		border-radius: 0.25rem;
		color: var(--text-color);
		margin-left:.5rem;
	}
	#randomize-all{
			background-color: var(--accent-color-2);
			border: 1px solid var(--accent-color-2);
			color: white;
		}
	#randomize-all:hover{
		background-color: var(--accent-color);
	}
	button:hover {
		background-color: var(--accent-color);
		border: 1px solid var(--accent-color);
		color: white;
	}
	button:active {
		border: 1px solid var(--accent-color);
		background-color: var(--accent-color-2);
	}
	.random {
		display: flex;
		gap: 2rem;
	}

	@media screen and (max-width: 512px){
		.container{
			max-width: 100%;
			gap:2rem;
			padding-inline: 1rem;
		}
		h3{
			font-size: 1.1rem;
		}
	}
</style>
