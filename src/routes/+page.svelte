<script>
	export let data;
	import { browser } from '$app/environment';
	import AboutMe from './sections/AboutMe.svelte';
	import Work from './sections/Work.svelte';
	import Skills from './sections/Skills.svelte';
	import Experience from './sections/Experience.svelte';
	import SectionWhere from './sections/Where.svelte';
	import ContactData from './ContactData.svelte';
	import Config from './Config.svelte';
	import { lang, theme, open } from './configStore';
	import MobileMenu from './MobileMenu.svelte';
	import iconMenu from '$lib/images/icon_menu.svg'

	function openMobileMenu(){
		if(browser){
			$open = true;
		}
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
				if(index != 10){
					console.log(`------------Main scroll top: ${main.scrollTop}`)
					console.log(`${index+1}-Offset Top:${section.offsetTop}`)
					console.log(`${index+1}-Offset Height: ${section.offsetHeight}`)
				}
				let sectionRange = section.offsetTop + section.offsetHeight;
				console.log(sectionRange)
				if (main.scrollTop >= section.offsetTop && main.scrollTop < sectionRange-200) {

					navArray.forEach((navButton) => {
						if ('section-' + navButton.id === section.id) {
							navButton.classList.add('current');
							
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
	<MobileMenu/>
	<div class="mobile-menu-toggle" on:click={()=>{openMobileMenu()}}>
		<button><img src={iconMenu} alt="Menu"></button>
	</div>
	<div class="grid">
		<div class="left">
			<ContactData />
		</div>
		<div class="center content" on:scroll={(e) => updateScrollPosition()} id="main">
			<AboutMe />
			<Work />
			<Skills />
			<Experience />
			<SectionWhere />
		</div>
		<div class="right">
			<Config />
			<ScrollNav />
			<div />
		</div>
	</div>
</div>

<style>
	.mobile-menu-toggle{
		position: fixed;
		top:0;
		left:0;
		z-index: 90;
		width: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
		display: flex;
		justify-content: flex-end;
		padding-block:1rem;
		padding-inline: 2rem;
	}
	.mobile-menu-toggle > button{
		background-color: var(--background-color-1);
		border: none;
		border-radius: 50%;
	}
	.mobile-menu-toggle > button:active{
		background-color: var(--background-color-2);
	}
	.mobile-menu-toggle > button > img{
		height: 40px;
	}
	@media screen and (min-width: 513px) {
		.mobile-menu-toggle{
			display: none;
		}
	}
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
