import './globals.css?2'
import Footer from "./footer";
import Header from "./header";
import PageWrapper from "./pageWrapper";

export const metadata = {
    title: 'Dukedelic Dukedance',
    description: 'Event by PSYTRANCE.LU and friends',

    icons: [`/favicon.png`],
    thumbnail:  `https://duke2dd.vercel.app/og.jpg`,
    openGraph: {
        title: 'Dukedelic Dukedance',
        description: 'Event by PSYTRANCE.LU and friends',
        images: [{url: `https://duke2dd.vercel.app/og.jpg`, height: 640, width: 640}]
    }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen  '}>

      <body className={'relative w-screen h-screen h-dvh min-h-screen min-h-dvh overflow-x-hidden dark   '}>

        {/*<PsyBG className={'abs-full fixed '} onInfoUpdate={undefined} />*/}

        <Header/>

        <main className={``}>

              <PageWrapper>{children}</PageWrapper>

        </main>

        <Footer/>

      </body>

    </html>
  )
}
