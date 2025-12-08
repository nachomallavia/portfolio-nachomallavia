<script>
	import WorkProductCard from './work/WorkProductCard.svelte';
	import WorkLabelPrinter from './work/WorkLabelPrinter.svelte';
	import WorkPrintingCoordinates from './work/WorkPrintingCoordinates.svelte';
	import { lang } from '../configStore.svelte.js';

	// Product Design tabs
	let activeProductDesign = $state('product-card');

	// Web Development tabs
	let activeWebDev = $state('sixth-sense');

	// Branding tabs
	let activeBranding = $state('pangea');

	// Illustration tabs
	let activeIllustration = $state('flash-cookie');
</script>

<!-- Product Design Section -->
<section class="work-section" id="section-work-product-design">
	<div class="work-header">
		<h2 class="section-title">{lang.value === 'ES' ? 'DISEÑO DE PRODUCTO' : 'PRODUCT DESIGN'}</h2>
		<div class="work-nav">
			<button
				class="work-btn"
				class:active={activeProductDesign === 'product-card'}
				onclick={() => activeProductDesign = 'product-card'}
			>{lang.value === 'ES' ? 'Tarjeta dinámica' : 'Dynamic Product Card'}</button>
			<button
				class="work-btn"
				class:active={activeProductDesign === 'shipping-labels'}
				onclick={() => activeProductDesign = 'shipping-labels'}
			>{lang.value === 'ES' ? 'Impresora de etiquetas' : 'Shipping Labels'}</button>
			<button
				class="work-btn"
				class:active={activeProductDesign === 'printing-coordinates'}
				onclick={() => activeProductDesign = 'printing-coordinates'}
			>{lang.value === 'ES' ? 'Coordenadas de impresión' : 'Printing Coordinates'}</button>
		</div>
	</div>
	<div class="work-content">
		{#if activeProductDesign === 'product-card'}
			<WorkProductCard />
		{:else if activeProductDesign === 'shipping-labels'}
			<WorkLabelPrinter />
		{:else if activeProductDesign === 'printing-coordinates'}
			<WorkPrintingCoordinates />
		{/if}
	</div>
</section>

<!-- Web Development Section -->
<section class="work-section" id="section-work-web-dev">
	<div class="work-header">
		<h2 class="section-title">{lang.value === 'ES' ? 'DISEÑO & DESARROLLO WEB' : 'WEB DESIGN & DEVELOPMENT'}</h2>
		<div class="work-nav">
			<button
				class="work-btn"
				class:active={activeWebDev === 'sixth-sense'}
				onclick={() => activeWebDev = 'sixth-sense'}
			>Sixth Sense Pay</button>
			<button
				class="work-btn"
				class:active={activeWebDev === 'bafi'}
				onclick={() => activeWebDev = 'bafi'}
			>Bafi</button>
			<button
				class="work-btn"
				class:active={activeWebDev === 'ecolatina'}
				onclick={() => activeWebDev = 'ecolatina'}
			>Club Ecolatina</button>
			<button
				class="work-btn"
				class:active={activeWebDev === 'tennis-camp'}
				onclick={() => activeWebDev = 'tennis-camp'}
			>Advanced Tennis Camp</button>
		</div>
	</div>
	<div class="work-content">
		{#if activeWebDev === 'sixth-sense'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeWebDev === 'bafi'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeWebDev === 'ecolatina'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeWebDev === 'tennis-camp'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{/if}
	</div>
</section>

<!-- Branding Section -->
<section class="work-section" id="section-work-branding">
	<div class="work-header">
		<h2 class="section-title">{lang.value === 'ES' ? 'BRANDING' : 'BRANDING'}</h2>
		<div class="work-nav">
			<button
				class="work-btn"
				class:active={activeBranding === 'pangea'}
				onclick={() => activeBranding = 'pangea'}
			>Pangea</button>
			<button
				class="work-btn"
				class:active={activeBranding === 'bafi'}
				onclick={() => activeBranding = 'bafi'}
			>Bafi</button>
			<button
				class="work-btn"
				class:active={activeBranding === 'sixth-sense'}
				onclick={() => activeBranding = 'sixth-sense'}
			>Sixth Sense Pay</button>
			<button
				class="work-btn"
				class:active={activeBranding === 'finca'}
				onclick={() => activeBranding = 'finca'}
			>Finca</button>
		</div>
	</div>
	<div class="work-content">
		{#if activeBranding === 'pangea'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeBranding === 'bafi'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeBranding === 'sixth-sense'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeBranding === 'finca'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{/if}
	</div>
</section>

<!-- Illustration & Graphic Design Section -->
<section class="work-section" id="section-work-illustration">
	<div class="work-header">
		<h2 class="section-title">{lang.value === 'ES' ? 'ILUSTRACIÓN & DISEÑO GRÁFICO' : 'ILLUSTRATION & GRAPHIC DESIGN'}</h2>
		<div class="work-nav">
			<button
				class="work-btn"
				class:active={activeIllustration === 'flash-cookie'}
				onclick={() => activeIllustration = 'flash-cookie'}
			>Flash Cookie</button>
			<button
				class="work-btn"
				class:active={activeIllustration === 'coupe'}
				onclick={() => activeIllustration = 'coupe'}
			>Coupé</button>
			<button
				class="work-btn"
				class:active={activeIllustration === 'mix'}
				onclick={() => activeIllustration = 'mix'}
			>Mix</button>
		</div>
	</div>
	<div class="work-content">
		{#if activeIllustration === 'flash-cookie'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeIllustration === 'coupe'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{:else if activeIllustration === 'mix'}
			<div class="placeholder">
				<h2>{lang.value === 'ES' ? 'Próximamente...' : 'Coming soon...'}</h2>
			</div>
		{/if}
	</div>
</section>

<style>
	* {
		box-sizing: border-box;
	}
	.work-section {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
		margin-bottom: 4rem;
	}
	.work-header {
		width: 100%;
		padding-left: 6rem;
		padding-right: 2rem;
		min-height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
	h2.section-title {
		font-size: 1.25rem;
	}

	/* Sub-navigation for work items */
	.work-nav {
		display: flex;
		gap: 1rem;
	}
	.work-btn {
		background-color: var(--background-color);
		color: var(--text-color);
		border: none;
		border-radius: 0.25rem;
		padding-block: 0.75rem;
		padding-inline: 1rem;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background-color 0.2s, color 0.2s;
	}
	.work-btn:hover {
		background-color: var(--accent-color-2);
		color: white;
	}
	.work-btn.active {
		color: var(--text-color);
		font-weight: 600;
		background-color: var(--background-color);
		border: 1px solid var(--accent-color-2);
	}
	.work-btn.active:hover {
		color: white;
		background-color: var(--accent-color-2);
	}

	.work-content {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}

	/* Placeholder for coming soon sections */
	.placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 400px;
		color: var(--text-color);
		opacity: 0.5;
	}
	.placeholder h2 {
		font-size: 2rem;
		font-weight: 300;
	}

	@media screen and (max-width: 821px) {
		.work-nav {
			flex-wrap: wrap;
		}
	}

	@media screen and (max-width: 512px) {
		.work-section {
			padding-top: 5rem;
		}
		.work-header {
			padding-inline: 0;
			min-height: auto;
			flex-direction: column;
			gap: 1rem;
			padding-block: 1rem;
		}
		.work-nav {
			width: 100%;
			gap: 0;
			flex-wrap: wrap;
		}
		.work-btn {
			flex: 1 1 33%;
			border-radius: 0;
			text-align: center;
			font-size: 0.8rem;
		}
		.work-btn.active {
			border-radius: 0;
		}
		.placeholder {
			min-height: 300px;
		}
	}
</style>
