import './globals.css?2'
import PsyBG from "@src/components/psyBG";

export const metadata = {
    title: 'PSYTRANCE.LU',
    description: 'NON-PROFIT CULTURAL SOCIETY',
    icons: [`/favicon.ico`],
    thumbnail:  `https://psytrance.lu/psytrance.lu.logo.title.bg.pmg.png`,
    openGraph: {
        title: 'PSYTRANCE.LU',
        description: 'NON-PROFIT CULTURAL SOCIETY',
        images: [{url: `https://psytrance.lu/psytrance.lu.logo.title.bg.w.png`, height: 224, width: 734}]
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen  '}>

    <body className={'relative w-screen h-svh min-h-svh overflow-x-hidden'}>

                <PsyBG className={'abs-full !fixed '}  />


                <PsyHeader/>

                <main className={'relative w-full max-w-screen-lg mx-auto pt-14'}>

                    {/*<PgTemplate>{children}</PgTemplate>*/}


                    {children}

                </main>


      </body>

    </html>
  )
}


function PsyHeader({}) {

    return <header className={'w-fit mx-auto max-w-screen-lg p-2 grid grid-cols-[auto_auto] gap-x-4 items-center font-sans drop-shadow-[3px_3px_3px#fff8f888]'}>

        <img src={'psytrance_lu.png'} className={`w-auto h-24 psy-logo-huer`}/>


        <div className={'uppercase font-[Audiowide]  -translate-y-1 ohuevator-c'}>
            <h1 className={'text-[22px] font-bold tracking-[7px] text-lime-300 '}>PSYTRANCE.LU</h1>
            <h3 className={'text-[14px] tracking-[0px] text-red-300 '}>Non-profit cultural society</h3>
        </div>
        {/*<h1 className={'font-bold text-2xl text-lime-300 ohuevator-c'}>PSYTRANCE.LU</h1>*/}

    </header>
}