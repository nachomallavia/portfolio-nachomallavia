<script>
	import {lang} from '../configStore';
	import Timeline from './experience/Timeline.Svelte'
</script>
<section class="full" id="section-experience">
	<div class="experience-header">
		<h2 class="section-title">{$lang=="ES"?"Experiencia":"Experience"}</h2>
	</div>
	<Timeline />
</section>

<style>
	.full {
		width: 100%;
		min-height: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
	}
	.full > .experience-header{
		padding-left:4rem;
		padding-top: 2rem;
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
	.timeline-container{
		width: 100%;
		min-height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

	}
	.line{
		width: 80%;
		min-height: 1rem;
	}
	.red{
		background-color: rgb(227, 17, 17);
	}
	.blue{
		background-color: rgb(25, 25, 222);
	}
	.yellow{
		background-color: rgb(255, 220, 0);
	}
</style>
