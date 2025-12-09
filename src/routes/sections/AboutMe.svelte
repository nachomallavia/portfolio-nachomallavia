<script>
	import profilePicture from '$lib/images/profile.webp'
	import StatsAbout from './StatsAbout.svelte';
	import { lang } from '../configStore.svelte.js';
	import {fade} from 'svelte/transition';


</script>

<section class="full about" id="section-aboutme" >
	{#if lang.value === 'ES'}
		
		<h1>¡HOLA!<br /> Mi nombre <br /> es Nacho.</h1>
		
		<h2>Soy un Diseñador Sr. y Desarrollador Fullstack</h2>
		<p>
			Además, durante los últimos 7 años  he trabajado como Diseñador de Producto y Director de Operaciones en Flashcookie.com, un Marketplace de Merchandise On-demand en Argentina.
		</p>
		<br />
		<p>
			A lo largo de los años, diseñé y programé varios features dentro de la plataforma.
			<br /> También he gestionado y coordinado un equipo de hasta 20 personas, dirigido y asignado
			recursos y supervisado el desarrollo de una plataforma web con más de 35,000 usuarios.
		</p>
	{:else}
		<h1>Hi! My name<br />is Nacho.</h1>
		<h2>I'm a Sr. Designer & Fullstack Developer.</h2>
		<p>
			Also, during the last 7 years I've worked as a <strong
				>Product Designer and Operations Manager</strong
				><br /> at <strong>Flashcookie.com</strong>, an On-demand
			Merchandise Platform in Argentina.
		</p>
		<br />
		<p>
			Through the years, <strong>I've designed and programmed many of the Platforms features.</strong
			><br /> I've also been in charge of coordinating a team of up to 20 people, managed and assigned resources
			and supervised the development of a Marketplace with over 35,000 users.
		</p>
	{/if}
	<StatsAbout />
</section>

<style>
	

	.about {
		position: relative;
		width: 100%;
		padding-top: 8rem;
		background-color: var(--background-color-1);
		color: var(--text-color);
		display: flex;
		flex-direction: column;
		
		min-height: 100vh;
		/* justify-content: center;
		align-items: start; */
		padding-left: 8rem;
		margin-bottom: 8rem;
		scroll-snap-align: start;
	}
	.full h2 {
		font-weight: 600;
		margin-bottom: 5rem;
	}
	h1 {
		font-size: 6.5rem;
		font-weight: 700;
		line-height: 6rem;
		/* max-width: 800px; */
		color: var(--accent-color);
		margin-bottom: 1rem;
	}
	.full > * {
		z-index: 2;
	}
	p {
		max-width: 700px;
		font-size: var(--font-size);
        line-height:var(--font-line-height);
		font-weight: var(--font-weight-regular);
	}
	
	@media screen and (max-width: 512px){
		
		.about{
			padding-top: 6rem;
			padding-inline: 1.5rem;

		}
		h1{
			font-size: 3.5rem;
			line-height: 3.2rem;
			margin-bottom: .75rem;
		}
		h2{
			font-size: 1.5rem;
			margin-bottom: 2rem;
		}
		p{
			font-size: 1rem;
		}
		
	}
</style>
