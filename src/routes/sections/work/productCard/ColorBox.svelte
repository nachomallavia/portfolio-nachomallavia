<script>
	import { currentProductId } from './productCardStore';

	import HoodieColor from './HoodieColor.svelte';

	import { productList } from './productList';

	import TshirtColor from './TshirtColor.svelte';
	import ToteBagColor from './ToteBagColor.svelte';

	$: product = productList.find((product) => product.id === $currentProductId);
</script>

<div class="color-container card-expand" id="color-box">
	<div class="color-box">
		<!-- <img src={productColor} alt=""> -->
		{#if product.id === 1}
			<TshirtColor />
		{:else if product.id === 2}
			<HoodieColor />
		{:else if product.id === 3}
			<ToteBagColor />
		{/if}
	</div>
</div>

<style>
	.color-container {
		width: 100%;
		aspect-ratio: 4/5;
		position: absolute;
		top: 0;
		left: 0;
	}
	.color-box {
		width: 100%;
		height: 100%;
		position: relative;
	}
	#color-box {
		transform: translateZ(0);
		transition: transform 0.3s;
	}
	#color-box.card-expand {
		transform: translateZ(var(--translateZ));
	}
</style>
