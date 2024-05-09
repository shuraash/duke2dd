"use client"

import Link from "next/link";

import DDDisk from "src/components/DD.Flyer/disk";
import PsyText, {PsyTextCrest, PsyTextRow} from "src/components/psyText";
import {animate, motion, useDragControls} from "framer-motion";
import DjDrops from "src/components/dd/djays";
import {useEffect, useRef, useState} from "react";
import {arrRandomCycler, reAss2Absolute, toRect} from "src/util";
import {psyColors} from "src/components/psyColors";


export default function DDFLyear({className})
{
	let psyChars,psyTexts,psyRows,psyCrest,centralD,psyDisk,colorWalk,accColor, aa = false;

	const
		flyRef = useRef(),
	    drugControls = useDragControls(),

		genShadow = (clr) =>
		{

			let
				colorWalkS = arrRandomCycler(psyColors.filter(c => c != accColor), 3),

				a = clr ? clr : (colorWalkS.next().value + 'f0'),
				b = clr ? clr : (colorWalkS.next().value + 'f0'),
				c = clr ? clr : (colorWalkS.next().value + 'f0')

				return ` 0 0 5px ${a},
			      0 0 15px ${c},
			      0 0 20px ${c},
			      0 0 40px ${c},
			      0 0 60px ${a},
			      0 0 10px ${b},
			      0 0 98px ${a}`
		},


		queryEls = () => {
			psyChars = [...flyRef.current.querySelectorAll('span.psy-char')];
			centralD = flyRef.current.querySelector('.central-D')
			psyCrest = flyRef.current.querySelector('.psy-crest')
			psyDisk = flyRef.current.querySelector('.disco')
			psyTexts = [...flyRef.current.querySelectorAll ('.psy-text')];
			psyRows =  [...flyRef.current.querySelectorAll ('.psy-row')];
		},

		init = async () => {

		 	// psyTexts.forEach((t,i) => i % 2 === 0
			//     ? t.style.width = 0
			//     : ( e => {
			// 	        t.style.left = 'unset'
			// 	        t.style.right = 0
			// 	        t.style.width = 0
			//       })(t)
		    // )

		    // await Promise.all( psyRows.map( async (t,i) =>  animate(t, {scaleX: 0.01, rotateX: '90deg'}, {duration: 0}) ) )

			accColor  = psyColors[ Math.round(Math.random() * psyColors.length - 1 ) ]

			colorWalk = arrRandomCycler(psyColors.filter(c => c != accColor), 3);

			((XCol) => [...psyChars.filter((c,i)=>[0,7,8,15].includes(i)), centralD].forEach( cc => cc.style.color = XCol )) ( accColor )

			psyChars.filter((c,i)=>![0,7,8,15].includes(i)).forEach( cc => cc.style.color = colorWalk.next().value )

			// psyCrest.style.opacity = 1;
			//
			// if(!aa) loop()

			// psyDisk.addEventListener()

		},

		[isPlay, setIsPlay] = useState(true),

		loop = async () => {

		//	psyRows =  [...document.querySelectorAll ('.psy-row')];

			do{
				let
					sha0 =  genShadow('#00000000'),
					sha =  genShadow( ),


					allOn = [
						[centralD, {opacity: 1}, {duration: 1.6, ease: 'easeIn'}],
						[centralD, {textShadow: sha}, {duration: 1.6, ease: 'easeIn', }],
						[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn'}],
						[psyRows[0], {textShadow: sha}, {duration: 1.6, delay: 1, ease: 'easeIn', at: '<'}],

						[psyRows[1], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn'}],
						[psyRows[1], {textShadow: sha}, {duration: 1.6, delay: 1, ease: 'easeIn', at: '<'}],
					],

					allOnFast = [
						[centralD, {opacity: 1}, {duration: 0.3, ease: 'easeIn'}],
						[centralD, {textShadow: sha}, {duration: 0.3, ease: 'easeIn', }],
						[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 0.3, ease: 'easeIn'}],
						[psyRows[0], {textShadow: sha}, {duration:0.3, delay: 0.5, ease: 'easeIn', at: '<'}],

						[psyRows[1], {scaleX: 1, rotateX: '0deg'}, {duration: 0.3, ease: 'easeIn'}],
						[psyRows[1], {textShadow: sha}, {duration: 0.3, delay: 0.5, ease: 'easeIn', at: '<'}],
					],

					allInit = [
						[psyRows[0], {scaleX: 0.01, rotateX: '90deg', textShadow: sha0}, {duration: 0}],
						[psyRows[1], {scaleX: 0.01, rotateX: '90deg', textShadow: sha0}, {duration: 0}],
						[centralD, {opacity: 0.01,  textShadow: sha0}, {duration: 0}],
						[psyCrest,   {opacity: 1, rotate: '0deg'}, {duration: 0}],
						[psyDisk,   {rotate: '0deg'}, {duration: 0}],
					],

					backSpin = [
					//	[psyCrest, {rotate: '-360deg'}, {duration: 1.6, delay: 6.6, ease: 'easeInOut'}],
						[psyCrest, {rotate: '-360deg'}, {type: "inertia", duration: 2, delay: 6, ease: 'circInOut', velocity: 80 }],

						[psyDisk, {rotate: '-1080deg'}, {type: "inertia", duration: 3.3,  ease: 'circInOut', at: '-1', velocity: 10 }],
						[psyDisk,   {rotate: '0deg'}, {duration: 0}],
					],

					seqa =  [

							...allInit,

							...allOnFast,

							...backSpin,

							[psyCrest,   {opacity: 0}, {duration: 0.6}],
							// [psyCrest,   {opacity: 0}, {duration: 1.6}],
					]


		//	console.log('suka seqa', window.pizda = seqa);

				await animate(seqa, {delay: aa ? 0.4 : 1, repeatCount: 1})

				aa = true;

				await init();

			 } while(isPlay)

		//	psyCrest.classList.add('glow-1')



//			await alert('suka');

			// await animate([
			// 		// [psyCrest, {opacity: 1}, {duration: 0}]
			// 				[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn', delay: 0.0 }],
			//
			// 		],
			// 	{})


		}


	useEffect(() =>
	{

		queryEls()

		init()

		loop()

		console.log(window.animate = animate, window.toRect = toRect, window.reAss2Absolute = reAss2Absolute, window.psyRows = psyRows, window.loop = loop)

	}, []);


	const

		startDrag = (e) => {

			psyDisk.classList.remove('e-rotatoid');
			animate(psyDisk,   {rotate: '0deg'}, {duration: 0});

			drugControls.start(e, {})
		},

		pauseAni = () => null,
		resumeAni = () => null


	return (
		<motion.div
			ref={flyRef}
			className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto opacity-0'}
			initial={{x: '-50%', y: '-50%', opacity: 0, scale: 1}}
			animate={{opacity: 1, scale: 1, transition: {duration: 1.666}}}
		>


			<div
				// href={'/duckedelic'}
			      className={'origin-top-left abs-center block w-full max-w-full  sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}

			>




					<DDDisk className={'e-rotatoid'}

					       // drag="y"

					>

						<PsyTextCrest className={' opacity-0'} charSize={'40px'}/>
						{/*<PsyTextCrest className={'hidden sm:block opacity-0'} charSize={'50px'}/>*/}


							{/*<ddc className={'psy-char-o z-40 block  origin-top-left w-fit leading-normal text-[50px] h-[50px] font-extrabold  drop-shadow-xl text-orange-500 abs-center w-rotatoid  '}>D</ddc>*/}

						<motion.div className={'abs-full cursor-grab z-50 rounded-full'}
						            // style={{ touchAction: "none" }}
						            dragControls={ drugControls}
						            // dragElastic={0.7}
						            drag={'y'}


						            onPointerDown={startDrag}

						            onDragStart={ e => pauseAni() }

						            onDragEnd={ e => resumeAni() }


						            onDrag={
							            (event, info) =>
							            {
											let ang = (5.5*info.delta.y).toFixed(2) + 'deg';

								            console.log(info.delta.y, ang,  window.info = info)

								            animate(psyDisk, {rotate: (ang)},
									            {duration: 0.1,
										            // type: 'inertia', velocity: 90, bounceStiffness: 600, bounceDamping: 10
												})

							            }
						            }
						/>
					</DDDisk>

				<img
					src={'/soapbubble.png'}
					className={'opacity-0 absolute w-1 h-auto bubble'}
					alt={'party bubble'}
				/>


				{/*<DDDj/>*/}

			</div>

		</motion.div>
	)
}