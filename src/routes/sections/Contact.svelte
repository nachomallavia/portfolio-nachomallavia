<script>
	import { enhance } from '$app/forms';
	import { lang } from '../configStore.svelte.js';
	import iconClose from '$lib/images/icon_close.svg';
	import contactIcon from '$lib/images/contact.svg';

	let { form } = $props();

	function closeModal() {
		if (form) {
			form.success = false;
		}
	}

	function handleKeyup(e) {
		console.log(e.key);
		if(e.key == "Escape"){
			closeModal();
		}
	}
</script>
<section class="full" id="section-contact">
	<div class="contact-header">
		<h2>{lang.value=="ES"?"Contacto":"Contact"}</h2>
	</div>
	<div class="container">
		{#if form?.success == true}
		<div class="thanks-modal" onmouseup={closeModal} onkeyup={handleKeyup}>
		
			<img src={contactIcon} alt="Close">
			{#if lang.value=="ES"}
			<h1>¡Gracias {form.firstName}!</h1>
			<p>Recibí tu mensaje y en breve voy a estar escribiendo al mail que me indicaste.<br>Espero que estemos en contacto pronto.</p>
			{:else}
			<h1>Thank you {form.firstName}!</h1>
			<p>
				I got your message and will be writting to the email adress you filled out.<br> I hope we get in touch soon.
			</p>
			{/if}

		</div>
		{/if}
		<div class="contact-group">
			<div class="title">
				<h2>{lang.value=="ES"?"¡Gracias por tu tiempo!":"Thank you for your time! "}</h2>
				{#if lang.value=="ES"}
				<p>Completá este formulario si querés que entremos en contacto.<br class="mobile">
					También podés escribirme a <a href="mailto: nachomallavia@gmail.com">nachomallavia@gmail.com</a><br class="mobile"> o contactarme en <a href="https://www.linkedin.com/in/ignacio-mallaviabarrena/" target="_blank">LinkedIn.</a>
					
				</p>
				{:else}
				<p>Complete this form if you want to get in touch.<br class="mobile">
					You can also email me at <a href="mailto: nachomallavia@gmail.com">nachomallavia@gmail.com</a><br class="mobile"> or contact me on <a href="https://www.linkedin.com/in/ignacio-mallaviabarrena/" target="_blank">LinkedIn.</a>
				</p>
				{/if}
			</div>
			<form action="?/contact" method="POST" use:enhance>
				<div class="contact-grid">
					
					<div class="grid-element name">
						<label for="name">{lang.value=="ES"?"Nombre":"Name"}</label>
						<input type="text" name="name" autocomplete="name" value={form?.name?form.name:""}>
						<div class="error-space">
							{#if lang.value=="ES"}
							<h5>{form?.error?.name?.ar?form.error.name.ar:""}</h5>
							{:else}
							<h5>{form?.error?.name?.us?form.error.name.us:""}</h5>
							{/if}
						</div>
					</div>
					
					<div class="grid-element email">
						<label for="email">{lang.value=="ES"?"Email":"Email"}</label>
						<input type="email" name="email" autocomplete="email" value={form?.email?form.email:""}>
						<div class="error-space">
							{#if lang.value=="ES"}
							<h5>{form?.error?.email?.ar?form.error.email.ar:""}</h5>
							{:else}
							<h5>{form?.error?.email?.us?form.error.email.us:""}</h5>
							{/if}
						</div>
					</div>
				
					<div class="grid-element message">
						<label for="message">{lang.value=="ES"?"Mensaje":"Message"}</label>
						<textarea name="message" cols="30" rows="10" value={form?.message?form.message:""}></textarea>
						<div class="error-space">
							{#if lang.value=="ES"}
							<h5>{form?.error?.message?.ar?form.error.message.ar:""}</h5>
							{:else}
							<h5>{form?.error?.message?.us?form.error.message.us:""}</h5>
							{/if}
						</div>
					</div>
					<div class="grid-element sub">
						<button type="submit" class="submit">{lang.value=="ES"?"Enviar":"Send"}</button>
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
	.container{
		position: relative;
	}
	.thanks-modal{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
		background-color: var(--background-color-1);
		color: var(--text-color);
		display: flex;
		flex-direction: column;
		/* gap: 1.5rem; */
		justify-content: center;
		align-items: center;
		padding-inline: 4rem;
		text-align: center;
		opacity: 88%;
		
	}
	.thanks-modal > h1{
		color: var(--accent-color);
		margin-bottom: 1.5rem;
	}
	.thanks-modal > p{
		line-height: 1.5rem;
	}
	.close > button {
		background-color: var(--background-color-1);
		width: 100%;
		border:none;
		display: flex;
		justify-content: end;
		
	}
	.close > button:active{
		background-color: var(--background-color-1);
	}
	.thanks-modal > img {
		width: 80px;
		
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
	.title{
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	a{
		text-decoration: none;
		color: var(--accent-color);
		font-weight: 600;
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
	button.submit{
		width:100%;
		padding-block: .5rem;
		background-color: var(--background-color-1);
		border: none;
		color: var(--text-color);
		font-size: 1.1rem;
	}
	button.submit:hover{
		background-color: var(--accent-color-2);
	}
	@media screen and (max-width: 512px){
		.contact-header > h2{
			display: none;
		}
		.contact-group{
			padding-block: 3rem;
			padding-inline: 1.5rem;
			gap: 3rem;
		}
		form{
			width: 100%;
		}
	}
</style>
