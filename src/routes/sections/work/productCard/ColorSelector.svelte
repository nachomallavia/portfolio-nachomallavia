<script>
	import { lang } from '../../../configStore.svelte.js';
	import {
		currentProductId,
		currentDesignId,
		colorIndex,
		currentColorId
	} from './productCardStore.svelte.js';
	import { productList } from './productList';
	import { designList } from './designList';
	import { colorList } from './colorList';
	import { untrack } from 'svelte';

	let product = $derived(productList.find((product) => product.id === currentProductId.value));
	let design = $derived(designList.find((design) => design.id === currentDesignId.value));
	let currentColor = $derived(colorList.find((color) => color.id === currentColorId.value));

	// Compute available colors as a derived value instead of using effect
	let availableColorsArray = $derived.by(() => {
		if (design === undefined || product === undefined) return [];
		
		let result = [];
		let designPickedColors = design.selectedProductColors;

		for (let i = 0; i < designPickedColors.length; i++) {
			let idCombinator = designPickedColors[i];

			if (idCombinator.productId == product.id) {
				idCombinator.colorIds.forEach((colorId) => {
					let includedColor = colorList.find((obj) => obj.id === colorId);
					if (includedColor && result.indexOf(includedColor) === -1) {
						result.push(includedColor);
					}
				});
			}
		}
		return result;
	});

	// Separate effect to update currentColorId if needed - only runs when availableColorsArray changes
	$effect(() => {
		const colors = availableColorsArray;
		const color = currentColor;
		
		if (colors.length > 0 && color) {
			if (colors.indexOf(color) === -1) {
				untrack(() => {
					currentColorId.value = colors[0].id;
				});
			}
		}
	});

	function updateColor(color) {
		currentColorId.value = color.id;
	}
</script>

<div class="color-container">
	<h3>{lang.value === 'ES' ? 'Colores disponibles' : 'Available Colors'}</h3>
	<div class="color-menu">
		{#each availableColorsArray as color, i}
			<div
				class="color-option"
				role="button"
				tabindex="0"
				onclick={() => {
					updateColor(color);
				}}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') updateColor(color);
				}}
			>
				{#if color.id === currentColorId.value}
					<button class="sample selected" id={color.id} style={'background-color:' + color.code} aria-label={lang.value === 'ES' ? color.nameAr : color.nameUs}></button>
					<span class="label">{lang.value === 'ES' ? color.nameAr : color.nameUs}</span>
				{:else}
					<button class="sample" id={color.id} style={'background-color:' + color.code} aria-label={lang.value === 'ES' ? color.nameAr : color.nameUs}></button>
					<span class="label">{lang.value === 'ES' ? color.nameAr : color.nameUs}</span>
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
		gap: .75rem;
		min-width: 20rem;
	}
	.color-option {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
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
	@media screen and (max-width: 512px){
		h3{
			font-size:1.1rem;
		}
		.sample{
			width: 36px;
			min-height: 36px;
			
		}
	}
</style>
