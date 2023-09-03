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
		<h2 class="section-title">{$lang === 'ES' ? 'TRABAJOS' : 'WORK'}</h2>
		<div class="work-nav">
			<button
				class="work-btn active"
				data-work="work-product-card"
				on:click={(e) => {
					showWork(e);
				}}
				>{$lang === 'ES'
					? 'Tarjeta dinámica'
					: 'Dynamic Product Card'}</button
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
		width: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);		
		margin-bottom:8rem;
	}
	.work-header {
		width: 100%;
		padding-left: 6rem;
		padding-right: 2rem;
		min-height: 5rem;	
		margin-bottom: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);


	}
	h2.section-title {
		font-size: 1.25rem;
		/* padding-right:2rem; */
	}
	.work-nav {
		display: flex;
		gap: 1rem;
	}

	.work-nav > button {
		background-color: var(--background-color);
		color: var(--text-color);
		border: none;
		border-radius: .25rem;
		padding-block: 1rem;
		padding-inline: 1rem;
	}
	.work-nav > button:hover {
		cursor: pointer;
		background-color: var(--accent-color-2);
		color: white;

	}
	.work-nav > button.active {
		color: var(--text-color);
		font-weight: 600;
		background-color: var(--background-color);
		border: 1px solid var(--accent-color-2);
		/* text-decoration: underline; */
	}
	.work-nav > button.active:hover {
		color: white;
		font-weight: 600;
		background-color: var(--accent-color-2);
		
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
	@media screen and (max-width:512px){
		.full{
			padding-top: 5rem;
		}
		.work-header{
			padding-inline: 0rem;
			min-height: auto;
			margin-bottom: 2rem;
		}
		.work-header > h2{
			display: none;
		}
		.work-header > .work-nav{
			gap:0;
			padding-inline: 0;
		}
		.work-nav > button{
			width: 33%;
		}
		.work-nav > button.active {			
			border-radius: 0;
			background-color:var(--accent-color-2);
		}
	}
</style>
