<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import AboutMe from './sections/AboutMe.svelte';
	import Work from './sections/Work.svelte';
	import Skills from './sections/Skills.svelte';
	import Experience from './sections/Experience.svelte';
	import Contact from './sections/Contact.svelte';
	import ContactData from './ContactData.svelte';
	import Config from './Config.svelte';
	import { lang, theme, open, section } from './configStore.svelte.js';
	import MobileMenu from './MobileMenu.svelte';
	import MobileTitleToggle from './MobileTitleToggle.svelte';
	import iconMenu from '$lib/images/icon_menu.svg';
	import ScrollNav from './ScrollNav.svelte';

	let { data, form } = $props();

	function updateSection(value) {
		section.value = value;
	}

	function applyThemeToDOM(isDark) {
		if (browser) {
			const body = document.body;
			if (isDark) {
				body.classList.add('darkmode');
			} else {
				body.classList.remove('darkmode');
			}
		}
	}

	// Initialize language and theme from server data on mount
	onMount(() => {
		// Set language from server data or cookie
		if (data.lang) {
			lang.value = data.lang;
		}

		// Set theme from server data (cookie) or system preference
		if (data.theme) {
			theme.value = data.theme;
			applyThemeToDOM(data.theme === 'Dark mode');
		} else {
			// No cookie, use system preference
			const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
			if (prefersDarkScheme.matches) {
				theme.value = 'Dark mode';
				applyThemeToDOM(true);
			} else {
				theme.value = 'Light mode';
				applyThemeToDOM(false);
			}
		}
	});

	function updateScrollPosition() {
		if (browser) {
			let main = document.getElementById('main');
			
			let sectionCollection = document.getElementsByTagName('section');
			let navCollection = document.getElementsByClassName('scroll-btn');
			let navArray = [...navCollection];
			let sectionArray = [...sectionCollection];

			sectionArray.forEach((sectionEl, index) => {
				let sectionRange = sectionEl.offsetTop + sectionEl.offsetHeight - 50;

				if (main.scrollTop >= sectionEl.offsetTop && main.scrollTop < sectionRange) {
					navArray.forEach((navButton) => {
						if ('section-' + navButton.id === sectionEl.id) {
							navButton.classList.add('current');
							updateSection(navButton.id);
						} else {
							navButton.classList.remove('current');
						}
					});
				}
			});
		}
	}
</script>

<svelte:head>
	<title>Nacho Mallaviabarrena</title>
	<meta name="description" content="Dev Portfolio" />
</svelte:head>
<svelte:window />
<div class="page-container">
	<MobileTitleToggle/>
	<MobileMenu/>
	
	<div class="grid">
		<div class="left">
			<ContactData />
		</div>
		<div class="center content" onscroll={() => updateScrollPosition()} id="main">
			<AboutMe />
			<Work />
			<Skills />
			<Experience />
			<Contact {form} />
		</div>
		<div class="right">
			<Config />
			<ScrollNav />
			<div></div>
		</div>
	</div>
</div>

<style>
	
	.page-container{
		position: relative;
	}
	div.grid {
		display: grid;
		height: 100vh;
		grid-template-columns: 1fr 5fr 1fr;
		gap: 0;
		background-color: var(--background-color-1);
		color: var(--text-color);
	}

	div.grid > .center {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	.center::-webkit-scrollbar {
		display: none;
	}
	.center {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.grid > .left {

		border-right: 1px solid var(--background-color-2);
	}
	.grid > .right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		border-left: 1px solid var(--background-color-2);
	}

	@media screen and (max-width: 821px) {
		div.grid {
			grid-template-columns: 4fr 2fr;
		}

		.left {
			display: none;
		}
	}
	@media screen and (max-width: 512px) {
		div.grid {
			display: flex;
			flex-direction: column;
		}
		.grid > .right {
			display: none;
		}
	}
</style>
