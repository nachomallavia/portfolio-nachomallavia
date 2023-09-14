<script>
	export let form;
	import { enhance } from '$app/forms';
	import { lang } from '../configStore';
</script>
<section class="full" id="section-contact">
	<div class="contact-header">
		<h2>{$lang=="ES"?"Contacto":"Contact"}</h2>
	</div>
	<div class="container">
		{#if form?.success == true}
		<div class="thanks-modal">
			<h1>{$lang=="ES"?`¡Gracias ${form.name}!`:`Thank you ${form.name}!`}</h1>
		</div>
		{/if}
		<div class="contact-group">
			<div class="title">
				<h2>{$lang=="ES"?"¡Gracias por tu tiempo!":"Thank you for your time! "}</h2>
				<p>
					{$lang=="ES"?"Completá este formulario si querés que entremos en contacto.":"Complete this form if you want to get in touch."}
				</p>
			</div>
			<form action="?/contact" method="POST" use:enhance>
				<div class="contact-grid">
					
					<div class="grid-element name">
						<label for="name">{$lang=="ES"?"Nombre":"Name"}</label>
						<input type="text" name="name" autocomplete="name">
						<div class="error-space">
							{#if $lang=="ES"}
							<h5>{form?.error?.name?.ar?form.error.name.ar:""}</h5>
							{:else}
							<h5>{form?.error?.name?.us?form.error.name.us:""}</h5>
							{/if}
						</div>
					</div>
					
					<div class="grid-element email">
						<label for="email">{$lang=="ES"?"Email":"Email"}</label>
						<input type="email" name="email" autocomplete="email">
						<div class="error-space">
							{#if $lang=="ES"}
							<h5>{form?.error?.email?.ar?form.error.email.ar:""}</h5>
							{:else}
							<h5>{form?.error?.email?.us?form.error.email.us:""}</h5>
							{/if}
						</div>
					</div>
				
					<div class="grid-element message">
						<label for="message">{$lang=="ES"?"Mensaje":"message"}</label>
						<textarea name="message" cols="30" rows="10"></textarea>
						<div class="error-space">
							{#if $lang=="ES"}
							<h5>{form?.error?.message?.ar?form.error.message.ar:""}</h5>
							{:else}
							<h5>{form?.error?.message?.us?form.error.message.us:""}</h5>
							{/if}
						</div>
					</div>
					<div class="grid-element sub">
						<button type="submit">{$lang=="ES"?"Enviar":"Send"}</button>
					</div>

				</div>
			</form>
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
	.full > .contact-header{
		min-height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left:4rem;
		border-top: 1px solid var(--background-color-2);
		border-bottom: 1px solid var(--background-color-2);
	}
	.title > h2 {
		color: var(--accent-color);
		font-size: 1.75rem;
	}
	.contact-group{
		width: 100%;
		padding-block: 4rem;
		padding-inline: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	.contact-grid{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0rem;	
		border: 1px solid var(--background-color-2);	
		border-radius: .25rem;
		width: 100%;
	}
	.grid-element{
		border-bottom: 1px solid var(--background-color-2);
		padding: 1rem;
		display: flex;
		flex-direction: column;		
	}
	.grid-element.name{
		grid-column: 1 / 3;
	}
	.grid-element.email{
		grid-column: 1/3;
	}
	.grid-element.message{
		grid-column: 1/3;
	}
	.contact-grid > .grid-element > input{
		width:100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
		border: none;
		border-bottom: 1px solid var(--background-color-2);
		padding-block: .25rem;
		padding-inline: .25rem;
		font-size: 1.2rem;
	}
	
	.contact-grid > .grid-element > textarea{
		margin-top: .5rem;
		background-color: var(--background-color-4);
		border-radius: .5rem;
		border: 1px solid var(--background-color-1);
		color: var(--text-color);
		font-size: 1.1rem;
	}
	.error-space{
		min-height: 1.25rem;
	}
	h5{
		color:var(--error-color)
	}

	.sub{
		padding:0;
		border-bottom: none;
		grid-column: 1 / 3;
	}
	button{
		width:100%;
		padding-block: .5rem;
		background-color: var(--background-color-1);
		border: none;
		color: var(--text-color);
		font-size: 1.1rem;
	}
	button:hover{
		background-color: var(--accent-color-2);
	}
	@media screen and (max-width: 512px){
		.contact-header > h2{
			display: none;
		}
		.contact-group{
			padding-block: 4rem;
			padding-inline: 1.5rem;
		}
		form{
			width: 100%;
		}
	}
</style>
