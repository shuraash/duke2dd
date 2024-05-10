import './globals.css?2'
import PageWrapper from "@src/app/PageWrapper";
import PsyBG from "@src/components/psyBG";
import Footer from "./footer";
import Header from "./header";

export const metadata = {
    title: 'Dukedelic Dukedance',
    description: 'Event by psytrance.lu and friends',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen'}>

      <body className={'relative w-screen h-dvh min-h-dvh overflow-x-hidden dark'}>

        <PsyBG className={'abs-full fixed '} onInfoUpdate={undefined} />

        <Header/>

        <main>

              <PageWrapper>{children}</PageWrapper>

        </main>

        <Footer/>

      </body>

    </html>
  )
}
