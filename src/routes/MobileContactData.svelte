<script>
	import profilePicture from '$lib/images/foto2.png'
	import { browser } from '$app/environment';
	import { theme } from './configStore.svelte.js';

	import gitHubLogo from '$lib/images/github.svg';
	import linkedInLogo from '$lib/images/linkedin.svg';
	import mailIcon from '$lib/images/mail.svg';

	let expandPicture = true;
</script>

<div class="contact-container">
	<div class="profile-name wrap" id="profile-container">
		<img src={profilePicture} alt="" class="expand"id="profile-picture" >
		<p id="name">Ignacio Mallaviabarrena</p>		
	</div>
	
	<div class="contacts" id="contact-group">
		<a href="https://github.com/nachomallavia" target="blank"
			><img src={gitHubLogo} alt="Github Ignacio Mallaviabarrena" class="icon" class:darkmode={theme.value === 'Dark mode'} /></a
		>
		<a href="https://www.linkedin.com/in/ignacio-mallaviabarrena/" target="blank"
			><img src={linkedInLogo} alt="LinkedIn Ignacio Mallaviabarrena" class="icon" class:darkmode={theme.value === 'Dark mode'} /></a
		>
		<a href="mailto: nachomallavia@gmail.com"
			><img src={mailIcon} alt="email nachomallavia@gmail.com" class="icon" class:darkmode={theme.value === 'Dark mode'} /></a
		>
	</div>
</div>

<style>
	.contact-container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.profile-name{		
		display: flex;
		flex-direction: column;		
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
		
	}
	
	#profile-picture{
		max-width: 5rem;
		border-radius: 50%;
		stroke: 1px solid var(--background-color-2);	
	}
	
	.contacts {
		display: flex;
		gap: 0.5rem;

	}
	.contacts > a > img {
		min-width: 2.25rem;
		max-width: 2.5rem;
	}
	.icon.darkmode {
		filter: invert();
	}
</style>
