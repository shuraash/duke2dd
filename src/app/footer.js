"use client"

import Link from "next/link";
import {PsycoTexto, PsycoTitlo} from "../components/psyTexts";
import {usePathname} from "next/navigation";
import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {genShadow} from "@src/components/djDrops.gsap";


export default function Footer()
{
	const path = usePathname(), ref = useRef()

	useEffect(() => {

		animate(ref.current, {bottom: 0, opacity: 1}, {duration: 1.2, ease: "easeIn", delay: 1.8})

		animate(
			[
					[ref.current, {scaleX: 1, scaleY: 1.3}, {duration: 2, ease: "easeOut", delay: 0}],
					[ref.current, {scaleX: 1, scaleY: 1}, {duration: 1, ease: "easeIn", delay: 1}],

			],
			{repeat: Infinity, repeatType: "loop", delay: 7.5, repeatDelay: 7.5}
		)

	}, [path])

	return <footer ref={ref} className={'z-20 fixed w-full h-fit left-0 -bottom-32 py-5 opacity-0 flex items-center justify-center text-center'} style={{textShadow: `#dedede 0px 0px 8px, #eeeeeeee 0px 0px 20px, 0px 0px 1px #00000054`}}>

		<Link href={path == '/' ? '/details' : '/'} className={'inset-0 uppercase text-xl tracking-wide'}>
			<PsycoTexto>
				<PsycoTitlo className={'gap-x-2'} text={path == '/' ? 'Details' : 'back to flyer'}/>
			</PsycoTexto>
		</Link>

	</footer>
}