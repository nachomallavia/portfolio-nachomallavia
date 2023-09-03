<script>
	import { lang } from '../configStore';
</script>
<section class="full" id="section-contact">
	<div class="contact-header">
		<h2>{$lang=="ES"?"Contacto":"Contact"}</h2>
	</div>
</section>

<style>
	.full {
		width: 100%;
		min-height: 100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
	}
	.full > .contact-header{
		min-height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left:4rem;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
</style>
