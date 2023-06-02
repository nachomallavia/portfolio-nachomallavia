<script>
	import { lang } from '../../../configStore';
	import { beforeUpdate, onMount, afterUpdate } from 'svelte';
	import {
		currentProductId,
		currentDesignId,
		colorIndex,
		currentColorId
	} from './productCardStore';
	import { productList } from './productList';
	import { designList } from './designList';
	import { colorList } from './colorList';
	import { element } from 'svelte/internal';

	$: product = productList.find((product) => product.id === $currentProductId);
	$: design = designList.find((design) => design.id === $currentDesignId);
	$: currentColor = colorList.find((color) => color.id === $currentColorId);

	let availableColorsArray = [];
	onMount(() => {
		updateColor(currentColor);
	});
	beforeUpdate(() => {
		if (design !== undefined) {
			let designPickedColors = design.selectedProductColors;

			for (let i = 0; i < designPickedColors.length; i++) {
				let idCombinator = designPickedColors[i];

				if (idCombinator.productId == product.id) {
					availableColorsArray = [];
					idCombinator.colorIds.forEach((colorId) => {
						let includedColor = colorList.find((obj) => obj.id === colorId);
						if (availableColorsArray.indexOf(includedColor) === -1) {
							availableColorsArray.push(includedColor);
						}
					});
				}
			}
			if (availableColorsArray.length > 0) {
				if (availableColorsArray.indexOf(currentColor) === -1) {
					$currentColorId = availableColorsArray[0].id;
					currentColor = colorList.find((color) => color.id === $currentColorId);
				}
			}
		}
	});
	afterUpdate(() => {
		updateColor(currentColor);
	});

	function updateColor(color) {
		$currentColorId = color.id;
		let sampleCollection = document.getElementsByClassName('sample');
		let sampleArray = [...sampleCollection];
		sampleArray.forEach((sample) => sample.classList.remove('selected'));
		let selectedSample = sampleArray.find((element) => element.id === $currentColorId.toString());

		selectedSample.classList.add('selected');
	}
</script>

<div class="color-container">
	<h3>{$lang === 'ES' ? 'Colores disponibles' : 'Available Colors'}</h3>
	<div class="color-menu">
		{#each availableColorsArray as color, i}
			<div
				class="color-option"
				on:click={() => {
					updateColor(color);
				}}
			>
				{#if color.id === colorList[$currentColorId]}
					<button class="sample selected" id={color.id} style={'background-color:' + color.code} />
					<span class="label">{$lang === 'ES' ? color.nameAr : color.nameUs}</span>
				{:else}
					<button class="sample" id={color.id} style={'background-color:' + color.code} />
					<span class="label">{$lang === 'ES' ? color.nameAr : color.nameUs}</span>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.color-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--background-color);

		border-radius: 1rem;
	}
	.color-menu {
		display: flex;
		gap: 1rem;
		min-width: 20rem;
	}
	.color-option {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}
	.color-option:hover {
		cursor: pointer;
	}
	.sample {
		width: 40px;
		min-height: 40px;
		aspect-ratio: 1/1;
		border-radius: 50%;
		border: 1px solid var(--text-color);
	}
	.sample:hover {
		cursor: pointer;
	}
	.sample.selected {
		border: 3px solid var(--accent-color);
		scale: 110%;
	}
	.label {
		text-align: center;
	}
</style>
