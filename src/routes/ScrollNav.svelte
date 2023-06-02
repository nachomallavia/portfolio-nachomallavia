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
		// btnArray.forEach(element => {
		//     element.classList.remove('current');
		// });
		// btn.classList.add('current');
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
			scroller('section-why', e);
		}}
		id="why">¿Por qué?</button
	>
	<button
		class="scroll-btn"
		on:click={(e) => {
			scroller('section-where', e);
		}}
		id="where">¿Dónde?</button
	>
</div>

<style>
	.scroll-nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	button {
		font-size: 0.75rem;
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
