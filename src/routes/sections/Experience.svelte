<script>
// @ts-nocheck
	
	import {lang} from '../configStore';
	import Timeline from './experience/Timeline.svelte'
	let studies = false;
	function changeExperience(bool){
        studies = bool;
		let buttonCollection = document.getElementsByClassName("experience-btn");
		let buttonArray = [...buttonCollection];
		buttonArray.forEach((element)=>{element.classList.toggle('selected')})
    }
</script>
<section class="full" id="section-experience">
	<div class="experience-header">
		<h2 class="section-title">{$lang=="ES"?"Experiencia":"Experience"}</h2>

			<div class="experience-nav">
				<span>{$lang=="ES"?"Mostrar: ":"Show: "}</span>
				<button on:click={()=>{changeExperience(false)}} class="experience-btn selected"><div class="spot orange" ></div>{$lang=="ES"?"Trabajo":"Work"}</button>
    			<button on:click={()=>{changeExperience(true)}} class="experience-btn"><div class="spot blue" ></div>{$lang=="ES"?"Estudios":"Studies"}</button>
			</div>
	</div>
	<Timeline studies={studies}/>
</section>

<style>
	.full {
		width: 100%;


		background-color: var(--background-color-1);
		color: var(--text-color);

	}	
	.full > .experience-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left:4rem;
		padding-top: 1.25rem;
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
	h2.section-title {
		font-size: 1.25rem;
		text-transform: uppercase;
		/* padding-right:2rem; */
	}
	.experience-nav{
		display: flex;
		align-items: center;
		gap: .8rem;
		margin-right: 2rem;
	}
	.experience-nav > button {
        display: flex;
        gap: .75rem;
        padding-inline: 1rem;
        padding-block:.5rem;
        border: none;
        border: 1px solid var(--background-color);
        border-radius: .5rem;
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
    }
	.experience-nav > button:hover{
		background-color: var(--background-color-2);
	}
	button.selected{
        border: 1px solid var(--background-color-3);
    }
    .spot{
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
    }
	.orange{
        background-color: var(--accent-color);
    }
    .blue{
        background-color: var(--secondary-color);
    }
</style>
