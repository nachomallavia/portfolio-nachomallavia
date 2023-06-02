<script>
	import { currentProductId } from './productCardStore';
	import shirtTexture from '$lib/images/product-card/unisex-t-shirt-front.webp';
	import hoodieTexture from '$lib/images/product-card/hoodie-front.webp';
	import toteTexture from '$lib/images/product-card/tote-bag-front.webp';
	import { productList } from './productList';
	import { lang } from '../../../configStore';

	$: product = productList.find((product) => product.id === $currentProductId);

	let productTexture = '';

	$: if (product.id === 1) {
		productTexture = shirtTexture;
	} else if (product.id === 2) {
		productTexture = hoodieTexture;
	} else if (product.id === 3) {
		productTexture = toteTexture;
	}
</script>

<div class="texture-container card-expand" id="texture-box">
	<img src={productTexture} alt={$lang === 'ES' ? product.nameAr : product.nameUs} class="normal" />
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
