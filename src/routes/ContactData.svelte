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
	function expandProfilePicture(){
		if(browser){
			expandPicture = !expandPicture;
			let img = document.getElementById('profile-picture');
			let container = document.getElementById('profile-container');
			let name = document.getElementById('name');
			
			if(img.style['maxWidth']=='3rem'){
				img.style['maxWidth']='12rem';
				container.style['height']='16rem';
				name.style['display']='none';

				setTimeout(()=>{
					name.style['display']='inline';
					container.style['flexDirection'] = 'column';
					container.style['justifyContent'] = 'center';
					
					
				},400)
				
			} else if(img.style['maxWidth']='20rem'){
				container.style['flexDirection'] = 'row';
				container.style['justifyContent'] = 'flex-start';
				img.style['maxWidth']='3rem'
				container.style['height']='5.2rem';
				name.style['display']='none';
				setTimeout(()=>{
					name.style['display']='inline';
				},400)
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

	.contact-container{
		max-width: 20rem;
		overflow: hidden;
	}	
	.profile-name{
		max-width:100%;
		min-height: 16rem;
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
	.profile-name.wrap{
		flex-wrap: nowrap;
		justify-content: start;
		
		padding-left: 2rem;
		min-height: 3rem;

	}
	#profile-picture{
		
		max-width: 100%;
		border-radius: 50%;
		stroke: 1px solid var(--background-color-2);
		transition: all .65s;
		cursor: pointer;
		margin: 1rem;

		
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
