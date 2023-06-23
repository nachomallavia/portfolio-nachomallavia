<script>
	import profilePicture from '$lib/images/foto2 copy.png'
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { theme } from './configStore';

	import gitHubLogo from '$lib/images/github.svg';
	import linkedInLogo from '$lib/images/linkedin.svg';
	import mailIcon from '$lib/images/mail.svg';

	onMount(() => {
		if (browser) {
			let img = document.getElementById('profile-picture');
			img.click()
			let iconCollection = document.querySelectorAll('#contact-group > a > img');
			let iconArray = [...iconCollection];
			if ($theme === 'Light mode') {
				iconArray.forEach((element) => {
					element.classList.remove('darkmode');
				});
			}
			
		}
	});
	function expandProfilePicture(){
		if(browser){
			let img = document.getElementById('profile-picture');
			let container = document.getElementById('profile-container');
			container.classList.toggle('wrap')
			img.classList.toggle('expand')
		}
	}
</script>

<div class="contact-container">
	<div class="profile-name wrap" id="profile-container">
		<img src={profilePicture} alt="" class="expand"id="profile-picture" on:click={()=>{expandProfilePicture()}}>
		<p>Ignacio Mallaviabarrena</p>
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
	
	.contact-container:hover{
		max-width: 15rem;
	}
	.profile-name{
		display: flex;
		flex-wrap:nowrap;
		gap: 1rem;
		align-items: center;
	}
	.profile-name.wrap{
		flex-wrap: wrap;

	}
	#profile-picture{
		
		max-width: 3rem;
		border-radius: 50%;
		stroke: 1px solid var(--background-color-2);
		transition: all .3s;
		cursor: pointer;
		
	}
	#profile-picture.expand{
		max-width: 12rem;
	}
	p {
		/* margin-bottom: 0.5rem; */
	}
	.contacts {
		display: flex;
		margin-top: 1.25rem;
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
