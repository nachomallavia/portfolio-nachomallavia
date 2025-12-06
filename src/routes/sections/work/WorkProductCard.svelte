<script>
	import { browser } from '$app/environment';
	import ProductCard from './productCard/ProductCard.svelte';
	import ProductCardConfig from './productCard/ProductCardConfig.svelte';
	import { lang } from '../../configStore.svelte.js';

	let expand = $state(true);
	let btnTextAr = $derived(expand ? 'Clickeá la tarjeta para expandir capas' : 'Clickeá la tarjeta para contraer capas');
	let btnTextUs = $derived(expand ? 'Click the card to expand layers' : 'Click the card to contract layers');

	// Boludeo posición
	$effect(() => {
		if (browser) {
			let btn = document.getElementById('expand-btn');

			let cardContainer = document.getElementById('card-container');
			let productCard = document.getElementById('product-card');
			document.addEventListener('mousemove', (e) => {
				rotateElement(e, productCard);
			});
		}
	});

	function handleCardClick() {
		let backgroundBox = document.getElementById('background-box');
		let colorBox = document.getElementById('color-box');
		let designBox = document.getElementById('design-box');
		let textureBox = document.getElementById('texture-box');

		if (expand === true) {
			translateZ(backgroundBox, '100px', expand);
			translateZ(colorBox, '200px', expand);
			translateZ(designBox, '400px', expand);
			translateZ(textureBox, '700px', expand);
		}
		if (expand === false) {
			translateZ(backgroundBox, '0', expand);
			translateZ(colorBox, '0', expand);
			translateZ(designBox, '0', expand);
			translateZ(textureBox, '0', expand);
		}
		expand = !expand;
	}

	function translateZ(element, distance, expand) {
		if (!element) return;
		if (expand) {
			element.classList.add('card-expand');
		} else if (!expand) {
			element.classList.remove('card-expand');
		}
		element.style.setProperty('--translateZ', distance);
	}

	function rotateElement(event, element) {
		if (!element) return;
		// get mouse position
		const x = event.clientX;
		const y = event.clientY;

		let cardContainer = document.getElementById('card-container');
		if (!cardContainer) return;
		let midpointX = (cardContainer.offsetLeft + cardContainer.offsetWidth) / 2;
		let midpointY = (cardContainer.offsetTop + cardContainer.offsetHeight) / 2;

		// find the middle
		let middleX = window.innerWidth / 2;
		let middleY = window.innerHeight / 2;

		middleX = midpointX;
		middleY = midpointY;

		const offsetX = ((x - middleX) / middleX) * 5;
		const offsetY = ((y - middleY) / middleY) * 5;

		// set rotation
		element.style.setProperty('--rotateX', offsetX + 'deg');
		element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
	}
</script>

<div class="container" id="work-product-card">
	<div class="mobile-on">
		<ProductCardConfig />
		</div>
	<div id="card-container" class="product-card" onclick={handleCardClick}>
		<ProductCard />
		<button id="expand-btn" onclick={handleCardClick}>{lang.value == 'ES' ? btnTextAr : btnTextUs}</button>
	</div>
	<div class="description">
		<h2>
			{lang.value === 'ES' ? `Tarjeta de producto con capas dinámicas` : 'Dynamic Layered Product Card'}
		</h2>
		{#if lang.value === 'ES'}
			<p>
				Desarrollamos una tarjeta de producto compleja, con cambios en el color del producto y la
				forma y color de los elementos del fondo. Todo esto en base a lo que define el usuario al
				momento de crear sus productos.
			</p>
		{:else}
			<p>
				We developed a complex product card, with changes to the products color, and the shape and
				coloring of different background elements. All of these configurations are based on what our
				Users defined when creating their own products.
			</p>
		{/if}
		<div class="mobile-off">
		<ProductCardConfig />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		padding-inline: 4rem;
		gap: 2rem;
	}
	#card-container {
		padding-inline: 2rem;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	#expand-btn {
		/* display: none;    */
		font-size: 1rem;
		/* padding: .75rem; */
		background-color: var(--background-color);
		border: 0px solid var(--background-color-3);
		color: var(--text-color);
		border-radius: 0.25rem;
		z-index: 100;
	}

	
	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	p {
		font-size: var(--font-size);
        line-height:var(--font-line-height);
		/* max-width: 560px; */
		margin-bottom: 2rem;
	}
	.mobile-off{
		display: block;
	}
	.mobile-on{
		display: none;
	}

	@media screen and (max-width: 512px){
		.container{
			flex-direction: column-reverse;
			padding-inline: 0rem;

		}
		h2{
			font-size: 1.5rem;
		}
		#card-container{
			padding-inline: 1rem;
		}
		.description{
			padding-top: 0;
			padding-inline: 1.25rem;
		}
		.mobile-off{
		display: none;
		}
		.mobile-on{
		display: block;
		}
		
	}
</style>
