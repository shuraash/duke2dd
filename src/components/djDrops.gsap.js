"use client"

import {useEffect, useRef, useState} from "react";

import {arrRandomCycler, randomInt} from "@src/util";
import {psyColors, psyShadows} from "@src/components/psyColors";
import {twMerge} from "tailwind-merge";

import gsap from 'gsap';
import {Flip} from "gsap/Flip";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, Flip);

const

	ddDjs =  arrRandomCycler([
		['Shiva ASH', 'LU'],
		['Psykorax', 'LU'],
		['Minispicer', 'BE'],
		['MLove', 'BE'],
		['Anormic', 'LU'],
		['GriSha', 'UK'],
		['Random DJ 1', 'LU'],
		['Random DJ 2', 'DE'],
		['Random DJ 3', 'LU'],
		['Random DJ 4', 'FR'],
		['Random DJ 5', 'EE'],
	], 5),

	ddDJColor = arrRandomCycler(psyColors, 5)    ,

	djPoses = ['dj-t-l', 'dj-t-r', 'dj-b-l', 'dj-b-r'],

	djPose = arrRandomCycler(djPoses, 2),

	bubblerPics = Array.from({length: 9}, (_, i) => `/bubbles/00${i+1}.png`),

	bubblePic =  arrRandomCycler(bubblerPics, 1),
	// bubblePic =  arrRandomCycler([`/bubbles/002.png`], 1),
	bublerHues =  arrRandomCycler([0, 50, 100, 150, 200, 250, 300], 4),

	pos2av = {
		'dj-t-l': ['2%',  '2%',   '50%', '25%',   '0%',    '0%'],
		'dj-t-r': ['98%', '2%',   '75%', '25%',   '-100%',  '0%'],
		'dj-b-l': ['2%',  '98%',  '50%', '75%',   '0%',    '-100%'],
		'dj-b-r': ['98%', '98%',  '75%', '75%',   '-100%', '-100%']
	},

	shadColors =  arrRandomCycler(psyShadows, 2),

	genShadow = () =>
	{
		let clr = shadColors.next().value

		return `0 0  2px ${clr[0]},
			    0 0  5px ${clr[0]},
			    0 0 10px ${clr[1]},
			    0 0 20px ${clr[2]}`
	},

	// opaShadow = `0 0  2px 00000000,
	// 		    0 0  5px 00000000,
	// 		    0 0 10px 00000000,
	// 		    0 0 20px 00000000`
	opaShadow = `0 0 0px 00000000,
			    0 0 0px 00000000,
			    0 0 0px 00000000,
			    0 0 0px 00000000`,


	aniSeq = (ptr, pos, delay, txt) =>  [
//initial
		[ptr, {opacity: 0, scale: 0, left: '50%', top: '50%',  x: '-50%', y: '-50%', rotate: '0deg'}, {duration: 0} ],
		[txt, {opacity: 1, rotateX: '0deg', rotateY: '0deg'}, {duration: 0}],
//animate
		[ptr, {
					left: pos2av[pos][0], top: pos2av[pos][1],
					x:    pos2av[pos][4], y:   pos2av[pos][5],
					opacity: 1, scale: 1,
					//randomInt(100,125)/100
			},
			{ duration: 3, ease: 'easeIn', delay: delay}
		],

		// [txt, {rotateY: '540deg'}, {duration: 3, at: '<',  ease: 'easeIn'}],

		// [txt, {rotateX: '360deg'}, {duration: 5, ease: 'easeOut', delay: 0.5,}],

		// [ { left: pos2av[pos][2], top: pos2av[pos][3], scale: 10, opacity: 0},
		// 	{duration: 1.5, ease: 'linear', delay: 6}
		// ],

		[ptr, {scale: 1.5}, {duration: 0.75, delay: 1.5, ease: 'easeIn' }],

		[txt, {opacity: 0, rotateY: '360deg'}, {delay: 2, duration: 1.5,  at: '<'}],

		[ptr, {scale: 4, opacity: 0}, {delay: 2.75, duration: 1, ease: 'linear', at: '<'}],

	],

	genDJ = (dj, delay) => ({
		dj: dj,
		delay: delay,
		colors: [ddDJColor.next().value, ddDJColor.next().value],
		bubblePic: bubblePic.next().value,
		bubbleHue: bublerHues.next().value,
		pose: djPose.next().value
		//aniSeq: aniSeq(ptr, djPose.next().value, dj.delay),
	})


