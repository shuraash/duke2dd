"use client"

import Link from "next/link";
import {shuffledDJ} from "@src/components/djDrops.gsap";
import {useEffect, useRef, useState} from "react";
import {PsycoTexto, PsycoTitlo} from "@src/components/psyTexts";


export default function About() {

	const [djs, setDjd] = useState()

	const makafaka = () => {

		shuffledDJ().forEach((d,p) => {

			console.log('qq ' + '#dj' + d[0])

			const li = document.querySelector('#dj' + d[0].replaceAll(' ','_'));
			if(li) li.style.top =  (p * 25) + 'px'

		})
	}

	useEffect(()=>{

		setDjd(shuffledDJ())

		setInterval(() =>  makafaka(), 888*6)

	}, [])


	return (
		<>


		<div className={'mt-[100px] w-full max-w-screen-sm mx-auto px-4 sm:px-0 py-5  sm:bg-neutral-600/50 text-center'}>

			<div className={'flex justify-center text-2xl'}>
				<PsycoTexto className={'flex items-center '}><PsycoTitlo text={'* Free partY *'} className={'uppercase text-orange-300'}/></PsycoTexto>
			</div>

			{/*<div className={'text-xl text-rose-400'}>FULL TRUE LOVE AND HAPPINESS!</div>*/}

			<div className={'text-xl'}>
				<a href={'https://maps.app.goo.gl/fiCzbZd4iYYzwX5h6'} target={'_blank'} >
					<div className={'w-fit mx-auto text-sm uppercase'}>Place</div>
					<img src={'/gmapsc.png'} alt="gmap link" className={'w-[180px] p-1 border rounded-xl h-auto mx-auto'}/>
				</a>
			</div>

			<br/>
			<br/>


{/*<div>*/}
{/*			WE DO NOT ALLOW:*/}

{/*			<ul className={"text-left pl-12 w-fit mx-auto text-sm"}>*/}
{/*				<li>BAD VIBES</li>*/}
{/*				<li>BAD ATTITUDES</li>*/}
{/*				<li>DRUGS</li>*/}
{/*				<li>PUBLICITY OF ANY KIND</li>*/}
{/*				<li>LACK OF RESPECT to nature or persons</li>*/}
{/*				<li>FIRE (we will provide our own firecamp for your pleasure)</li>*/}
{/*				<li>CAMPING OUT OF THE CAMPING PLACE</li>*/}
{/*			</ul>*/}
{/*</div>*/}

			<p className={'text-xl'}>Will be no any sales. Drinks and food bring with you please.</p>

			<div className={'pt-2.5'}>

			<ul className={"font-[Audiowide] text-left pl-8 w-full grid justify-center grid-cols-[auto]  px-5 mx-auto text-base   h-[500px] relative "}  >
				{djs && djs.map((dj,pos) =>
					<li key={dj[0]} id={'dj' + dj[0].replaceAll(' ','_')}
						className={'absolute w-full text-center grid justify-center items-center grid-cols-[auto_auto] gap-x-3'}
					    style={{top: (pos * 25) + 'px', transition: 'all ' + (0.888*4.5 + Math.random()/2) + 's ease-in-out'}}
					>
						<PsycoTexto className={'flex items-center '}><PsycoTitlo text={dj[0]} className={'uppercase text-orange-300'}/></PsycoTexto>
						<div className={'text-neutral-300 translate-y-1'}> {dj[1]}</div>
					</li>)}
			</ul>

			</div>

		</div>

		</>
	)

}