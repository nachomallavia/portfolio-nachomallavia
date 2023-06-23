<script>
	import iconProgramming from '../../lib/images/icon_programming.svg'
	import iconDesign from '../../lib/images/icon_design.svg'
	import iconEnglish from '../../lib/images/icon_english.svg'
	import iconGroup from '../../lib/images/icon_group.svg'
	import { lang } from '../configStore';
	import Skill from './skills/Skill.svelte';
	import Icon from './skills/Icon.svelte';
	import Detail from './skills/Detail.svelte';
	let selectedSkillIndex=1;
	import {skillList} from './skills/skillList.js'


</script>

<section class="full" id="section-skills">
	<div class="skills-header">
		<h2 class="section-title">{$lang === 'ES' ? 'HABILIDADES' : 'SKILLS'}</h2>
	</div>
	<div class="skill-container">
		<div class="skill-list">
			{#each skillList as skillItem, index}
			<!-- {#if index === selectedSkillIndex}
			<div class="skills-container selected" data-index={index}>
				<Skill skillNameAr={skillItem.nameAr} skillNameUs={skillItem.nameUs} score={skillItem.score} />
			</div>
			{:else}
			<div class="skills-container" data-index={index}>
				<Skill skillNameAr={skillItem.nameAr} skillNameUs={skillItem.nameUs} score={skillItem.score} />
			</div>
			{/if} -->
			<div class="skill-card">
				<div class="title-score">
					<div class="title">
						<div class="icon-container">
							{#if skillItem.nameUs === "Programming"}
							<img src={iconProgramming} alt="" class="">
							{:else if skillItem.nameUs === "Design" }
							<img src={iconDesign} alt="" class="">
							{:else if skillItem.nameUs === "English" }
							<img src={iconEnglish} alt="" class="">
							{:else if skillItem.nameUs === "Team management" }
							<img src={iconGroup} alt="" class="">
							{/if}
						</div>
						<h3>{$lang==='ES'?skillItem.nameAr:skillItem.nameUs}</h3>
					</div>
					<Skill score={skillItem.score}/>
					
				</div>
				<p>{$lang==='ES'?skillItem.descriptionAr:skillItem.descriptionUs}</p>
				{#if skillItem.details != undefined}
				<div class="details">
				{#each skillItem.details as detail}
				
				<div class="group">
					
				<span class="detail-name">{$lang==='ES'?detail.name:detail.name}:</span>
				<span>{$lang==='ES'?detail.levelAr:detail.levelUs}</span>
				<Detail score={detail.number}/>
				</div>
				{/each}
				</div>
				{/if}
			</div>
			{/each}
			
		</div>
		
	</div>
</section>

<style>
	.full {
		width: 100%;
		min-height: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
	}
	.full > .skills-header{
		padding-left:4rem;
		padding-top: 2rem;
		padding-bottom: 1.5rem;
		margin-bottom: 4rem;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
	h2.section-title {
		font-size: 1.25rem;
		/* padding-right:2rem; */
	}
	.skill-container{
		max-width: 1200px;
		min-height: 60%;
		display: grid;		
		padding-left:4rem;
	}
	
	.skill-list{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;	
	}
	.skill-card{
		padding:2rem;
		border: 1px solid var(--background-color-2);
		border-radius: .75rem;
		transition: all .3s;
		scale:100%;
		line-height: 1.5rem;
	}
	.skill-card:hover{
		border: 1px solid var(--accent-color);
		scale:105%;
	}
	.skill-card > .title-score{
		display: flex;
		flex-direction: column;
		gap: .5rem;
		align-items: flex-start;
		/* justify-content: space-between; */
		margin-bottom:1rem;
	}
	.title-score > h3{
		text-transform: uppercase;
	}
	.title{
		display: flex;
		justify-content: baseline;
		align-items: center;
		gap: .25rem;

	}
	.details{
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		
	}
	.details > .group{
		margin-bottom: .5rem;
	}
	.detail-name{
		font-weight: 600;
		margin-right: .25rem;
	}
	.icon-container{
		min-width: 40px;
		min-height: 40px;
	}
</style>
