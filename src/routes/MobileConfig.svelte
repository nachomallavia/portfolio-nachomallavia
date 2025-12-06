<script>
	import ThemeToggle from './ThemeToggle.svelte';
	import LangToggle from './LangToggle.svelte';
	import iconClose from '$lib/images/icon_close.svg'
	import { browser } from '$app/environment';
	import {open } from './configStore.svelte.js';

	function closeMobileMenu(){
		if(browser){
			open.value = false;
		}
	}
</script>

<div class="config">
	<div class="config-group">
		<ThemeToggle />
		<LangToggle />
	</div>
	<div class="close" >
		<button onclick={()=>{closeMobileMenu()}}>
			<img src={iconClose} alt="Close">
		</button>
	</div>
</div>

<style>
	.config {
		padding-inline: 1.5rem;
		display: flex;
		min-height: 5rem;

		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-bottom: 1px solid var(--background-color-2);
	}
	.close > button {
		background-color: var(--background-color-1);
		border:none;
		border-radius: 50%;
	}
	.close > button:active{
		background-color: var(--background-color-2);
	}
	.close > button >img {
		width: 36px;
	}
	.config-group{
		display: flex;
		gap: 1rem;
	}
</style>
