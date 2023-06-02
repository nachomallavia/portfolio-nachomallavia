<script>
	import { browser } from '$app/environment';
	import { setCookie } from '$lib/cookieHandler.js';
	import { onMount } from 'svelte';
	import { lang } from './configStore';

	onMount(() => {
		updateLang($lang);
	});

	function updateLang(value = 'ES') {
		$lang = value;

		let langCollection = document.getElementsByClassName('lang-btn');
		let langArray = [...langCollection];
		langArray.forEach((element) => {
			if (element.innerHTML === value) {
				element.classList.add('selected');
			} else {
				element.classList.remove('selected');
			}
		});
		if (browser) {
			setCookie('NachoLang', value, 365);
		}
	}
</script>

<div class="lang">
	<!-- <p>Lenguaje:</p> -->
	<button class="lang-btn selected" on:click={() => updateLang('ES')}>ES</button>
	<span>|</span>
	<button class="lang-btn" on:click={() => updateLang('ENG')}>ENG</button>
</div>

<style>
	.lang {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
	}
	.lang button {
		background-color: var(--background-color-1);
		color: var(--text-color);
		padding: 0.75rem;
		border: none;
		cursor: pointer;
	}
	.lang button.selected {
		font-weight: 700;
		color: var(--accent-color);
	}
</style>
