<script>
	import { onMount } from 'svelte';
	import { lang } from '../../configStore';
	import { fabric } from 'fabric-pure-browser';
	import {browser} from '$app/environment';

	import logo from '$lib/images/batman-logo.png';

	import tshirtTexture from '../../../lib/images/product-card/unisex-t-shirt-front.webp';
	import tshirtColor from '../../../lib/images/product-card/unisex-t-shirt-front-color.svg';

	let canvasId;
	let printerWidth = 40;
	let printerHeight = 50;
	let canvasWidth = 180;
	let canvasHeight = 225;

	$: scale = printerWidth / canvasWidth;

	let sizeOptions = [
		{
			id: 1,
			label: '3XL',
			proportion: 1
		},
		{
			id: 2,
			label: '2XL',
			proportion: 0.97
		},
		{
			id: 3,
			label: 'XL',
			proportion: 0.96
		},
		{
			id: 4,
			label: 'L',
			proportion: 0.95
		},
		{
			id: 5,
			label: 'M',
			proportion: 0.94
		},
		{
			id: 6,
			label: 'S',
			proportion: 0.92
		},
		{
			id: 7,
			label: 'XS',
			proportion: 0.9
		},
		{
			id: 8,
			label: '2XS',
			proportion: 0.88
		},
		{
			id: 9,
			label: '3XS',
			proportion: 0.86
		}
	];
	let selectedSizeProportion = 1;

	let firstImageWidth = 90;
	let imageWidth = 90;
	let imageHeight = 0;

	let firstImagePosition = {
		left: 45,
		top: 10
	};
	let imagePosition = {
		x: 45,
		y: 10
	};

	$: calculatedImageWidth = (imageWidth * scale * selectedSizeProportion).toFixed(1);
	$: calculatedImageHeight = (imageHeight * scale * selectedSizeProportion).toFixed(1);
	$: calculatedX = (imagePosition.x * scale * 1 + (imagePosition.x * scale * 1 - imagePosition.x * scale *selectedSizeProportion)).toFixed(1);
	$: calculatedY = (imagePosition.y * scale * 1 + (imagePosition.y * scale * 1 - imagePosition.y * scale * selectedSizeProportion)).toFixed(1);

	let canvas;

	function setupCanvas() {
		let sectionContainer = document.getElementById('section-coordinates');
		let canvasProportion = 0.44;
		let containerWidth = 400;
		
		console.log(window.innerWidth)
		if(window.innerWidth <= 424){			
			containerWidth = window.innerWidth - 24;
		}
		canvasWidth = containerWidth * canvasProportion;
		canvasHeight = canvasWidth * 1.25;
		let canvasWidthOffset = (containerWidth / 2) - (canvasWidth / 2);
		sectionContainer.style.setProperty('--canvas-width-offset', `${canvasWidthOffset*0.975}px`)
		sectionContainer.style.setProperty('--canvas-height-offest', `${(containerWidth*1.25)*0.32}px`)
		firstImageWidth = canvasWidth/2;
		firstImagePosition.left = firstImageWidth/2;
		
		canvas = new fabric.Canvas(canvasId, {
			width: canvasWidth,
			height: canvasHeight
		});

		fabric.Image.fromURL(logo, (image) => {
			// Image configuration
			image.centeredScaling = true;
			image.lockScalingFlip = true;
			image.borderColor = "orange";
			image.cornerColor = "orange";
			image.transparentCorners = false;
			image.hasRotatingPoint= false;
			image.setControlsVisibility({
				ml: false,
				mt: false,
				mr: false,
				mb: false
			});
			// Image scale and positioning
			image.scaleToWidth(firstImageWidth);
			image.set({
				top: firstImagePosition.top,
				left: firstImagePosition.left
			});
			// Image trigger setup
			image.on('scaling', (e) => {
				updateCoordinates(image);
			});
			image.on('moving', (e) => {
				updateCoordinates(image);
			});

			canvas.add(image);
			updateCoordinates(image);

			canvas.setActiveObject(image);
		});

		canvas.renderAll();
	}
	function updateCoordinates(image) {
		imageWidth = image.getScaledWidth();
		imageHeight = image.getScaledHeight();
		imagePosition.x = image.getCoords()[0].x;
		imagePosition.y = image.getCoords()[0].y;
		
	}
	onMount(() => {
		if(browser){
			setupCanvas();
		}
	});

	function resetCanvas() {

		// console.log(canvas)
		canvas.clear();
		fabric.Image.fromURL(logo, (image) => {
			// Image configuration
			image.centeredScaling = true;
			image.lockScalingFlip = true;
			image.borderColor = "orange";
			image.cornerColor = "orange";
			image.transparentCorners = false;
			
			image.setControlsVisibility({
				ml: false,
				mt: false,
				mr: false,
				mb: false
			});
			// Image scale and positioning
			image.scaleToWidth(firstImageWidth);
			image.set({
				top: firstImagePosition.top,
				left: firstImagePosition.left,
				
			});
			// Image trigger setup
			image.on('scaling', (e) => {
				updateCoordinates(image);
			});
			image.on('moving', (e) => {
				updateCoordinates(image);
			});

			canvas.add(image);
			updateCoordinates(image);

			canvas.setActiveObject(image);
		})

	}
	
	if(browser){

		let valueCollection = document.getElementsByClassName('value');
		let valueArray = [...valueCollection];
		valueArray.forEach(value=>{
			value.addEventListener('change',(ev)=>{
				value.classList.toggle('changing');
				console.log('change detected')
			})

	})}
</script>

