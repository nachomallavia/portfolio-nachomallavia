<script>
	import { browser } from '$app/environment';
	import { setCookie } from '$lib/cookieHandler.js';
	import { theme } from './configStore.js';
	import sunIcon from '$lib/images/Sun.png';
	import moonIcon from '$lib/images/Moon.png';

	let currentTheme = $theme;

	function changeTheme() {
		if (browser) {
			let bodyColection = document.getElementsByTagName('body');
			let body = [...bodyColection][0];
			let iconCollection = document.querySelectorAll('#contact-group > a > img');
			let iconArray = [...iconCollection];

			if (currentTheme === 'Light mode') {
				setCookie('NachoTheme', 'Dark mode', 365);
				$theme = 'Dark mode';
				body.classList.add('darkmode');
				currentTheme = 'Dark mode';
				iconArray.forEach((element) => {
					element.classList.add('darkmode');
				});
			} else if (currentTheme === 'Dark mode') {
				setCookie('NachoTheme', 'Light mode', 365);
				$theme = 'Light mode';
				body.classList.remove('darkmode');
				currentTheme = 'Light mode';
				iconArray.forEach((element) => {
					element.classList.remove('darkmode');
				});
			}
		}
	}
</script>

<button
	class="theme-container"
	on:click={() => {
		changeTheme();
	}}
>
	<div class="box">
		{#if currentTheme === 'Light mode'}
			<img src={sunIcon} alt="Light mode Icon" class="sun" />
		{:else if currentTheme === 'Dark mode'}
			<img src={moonIcon} alt="Dark mode Icon" class="moon" />
		{/if}
	</div>
	<!-- <p class="mode">{currentTheme}</p> -->
</button>

<style>
	.theme-container {
		display: flex;
		/* flex-direction: column; */
		align-items: center;
		font-size: 1rem;
		color: var(--text-color);
		gap: 8px;
		cursor: pointer;
		background-color: var(--background-color-1);
		border:none;
	}
	.box {
		background-color: var(--background-color-1);
		border: 1px solid var(--background-color-3);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* gap: 1rem; */
		min-width: 36px;
		min-height: 36px;

		overflow: hidden;
	}
	.sun {
		max-width: 24px;
	}
	.moon {
		max-width: 18px;
	}
</style>
