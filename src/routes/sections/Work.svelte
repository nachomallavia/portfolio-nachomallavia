<script>
	import WorkProductCard from './work/WorkProductCard.svelte';
	import WorkLabelPrinter from './work/WorkLabelPrinter.svelte';
	import WorkPrintingCoordinates from './work/WorkPrintingCoordinates.svelte';
	import { lang } from '../configStore';

	function showWork(e) {
		let buttonsCollection = document.getElementsByClassName('work-btn');
		let buttonsArray = [...buttonsCollection];
		buttonsArray.forEach((btn) => {
			btn.classList.remove('active');
		});
		let element = e.target;
		element.classList.add('active');
		let workCollection = document.getElementsByClassName('work');
		let workArray = [...workCollection];
		workArray.forEach((work) => {
			work.classList.remove('show');
		});
		let work = document.getElementById(element.dataset.work);
		work.classList.add('show');
	}
</script>

<section class="full" id="section-work">
	<div class="work-header">
		<h2 class="work-title">{$lang === 'ES' ? 'TRABAJOS' : 'WORK'}</h2>
		<div class="work-nav">
			<button
				class="work-btn active"
				data-work="work-product-card"
				on:click={(e) => {
					showWork(e);
				}}
				>{$lang === 'ES'
					? 'Tarjeta de producto con capas dinámicas'
					: 'Dynamic Layered Product Card'}</button
			>
			<button
				class="work-btn"
				data-work="work-shipping-labels"
				on:click={(e) => {
					showWork(e);
				}}>{$lang === 'ES' ? 'Impresora de etiquetas' : 'Shipping Labels'}</button
			>
			<button
				class="work-btn"
				data-work="work-printing-cordinates"
				on:click={(e) => {
					showWork(e);
				}}>{$lang === 'ES' ? 'Coordenadas de impresión' : 'Printing Coordinates'}</button
			>
		</div>
	</div>
	<div class="work-group">
		<div id="work-product-card" class="work show">
			<WorkProductCard />
		</div>
		<div id="work-shipping-labels" class="work">
			<WorkLabelPrinter />
		</div>
		<div id="work-printing-cordinates" class="work">
			<WorkPrintingCoordinates />
		</div>
	</div>
</section>

<style>
	*{
		box-sizing: border-box;
	}
	.full {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		border-top: 1px solid var(--background-color-2);
		gap: 2rem;
		width: 100%;
		min-height: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);

		padding-bottom: 8rem;
	}
	.work-header {
		width: 100%;
		padding-left: 4rem;
		
		/* padding-right:4rem; */
		/* padding-block: 1.75rem; */
		margin-bottom: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		outline: 1px solid var(--background-color-2);
		/* background-color: var(--background-color-2); */
	}
	h2.work-title {
		font-size: 1.25rem;
		/* padding-right:2rem; */
	}
	.work-nav {
		display: flex;
		/* border: 1px solid var(--backgorund-color-2); */
	}

	.work-nav > button {
		background-color: transparent;
		border: transparent;
		/* outline: 1px solid var(--background-color-2); */
		/* border-right: 1px solid var(--background-color-2); */

		color: var(--text-color);
		min-height: 4rem;
		padding-top: 2.1rem;
		padding-bottom: 2rem;
		padding-inline: 1rem;
		margin: 0;
	}
	.work-nav > button:hover {
		cursor: pointer;
		border-bottom: 2px solid orange;
		color: white;
	}
	.work-nav > button.active {
		color: white;
		font-weight: 600;
		background-color: var(--background-color-3);
		/* text-decoration: underline; */
	}
	.work-nav > button.active:hover {
		color: white;
		font-weight: 600;
		/* background-color: var(--accent-color-2); */
		
		/* text-decoration: underline; */
	}
	.work-group {
		display: flex;
		flex-direction: column;
		/* gap:10rem; */
	}
	.work {
		display: none;
	}
	.show {
		display: block;
	}
</style>
