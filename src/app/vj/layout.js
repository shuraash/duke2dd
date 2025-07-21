import PsyBG from "@src/components/psyBG";


export default function RootLayout({ children }) {
  return (


    <body className={'relative w-screen h-svh min-h-svh overflow-x-hidden'}>

                <PsyBG className={'abs-full !fixed '}  />


                <PsyHeader/>

                <main className={'relative w-full max-w-screen-lg mx-auto pt-0.5'}>

                    {/*<PgTemplate>{children}</PgTemplate>*/}


                    {children}

                </main>


      </body>

  )
}


function PsyHeader({}) {

    return <header className={'relative z-40 w-fit mx-auto max-w-screen-lg p-2 grid grid-cols-[auto_auto] gap-x-4 items-center font-sans drop-shadow-[3px_3px_3px#fff8f888]'}>


        <div className={'relative h-24 w-fit py-1'}>
            {/*id={'psy-logo'}*/}
            <img src={'psytrance_lu.png'} className={`w-auto h-full object-contain psy-logo-huer`} />
        </div>


        <div className={'uppercase font-[Audiowide]  -translate-y-1 ohuevator-c'}>
            <h1 className={'text-[22px] font-bold tracking-[7px] text-lime-300 '}>PSYTRANCE.LU</h1>
            <h3 className={'text-[14px] tracking-[0px] text-red-300 '}>Non-profit cultural society</h3>
        </div>
        {/*<h1 className={'font-bold text-2xl text-lime-300 ohuevator-c'}>PSYTRANCE.LU</h1>*/}
        <a href={"/"} className={'absolute inset-0 opacity-0 z-10 cursor-pointer '} alt={"home"}/>
    </header>
}