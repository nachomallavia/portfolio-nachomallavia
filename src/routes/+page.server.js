import { env } from "$env/dynamic/private";
import { setCookie } from '$lib/cookieHandler.js';
import { fail } from '@sveltejs/kit';

export async function load({ params, url, cookies }) {
	let lang = url.searchParams.get('lang');
	const theme = await cookies.get('NachoTheme');
	const langCookie = await cookies.get('NachoLang');
	if(langCookie && !lang){
		lang = langCookie;
	}

	const config = {
		theme,
		lang
	};

	return config;
}
export const actions = {
	contact: async ({request})=>{
		const data = await request.formData();
		// console.log(data)
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		let firstName;
		let error = {
			name:{
				ar:"",
				us:""
			},
			email:{
				ar:"",
				us:""
			},
			message:{
				ar:"",
				us:""
			}
		}

		if(name == ""){
			error.name.ar = "Por favor completá tu nombre";
			error.name.us = "Please fill out your name";
		} else if(name.length < 2){
			error.name.ar = "Tu nombre debe contener más de una letra";
			error.name.us = "Your name must contain more than one letter";
		}
		if(email == ""){
			error.email.ar = "Por favor completá tu email";
			error.email.us = "Please fill out your email";
		} else if (email.indexOf("@") == -1){
			error.email.ar = "Dirección de email invalida";
			error.email.us = "Invalid email adress";
		}
		if(message == ""){
			error.message.ar = "Por favor completá tu mensaje";
			error.message.us = "Please fill out your message";
		}
		if(name.indexOf(" ")){
		 firstName = name.split(" ")[0]
		} else{
			firstName = name
		}
		if (name && email && message && error.name.ar == "" && error.email.ar == "" && error.message.ar == ""){
			// Send email using native fetch to SendGrid API
			if (env.SENDGRID_API_KEY) {
				try {
					const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
						method: 'POST',
						headers: {
							'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							personalizations: [{ to: [{ email: 'nachomallavia@gmail.com' }] }],
							from: { email: 'nachomallavia@gmail.com' },
							subject: 'CONTACTO PORTFOLIO',
							content: [
								{ type: 'text/plain', value: `Nombre: ${name} Email:${email} Mensaje:${message}` },
								{ type: 'text/html', value: `<h1>${name}</h1><h2>${email}</h2><p>${message}</p>` }
							]
						})
					});

					if (response.ok) {
						console.log('Email sent');
					} else {
						console.error('SendGrid error:', response.status, await response.text());
					}
				} catch (error) {
					console.error('Email send error:', error);
				}
			}
			
			return {success: true,
			
				firstName:firstName
			}

		}
		

		console.log(`Name: ${name}`)
		console.log(`Email: ${email}`)
		console.log(`Message: ${message}`)
		return {
			success: false,
			firstName:firstName,
			name:name,
			email:email,
			message:message,
			error:error
		}

		
	}
}
