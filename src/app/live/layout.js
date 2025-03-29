export default function RootLayout({ children }) {
	return <body className={'relative w-screen h-svh min-h-svh overflow-x-hidden'}>{children}</body>
}