"use client"

import Link from "next/link";
import {PsycoTexto, PsycoTitlo} from "../components/psyTexts";
import {usePathname} from "next/navigation";
import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {genShadow} from "@src/components/djDrops.gsap";
import DDPlayer from "@src/components/ddPlayer";


export default function Footer()
{
	const path = usePathname(), ref = useRef()

	useEffect(() => {

		animate(ref.current, {bottom:  2, opacity: 1}, {duration: 1.2, ease: "easeIn", delay: 1.8})

		animate(
			[
					[ref.current, {scaleX: 1.3, scaleY: 1.0}, {duration: 2, ease: "easeOut", delay: 0}],
					[ref.current, {scaleX: 1, scaleY: 1}, {duration: 1, ease: "easeIn", delay: 1}],

			],
			{repeat: Infinity, repeatType: "loop", delay: 7.5, repeatDelay: 7.5}
		)

	}, [path])

	let isHome = path == '/' || path == '';

	return <>

		<footer ref={ref}
		        className={`z-10 fixed w-full h-[98px] left-0 -bottom-32  opacity-0 flex items-center justify-center text-center
		        
		            bg-gradient-to-b from-[#52525280] to-[#134415] sm:bg-none
		        `}

		        style={{
				    background: isHome ? 'transparent' : ' ',
			        textShadow: `#dedede 0px 0px 8px, #eeeeeeee 0px 0px 20px, 0px 0px 1px #00000054`
				}}
		>

			<Link href={path == '/' ? '/details' : '/'} className={'  uppercase text-sm sm:text-base tracking-wide z-30 absolute  top-2 sm:top-auto sm:bottom-1.5 sm:translate-x-[-100%] '}>
				<PsycoTexto className={'p-2 border rounded-xl'}>
					<PsycoTitlo className={'gap-x-2'} text={path == '/' ? 'Details' : 'back to flyer'}/>
				</PsycoTexto>
			</Link>



		</footer>



	<DDPlayer/>



	</>
}