<script>
	import { lang } from '../../../configStore';
	import { currentDesignId, currentProductId } from './productCardStore';
	import { designList } from './designList';
	import { productList } from './productList';

	$: product = productList.find((product) => product.id === $currentProductId);
	$: design = designList.find((design) => design.id === $currentDesignId);
</script>

<div class="product-data">
	<p>{$lang === 'ES' ? product.nameAr : product.nameUs}</p>
	<h2>{$lang === 'ES' ? design.nameAr : design.nameUs}</h2>
	<a href="#work" class="owner"><p>{$lang === 'ES' ? 'Por ' : 'By '}{design.owner}</p></a>
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
