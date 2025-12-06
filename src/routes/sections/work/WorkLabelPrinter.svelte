<script>
	import {browser} from '$app/environment';
	import { lang } from '../../configStore.svelte.js';
	import LabelConfig from './ShippingLabels/LabelConfig.svelte';

	import LabelTemplate from './ShippingLabels/LabelTemplate.svelte';
	let labelExample = $state(null);
	let mobileScreenDetected = $state(false);

	$effect(() => {
		if(browser){
			if(window.innerWidth <= 512){
				mobileScreenDetected = true;
			}
		}
	});

	function handleUpdateClick() {
		if (labelExample) {
			labelExample.fetchLabel(labelExample.setupLabel());
		}
	}
</script>

<div class="container" id="work-label-printer">
	{#if mobileScreenDetected == true}
		<button
			id="update-btn"
			onclick={handleUpdateClick}>{lang.value === 'ES' ? 'Actualizar etiqueta' : 'Update label'}</button
		>
		<LabelConfig />
	{/if}
	<div class="label-example">
		<div>
			<LabelTemplate bind:this={labelExample} />
			<p id="loading-text" class="loading">{lang.value=="ES"?"Cargando etiqueta...":"Fetching Label..."}</p>
			<div id="label-template-container" class="loading">
				<div id="label-text">

				</div> 
			</div>
		</div>
	</div>
	
	<div class="description">
		<h2>{lang.value === 'ES' ? 'Impresora de etiquetas de envío' : 'Shipping label printer'}</h2>
		{#if lang.value === 'ES'}
			<p>
				Unificamos el flujo de trabajo de empaquetado y etiquetado para todos los métodos
				disponibles de envío o retiro de compras. Para esto utilizamos <a
					href="https://labelary.com/"
					target="_blank">labelary.com</a
				>. Utilizamos esta API enviando requests con las etiquetas de nuestros proveedores o con las
				nuestras, según cada orden.
			</p>
		{:else}
			<p>
				We unified workflows to print shipping labels from different providers through the same
				interface, for the people working in our production center.
				<br />To do this, we used <a href="https://labelary.com/" target="_blank">labelary.com</a>,
				sending requests whit the ZPL data matching each order, getting back a PNG for the
				corresponding label.
			</p>
		{/if}
		{#if mobileScreenDetected == false}
			<LabelConfig />
			<button
			id="update-btn"
			onclick={handleUpdateClick}>{lang.value === 'ES' ? 'Actualizar etiqueta' : 'Update label'}</button>
		{/if}

		
	</div>
</div>

<style global>
	#work-label-printer {
		display: flex;
		gap: 4rem;
		align-items: center;
		padding-inline: 4rem;
	}
	h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}
	a {
		color: var(--accent-color);
		font-weight: 600;
	}
	.description {
		display: flex;
		flex-direction: column;
		/* gap:2rem; */		

	}

	
	.description > p {
		font-size: var(--font-size);
        line-height:var(--font-line-height);
		margin-bottom: 3rem;
	}
	#label-template-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 440px;
		min-height: 640px;
		border: 1px solid var(--background-color-2);
		background-color: var(--background-color);
		border-radius: 0.25rem;
	}
	#loading-text{
		opacity:0%;
		text-align: center;
		margin-bottom:.5rem;
	}
	#loading-text.loading{
		opacity: 100%;
	}
	#label-template-container.loading{
		opacity: 100%;
		background-color: var(--background-color-2);				
	}
	#label-template-container.loading > *{
		opacity: 50%;
	}
	#label-text{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--background-color);
		border: 1px solid var(--background-color-3);
		border-radius: 0.25rem;
		color: var(--text-color);
	}
	button:hover {
		background-color: var(--accent-color);
		border: 1px solid var(--accent-color);
		color: white;
	}
	button:active {
		border: 1px solid var(--accent-color);
		background-color: var(--accent-color-2);
	}
	#update-btn {
		margin-top: 2rem;
		max-width: 11rem;
	}
	@media screen and (max-width:512px){
		#work-label-printer{
			flex-direction: column-reverse;
			padding-inline: 1.5rem;
			gap: 1rem;
		}
		h2 {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		}
		#label-template-container{
			min-width: auto;
			min-height: auto;
			padding-block: 1.5rem;
		}
		#label-text{
			min-width: 96vw;

		}
		.description > p {
			margin-bottom: 0rem;
		}
		#update-btn {
		margin-top: 1rem;
		max-width: 100%;
		width: 100%;
		}
	}
</style>
