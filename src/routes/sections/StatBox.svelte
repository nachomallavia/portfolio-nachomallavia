<script>


	export let title = '';
	export let stat = '';
	import iconAge from '$lib/images/icon_birthday.svg';
	import iconCountry from '$lib/images/icon_country.svg';
	import iconExperience from '$lib/images/icon_experience.svg';
	let icon;
	$: if(title == 'Age' || title == 'Edad'){
		icon = iconAge;
	} else if(title == 'Country' || title == 'País'){
		icon = iconCountry;
	} else if(title == 'Coding Experience'|| title == 'Experiencia con código'){
		icon = iconExperience;
	}
</script>

<div class="stat-container">
	<img src={icon} alt={title}/>
	<div class="stat-box">
		<span class="title">{title}</span>
		<h3>{stat}</h3>
	</div>
</div>

<style>
	.stat-container {
		display: flex;
	}
	.stat-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
	}
	img{
		width:3rem;
		border-right: 1px solid var(--background-color-3);
		margin-right: 1rem;
		padding-right: .5rem;
	}
	span {
		font-size: 1rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	@media screen and (max-width:512px){
		.stat-container{
			border-bottom: 1px solid var(--background-color-3);
			padding-bottom: .25rem;
		}
		h3{
			font-size: 1.25rem;
		}
		img{
			border: none;
			margin-right: .5rem;
		}
	}
</style>
