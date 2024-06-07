"use client"

import {useEffect, useRef, useState} from "react";

import {arrRandomCycler, randomInt, wrapCycle} from "@src/util";
import {briNeon, psyColors, djColors, psyShadows} from "@src/components/psyColors";
import {twMerge} from "tailwind-merge";

import gsap from 'gsap';
import {Flip} from "gsap/Flip";
import {useGSAP} from '@gsap/react';
import {PsycoTexto, PsycoTitlo} from "@src/components/psyTexts";
import {LinkIcon} from "@nextui-org/react";
import {IconChevronDown} from "@src/components/psy.icons";

// gsap.registerPlugin(useGSAP, Flip);

const

	djs = [

		['M️♥Love', 'Leuven.BE'],
		['Anormic', 'Mertzig.LU'],
		['GriSha', 'London.UK'],
		['Hyperactive Mode', 'Antwerp.BE'],
		['Mechanical Trip', 'Boevange.LU'],
		['PsyGogh', 'Amsterdam.NL'],
		['Frequency-F', 'Esch-sur-Alzette.LU'],
		['Narah Gaia', 'Amsterdam.NL'],
		['Shiva ASH', 'Esch-sur-Alzette.LU'],
		['Input Malfunction', 'Antwerp.BE'],

	],

	ddDjs =  wrapCycle(djs),

	ddDJColor = wrapCycle(djColors)    ,

	djPoses = ['dj-t-l', 'dj-t-r', 'dj-b-l', 'dj-b-r'],

	djPose = wrapCycle(djPoses ),

	bubblerPics = Array.from({length: 9}, (_, i) => `/bubbles/00${i+1}.png`),

	bubblePic =  wrapCycle(bubblerPics ),
	// bubblePic =  arrRandomCycler([`/bubbles/002.png`], 1),
	bublerHues =  wrapCycle([0, 50, 100, 150, 200, 250, 300] ),

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

	genDJ = (dj, delay) => ({
		djid: dj[0].replaceAll('_','-') + dj[1],
		dj: dj,
		// delay: delay,
		// colors: [ddDJColor.next().value, ddDJColor.next().value, ddDJColor.next().value],
		colors: ((cc) =>  gsap.utils.shuffle(cc) )(ddDJColor.next().value),
		bubblePic: bubblePic.next().value,
		bubbleHue: bublerHues.next().value,
		pose: djPose.next().value
		//aniSeq: aniSeq(ptr, djPose.next().value, dj.delay),
	}),


	djshuffled = gsap.utils.shuffle(djs),

	dwr = wrapCycle( djshuffled )


export default function DjDropsGsap({className, djCalss, playing})
{
	const

		[isPlay, setIsPlay] = useState(true),
		[djData, setDjData] = useState( ),

		upDjData = (d) => {

		//	console.log(`set dj ${d.djid}`)
			setDjData(d)
		},


		 ref = useRef(),
		 tl = useRef(),



	explo = async () => {

		const bubble = ref.current.querySelector('.dj-card');

		tl.current.clear()

		tl.current.to(bubble.querySelector('.cardad'), {opacity: 0, scale: 0,duration: 0.8})
		tl.current.to(bubble, {opacity: 0, scale: 5, duration: 1}, '<')

		await tl.current;

		gsap.globalTimeline.remove( tl.current )
		setDjData(genDJ(dwr.next().value))

	//	bubble.querySelector('.explo-pic')._doExplode()


	},

	expoEnd = () => {

		gsap.globalTimeline.remove( tl.current )
		setDjData(genDJ(dwr.next().value))
	}


	const play = async () => {

		if(djData)
		{
			const bubble = ref.current.querySelector('.dj-card');


			tl.current = gsap.timeline({
				// id: djData.djid
				// 	repeat: -1,
				// 	delay: delay,
				// 	repeatDelay: rdelay
				// 	// ,
				// //	paused: true
				onComplete: () => setDjData(genDJ(dwr.next().value))

			})

			// atl.add('#' + djDatas.djidsd)

			tl.current.fromTo(bubble,
				{
					x: '-50%',
					y: '-50%',
					left: '50%',
					top: '50%',
					opacity: 0,
					scale: 0,
					zIndex: 30
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
					// delay: djData.delay,
					duration: 3,
				},
			)

			tl.current.fromTo(bubble.querySelector('.cardad'), {
					rotateX: 0,
					rotate: 0
				}, {
					rotate: 1080,
					duration: 6
				}, '>-3'
			)

			tl.current.to(bubble.querySelector('.cardad'), {
				rotateX: 1080,
				duration: 9
			}, '<')

			tl.current.to(bubble, {
				scale: 3,
				duration: 1.6,
				ease: "power1.out",
				x: '-50%',
				y: '-50%',
				left: '50%',
				top: '50%',
			}, '>2.5')

			tl.current.to(bubble.querySelector('.cardad'), {
				opacity: 0,
				duration: 1.5
			}, '<')

			tl.current.to(bubble, {
				opacity: 0,
				duration: 1,
				ease: 'linear',
				zIndex: 0
			}, '<')

			// tl.current.to(bubble, {
			// 	opacity: 0,
			// 	duration: 1,
			// 	ease: 'linear',
			// 	delay: 0.1
			// });


			bubble.addEventListener('pointerdown', e => explo(), {once: true})
		}
		else upDjData( genDJ(dwr.next().value) )
	}

	useEffect(() =>
	{
		play()

	}, [djData] );


	return  (
		<div ref={ref}>

			{djData && <DJBubblo
							key={djData.djid }
							atl={tl.current}
							// delay={i * 13 + 1}
							// rdelay={djs.length * 13 + djs.length}
							djData={djData}
							expoEnd={expoEnd}
						/>
			}

		</div>
	)

}


