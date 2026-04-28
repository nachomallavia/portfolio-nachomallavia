export async function GET() {
	try {
		await fetch('https://label-api-proxy.onrender.com/label', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: '^XA^XZ'
		});
	} catch {
		// Ignore errors — this is best-effort warmup
	}

	return new Response(null, { status: 204 });
}
