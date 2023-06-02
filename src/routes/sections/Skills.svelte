<script>
	import { lang } from '../configStore';
	import Skill from './skills/Skill.svelte';
</script>

<section class="full" id="section-skills">
	<div class="container">
		<h2>{$lang === 'ES' ? 'Habilidades' : 'Skills'}</h2>
		<div class="skills-container">
			<Skill skillName="Svelte" score="7" />
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
</style>
