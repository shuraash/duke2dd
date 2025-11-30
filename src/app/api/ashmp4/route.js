import {NextResponse} from "next/server";

export async function GET(req, { params })
{

//	params = await params
//console.log(`* API /ni * GET * params: `, params, `url: '${req.nextUrl.href}', host: '${req.headers.get('host')}', site prm.: '${req.nextUrl.searchParams.get('site')}'`);
//
// 	let
// 		path = params?.ep ? params.ep.join('/') : ''

	let file = req.nextUrl.searchParams.get('f')

	let query = `http://trancescript.ddns.net:888/video/${file}`

//	query = query.replace('&websites=1', '')

	const res = NextResponse, requestHeaders = new Headers(req.headers)
	//
	// res.writeHead(200, {
	// 	'Content-Type': 'audio/mpeg',
	// 	'Content-Length': size,
	// });

	console.log(`* API fetch ${query} ....`)

		let d = await fetch(query).then(r => r.arrayBuffer())
		requestHeaders.set('content-type', 'video/mp4')

	console.log(`* API fetch ${query} DONE!`)

		return new NextResponse(d, {status: 200, headers: requestHeaders});
}

