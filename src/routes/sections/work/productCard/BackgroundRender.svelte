<script>
	import { browser } from '$app/environment';
	import { backgroundList } from './backgroundList';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { currentBackgroundId } from './productCardStore';
	export let svgContent = ` <h2> CARGANDO FONDO </h2> `;
	let svgToRender = htmlToElement(svgContent);
	export let colors = [];
	$: defsConfig = `
    <defs>
      <style>
        .cls-1 {
          fill: none;
        }
  
        .cls-2 {
          fill: ${colors[0]};
        }
  
        .cls-3 {
          fill: ${colors[1]};
        }
        .cls-4 {
          fill: ${colors[2]};
        }
      </style>
    </defs>`;

	function htmlToElement(html) {
		if (browser) {
			let template = document.createElement('template');
			html = html.trim(); // Never return a text node of whitespace as the result
			template.innerHTML = html;
			return template.content.firstElementChild;
		}
	}

	function renderSvg() {
		if (browser) {
			let box = document.getElementById('svg-box');
			let defsTorender = htmlToElement(defsConfig);
			svgToRender = htmlToElement(svgContent);
			svgToRender.appendChild(defsTorender);
			box.replaceChildren(svgToRender);
		}
	}

	afterUpdate(() => {
		renderSvg();
	});
</script>

<div id="svg-box" />
