<script>
	import { browser } from '$app/environment';
	import { backgroundList } from './backgroundList';
	import { currentBackgroundId } from './productCardStore.svelte.js';
	import { untrack } from 'svelte';

	let { svgContent = ` <h2> CARGANDO FONDO </h2> `, colors = [] } = $props();

	let defsConfig = $derived(`
    <defs>
      <style>
        .cls-1 {
          fill: none;
        }
  
        .cls-2 {
          fill: ${colors?.[0] || '#000'};
        }
  
        .cls-3 {
          fill: ${colors?.[1] || '#000'};
        }
        .cls-4 {
          fill: ${colors?.[2] || '#000'};
        }
      </style>
    </defs>`);

	function htmlToElement(html) {
		if (browser) {
			let template = document.createElement('template');
			html = html.trim(); // Never return a text node of whitespace as the result
			template.innerHTML = html;
			return template.content.firstElementChild;
		}
		return null;
	}

	function renderSvg() {
		if (browser && svgContent) {
			let box = document.getElementById('svg-box');
			if (!box) return;
			let defsTorender = htmlToElement(defsConfig);
			let svgToRender = htmlToElement(svgContent);
			if (svgToRender && defsTorender) {
				svgToRender.appendChild(defsTorender);
				box.replaceChildren(svgToRender);
			}
		}
	}

	// Use effect with explicit dependencies
	$effect(() => {
		// Read the reactive values to track them
		const content = svgContent;
		const colorValues = colors;
		const defs = defsConfig;
		
		// Run render in untrack to prevent further subscriptions
		untrack(() => {
			renderSvg();
		});
	});
</script>

<div id="svg-box"></div>
