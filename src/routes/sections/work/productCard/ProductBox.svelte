<script>
	import DesignBox from './DesignBox.svelte';
	import TextureBox from './TextureBox.svelte';
	import ColorBox from './ColorBox.svelte';
	import BackgroundBox from './BackgroundBox.svelte';
</script>

<div class="box" id="box">
	<BackgroundBox />
	<ColorBox />
	<DesignBox />
	<TextureBox />
</div>

<style>
	.box {
		position: relative;
		max-width: 100%;
		aspect-ratio: 4/5;
		margin-top: -3rem;
		transform-style: preserve-3d;
	}
</style>
