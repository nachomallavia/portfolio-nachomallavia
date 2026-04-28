<script>
	let { videoSrc = '', alt = 'Website demo video', glowColor = '', loop = true, startTime = 0 } = $props();

	let videoElement = $state();
	let isPlaying = $state(true);

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

	$effect(() => {
		if (videoElement) {
			videoElement.loop = startTime > 0 ? false : loop;

			if (startTime > 0) {
				const seek = () => { videoElement.currentTime = startTime; };
				const restart = () => { videoElement.currentTime = startTime; videoElement.play(); };

				videoElement.addEventListener('loadedmetadata', seek);
				if (loop) videoElement.addEventListener('ended', restart);

				return () => {
					videoElement.removeEventListener('loadedmetadata', seek);
					videoElement.removeEventListener('ended', restart);
				};
			}
		}
	});
</script>

<div class="video-container">
	<div class="video-wrapper" style="--glow-color: {glowColor}">
		<video
			bind:this={videoElement}
			autoplay
			loop={loop}
			muted
			playsinline
			class="demo-video"
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.video-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
	}

	.demo-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;

		cursor: pointer;
		display: block;
		box-shadow:
			0 0 20px color-mix(in srgb, var(--glow-color) 25%, transparent),
			0 0 40px color-mix(in srgb, var(--glow-color) 19%, transparent),
			0 0 60px color-mix(in srgb, var(--glow-color) 12%, transparent),
			0 4px 6px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;
	}

	:global(body:not(.darkmode)) .demo-video {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

