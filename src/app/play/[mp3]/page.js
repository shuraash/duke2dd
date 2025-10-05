"use client";


import DDPlayer from '@src/components/ddPlayer';
import {use, useEffect, useState} from 'react';

export default function Home({params}) {

	const prm = use(params)

	let tr =  prm.mp3?.toLowerCase()

	if(tr.endsWith('.mp3'))
	{
		tr = tr.split('.mp3')[0]
	}
	else
	{

	}

	const [pizdaXXX, setPizdaXX] = useState( false )



	useEffect(() => {

		let
			suka = document.querySelector('audio'),
			padla = suka?.paused

		suka?.addEventListener('play', e => setPizdaXX(true))
		suka?.addEventListener('pause', e => setPizdaXX(false))

		return () => {

			suka.removeEventListener('play', e => setPizdaXX(true))
			suka.removeEventListener('pause', e => setPizdaXX(false))
		}


	}, []);



	return   <>

		<div className={'relative p-8 min-h-full w-full'}>

			<DDPlayer fullh={'true'} asrc={`/mp3/${tr}.mp3`}/>

			<div className={`font-[Audiowide] text-2xl text-red-500 drop-shadow-xl capitalize`}>
				{tr}
			</div>

			{/*<div className={'fixed top-[15%] left-[20%] h-[70%] w-[60%]  opacity-70 overflow-x-hidden border rounded-2xl'}>*/}
			{pizdaXXX && <div className={'relative top-[80px] max-h-[50%] max-w-[80%] sm:max-w-[30%] sm:mx-auto opacity-50  hover:opacity-100 target:opacity-100 overflow-x-hidden border rounded-2xl'}>
				<img className={'relative h-full w-full  object-contain object-left'} src={`/mp3/${tr}.webp`}/>
			</div>}


			{!pizdaXXX && <div className={'abs-center w-fit h-fit text-white font-bold text-xl'} onClick={e => setPizdaXX(true)}>Click to play</div>}

		</div>

	 </>

}