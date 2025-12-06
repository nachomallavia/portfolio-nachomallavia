<script>
	import { backgroundList } from './backgroundList';
	import { designList } from './designList';
	import { currentBackgroundId, currentDesignId } from './productCardStore.svelte.js';
	import BackgroundRender from './BackgroundRender.svelte';
	import { browser } from '$app/environment';

	let design = $derived(designList.find((design) => design.id === currentDesignId.value));
	let background = $derived(backgroundList.find((background) => background.id === currentBackgroundId.value));
</script>

<div class="bg-box card-expand" id="background-box">
	<BackgroundRender svgContent={background?.svg} colors={design?.palette} />
</div>

<style>
	.bg-box {
		width: 100%;
		aspect-ratio: 4/5;
		/* background-color: red; */
		position: absolute;
		top: 0.75rem;
		left: 0;
	}
	#background-box {
		transform: translateZ(0);
		transition: transform 0.3s;
	}
	#background-box.card-expand {
		transform: translateZ(var(--translateZ));
	}
</style>