<div id="section-coordinates" class="container" style="--canvas-container-width: 400px">
	<div class="controls mobile">
		<button
			on:click={() => {
				resetCanvas();
			}}>{$lang==="ES"?"Restaurar Imagen":"Reset Image"}</button
		>
		<!-- <button on:click={()=>{resetCanvas()}}>Change Image</button> -->
	</div>
	<div class="data-grid mobile">
		<span class="title">{$lang === 'ES' ? 'Ancho' : 'Width'}</span>
		<span class="title">{$lang === 'ES' ? 'Alto' : 'Height'}</span>
		<span class="title">{$lang === 'ES' ? 'Pos. X' : 'X Pos. '}</span>
		<span class="title">{$lang === 'ES' ? 'Pos. Y' : 'Y Pos. '}</span>
		<span class="2-1 value">{calculatedImageWidth} Cms</span>
		<span class="2-2 value">{calculatedImageHeight} Cms</span>
		<span class="2-3 value">{calculatedX} Cms</span>
		<span class="2-4 value">{calculatedY} Cms</span>
	</div>
	<div id="canvas-container">
		<div class="layer-container" id="layer-container">
			<img src={tshirtColor} alt="" class="tshirt-color" draggable="false" />
			<div id="canvas-positioner">
				<canvas bind:this={canvasId} id="canvas" />		
			</div>
			<img src={tshirtTexture} alt="" class="tshirt-texture" draggable="false" />
		</div>
	</div>

	<div class="description">
		<h2>{$lang === 'ES' ? 'Coordenadas de impresión' : 'Printing Coordinates'}</h2>
		{#if $lang === 'ES'}
			<p>
				Diseñamos el sistema de referencia para la creación de productos digitales y su impresión en
				la vida real. Brindamos al usuario la posibilidad de ver su diseño "plasmado" en un mockup,
				que a su vez le da al operario información de tamaño y ubicación de la estampa según el
				talle del producto.
			</p>
		{:else}
			<p>
				We designed the reference system utilized for creating digital products and their real life
				print. We give users the posibility of seeing their designs in a mockup, that also saves
				information regarding size and placement of the design, for the person that has to print the
				garment.
			</p>
		{/if}
		<label for="item-size-select">{$lang === 'ES' ? 'Talle de remera' : 'T-shirt size'}</label>
		<select name="item-size" id="item-size-select" bind:value={selectedSizeProportion}>
			{#each sizeOptions as size}
				<option value={size.proportion}>{size.label}</option>
			{/each}
		</select>
		<div class="data-grid desktop">
			<span class="title">{$lang === 'ES' ? 'Ancho' : 'Width'}</span>
			<span class="title">{$lang === 'ES' ? 'Alto' : 'Height'}</span>
			<span class="title">{$lang === 'ES' ? 'Pos. X' : 'X Pos. '}</span>
			<span class="title">{$lang === 'ES' ? 'Pos. Y' : 'Y Pos. '}</span>
			<span class="2-1 value">{calculatedImageWidth} Cms</span>
			<span class="2-2 value">{calculatedImageHeight} Cms</span>
			<span class="2-3 value">{calculatedX} Cms</span>
			<span class="2-4 value">{calculatedY} Cms</span>
		</div>
		<div class="controls desktop">
			<button
				on:click={() => {
					resetCanvas();
				}}>{$lang==="ES"?"Restaurar Imagen":"Reset Image"}</button
			>
			<!-- <button on:click={()=>{resetCanvas()}}>Change Image</button> -->
		</div>
	</div>
	
</div>

<style>

	
	.container {

		margin-top: 4rem;
		display: flex;
		gap: 4rem;
		padding-inline: 4rem;
		align-items: start;
	}
	#canvas-container{
		min-width:var(--canvas-container-width);
		aspect-ratio: 4 / 5;
	}
	#canvas-positioner{
			position: absolute;
			left:var(--canvas-width-offset);
			top:var(--canvas-height-offest);
		}
	.description > h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}
	.description > p {
		font-size: var(--font-size);
        line-height:var(--font-line-height);
		margin-bottom: 3rem;
	}
	.layer-container {
		width:100%;
		height:100%;
		position: relative;	
	}

	.layer-container > img {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
	
	#canvas {
		/* background-color: rgb(48, 150, 228); */
		border: 1px dashed lightgrey;	
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
	.data-grid {
		padding-top: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding-bottom: 2rem;
	}
	.data-grid > span {
		padding: 0.25rem;
		border-bottom: 1px solid var(--background-color-3);
	}
	.data-grid > .title {
		font-weight: 600;
	}
	select {
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--background-color);
		border: 1px solid var(--background-color-3);
		color: var(--text-color);
		font-size: 1rem;
		overflow: hidden;
		width: 9rem;
	}

	label {
		margin-right: 0.5rem;
	}
	.value {
		font-size: 1.25rem;
		color:var(--accent-color)
	}
	.mobile{
		display: none;
	}
	
	@media screen and (max-width:512px){
		.container{
			flex-direction: column-reverse;
			padding-inline: 1rem;
			gap: 1rem;
			margin-top: 0rem;
		}
		#canvas-container{
			width:100%;
			min-width:250px;
			aspect-ratio: 4 / 5;
		}
		
		.layer-container {	
			width:100%;
			height:100%;
			position: relative;		
			margin-bottom: 4rem;
		}
		
		.description {
			padding-right: 0rem;
		}
		h2 {
			font-size: 1.5rem;
			margin-bottom: 2rem;
		}
		
		.description > p {	
			margin-bottom: 1rem;
		}
		
		.mobile{
		width: 100%;
		display: block;
		}
		.data-grid {
		padding-top: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding-bottom: 2rem;
		}
		.value {
		font-size: 1rem;
		}
		button {
		width: 100%;
		padding-block: .75rem;
		}
		.desktop{
			display: none;
		}
	}
</style>
