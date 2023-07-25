<script>
	import Like from './Like.svelte';
	import ProductBox from './ProductBox.svelte';
	import {
		currentProductId,
		currentDesignId,
		currentColorId,
		backgroundIndex
	} from './productCardStore';
	import { lang } from '../../../configStore';
	import { colorList } from './colorList.js';
	import { productList } from './productList.js';
	import { designList } from './designList.js';
	import ProductInfo from './ProductInfo.svelte';

	$: product = productList.find((product) => product.id === $currentProductId);
</script>

<div class="product-card card-expand" id="product-card">
	<div class="price-like">
		<h3>${$lang === 'ES' ? product.priceAr : product.priceUs}</h3>
		<Like />
	</div>
	<ProductBox />
	<ProductInfo />
</div>

<style>
	.product-card {
		background-color: var(--lightmode-1);
		min-width: 24rem;
		border: 1px solid var(--lightmode-2);
		box-shadow: 0rem 2rem 4rem var(--lightmode-shadow);
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		padding: 0.25rem;
		color: var(--lightmode-text);

		translate: 0 -1rem;
		transition: all 0.25s ease-out;
		transform-style: preserve-3d;
	}

	.price-like {
		display: flex;
		justify-content: space-between;
		padding-top: 1.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1.5rem;

		z-index: 10;
	}
	#product-card:not(:hover) {
		transform: rotateY(var(--rotateX)) rotateX(var(--rotateY));
	}
	#product-card:hover {
		transform: perspective(2500px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
	}
	@media screen and (max-width:512px){
		.product-card{
			min-width: 0;
		}
	}
</style>
