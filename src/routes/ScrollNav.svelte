<script>
	import { browser } from '$app/environment';
	import { lang } from './configStore.svelte.js';
	import { section } from './configStore.svelte.js';

	function scroller(id, e) {
		let btnColection = document.getElementsByClassName('scroll-btn');
		let btnArray = [...btnColection];
		let btn = e.currentTarget;
		let el = document.getElementById(id);

		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	// Check if any work section is currently active
	let isWorkActive = $derived(
		section.value?.startsWith('work-') || false
	);
</script>

<div class="scroll-nav">
	<button
		class="scroll-btn current"
		onclick={(e) => {
			scroller('section-aboutme', e);
		}}
		id="aboutme">{lang.value === 'ES' ? 'Acerca de mí' : 'About me'}</button
	>
	<div class="nav-group">
		<button
			class="scroll-btn main-btn"
			class:active={isWorkActive}
			onclick={(e) => {
				scroller('section-work-product-design', e);
			}}
			id="work">{lang.value === 'ES' ? 'Trabajos' : 'Work'}</button
		>
		<button
			class="scroll-btn sub-btn"
			onclick={(e) => {
				scroller('section-work-product-design', e);
			}}
			id="work-product-design">{lang.value === 'ES' ? 'Diseño de producto' : 'Product Design'}</button
		>
		<button
			class="scroll-btn sub-btn"
			onclick={(e) => {
				scroller('section-work-web-dev', e);
			}}
			id="work-web-dev">{lang.value === 'ES' ? 'Desarrollo Web' : 'Web Development'}</button
		>
		<button
			class="scroll-btn sub-btn"
			onclick={(e) => {
				scroller('section-work-branding', e);
			}}
			id="work-branding">{lang.value === 'ES' ? 'Branding' : 'Branding'}</button
		>
		<button
			class="scroll-btn sub-btn"
			onclick={(e) => {
				scroller('section-work-illustration', e);
			}}
			id="work-illustration">{lang.value === 'ES' ? 'Diseño e Ilustración' : 'Design & Illustration'}</button
		>
	</div>
	<button
		class="scroll-btn"
		onclick={(e) => {
			scroller('section-skills', e);
		}}
		id="skills">{lang.value === 'ES' ? 'Habilidades' : 'Skills'}</button
	>
	<button
		class="scroll-btn"
		onclick={(e) => {
			scroller('section-experience', e);
		}}
		id="experience">{lang.value === 'ES' ? 'Experiencia' : 'Experience'}</button
	>
	<button
		class="scroll-btn"
		onclick={(e) => {
			scroller('section-contact', e);
		}}
		id="contact">{lang.value =='ES'?'Contacto':'Contact'}</button
	>
</div>

<style>
	.scroll-nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-left: 2.5rem;
	}
	.nav-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	button {
		font-size: 1rem;
		background-color: transparent;
		border: transparent;
		color: var(--text-color);
		text-align: left;
		font-weight: 300;
		cursor: pointer;
	}
	/* Main section buttons (About, Work, Skills, etc.) */
	button.current,
	button.main-btn.active {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--accent-color);
	}
	/* Sub-buttons (work categories) */
	button.sub-btn {
		font-size: 0.85rem;
		padding-left: 1rem;
		opacity: 0.8;
		transition: opacity 0.2s;
	}
	button.sub-btn:hover {
		opacity: 1;
	}
	button.sub-btn.current {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--accent-color);
		opacity: 1;
	}
</style>
