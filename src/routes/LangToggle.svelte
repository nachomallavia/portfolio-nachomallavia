<script>
	import { browser } from '$app/environment';
	import { setCookie } from '$lib/cookieHandler.js';
	import { lang } from './configStore.svelte.js';

	$effect(() => {
		updateLang(lang.value);
	});

	function updateLang(value = 'ES') {
		lang.value = value;

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
	<button class="lang-btn selected" onclick={() => updateLang('ES')}>ES</button>
	<span>|</span>
	<button class="lang-btn" onclick={() => updateLang('ENG')}>ENG</button>
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
