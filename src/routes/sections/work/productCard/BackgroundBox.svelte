<script>
	import { backgroundList } from './backgroundList';
	import { designList } from './designList';
	import { currentBackgroundId, currentDesignId } from './productCardStore';
	import BackgroundRender from './BackgroundRender.svelte';
	import { beforeUpdate, onMount } from 'svelte';
	import { browser } from '$app/environment';

	$: design = designList.find((design) => design.id === $currentDesignId);
	$: background = backgroundList.find((background) => background.id === $currentBackgroundId);
</script>

<div class="bg-box card-expand" id="background-box">
	<BackgroundRender svgContent={background.svg} colors={design.palette} />
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
