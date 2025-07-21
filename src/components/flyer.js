"use client"
///fff
import {DDCrest} from "./psyTexts";
import {useEffect, useRef, useState} from "react";
import {wrapCycle} from "@src/util";
import {psyShadows} from "./psyColors";
import DDDisk from "./disk";

import {gsap} from "gsap";
import Draggable from 'gsap/dist/Draggable'
import DjDropsGsap from "@src/components/djDrops.gsap";
import {IconAudio} from "@src/components/psy.icons";

gsap.registerPlugin(Draggable)

export default function DDFLyear({className})
{
	let  psyRows,psyCrest,centralD,psyDisk;

	const
		flyRef = useRef(),


		tlRef = useRef(),
		drRef = useRef(),

		[audioOn, setAduioOn] = useState(),


		queryEls = () => {
			centralD = flyRef.current.querySelector('.central-D')
			psyCrest = flyRef.current.querySelector('.psy-crest')
			psyDisk = flyRef.current.querySelector('.disco')
			psyRows =  [...flyRef.current.querySelectorAll ('.psy-row')];
		},

		//dColorW = arrRandomCycler(psyColors, 5),
		// dColorW = wrapCycle(gsap.utils.shuffle(psyColors))
		// scc = arrRandomCycler(psyShadows, 3),

		scc = wrapCycle(psyShadows),

		genShadow = () =>
		{
			let clr = scc.next().value;

			return `0 0 3px ${clr[0]},
			      0 0 15px ${clr[0]},
			      0 0 13px ${clr[1]},
			      0 0 10px ${clr[2]},
			      0 0 1px #000`
		},

		loop = async () =>
		{
			while (true)
			{
				//gsap.set(psyCrest, {textShadow: genShadow()})

				const tl = (tlRef.current = gsap.timeline({delay: 3, repeat: 1, yoyo: true}))

				tl
				  .fromTo( centralD, {opacity: 0,  rotate: '0deg', scale: 0 }, {opacity: 1, scale: 1, duration: 1.6, ease: 'easeIn'} )
				  .fromTo( psyRows[0], {scaleX: 0, opacity: 1, rotateX: '0deg', rotateY: '0deg'}, {scaleX: 1,  duration: 1.6, ease: 'easeIn'} )
				  .fromTo( psyRows[1], {scaleX: 0, opacity: 1, rotate: '90deg',  rotateX: '0deg', rotateY: '0deg'}, {scaleX: 1,   duration: 1.6, ease: 'easeIn'} )

	               .to( psyRows[0], {rotate: '180deg', duration: 1.5, delay: 3})
	               .to( psyRows[1], {rotate: '-90deg', duration: 1.5}, '<')

				   .to( psyRows[0], {rotate: '0deg', duration: 1.5, delay: 3})
				   .to( psyRows[1], {rotate: '90deg', duration: 1.5}, '<')

				  .fromTo( psyCrest, {rotate: '0deg'}, {rotate: '-360deg', duration: 1.5, delay: 3, ease: 'easeOut'})
				  .to( psyDisk,   {rotate: '-1080deg', duration: 3,   ease: 'easeInOut'},  '>-1.5')
				  .to( psyDisk,   {rotate: '0deg', duration: 0},  '>3')

				drRef.current.push(tl);
				await tl
				drRef.current.pop()
			 }
		},

		createDiskDragger = () =>
		{
		 	drRef.current = [ gsap.fromTo(psyDisk, {rotate: '0deg'}, {rotate: 360*10, duration: 3*10, repeat: -1, ease: 'linear'}) ]
		//	drRef.current = []

			const

				ress = (l, f = true) => {
					l.timeScale(l.timeScale() || 0.001).resume()
					if(l.parent) ress(l.parent, false);

					if(f)  drRef.current = [ gsap.fromTo(psyDisk, {rotate: '0deg'}, {rotate: 360*10, duration: 3*10, repeat: -1, ease: 'linear'}) ]

				},

				pass = (l) => {
					if(l.parent) pass(l.parent);
					l.pause()
				}


			Draggable.create(psyDisk, {
				type: "rotation",
				inertia: true,
				//velocity: 500

			 	//onDragEnd: e => drRef.current.forEach( p => p => ress(p) )
			});



			psyDisk.addEventListener('pointerdown',  e =>
			{

				drRef.current.forEach( p => pass(p) )

				window.addEventListener('pointerup', e => drRef.current.forEach( p => ress(p) ), {once: true})

			})



		}


	useEffect(() =>
	{
		gsap.to(flyRef.current,  {opacity: 1, scale: 1, duration: 3, ease: 'linear'})

		queryEls()

		gsap.to(centralD, {rotate: -360*10, duration: 3*10, repeat: -1, ease: 'linear'})

		createDiskDragger()
	 	loop()

//		console.log(window.gsap = gsap, window.psyRows = psyRows, window.centralD = centralD,  window.psyDisk = psyDisk, window.tl  = gsap.timeline() )

	}, []);


	return (
<>


	{/*<div className={'absolute left-4 top-14 z-[39] w-8 h-8 drop-shadow-lg opacity-50 border border-neutral-300/50 rounded-full'}>*/}
	{/*	<img src={audioOn ? '/speaker-on.png' : '/speaker-off.png'} className={'z-30 p-1.5 abs-full cursor-pointer '}*/}
	{/*	     onClick={e => {*/}
	{/*			 setAduioOn(!audioOn)*/}
 	{/*		     e.preventDefault()*/}
	{/*		     e.nativeEvent.preventDefault()*/}
	{/*		     e.nativeEvent.stopImmediatePropagation()*/}
	{/*		 }}*/}
	{/*	/>*/}
	{/*</div>*/}


	<figure ref={flyRef}  className={'huemana z-30 abs-center !top-[50dvh] w-full md:max-w-screen-md h-auto mx-auto aspect-square opacity-0 scale-[0] p-2 md:p-0 fixed select-none cursor-grab  '}>


			<div className={'relative w-full h-fit '} >

				<img src={'/disco_b.png'} alt={'rs'} className={'w-full h-auto opacity-0'}/>


				{/*<PsyText  className={'z-50 ddt abs-center opacity-1 w-[65%] text-4xl sm:text-5xl lg:text-[52px]'} />*/}

				{/*<Link href={'/duckedelic'}  className={'block w-full h-full  h-auto p-4'}>*/}

					<DDDisk >
						{/*<PsyText  className={'z-50 ddt abs-center opacity-1 w-[65%] text-4xl sm:text-5xl lg:text-[52px]'} />*/}

						<DDCrest className={'z-30 psy-crest ddt abs-full mx-auto max-w-[65%] text-4xl sm:text-5xl lg:text-[52px]'}/>

					</DDDisk>



				<DjDropsGsap/>

			{/*</Link>*/}

			</div>

			{/*<button className={`fixed left-1 top-2 ${!isNotPlay ? 'bg-red-900' : 'bg-emerald-400'} border block`} onClick={e => {*/}
			{/*	alert('set !isNotPlay')*/}
			{/*	setIsNotPlay(!isNotPlay)*/}
			{/*}}>OnF</button>*/}




	</figure>






	{/*<play*/}
	{/*	className={'fixed left-8 bottom-8 z-[9991] mix-blend-difference'}*/}
	{/*	controls ref={muzRef}*/}
	{/*	src="https://trancescript.ddns.net/audio/opdakop.mp3"*/}
	{/*	playsInline={true} autoPlay={true}*/}
	{/*/>*/}

</>
	)
}