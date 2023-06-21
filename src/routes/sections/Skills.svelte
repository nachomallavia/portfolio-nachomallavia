<script>
	import { lang } from '../configStore';
	import Skill from './skills/Skill.svelte';
	import Detail from './skills/Detail.svelte';
	let selectedSkillIndex=1;
	import {skillList} from './skills/skillList.js'


</script>

<section class="full" id="section-skills">
	<h2>{$lang === 'ES' ? 'Habilidades' : 'Skills'}</h2>
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
					<h3>{$lang==='ES'?skillItem.nameAr:skillItem.nameUs}</h3>
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
	.full > h2{
		padding-left:4rem;
		padding-top: 1.5rem;
		margin-bottom: 4rem;
	}
	.skill-container{
		max-width: 1200px;
		min-height: 60%;
		display: grid;
		
		padding-left:4rem;
	}
	/* .skill-container{
		max-width: 1000px;
		min-height: 100%;		
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding-left: 4rem;
		padding-right: 8rem;
	} */
	.selected{
		background-color: red;
	}
	.skill-list{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		/* justify-content: center; */
		/* align-items: center; */
	
	}
	.skill-card{
		padding:4rem;
		border: 1px solid var(--background-color-2);
		border-radius: 1rem;
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
		gap: 1rem;
		align-items: center;
		/* justify-content: space-between; */
		margin-bottom:1rem;
	}
	.title-score > h3{
		text-transform: uppercase;
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
</style>
