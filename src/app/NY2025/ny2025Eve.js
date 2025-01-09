"use client"

import {useEffect, useRef} from "react";


export default function NY2005Eve() {

    const
        vidRef = useRef(),

        auPlay = () => {
            console.log(`start play`)
            vidRef.current.play()
        }

    useEffect(() => {

        vidRef.current.addEventListener('canplaythrough', e => auPlay())
        console.log(`ev added`)
        //vidRef.current.src = '/ny2025/cqe.mp4'
        vidRef.current.src = '/ny2025/cqe_v2_640.mp4'

    }, []);

    return <div className={`  px-3 pb-3 relative `}>


        <div className={'font-sans rounded-xl bg-black/60 px-16 py-3 pt-2 border w-fit mx-auto ny-title'}>
            <h2 className={'text-xl text-sky-300 text-center'}>New Year Eve 2025</h2>
            <h3 className={'text-sm text-emerald-300 text-center'}>31.12.24 22:00 - 01.01.25 12:00</h3>
        </div>

        <div className={'mt-7 font-sans rounded-xl text-red-600 font-semibold bg-white/80 px-16 py-4  pt-2 border w-full mx-auto ny-title'}>
            <a href={'https://maps.app.goo.gl/ckTEKVRinjZoHS5m9'} target={"_blank"} className={'text-xl  text-center flex items-center justify-center gap-x-3 '}>LOCATION: 5 zone industrielle Grasbusch, Leudelange
            <img src={"https://www.google.com/favicon.ico"} className={'w-8 h-8'}/>
            </a>
            <h3 className={'text-base text-emerald-700 text-center'}>Entry till  23:59 - 5 €, from 00:00 - 10 € </h3>
        </div>


        <div className={'mt-10'}  >

            {/*<AnimatePresence mode={'wait'} initial={false}>*/}

            {/*    <motion.div*/}

            {/*        // 	initial: { y: 0,x :0},*/}
            {/*        // animate: { y: 0, x: 0},*/}
            {/*        // exit: { y: 0, x: 0},*/}
            {/*        //dj-mdiv djp-${djDrop.pos}*/}
            {/*        key={curPic}*/}
            {/*        className={` w-fit h-fit mx-auto`} style={{zIndex: 1234}}*/}

            {/*        initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1,  rotate: '-180deg'  }}*/}
            {/*        animate={{ opacity: 1, scaleX: 1, scaleY: 1,  rotate: '0deg'  }}*/}
            {/*        exit={{ opacity: 0, scaleX: 0.1, scaleY: 0.1, rotate: '180deg'  }}*/}
            {/*        transition={{duration: 1.15 }}*/}

            {/*    >*/}
            {/*        /!*<div className={'bg-black p-1 text-white'}>{curPic} {pics[curPic]}</div>*!/*/}
            {/*        <img src={pics[curPic]} className={'border rounded-xl overflow-hidden w-full max-w-[555px] ny-quarter h-auto mx-auto'} alt={'flyear top'}/>*/}
            {/*    </motion.div>*/}

            {/*</AnimatePresence>*/}

            {/*<img src={'/ny2025/300pxO.gif'} className={'border rounded-xl overflow-hidden w-full max-w-[555px] h-auto mx-auto mt-10'}/>*/}

            <video
                // src={'/ny2025/cqe.mp4'}
                loop={true}
                playsInline={true}
                muted={true}
                controls={true}
                className={'border rounded-xl overflow-hidden w-full max-w-[555px] h-auto mx-auto mt-10'}
                ref={vidRef}
                // onCanPlay={e => auPlay()}
            />

            <img src={'/ny2025/flyzaeb2.png'} className={'border rounded-xl overflow-hidden w-full max-w-[555px] ny-quarter h-auto mx-auto mt-10'}/>


            <div className={'font-sans rounded-xl bg-black/60 px-16 py-3 pt-2 border w-fit mx-auto ny-title mt-12'}>
                <h2 className={'text-xl text-sky-300 text-center'}>New Year Eve 2025 REFLEX</h2>
                <h3 className={'text-sm text-emerald-300 text-center'}>04.01.25 22:00 - 05.01.25 10:00</h3>
            </div>

            <img src={'/ny2025/djlist.jpg'} className={'border rounded-xl overflow-hidden w-full max-w-[555px] ny-quarter h-auto mx-auto mt-10'}/>

        </div>


        <div className={'mt-12 mb-10 text-lg sm:text-xl text-white text-center pb-8'}>
            <div>
                <span>All info by email </span>
                <a href="mailto:psytrance.lux@gmail.com?subject=New Year Eve 2025&cc=shuraash@gmail.com,tiagooosimoes@gmail.com" className={'font-sans text-lime-200'}  >psytrance.lux@gmail.com</a>
            </div>
            <div>
                <span>messenger </span>
                <a href={'https://www.messenger.com/t/100001073395392/'}   className={'font-sans text-lime-200'}  target={"_blank"}>www.messenger.com/t/TiagoaPsy/</a>
            </div>
            

            <div>
                <span>telegramm </span>
                <a href={'https://t.me/shuraash'} className={'font-sans text-lime-200'}  target={"_blank"}>t.me/shuraash</a>
            </div>

        </div>

    </div>

}

/*

There is a list of DJ's and where they from. List is for New Year eve 2005 - psytrance rave party.
Put this list on appropriate DARK background.
    All names need to be clearly readable and without mistakes.
    Colors is bright and psychedelic.
    City and country letters is smaller than DJ name letters.
    On the background need to be some festive elements: cd, players, dj-mixer, etc.
    List of a DJ's need to painted like letters on the half-transparent glass.
All composition need to match psychedelic hippie style.
    Attention to the text - text need to match exactly what im written in the list. Exactly same words in the same order.

    DJ LIST:

    Neill Moore / NEO (London, UK),
    Shiva ASH (Esch-sur-Alzette, LU),
    Catronomix (Antwerp, BE),
    E.T. (Zurich/Vienna, AUT/CH),
    Ad'am (Porto, PT),
Sophio (Haarlem, NL),
    GriSha (London, UK)

Neill Moore / NEO
Shiva ASH
E.T.
    Catronomix
Ad'am
Sophio
GriSha

(London, UK)
(Esch-sur-Alzette, LU)
(Zurich/Vienna, AUT/CH)
(Antwerp, BE)
(Porto, PT)
(Haarlem, NL)
(London, UK)


London, UK
Esch-sur-Alzette, LU
Zurich/Vienna, AUT/CH
Antwerp, BE
Porto, PT
Haarlem, NL
London, UK

*/

