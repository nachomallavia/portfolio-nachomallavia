import sgMail from '@sendgrid/mail';
import {SENDGRID_API_KEY} from "$env/static/private";
import { setCookie } from '$lib/cookieHandler.js';
import { fail } from '@sveltejs/kit';
sgMail.setApiKey(SENDGRID_API_KEY);

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
			const msg = {
				to: 'nachomallavia@gmail.com', // Change to your recipient
				from: 'nachomallavia@gmail.com', // Change to your verified sender
				subject: 'CONTACTO PORTFOLIO',
				text: `Nombre: ${name} Email:${email} Mensaje:${message}`,
				html: `<h1>${name}</h1>
						<h2>${email}</h2>
						<p>${message}</p>
					`,
			  }
			  sgMail
				.send(msg)
				.then(() => {
				  console.log('Email sent')
				})
				.catch((error) => {
				  console.error(error)
				})
			
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
