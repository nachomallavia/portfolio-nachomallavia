<script>
	import { browser } from '$app/environment';
	import { lang } from './configStore';
	function scroller(id, e) {
		let btnColection = document.getElementsByClassName('scroll-btn');
		let btnArray = [...btnColection];
		let btn = e.currentTarget;
		let el = document.getElementById(id);

		el.scrollIntoView({
			behavior: 'smooth'
		});
		let menu = document.getElementById("mobile-menu");
			menu.dataset.open = 'false';
	}
</script>

<div class="scroll-nav">
	<button
		class="scroll-btn current"
		on:click={(e) => {
			scroller('section-aboutme', e);
		}}
		id="aboutme">{$lang === 'ES' ? 'Acerca de mí' : 'About me'}</button
	>
	<button
		class="scroll-btn"
		on:click={(e) => {
			scroller('section-work', e);
		}}
		id="work">{$lang === 'ES' ? 'Trabajos' : 'Work'}</button
	>
	<button
		class="scroll-btn"
		on:click={(e) => {
			scroller('section-skills', e);
		}}
		id="skills">{$lang === 'ES' ? 'Habilidades' : 'Skills'}</button
	>
	<button
		class="scroll-btn"
		on:click={(e) => {
			scroller('section-experience', e);
		}}
		id="experience">{$lang === 'ES' ? 'Experiencia' : 'Experience'}</button
	>
	<button
		class="scroll-btn"
		on:click={(e) => {
			scroller('section-contact', e);
		}}
		id="contact">{$lang =='ES'?'Contacto':'Contact'}</button
	>
</div>

<style>
	.scroll-nav {
		display: flex;
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
