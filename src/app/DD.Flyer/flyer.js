"use client"

import {DDCrest} from "src/components/psyText";
import {animate} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {arrRandomCycler} from "src/util";
import {psyColors, psyShadows} from "src/components/psyColors";
import DDDisk from "src/components/DD.Flyer/disk";
import DjDrops from "src/components/dd/djays";

let isFirst = true

export default function DDFLyear({className})
{
	let psyChars,psyLabs,psyRows,psyCrest,centralD,psyDisk,colorWalk,accColor, ddt, psyDDChars, psyRRChars;

	const
		flyRef = useRef(),

		// [isPlaying, setIsPlaying] = useState(true),

		queryEls = () => {

			psyChars = [...flyRef.current.querySelectorAll('span.psy-char')];

			centralD = flyRef.current.querySelector('.central-D')

			psyDDChars = psyChars.filter((c,i) => [0,7,8,15].includes(i) || c === centralD)
			psyRRChars = psyChars.filter((c,i) => !([0,7,8,15].includes(i) || c === centralD))

			psyCrest = flyRef.current.querySelector('.psy-crest')
			
			psyDisk = flyRef.current.querySelector('.disco')
			ddt = flyRef.current.querySelector('.ddt')
			
			psyLabs = [...flyRef.current.querySelectorAll ('.psy-titlo')];
			psyRows =  [...flyRef.current.querySelectorAll ('.psy-row')];

			ddt.style.textShadow = genShadow()
		},

		dColorW = arrRandomCycler(psyColors, 5),

		init = () => {

			accColor  = dColorW.next().value,

			colorWalk = arrRandomCycler(psyColors.filter(c => c != accColor), 5);

			// let fs = parseFloat( getComputedStyle(psyCrest).getPropertyValue('font-size'))

	 	//	psyChars.forEach( (c,i) => c.style.color = psyDDChars.includes(c) ? accColor :  colorWalk.next().value )

	//		centralD.style.color = accColor;

		},

		[isNotPlay, setIsNotPlay] = useState(),
		[seqA, setSeqA] = useState(),

		scc = arrRandomCycler(psyShadows, 3),


		genShadow = () =>
		{
			let clr = scc.next().value;

			return `0 0 3px ${clr[0]},
			
			      0 0 15px ${clr[0]},
			      0 0 13px ${clr[1]},			
			      0 0 10px ${clr[2]},
			      
			      0 0 1px #000`

			//
			//    0 0 40px ${clr[1]}
			//
			//      0 0 60px ${clr[1]}
			//
			//		      0 0 98px ${clr[1]}



			//.replaceAll('\t', '').replaceAll('\n','').replaceAll('  ',' ')
		},

		loop = async () =>
		{
			//psyDisk.classList.toggle('e-rotatoid', !isNotPlay);

			if(!isNotPlay)
			{

				await animate([
					[flyRef.current,
						{
							opacity: 0,
							scale: 0.1
						},
						{duration: 0}],

					[flyRef.current,
						{
							opacity: 1,
							scale: 1
						},
						{
							duration: 3,
							ease: 'linear'
						}
					],

					[flyRef.current.querySelector('.btn-det'),
						{
							opacity: 1,
						},
						{
							duration: 0.7,
							at: '-0.3'
						}
					]
					// [psyDisk, {rotate: '360deg'}, {at: '<'}],
				])


				while (!isNotPlay)
				{
					let
						// //sha0 =  genShadow('#00000000'),
						// sha =  ` 0 0 5px #ffa500,
						//           0 0 15px #ffa500,
						//           0 0 20px #ffa500,
						//           0 0 40px #ffa500,
						//           0 0 60px #ff0000,
						//           0 0 10px #ff8d00,
						//           0 0 98px #ff0000`,
						//
						//
						// // sha =  genShadow(  ),
						// sha0 =  ` 0 0 5px #ffa50000,
						//           0 0 15px #ffa50000,
						//           0 0 20px #ffa50000,
						//           0 0 40px #ffa50000,
						//           0 0 60px #ff000000,
						//           0 0 10px #ff8d0000,
						//           0 0 98px #ff000000`,
						//
						// sha0 = 'inherit',
						// sha = 'inherit',
						//
						//
						// allOnFast = [
						// 	[centralD, {opacity: 1, scale: 1}, {duration: 0.3, ease: 'easeIn'}],
						// 	// [centralD, {textShadow: sha}, {duration: 0.3, ease: 'easeIn', }],
						//
						// 	[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 0.3, ease: 'easeIn'}],
						// 	// [psyRows[0], {textShadow: sha}, {duration:0.3, delay: 0.5, ease: 'easeIn', at: '<'}],
						//
						// 	[psyRows[1], {scaleX: 1, rotateX: '0deg'}, {duration: 0.3, ease: 'easeIn'}],
						// 	// [psyRows[1], {textShadow: sha}, {duration: 0.3, delay: 0.5, ease: 'easeIn', at: '<'}],
						// ],
						//


						allInit = [
							[psyRows[0], {scaleX: 0.01, rotateX: '0deg', rotateY: '0deg'}, {duration: 0}],
							[psyRows[1], {scaleX: 0.01, rotateX: '0deg', rotateY: '0deg'}, {duration: 0}],

							// transformOrigin: '100% 0%',  scale: 0.1,
							[centralD, {opacity: 0.01,  rotate: '0deg', scale: 0.1}, {duration: 0}],

						//	, rotate: '0deg'

							[psyCrest,   {opacity: 1, rotate: '0deg'}, {duration: 0}],

							// [psyCrest,   {opacity: 1, rotate: '0deg', textShadow: genShadow()}, {duration: 0}],
							 [psyDisk,   {rotate: '0deg'}, {duration: 0}],
						],

						allOn = [
							[centralD, {opacity: 1, scale: 1}, {duration: 1.6, ease: 'easeIn'}],
							// [centralD, {textShadow: sha}, {duration: 1.6, ease: 'easeIn', }],

							[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn'}],
							// [psyRows[0], {textShadow: sha}, {duration: 1.6, delay: 1, ease: 'easeIn', at: '<'}],

							[psyRows[1], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn'}],
							// [psyRows[1], {textShadow: sha}, {duration: 1.6, delay: 1, ease: 'easeIn', at: '<'}],
						],


						backSpin = [
						//	[psyCrest, {rotate: '-360deg'}, {duration: 1.6, delay: 6.6, ease: 'easeInOut'}],

						//	[psyCrest, {rotate: '-1080deg'}, { duration: 4.8, delay: 1.2, ease: 'backInOut'}],
						//	[psyDisk, {rotate: '-1440deg'}, { duration: 4.5, at: '-3', ease: 'easeInOut'}],

							[psyCrest, {rotate: '-360deg'}, { duration: 1.6, delay: 4.2, ease: 'easeOut'}],

							[psyDisk, {rotate: '-1260deg'}, { duration: 3.2, at: '-1.2',  ease: 'easeInOut'}],

							//[psyCrest, {rotate: '0deg'}, { duration: 1.5, at: '-0.75', ease: 'backIn'}],

							//[psyCrest, {rotate: '0deg'}, { duration: 1.6, delay: 0, ease: 'backInOut'}],

							//  [psyDisk,   {rotate: '0deg'}, {duration: 0, delay: 0}],

						],

						seqa =  [

								...allInit,

								...allOn,

								//...allOnFast,

							 ...backSpin,

							// [psyRows[0], {  rotateX: '45deg'}, {duration: 2}],
							// [psyRows[1], {  rotateX: '-45deg'}, {duration: 2, at: '<'}],

	                        [psyCrest,   {opacity: 0}, {duration: 2, delay: 0, at:'-1', ease: 'circInOut'}],
							// [psyCrest,   {opacity: 1, rotate: '0deg'}, {duration: 0}],
						]


	//	 	console.log('suka seqa', window.seqa = seqa);

					// ass = animate(seqa, {delay: aa ? 2 : 1, repeatCount: 1})
					// setSeqA(ass)
					//
					// await ass;


					await animate(seqa, {delay: isFirst ? 2 : 1, repeatCount: 1})

					isFirst = false;

					ddt.style.textShadow = genShadow()

					init();

				 }

			}
		}


	useEffect(() =>
	{

	//	alert('is eff im a ' + (!isNotPlay ? 'play' : 'stop'))

		queryEls()

		// if(!isNotPlay && seqA)
		// {
		// 	(async () => {
		// 		await seqA.cancel()
		// 		setSeqA(null)
		// 	})()
		//
		// }

		init()

		loop()


		console.log(window.animate = animate, window.psyRows = psyRows, window.centralD = centralD,  window.psyDisk = psyDisk, window.psyCrest = psyCrest, window.loop = loop)

	}, []);


	return (

		<figure ref={flyRef}  className={' abs-center w-full md:max-w-screen-md h-auto mx-auto aspect-square opacity-0 scale-[0] p-2 md:p-0 !fixed'}>

			<div className={'relative w-full h-fit '} >

				<img src={'/disco_b.png'} alt={'rs'} className={'w-full h-auto opacity-0'}/>


				{/*<PsyText  className={'z-50 ddt abs-center opacity-1 w-[65%] text-4xl sm:text-5xl lg:text-[52px]'} />*/}

				{/*<Link href={'/duckedelic'}  className={'block w-full h-full  h-auto p-4'}>*/}

					<DDDisk playing={!isNotPlay} className={'e-rotatoid  '}>
						{/*<PsyText  className={'z-50 ddt abs-center opacity-1 w-[65%] text-4xl sm:text-5xl lg:text-[52px]'} />*/}

						<DDCrest className={'z-30 psy-crest ddt abs-full mx-auto opacity-0 max-w-[65%] text-4xl sm:text-5xl lg:text-[52px]'}/>

					</DDDisk>



				<DjDrops/>

			{/*</Link>*/}

			</div>

			{/*<button className={`fixed left-1 top-2 ${!isNotPlay ? 'bg-red-900' : 'bg-emerald-400'} border block`} onClick={e => {*/}
			{/*	alert('set !isNotPlay')*/}
			{/*	setIsNotPlay(!isNotPlay)*/}
			{/*}}>OnF</button>*/}




		</figure>
	)
}