<script>
	let { videoSrc = '', alt = 'Website demo video', glowColor = '', loop = true } = $props();
	
	let videoElement = $state();
	let isPlaying = $state(true);
	
	// Create the glow shadow effect if glowColor is provided
	let glowStyle = $derived(
		glowColor 
			? `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}30, 0 0 60px ${glowColor}20, 0 4px 6px rgba(0, 0, 0, 0.1)`
			: '0 4px 6px rgba(0, 0, 0, 0.1)'
	);

	function togglePlayPause() {
		if (videoElement) {
			if (isPlaying) {
				videoElement.pause();
				isPlaying = false;
			} else {
				videoElement.play();
				isPlaying = true;
			}
		}
	}

	/**
	 * @param {KeyboardEvent} event
	 */
	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			togglePlayPause();
		}
	}

	// Ensure loop attribute is set when video loads
	$effect(() => {
		if (videoElement) {
			videoElement.loop = loop;
		}
	});
</script>

<div class="video-container">
	<div class="video-wrapper">
		<video
			bind:this={videoElement}
			autoplay
			loop={loop}
			muted
			playsinline
			class="demo-video"
			style="box-shadow: {glowStyle}"
			aria-label={alt}
			onclick={togglePlayPause}
		>
			<source src={videoSrc} type="video/webm" />
			Your browser does not support the video tag.
		</video>
		
		{#if !isPlaying}
			<div 
				class="pause-overlay" 
				role="button"
				tabindex="0"
				onclick={togglePlayPause}
				onkeypress={handleKeyPress}
				aria-label="Resume video"
			>
				<svg class="pause-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
					<path d="M9 8L9 16M15 8L15 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
				</svg>
			</div>
		{/if}
	</div>
</div>

<style>
	.video-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		/* padding: 2rem; */
	}

	.video-wrapper {
		position: relative;
		width: 100%;
	}

	.demo-video {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		background-color: var(--background-color-2);
		transition: box-shadow 0.3s ease;
		cursor: pointer;
		display: block;
	}

	.pause-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.pause-overlay:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.pause-icon {
		width: 80px;
		height: 80px;
		opacity: 0.9;
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	.pause-overlay:hover .pause-icon {
		opacity: 1;
		transform: scale(1.1);
	}

	@media screen and (max-width: 512px) {
		.video-container {
			padding: 1rem;
		}
		
		.pause-icon {
			width: 60px;
			height: 60px;
		}
	}
</style>

