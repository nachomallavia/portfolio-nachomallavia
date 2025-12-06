<script>
	import { currentProductId } from './productCardStore.svelte.js';
	import shirtTexture from '$lib/images/product-card/unisex-t-shirt-front.webp';
	import hoodieTexture from '$lib/images/product-card/hoodie-front.webp';
	import toteTexture from '$lib/images/product-card/tote-bag-front.webp';
	import { productList } from './productList';
	import { lang } from '../../../configStore.svelte.js';

	let product = $derived(productList.find((product) => product.id === currentProductId.value));

	let productTexture = $derived(
		product?.id === 1 ? shirtTexture :
		product?.id === 2 ? hoodieTexture :
		product?.id === 3 ? toteTexture :
		shirtTexture
	);
</script>

<div class="texture-container card-expand" id="texture-box">
	<img src={productTexture} alt={lang.value === 'ES' ? product?.nameAr : product?.nameUs} class="normal" />
</div>

<style>
	.texture-container {
		width: 100%;
		aspect-ratio: 4/5;
	}

	img {
		position: absolute;
		right: 0%;
		top: 0%;
		width: 100%;
		height: 100%;
	}
	#texture-box {
		transform: translateZ(0);
		transition: transform 0.3s;
	}
	#texture-box.card-expand {
		transform: translateZ(var(--translateZ));
	}
</style>
