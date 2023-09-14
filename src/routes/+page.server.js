import sgMail from '@sendgrid/mail';
import {SENDGRID_API_KEY} from "$env/static/private";
import { fail } from '@sveltejs/kit';
sgMail.setApiKey(SENDGRID_API_KEY);
export async function load({ cookies }) {
	const theme = await cookies.get('NachoTheme');
	const lang = await cookies.get('NachoLang');

	const config = {
		theme,
		lang
	};

	return config;
}
export const actions = {
	contact: async ({request})=>{
		const data = await request.formData();
		console.log(data)
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
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
		}
		if(email == ""){
			error.email.ar = "Por favor completá tu email";
			error.email.us = "Please fill out your email";
		}
		if(message == ""){
			error.message.ar = "Por favor completá tu mensaje";
			error.message.us = "Please fill out your message";
		}
		let firstName = name.split(" ")[0]
		if (name && email && message){
			// const msg = {
			// 	to: 'nachomallavia@gmail.com', // Change to your recipient
			// 	from: 'nachomallavia@gmail.com', // Change to your verified sender
			// 	subject: 'CONTACTO PORTFOLIO',
			// 	text: `Nombre: ${name} Email:${email} Mensaje:${message}`,
			// 	html: `<h1>${name}</h1>
			// 			<h2>${email}</h2>
			// 			<p>${message}</p>
			// 		`,
			//   }
			//   sgMail
			// 	.send(msg)
			// 	.then(() => {
			// 	  console.log('Email sent')
			// 	})
			// 	.catch((error) => {
			// 	  console.error(error)
			// 	})
			
			return {success: true, name:firstName}

		}
		

		console.log(`Name: ${name}`)
		console.log(`Email: ${email}`)
		console.log(`Message: ${message}`)
		return {success: false, name:firstName, error:error}

		
	}
}
