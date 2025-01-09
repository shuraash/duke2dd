"use client"

import Link from "next/link";
import {PsycoTexto, PsycoTitlo} from "../../components/psyTexts";
import {usePathname} from "next/navigation";
import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {genShadow} from "@src/components/djDrops.gsap";
import DDPlayer from "@src/components/ddPlayer";


export default function Footer()
{
	const path = usePathname(), ref = useRef()

	useEffect(() => {

		animate(ref.current, {bottom:  0, opacity: 1}, {duration: 1.2, ease: "easeIn", delay: 1.8})
		animate(ref.current.querySelector('a'), {opacity: 1}, {duration: 1.2, ease: "easeIn", delay: 1.8})

		animate(
			[
					[ref.current, {scaleX: 1.3, scaleY: 1.0}, {duration: 2, ease: "easeOut", delay: 0}],
					[ref.current, {scaleX: 1, scaleY: 1}, {duration: 1, ease: "easeIn", delay: 1}],

			],
			{repeat: Infinity, repeatType: "loop", delay: 7.5, repeatDelay: 7.5}
		)

	}, [path])

	// let isHome = path == '/' || path == '';
	let isHome = path == '/4D2024' || path == '/4D2024/';
	let isDetails = path.endsWith('/details') // || path == 'details';

	return <>

		<footer ref={ref}
		        className={`z-40 fixed w-full h-[98px] left-0 bottom-0 sm:-bottom-32  flex items-center justify-center text-center
		        
		            bg-gradient-to-b from-[#52525280] to-[#134415] sm:bg-none
		        `}

		        style={{
				    background: isDetails ? '' : 'transparent',
			        textShadow: `#dedede 0px 0px 8px, #eeeeeeee 0px 0px 20px, 0px 0px 1px #00000054`
				}}
		>

			<Link href={isHome  ? '/4D2024/details' : '/4D2024'}
			      className={'opacity-0 uppercase text-sm sm:text-base tracking-wide z-50 absolute  top-2 sm:top-auto sm:bottom-1.5 sm:translate-x-[-100%] '}>

				<PsycoTexto className={'p-2 border rounded-xl'}>
					<PsycoTitlo className={'gap-x-2 cursor-pointer'} text={isHome ? 'Details' : 'back to flyer'}/>
				</PsycoTexto>

			</Link>




			<DDPlayer className={''}/>

		</footer>




	</>
}