<script>
	import { browser } from '$app/environment';

	import design1 from '$lib/images/product-card/design-1.webp';
	import design2 from '$lib/images/product-card/design-2.webp';
	import design3 from '$lib/images/product-card/design-3.webp';
	import design4 from '$lib/images/product-card/design-4.webp';
	import design5 from '$lib/images/product-card/design-5.webp';
	import design6 from '$lib/images/product-card/design-6.webp';
	import design7 from '$lib/images/product-card/design-7.webp';
	import design8 from '$lib/images/product-card/design-8.webp';
	import design9 from '$lib/images/product-card/design-9.webp';
	import design10 from '$lib/images/product-card/design-10.webp';

	import { currentDesignId, currentProductId, backgroundIndex } from './productCardStore';

	import { productList } from './productList.js';
	import { designList } from './designList.js';

	import { lang } from '../../../configStore';
	import { onMount, beforeUpdate } from 'svelte';

	$: product = productList.find((product) => product.id === $currentProductId);
	$: design = designList.find((design) => design.id === $currentDesignId);

	$: selectedDesign = design1;
	let designScale = '';
	let designTranslate = '';

	$: if (design.id) {
		if (browser) {
			switch (design.id) {
				case 1:
					selectedDesign = design1;
					break;
				case 2:
					selectedDesign = design2;
					break;
				case 3:
					selectedDesign = design3;
					break;
				case 4:
					selectedDesign = design4;
					break;
				case 5:
					selectedDesign = design5;
					break;
				case 6:
					selectedDesign = design6;
					break;
				case 7:
					selectedDesign = design7;
					break;
				case 8:
					selectedDesign = design8;
					break;
				case 9:
					selectedDesign = design9;
					break;
				case 10:
					selectedDesign = design10;
					break;
			}
		}
	}
	$: if (product.id != undefined) {
		if (design != undefined) {
			if (browser) {
				let coordinates = design.placementCoordinates;
				designScale = coordinates[product.id - 1].scale;
				designTranslate = coordinates[product.id - 1].translate;

				let designElement = document.querySelector('.artboard > img');
				designElement.style['scale'] = designScale;
				designElement.style['translate'] = designTranslate;
			}
		}
	}
	onMount(() => {
		applyCoordinates();
	});
	function applyCoordinates() {
		if (product.id != undefined) {
			if (design != undefined) {
				let coordinates = design.placementCoordinates;

				designScale = coordinates[product.id - 1].scale;
				designTranslate = coordinates[product.id - 1].translate;
			}

			if (browser) {
				let designElement = document.querySelector('.artboard > img');

				designElement.style['scale'] = designScale;

				designElement.style['translate'] = designTranslate;
			}
		}
	}
</script>

<div class="design-container card-expand" id="design-box">
	<div class="artboard">
		<img src={selectedDesign} alt={$lang === 'ES' ? design.nameAr : design.nameUs} />
	</div>
</div>

<style>
	.design-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 4/5;
	}
	.artboard {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.artboard > img {
		transform-origin: 0% 0%;
		/* position:absolute;
       left:0;
       top:0; */
	}
	#design-box {
		transform: translateZ(0);
		transition: transform 0.3s;
	}
	#design-box.card-expand {
		transform: translateZ(var(--translateZ));
	}
</style>
