"use client";

import {shuffledDJ} from "@src/components/djDrops.gsap";
import {useEffect, useRef, useState} from "react";
import {PsycoTexto, PsycoTitlo} from "@src/components/psyTexts";
import Link from "next/link";


export default function About() {

	const [djs, setDjd] = useState()

	const [ttMode, setTTMode] = useState()

	const pgRef = useRef()

	const makafaka = () => {

		shuffledDJ().forEach((d,p) => {

			console.log('qq ' + '#dj' + d[0])

			const li = document.querySelector('#dj' + d[0].replaceAll(' ','_'));
			if(li) li.style.top =  (p * 25) + 'px'

		})
	}

	useEffect(()=>{

		setDjd(shuffledDJ())

		setInterval(() =>  makafaka(), 888*8)

		pgRef.current.classList.add('fade-in')

	}, [])

	//
	// function openDJ(dj)
	// {
	// 	window,o
	// }


	return (
		<>


		<div className={'fixed w-full h-full inset-0 details-bg z-[-1]'}/>

		<div ref={pgRef} className={'opacity-0 w-full max-w-screen-sm mx-auto px-4 sm:px-8 sm:mt-12 sm:py-4 sm:rounded-xl bg-neutral-600/50 text-center sm:mt-4'}>

			{/*<PsycoTexto className={`   text-base  font-semibold  h-fit w-fit mx-auto shrink-0 truncate !drop-shadow-none !shadow-none`}>*/}
			{/*	<PsycoTitlo text='June 22 13:00 - June 23 17:00' className={'!drop-shadow-none !shadow-none'}*/}
			{/*	            style={{textShadow: 'none'}}*/}
			{/*	/>*/}
			{/*</PsycoTexto>*/}

			<div className={`   text-base sm:text-lg pt-1  font-semibold  h-fit w-fit mx-auto shrink-0 truncate !drop-shadow-none !shadow-none`}>
				June 22 13:00 - June 23 17:00
			</div>

			<div className={'flex justify-center text-2xl'}>
				<PsycoTexto className={'flex items-center '}><PsycoTitlo text={'* Free partY *'} className={'uppercase text-orange-300'}/></PsycoTexto>
			</div>

			{/*<div className={'text-xl text-rose-400'}>FULL TRUE LOVE AND HAPPINESS!</div>*/}

			<div className={'text-xl my-1 h-fit w-full'}>
				<a href={'https://maps.app.goo.gl/fiCzbZd4iYYzwX5h6'} target={'_blank'} >
					{/*<div className={'w-fit mx-auto text-sm uppercase'}>Place</div>*/}
					<img src={'/gmapsc.png'} alt="gmap link" className={'w-[112px] p-1 border rounded-xl h-auto mx-auto'}/>
				</a>
			</div>

			<Link href="/4D2024/djs/skvo" className={'flex justify-center text-lg w-fit mx-auto mt-2 items-center mt-1 py-1.5 px-10 bg-gradient-to-b from-[#3f51b5] to-[#9C27B0] rounded-xl'}>
				<PsycoTexto className={'flex items-center '}><PsycoTitlo text={"deco by skvo's-space"} className={' text-orange-300'}/></PsycoTexto>
			</Link>

			<div className={`mt-1 text-balance flex gap-x-4 items-center py-1.5 justify-center`}>
				<div onClick={e => ttMode ? setTTMode(false) : null}  className={'border px-5 pt-2.5 pb-0 rounded-xl flex items-center cursor-pointer'} style={{background: ttMode ? '' : '#2bce59'}}>DJ's</div>
				<div onClick={e => !ttMode ? setTTMode(true) : null} className={'border px-5 pt-2.5 pb-0 rounded-xl flex items-center cursor-pointer'} style={{background: ttMode ? '#2bce59' : ''}}>Time Table</div>
			</div>


			{!ttMode &&
				<div className={'px-2 sm:px-0 border pt-5 rounded-xl'}>

				<ul className={"font-[Audiowide] text-leftw-full grid justify-center grid-cols-[auto]  px-5  pl-8 mx-auto text-base   h-[400px] relative "}  >
					{djs && djs.map((dj,pos) =>
						<li key={dj[0]} id={'dj' + dj[0].replaceAll(' ','_')}
							className={'cursor-pointer text-xs sm:text-base absolute w-full text-center grid justify-center items-center grid-cols-[auto_auto] gap-x-3'}
						    style={{top: (pos * 27.5) + 'px', transition: 'all ' + (0.888*4.5 + Math.random()/2) + 's ease-in-out'}}
						>
							<PsycoTexto className={'flex items-center '}><PsycoTitlo text={dj[0]} className={'uppercase text-orange-300'}/></PsycoTexto>
							<div className={'text-neutral-300 translate-y-1'}> {dj[1]}</div>
							<Link href={'/djs/'+dj[0].replaceAll(' ', '').replace("M️♥Love","MLove")} className={'absolute inset-0'}/>
						</li>)}
				</ul>

			</div>
			}

			{ttMode &&
				<div className={'overflow-x-hidden mt-2 pb-3'}>
					<img alt='time table' src={'/timetable.jpg'} className={ 'ohuevator w-full max-w-screen-sm h-auto object-contain'}/>
				</div>
			}

			<div className={'text-sm pt-2 pb-1 px-3 bg-red-700 rounded-xl text-center border flex items-center justify-center mx-auto'}>Will be no any sales. Drinks and food bring with you please.</div>

		</div>

		</>
	)

}