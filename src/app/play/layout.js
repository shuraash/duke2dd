import PsyBG from "@src/components/psyBG";


export default async function PRootLayout({ children }) {

  return    <body className={'relative w-screen h-svh min-h-svh overflow-x-hidden'}>

                <PsyBG className={'abs-full !fixed '}  />

               {children}



      </body>

}

