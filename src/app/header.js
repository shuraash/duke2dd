"use client"

import Link from "next/link";
import {PsycoTexto, PsycoTitlo} from "../components/psyTexts";
import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {genShadow} from "@src/components/djDrops.gsap";
import {usePathname} from "next/navigation";

export default function Header()
{
	const
		ref = useRef(),  path = usePathname()

	useEffect(() => {

		animate(ref.current, {top: 0, opacity: 1}, {duration: 1, ease: "easeIn", delay: 1.2})

		animate(
			[
				[ref.current.querySelectorAll('.psyco-row')[0], {rotateY: '180deg'}, {duration: 1, ease: "easeOut", delay: 0}],
				[ref.current.querySelectorAll('.psyco-row')[1], {rotateY: '-180deg'}, {duration: 1, ease: "easeOut", delay: 0.5, at: '<'}],
				[ref.current.querySelectorAll('.psyco-row')[0], {rotateY: '0deg'}, {duration: 1, ease: "easeIn", delay: 0.5}],
				[ref.current.querySelectorAll('.psyco-row')[1], {rotateY: '0deg'}, {duration: 1, ease: "easeIn", delay: 1, at: '<'}],

				[ref.current.querySelectorAll('.psyco-row')[0], {rotateX: '180deg'}, {duration: 1, ease: "linear", delay: 3}],
				[ref.current.querySelectorAll('.psyco-row')[1], {rotateX: '-180deg'}, {duration: 1, ease: "linear", delay: 0.5}],
				[ref.current.querySelectorAll('.psyco-row')[0], {rotateX: '0deg'}, {duration: 1, ease: "linear", delay: 1}],
				[ref.current.querySelectorAll('.psyco-row')[1], {rotateX: '0deg'}, {duration: 1, ease: "linear", delay: 0.5}],

				[ref.current, {scaleY: 1.3}, {duration: 1, ease: "backOut", delay: 3}],
				[ref.current, {scaleY: 1}, {duration: 1, ease: "backIn"}],
			],
			{repeat: Infinity, repeatType: "loop", delay: 7.5, repeatDelay: 7.5}
		)

	}, [])

	return <header  style={{textShadow: `#dedede 0px 0px 8px, #eeeeeeee 0px 0px 20px, 0px 0px 1px #00000054`}}
	                ref={ref}
	                className={'z-[1] fixed w-full h-fit left-0 -top-32 translate-y-[-125%] pt-2 pb-3 opacity-0 flex items-center justify-center text-center'}
			>


		<Link href={path == '/' ? '/details' : '/'} className={''}>

			<div className={'w-fit h-fit mx-auto'}>

				<PsycoTexto duration={0.5} delay={1.5} className={`drop-shadow-xl text-3xl sm:text-4xl font-semibold text-orange-500  flex gap-x-4 items-center h-fit w-fit mx-auto`}>
					{/*Duke<b className={'text-2xl'}>d</b>elic Duke<b className={'text-2xl'}>d</b>ance*/}
					<div className={'psyco-row flex items-center gap-x-1'}>
						<PsycoTitlo text='Duke' className={''}/>
						<PsycoTitlo text='d' className={''} style={{transform: 'rotate(7deg) scale(1.15)'}}/>
						<PsycoTitlo text='elic' className={''} style={{rotate: '0deg'}}/>
					</div>
					<div className={'psyco-row flex items-center gap-x-1'}>
						<PsycoTitlo text='Duke' className={''}/>
						<PsycoTitlo text='d' className={''} style={{transform: 'rotate(-7deg) scale(1.15)'}}/>
						<PsycoTitlo text='ance' className={''}/>
					</div>
				</PsycoTexto>

				<div className={ 'abs-h-center mt-1 ohuevator text-base  text-emerald-300  h-fit w-fit mx-auto shrink-0'}>
					 June 22 17:00 - June 23 18:00. Differdnage.
				</div>

			</div>
		</Link>

	</header>

}