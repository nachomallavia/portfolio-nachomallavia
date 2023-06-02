export async function load({ cookies }) {
	const theme = await cookies.get('NachoTheme');
	const lang = await cookies.get('NachoLang');

	const config = {
		theme,
		lang
	};

	return config;
}
