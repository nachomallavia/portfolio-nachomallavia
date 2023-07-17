<script>
	import { lang } from '../../configStore';
	import { labelList } from './ShippingLabels/labelList.js';
	import { currentLabelId } from '../../configStore';
	import LabelConfig from './ShippingLabels/LabelConfig.svelte';

	import LabelTemplate from './ShippingLabels/LabelTemplate.svelte';
	let labelExample;
</script>

<div class="container" id="work-label-printer">
	<div class="label-example">
		<div>
			<!-- <LabelExample label={label}/> -->
			<LabelTemplate bind:this={labelExample} />
			<p id="loading-text" class="loading">{$lang=="ES"?"Cargando etiqueta...":"Fetching Label..."}</p>
			<div id="label-template-container" class="loading">
				<div id="label-text" />
			</div>
		</div>
	</div>
	<div class="description">
		<h2>{$lang === 'ES' ? 'Impresora de etiquetas de envío' : 'Shipping label printer'}</h2>
		{#if $lang === 'ES'}
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
		<LabelConfig />
		<button
			id="update-btn"
			on:click={() => {
				labelExample.fetchLabel(labelExample.setupLabel());
			}}>{$lang === 'ES' ? 'Actualizar etiqueta' : 'Update label'}</button
		>
	</div>
</div>

<style>
	#work-label-printer {
		display: flex;
		gap: 4rem;
		align-items: center;
		padding-left: 4rem;
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
		padding-right: 4rem;
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
		border: 1px solid var(--background-color-3);
		background-color: var(--background-color);
		border-radius: 0.5rem;
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
</style>
