<script>
	import profilePicture from '$lib/images/foto2 copy.png'
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
	function expandProfilePicture(){
		if(browser){
			expandPicture = !expandPicture;
			let img = document.getElementById('profile-picture');
			let container = document.getElementById('profile-container');
			
			if(img.style['maxWidth']=='3rem'){
				img.style['maxWidth']='12rem'
			} else if(img.style['maxWidth']='20rem'){
				img.style['maxWidth']='3rem'
			}
			// if(expandPicture === true){
			// img.style['maxWidth'] = '12rem';
			// container.classList.toggle('wrap')
			// } else if(expandPicture === false){
			// 	img.style['maxWidth'] = '3rem';
			// 	container.classList.toggle('wrap')
			// }
		}
	}
	
</script>

<div class="contact-container">
	<div class="profile-name wrap" id="profile-container" on:click={()=>{expandProfilePicture()}}>
		<img src={profilePicture} alt="" class="expand"id="profile-picture" >
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
	
	
	.profile-name{
		width:100%;
		display: flex;
		flex-wrap: wrap;		
		gap: 1rem;
		align-items: center;
		justify-content: center;
		transition: all;
		padding-left: 2rem;
		padding-right: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--background-color-2);
		cursor: pointer;
	}
	.profile-name.wrap{
		flex-wrap: nowrap;
		justify-content: start;

		padding-left: 2rem;
		/* min-width: 12rem; */

	}
	#profile-picture{
		
		max-width: 100%;
		border-radius: 50%;
		stroke: 1px solid var(--background-color-2);
		transition: all .5s;
		cursor: pointer;
		
	}
	
	p {
		margin-bottom: 0.5rem;
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
