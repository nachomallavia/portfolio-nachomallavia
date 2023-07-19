<script>
	import profilePicture from '$lib/images/foto2.png'
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { theme } from './configStore';

	import gitHubLogo from '$lib/images/github.svg';
	import linkedInLogo from '$lib/images/linkedin.svg';
	import mailIcon from '$lib/images/mail.svg';

	let expandPicture = true;

	onMount(() => {
		if (browser) {
			
			let iconCollection = document.querySelectorAll('#contact-group > a > img');
			let iconArray = [...iconCollection];
			if ($theme === 'Light mode') {
				iconArray.forEach((element) => {
					element.classList.remove('darkmode');
				});
			}
			
		}
	});
	
	
</script>

<div class="contact-container">
	<div class="profile-name wrap" id="profile-container">
		<img src={profilePicture} alt="" class="expand"id="profile-picture" >
		<p id="name">Ignacio Mallaviabarrena</p>		
	</div>
	
	<div class="contacts" id="contact-group">
		<a href="https://github.com/nachomallavia" target="blank"
			><img src={gitHubLogo} alt="Github Ignacio Mallaviabarrena" class="icon darkmode" /></a
		>
		<a href="https://www.linkedin.com/in/ignacio-mallaviabarrena/" target="blank"
			><img src={linkedInLogo} alt="LinkedIn Ignacio Mallaviabarrena" class="icon darkmode" /></a
		>
		<a href="mailto: nachomallavia@gmail.com"
			><img src={mailIcon} alt="email nachomallavia@gmail.com" class="icon darkmode" /></a
		>
	</div>
</div>

<style>

	
	.profile-name{
		
		display: flex;
		flex-direction: column;	
		
		/* gap: 1rem; */
		align-items: center;
		justify-content: center;
		transition: all 1s, border-bottom none;
		padding-top: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-bottom: 1rem;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
		cursor: pointer;
		
	}
	
	#profile-picture{
		width: 80%;
		max-width: 10rem;
		border-radius: 50%;
		stroke: 1px solid var(--background-color-2);
		transition: all .65s;
		cursor: pointer;
		margin-block: 1rem;

		
	}
	
	#name {

		transition: all .55s;
	}
	.contacts {
		padding-left: 2rem;
		display: flex;
		margin-top: 1.2rem;
		gap: 0.25rem;

	}
	.contacts > a > img {
		min-width: 2rem;
		max-width: 2.5rem;
	}
	#contact-group > a > img.darkmode {
		filter: invert();
	}
</style>
