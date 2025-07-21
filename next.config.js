
rewritesConfig = [
	{
		source: "/mp3",
		destination:  'http://trancescript.ddns.net:888/audio',
	},
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	// distDir: 'dist',

	async rewrites()
	{
		return {
			beforeFiles: [// These rewrites are checked after headers/redirects
				// and before all files including _next/public files which
				// allows overriding page files
				{
					source: '/mp3/:path*', destination: 'http://trancescript.ddns.net:888/audio/:path*', //has: [{ type: 'query', key: 'overrideMe' }],
				},],
		}
	}

}

module.exports = nextConfig
