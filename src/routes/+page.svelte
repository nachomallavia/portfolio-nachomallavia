<script>
	export let data;
	export let form;
	import { browser } from '$app/environment';
	import AboutMe from './sections/AboutMe.svelte';
	import Work from './sections/Work.svelte';
	import Skills from './sections/Skills.svelte';
	import Experience from './sections/Experience.svelte';
	import Contact from './sections/Contact.svelte';
	import ContactData from './ContactData.svelte';
	import Config from './Config.svelte';
	import { lang, theme, open, section } from './configStore';
	import MobileMenu from './MobileMenu.svelte';
	import MobileTitleToggle from './MobileTitleToggle.svelte';
	import iconMenu from '$lib/images/icon_menu.svg';
	

	
	function updateSection(value){

		$section=value;

	}
	import ScrollNav from './ScrollNav.svelte';

	if (data.lang) {
		$lang = data.lang;
	}
	if (data.theme != undefined) {
		$theme = data.theme;
		if (browser) {
			let bodyColection = document.getElementsByTagName('body');
			let body = [...bodyColection][0];

			if ($theme === 'Dark mode') {
				body.classList.add('darkmode');
			}
			if ($theme === 'Light mode') {
				body.classList.remove('darkmode');
			}
		}
	} else {
		if (browser) {
			let bodyColection = document.getElementsByTagName('body');
			let body = [...bodyColection][0];
			const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

			if (prefersDarkScheme.matches) {
				body.classList.add('darkmode');
				$theme = 'Dark mode';
			} else {
				body.classList.remove('darkmode');
				$theme = 'Light mode';
			}
		}
	}
	function updateScrollPosition() {
		if (browser) {
			let main = document.getElementById('main');
			
			// console.log(main.scrollTop);

			let sectionCollection = document.getElementsByTagName('section');
			let navCollection = document.getElementsByClassName('scroll-btn');
			let navArray = [...navCollection];
			let sectionArray = [...sectionCollection];
			let img = document.getElementById('profile-picture');
			let container = document.getElementById('profile-container');

			sectionArray.forEach((section, index) => {
				
				let sectionRange = section.offsetTop + section.offsetHeight-50;

				if (main.scrollTop >= section.offsetTop && main.scrollTop < sectionRange) {

					navArray.forEach((navButton) => {
						if ('section-' + navButton.id === section.id) {
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
		<div class="center content" on:scroll={(e) => updateScrollPosition()} id="main">
			<AboutMe />
			<Work />
			<Skills />
			<Experience />
			<Contact {form} />
		</div>
		<div class="right">
			<Config />
			<ScrollNav />
			<div />
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
