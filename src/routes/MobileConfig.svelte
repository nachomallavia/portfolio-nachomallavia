<script>
	import ThemeToggle from './ThemeToggle.svelte';
	import LangToggle from './LangToggle.svelte';
	import { browser } from '$app/environment';
	function closeMobileMenu(){
		if(browser){
			let menu = document.getElementById("mobile-menu");
			menu.dataset.open = 'false';
		}
	}
</script>

<div class="config">
	<div class="close" on:click={()=>{closeMobileMenu()}}>CLOSE</div>
	<LangToggle />
	<ThemeToggle />
</div>

<style>
	.config {
		display: flex;
		min-height: 5rem;
		gap: 1rem;		
		align-items: center;
		justify-content: center;
		width: 100%;
		border-bottom: 1px solid var(--background-color-2);
	}
</style>