export default function DjDropsGsap({className, djCalss, playing})
{
	const

		[isPlay, setIsPlay] = useState(),

		[djData, setDjData] = useState(),

		djRef = useRef(),

		tl = useRef(),

		aniPlay = async () =>
		{
			if(djData)
				await animate( aniSeq(djRef.current, djData.pose, djData.delay, djRef.current.querySelector('.cardad')) )

			setDjData(   genDJ(ddDjs.next().value, djData ? 1 : 7) )
		},

		aniPlayGSAP = async () =>  {

					if(djData)
					{

						const
							q = gsap.utils.selector(djRef)

						tl.current = gsap.timeline()
							.fromTo(djRef.current,
								{
									x: '-50%',
									y: '-50%',
									left: '50%',
									top: '50%',
									opacity: 0,
									scale: 0
								},


								{
										left: pos2av[djData.pose][0],
										top: pos2av[djData.pose][1],
										x: pos2av[djData.pose][4],
										y: pos2av[djData.pose][5],
										opacity: 1,
										scale: 1,
										 ease: "bounce.inOut",
										//ease: "elastic.inOut(0.5,0.5)",
										// ease: "slow(0.3,0.7,false)",
										delay: djData.delay,
										duration: 9,
									}
							)
						.fromTo(djRef.current.querySelector('.cardad'), {rotateX: 0, rotate: 0}, {rotate: 1080, duration: 6}, '>-6')
						.to(djRef.current.querySelector('.cardad'), {rotateX: 1080, duration: 9}, '<')

						.to(djRef.current, {scale: 9, duration: 2, ease:  "power1.out",
							x: '-50%',
							y: '-50%',
							left: '50%',
							top: '50%',})

						.to(djRef.current, {opacity: 0, duration: 1, ease: 'linear'}, '<')
						.to(djRef.current, {opacity: 0, duration: 1, ease: 'linear', delay: 0.5})


						await tl.current;

						setDjData(   genDJ(ddDjs.next().value, 1) )


//						  .set('.cardad', {
// 							  opacity: 1,
// 							  rotateX: '0deg',
// 							  rotateY: '0deg'
// 						  })

						// tl.current = Flip.from(bstate,
						// 		{
						// 	      paused: false,
						// 		  onComplete: e => { Flip.to(bstate, {duration: 0}); setDjData(   genDJ(ddDjs.next().value, djData ? 1 : 1) ) },
						// 		  left: pos2av[djData.pose][0],
						// 		  top: pos2av[djData.pose][1],
						// 		  x: pos2av[djData.pose][4],
						// 		  y: pos2av[djData.pose][5],
						// 		  opacity: 1,
						// 		  scale: 1,
						// 		 // ease: "bounce.inOut",
						// 		  // ease: "elastic.inOut(0.5,0.5)",
						// 		  ease: "slow(0.3,0.7,false)",
						// 		  delay: djData.delay,
						// 		  duration: 3,
						// 	   })



						// .to(djRef.current, {scale: 1.3,
			            //     // ease: "power2.out",
			            //      ease: "rough",
			            //      duration: 1.5,
			            //      delay: 1.5
		                //  }, '<2')

                         // .to(djRef.current, {scale: 4, opacity: 0, x: '-50%', y: '-50%', left: '50%', top: '50%',
                         //     ease: "power1.out",
                         //     duration: 1,
                         // }, '<2.75')

                         // .set(djRef.current, {
                         //     opacity: 0,
                         //     scale: 0,
                         //     left: '50%',
                         //     top: '50%',
                         //     x: '-50%',
                         //     y: '-50%',
                         //     rotate: '0deg'
                         // })
						 //
                         // .set('.cardad', {
                         //     opacity: 1,
                         //     rotateX: '0deg',
                         //     rotateY: '0deg'
                         // })



						// 	[ptr, {scale: 1.5}, {duration: 0.75, delay: 1.5, ease: 'easeIn' }],
						//
						// 	[txt, {opacity: 0, rotateY: '360deg'}, {delay: 2, duration: 1.5,  at: '<'}],
						//
						// 	[ptr, {scale: 4, opacity: 0}, {delay: 2.75, duration: 1, ease: 'linear', at: '<'}],
						// // await (new Promise((ok, err) =>
						// {
						// 	tl.current.vars.onComplete(() => ok())
						// 	//	tl.current.play()
						// }))

					}
					else setDjData(   genDJ(ddDjs.next().value, djData ? 1 : 1) )

				}



	useEffect(() =>
	{
		// aniPlay()
		//alert('eff : ' + (djData ? 'YES' : ' fuka initaka '))
		//  if(!djData)
		// 	setDjData(   genDJ(ddDjs.next().value, djData ? 1 : 0) )

		aniPlayGSAP()

		console.log('su ko', window.gsap = gsap, window.djRef = djRef, window.djData = djData)

	}, [djData, isPlay] );

	return (
			<figure
				ref={djRef}
				className={twMerge(`opacity-0 scale-0  dj-card  overflow-hidden absolute font-['Changa']  
					w-fit min-w-[35%] md:min-w-[30%] h-auto aspect-square z-50 rounded-full font-['Changa'] flex items-center justify-center`, className)}
			>

				{djData &&
					<>
						<img alt='bubble' src={djData.bubblePic}
							// style={{animation: `ohuevator ${randomInt(7, 25)/10}s linear infinite ${['','reverse'][randomInt(0,1)]},
							//                     e-rotatoid ${randomInt(80, 100)/10}s linear infinite ${['','reverse'][randomInt(0,1)]} ,
							//                     e-rotatoid-x ${randomInt(20, 40)/10}s ease-in-out infinite ${['alternate','alternate-reverse'][randomInt(0,1)]},
							//                     e-rotatoid-y ${randomInt(20, 40)/10}s ease-in-out infinite ${['alternate','alternate-reverse'][randomInt(0,1)]} `,
							//          animationComposition: 'add'
							// 	}}
							style={{animation: `e-rotatoid ${randomInt(10, 50)/10}s linear infinite ${['','reverse'][randomInt(0,1)]}`,
							    // animationComposition: 'add'
							}}
							 className='djBubbler abs-full opacity-80 '
						/>

						<div className={'px-5 md:px-3 py-1 cardad rounded-xl opacity-1 w-fit h-fit leading-none text-center abs-center'}>
							<div className={twMerge('text-[21px] sm:text-[23px] md:text-[32px]',djCalss)} style={{textShadow: genShadow(), color: djData.colors[0]}}>{djData.dj[0]}</div>
							<div className={'mt-2 text-[16px] sm:text-[18px] md:text-[22px] '} style={{textShadow: "none", color: djData.colors[1]}}>{djData.dj[1]}</div>
						</div>
					</>
				}

			</figure>
	)

}


export {genShadow}