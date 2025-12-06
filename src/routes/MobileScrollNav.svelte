<script>
	import { browser } from '$app/environment';
	import { lang, open } from './configStore.svelte.js';
	

	function scroller(id, e) {
		let btnColection = document.getElementsByClassName('scroll-btn');
		let btnArray = [...btnColection];
		let btn = e.currentTarget;
		let el = document.getElementById(id);

		el.scrollIntoView({
			behavior: 'smooth'
		});
		open.value = false;
	}

	function handleClick() {
		open.value = false;
	}

	function handleKeyup(e) {
		if(e.key == "Escape"){
			open.value = false;
		}
	}
</script>

<div class="scroll-nav" onclick={handleClick} onkeyup={handleKeyup}>
	<button
		class="scroll-btn current"
		onclick={(e) => {
			scroller('section-aboutme', e);
		}}
		id="aboutme">{lang.value === 'ES' ? 'Acerca de mí' : 'About me'}</button
	>
	<button
		class="scroll-btn"
		onclick={(e) => {
			scroller('section-work', e);
		}}
		id="work">{lang.value === 'ES' ? 'Trabajos' : 'Work'}</button
	>
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
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
	/* @media screen and (max-width: 512px){
		.scroll-nav{
			display: none;
		}
	} */
	button {
		font-size: 1rem;
		background-color: transparent;
		border: transparent;
		color: var(--text-color);
		text-align: left;
		font-weight: 300;
		cursor: pointer;
		/* text-transform: lowercase; */
	}
	button.current {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--accent-color);
	}
</style>
