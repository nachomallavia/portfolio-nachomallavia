<script>
	import { browser } from '$app/environment';
	import { setCookie } from '$lib/cookieHandler.js';
	import { theme } from './configStore.svelte.js';
	import sunIcon from '$lib/images/Sun.png';
	import moonIcon from '$lib/images/Moon.png';

	function applyTheme(isDark) {
		if (browser) {
			const body = document.body;
			const icons = document.querySelectorAll('#contact-group > a > img');
			
			if (isDark) {
				body.classList.add('darkmode');
				icons.forEach((el) => el.classList.add('darkmode'));
			} else {
				body.classList.remove('darkmode');
				icons.forEach((el) => el.classList.remove('darkmode'));
			}
		}
	}

	function changeTheme() {
		if (browser) {
			const isDark = theme.value !== 'Light mode';
			
			if (isDark) {
				// Currently dark, switch to light
				setCookie('NachoTheme', 'Light mode', 365);
				theme.value = 'Light mode';
				applyTheme(false);
			} else {
				// Currently light, switch to dark
				setCookie('NachoTheme', 'Dark mode', 365);
				theme.value = 'Dark mode';
				applyTheme(true);
			}
		}
	}

	// Sync theme with DOM whenever theme.value changes
	$effect(() => {
		const currentTheme = theme.value;
		if (browser && currentTheme) {
			applyTheme(currentTheme === 'Dark mode');
		}
	});
</script>

<button
	class="theme-container"
	onclick={changeTheme}
>
	<div class="box">
		{#if theme.value === 'Light mode'}
			<img src={sunIcon} alt="Light mode Icon" class="sun" />
		{:else}
			<img src={moonIcon} alt="Dark mode Icon" class="moon" />
		{/if}
	</div>
</button>

<style>
	.theme-container {
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: var(--text-color);
		gap: 8px;
		cursor: pointer;
		background-color: var(--background-color-1);
		border: none;
	}
	.box {
		background-color: var(--background-color-1);
		border: 1px solid var(--background-color-3);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

