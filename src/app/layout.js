import './globals.css?2'
import Footer from "./footer";
import Header from "./header";
import PageWrapper from "./pageWrapper";

export const metadata = {
    title: 'Dukedelic Dukedance',
    description: 'Event by PSYTRANCE.LU and friends',

    icons: [`/favicon.png`],
    thumbnail:  `https://psytrance.lu/og.jpg`,
    openGraph: {
        title: 'Dukedelic Dukedance',
        description: 'Event by PSYTRANCE.LU and friends',
        images: [{url: `https://psytrance.lu/og.jpg`, height: 640, width: 640}]
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen  '}>

      <body className={'relative w-screen h-screen h-dvh min-h-screen min-h-dvh overflow-x-hidden dark   '}>

        {/*<PsyBG className={'abs-full fixed '} onInfoUpdate={undefined} />*/}

        <Header/>

        <Footer/>
        
        {/*<main className={`overflow-x-hidden max-w-full min-w-full w-full overflow-y-auto h-[calc(100%_-_164px)] pt-[0px]`}>*/}
        <main className={` `}>

            <div className={'fixed w-full h-full inset-0 details-bg z-[-1]'}/>

             <PageWrapper>{children}</PageWrapper>

        </main>


      </body>

    </html>
  )
}
