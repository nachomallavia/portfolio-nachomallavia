export async function GET(req) {
    
    let res = await fetch('https://label-api-proxy.onrender.com/label', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',					
				},
				body:`^XA^ll800 ^CF0,48,55 ^FO20,30^FD^PRINTER ACTIVATED ^XZ`
			});
        let data = await res.json()    
    return new Response(data);
  }