<script>
	import Header from './Header.svelte';
	import './vars.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	let { children } = $props();
 
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>

	<!-- <footer>
		<p>Nacho</p>
	</footer> -->
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;

		/* margin: 0 auto; */
		box-sizing: border-box;
	}
</style>
