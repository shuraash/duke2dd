import './globals.css?2'
import PgTemplate from "src/components/pgTemplate";
import PsyBG from "src/components/PsyBG/psyBG";


export const metadata = {
  title: 'PSYTRANCE.LU',
  description: 'NON-PROFIT CULTURAL SOCIETY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'overflow-x-hidden w-screen'}>

      {/*<head>*/}
      {/*    <link rel="preload" href="/bubbles/001.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/002.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/003.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/004.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/005.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/006.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/007.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/008.png" as="image" type="image/png" />*/}
      {/*    <link rel="preload" href="/bubbles/009.png" as="image" type="image/png" />*/}
      {/*</head>*/}

      <body className={'relative w-screen h-dvh min-h-dvh overflow-x-hidden'}>

        <PsyBG className={'abs-full fixed '} onInfoUpdate={undefined} />

      <main>

          <PgTemplate>{children}</PgTemplate>

      </main>

           {/*<footer className={'h-[100px] py-3  justify-self-end  w-full text-center  text-orange-200 text-sm z-50  overflow-hidden grid grid-cols-[100%]  '}>*/}


           {/*    /!*<Link href={'/past'} className={`mb-1  text-sm  text-sky-100 w-fit mx-auto block text-center`}>*!/*/}
           {/*    /!*    PAST EVENTS*!/*/}
           {/*    /!*</Link>*!/*/}

           {/*    <div className={' h-fit flex justify-center gap-x-10 py-3 px-3  w-fit  max-w-screen-sm  mx-auto overflow-hidden mb-5'}>*/}


           {/*        <Link href={'/audio'} className={'glimen-a ml-3 flex gap-x-2 items-center w-fit h-fit py-1  px-1.5 rounded-xl border border-neutral-400 text-xs text-neutral-200 bg-[#ffffff33]'}>*/}
           {/*            <span>random</span>*/}
           {/*            <IconAudio className={'w-6  h-6 text-orange-200'}/>*/}
           {/*            <span>audio</span>*/}
           {/*        </Link>*/}

           {/*        <Link href={'/video'} className={'glimen-b mr-3 flex gap-x-2 items-center w-fit h-fit py-1  px-1.5 rounded-xl border border-neutral-400 text-xs text-neutral-200 bg-[#ffffff33]'}>*/}
           {/*            <span>random</span>*/}
           {/*            <IconVideo className={'w-6  h-6 text-orange-200'}/>*/}
           {/*            <span>video</span>*/}
           {/*        </Link>*/}

           {/*    </div>*/}

           {/*    <Link className={'cursor-pointer text-center'} href={'/about'}>WHAT IS  IT & WHO WE ARE</Link>*/}

           {/*</footer>*/}

      </body>
    </html>
  )
}
