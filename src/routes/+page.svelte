<script>
	export let data;
	import { browser } from '$app/environment';
	import AboutMe from './sections/AboutMe.svelte';
	import Work from './sections/Work.svelte';
	import Skills from './sections/Skills.svelte';
	import Studies from './sections/Studies.svelte';
	import SectionWhere from './sections/Where.svelte';
	import ContactData from './ContactData.svelte';
	import Config from './Config.svelte';
	import { lang, theme } from './configStore';

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

			sectionArray.forEach((section, index) => {
				// console.log(section.offsetHeight)
				let sectionOffset = section.offsetHeight * index - 100;
				if (main.scrollTop >= sectionOffset) {
					// console.log(main.scrollTop);
					// console.log(sectionOffset)
					navArray.forEach((nav) => {
						if ('section-' + nav.id === section.id) {
							nav.classList.add('current');
						} else {
							nav.classList.remove('current');
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
<div>
	<div class="grid">
		<div class="left">
			<ContactData />
		</div>
		<div class="center content" on:scroll={(e) => updateScrollPosition()} id="main">
			<AboutMe />
			<Work />
			<Skills />
			<Studies />
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
		overflow: scroll;
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
		padding: 2rem;
		border-right: 1px solid var(--background-color-2);
	}
	.grid > .right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.65rem;
		border-left: 1px solid var(--background-color-2);
	}

	@media screen and (max-width: 768px) {
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
	}
</style>
