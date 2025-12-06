<script>
	import { lang } from '../../../configStore.svelte.js';
	import { currentDesignId, currentProductId } from './productCardStore.svelte.js';
	import { designList } from './designList';
	import { productList } from './productList';

	let product = $derived(productList.find((product) => product.id === currentProductId.value));
	let design = $derived(designList.find((design) => design.id === currentDesignId.value));
</script>

<div class="product-data">
	<p>{lang.value === 'ES' ? product.nameAr : product.nameUs}</p>
	<h2>{lang.value === 'ES' ? design.nameAr : design.nameUs}</h2>
	<a href="#work" class="owner"><p>{lang.value === 'ES' ? 'Por ' : 'By '}{design.owner}</p></a>
</div>

<style>
	.product-data {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-bottom: 1rem;
	}
	.owner {
		text-decoration: none;
		font-weight: 600;
		color: var(--accent-color);
	}
</style>