const DJBubblo = ({djData, atl,  className = '', onea, expoEnd, ...rest}) =>

	<figure
		// ref={container}
		id={djData.djid}
		className={twMerge(`z-30 opacity-0 scale-0  dj-card  overflow-visible absolute font-['Changa']  
					w-fit min-w-[45%] md:min-w-[30%] h-auto aspect-square rounded-full  flex items-center justify-center`, className)}

		  // onPointerDown={ e => doExplo() }

		{...rest}
	>
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
					 className='djBubbler2  w-full h-auto opacity-100 '

				     // onExploStart={e => expoStart()}
				     // onExploEnd={e => expoEnd()}
				/>

				<div className={'ohuevator py-1 px-2 cardad rounded-xl opacity-1 w-fit h-fit leading-none text-center abs-center grid justify-center items-center grid-rows-[min-content_min-content]'}>
					{/*textShadow: genShadow(),*/}
					<div
						className=' mb-1 text-[18px] sm:text-[28px] md:text-[32px] w-fit h-fit mx-auto'
						style={{ color: djData.colors[0], borderColor: djData.colors[2]}}
					>
						<div className={'w-fit h-fit ' +  (djData.colors[0] == '#ff00f4ff' || djData.colors[0] == '#fdff2c' ? 'pizda' : 'suko')}>
								{djData.dj[0].includes('♥')

									?  <span>
											{djData.dj[0].split('♥')[0]}
												<sup className={'text-[16px] sm:text-[18px] md:text-[24px]'}>♥</sup>
											{djData.dj[0].split('♥')[1]}
										</span>

									:  <div className={'px-2 max-w-full w-fit grid justify-items-center items-center grid-cols-[auto] '}>
											{djData.dj[0].split(djData.dj[0].length < 13 ? '§' : ' ').map((nn,i) =>
												<span key={nn+i} text={nn} className={'w-fit px-2 whitespace-nowrap'}>{nn}</span>
											)}
										</div>
								}
						</div>
					</div>

					<div
						className={' relative mt-0.5 text-[15px] sm:text-[16px] md:text-[18px] leading-none w-full h-fit text-center  grid gap-y-1  justify-center items-center'}

					     style={{textShadow: "none"}}
					>

						{/*<IconChevronDown className={'w-7 h-7 abs-h-center top-[-18px] text-white '}/>*/}

						<div className={'whitespace-nowrap ' } style={{color: djData.colors[1]}}>
							<PsycoTitlo className={'whitespace-nowrap'} text={djData.dj[1].split('.')[0]}/>
						</div>
						<div className={'text-[13px] sm:text-[15px] md:text-[16px] '} style={{color: djData.colors[2]}}>
							{djData.dj[1].split('.')[1]}
						</div>

					</div>
				</div>
	</figure>


const shuffledDJ = () => gsap.utils.shuffle(djs);


export {genShadow, shuffledDJ}


