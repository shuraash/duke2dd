import './globals.css?2';

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

  return     <html lang="en" className={'overflow-x-hidden w-screen  '}>

                    {children}
      </html>

}