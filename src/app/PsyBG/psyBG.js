"use client"

import {useEffect, useRef} from "react";
import {animate} from "framer-motion";
import {arrRandomCycler, formatTS} from "src/util";
import VJLoops from "src/components/PsyBG/vjLoops.json";
import TeleBoxPortal, {useTeleBoxPortal} from "src/components/teleBoxPortal";

const

	aniPresetDefDuration = 2.345,

	aniPresetDefState = { opacity: 1, scale: 1, rotate: '0deg', x: 0, y: 0, z: 0},

	aniPresets = {
		fade: { opacity: 0 },
		ZoomOut: { scale: 0, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
		zoomIn: { scale: 3, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
		rotateRight: { rotate: '360deg' },
		rotateLeft: { rotate: '-360deg' },
		slideRight: { x: '100%',  transition: {duration: aniPresetDefDuration *.66}},
		slideLeft: { x: '-100%', transition: {duration: aniPresetDefDuration *.66}},
	},

	aniPresetsKeys = Object.keys(aniPresets),

	InfoPanel = ({vid, clip, className}) => vid && clip &&

		<ul className={`z-10 absolute bottom-4 text-white drop-shadow-lg font-bolder w-fit h-fit text-sm ${className}`}>


				<li className="m-1.5 text-neutral-500">
				    <span>{clip.preset.in} / {clip.preset.out}</span>
				</li>
				<li className="m-1.5  text-sky-200">
				    <span>{clip.value.replace('https://trancescript.ddns.net/video/vjloops/small/', '').replace('.mp4', '')}</span>
				</li>
				<li className="m-1.5 text-pink-50 flex items-center gap-x-3">
				    <span className={'text-orange-500'}>-{formatTS(vid.duration - vid.currentTime)} </span>
					<span className={'font-light'}>{formatTS(vid.duration)} cft:({formatTS(clip.cfTime)}) | {formatTS(vid.currentTime)}</span>
				</li>

		</ul>


export default function PsyBG({vjLoops = VJLoops.map(c => `https://trancescript.ddns.net/video/vjloops/small4ddd/sd/${c}`), onInfoUpdate, className})
{
	const

		tbpRef= useRef(),
		myRef  = useRef(),
		videoA  = useRef(),
 		videoB  = useRef(),

		infoUpHandler =	useTeleBoxPortal(tbpRef),

		fmpCyclerIn =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k)), 1),
		fmpCyclerOut =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k)), 1),

		vjLoopsCycler = arrRandomCycler(vjLoops, 7),

		nextClip = () => ({...vjLoopsCycler.next(), preset: {in: fmpCyclerIn.next().value, out: fmpCyclerOut.next().value} }),

		setNext = (vid) => {
			vid._clip = nextClip()
			vid._clip .cfTime = vid._clip .preset?.out?.transition?.duration || aniPresetDefDuration
			vid.src = vid._clip .value;
		},

		videoEnter = async (vid) => {
			vid.play()

			await animate(vid, {...aniPresetDefState, ...aniPresets[vid._clip.preset.in]}, {duration: 0})
			animate(vid, aniPresetDefState,
				{
							duration: aniPresetDefDuration,
							...aniPresets[vid._clip.preset.in].transition
								? aniPresets[vid._clip.preset.in].transition
								: {}
						}
			)
		},


		videoExit = async (vid) => {
			await animate(vid, aniPresets[vid._clip.preset.out],
				{
					duration: aniPresetDefDuration,
					...(aniPresets[vid._clip.preset.out].transition
							? aniPresets[vid._clip.preset.out].transition
							: {}
						)
				}
			)
			vid.pause()
			setNext(vid)
		},


		crossFade = (from) =>
		{
			if(!from._clip.crossFading)
			{
				// console.log('%cCROSSFADING', "color: green")
				from._clip.crossFading = true;
				videoEnter( from === videoB.current ? videoA.current : videoB.current )
				videoExit(from)
			}
		},

		//vid, clip, vid === videoA.current)
		upVideoTime = (vid) => (onInfoUpdate && onInfoUpdate()) || ((!vid._clip.crossFading && (vid.duration - vid.currentTime) <= vid._clip.cfTime) && crossFade(vid))


	useEffect(() =>
	{
 		videoA.current.addEventListener('canplaythrough', e => videoA.current.play(), {once: true})
		setNext(videoA.current)
		setNext(videoB.current)

	    animate(myRef.current, {opacity: 0.75}, {duration: 3.33})

	}, [])

	// onInfoUpdate = () => (videoA.current && videoB.current && videoA.current._clip && videoB.current._clip)
	//
	// 	? infoUpHandler( <div>
	//
	// 	{/*<InfoPanel vid={videoA.current === vid ? videoA.current : videoB.current} clip={videoA.current === vid ? videoA.current._clip : videoB.current._clip} isA={true} />*/}
	// 	{/*<InfoPanel vid={videoA.current === vid ? videoB.current : videoA.current} clip={videoA.current === vid ? videoB.current._clip : videoA.current._clip} isA={false} />*/}
	//
	// 	<InfoPanel vid={videoA.current} clip={videoA.current._clip} className={`text-left left-2`}/>
	// 	<InfoPanel vid={videoB.current} clip={videoB.current._clip} className={`text-right right-2`}/>
	//
	// 		</div> )
	//
	// 	: null

	return <div className={'psy-bg opacity-0 z-[-1] pointer-events-none ' + className} ref={myRef}>

			<TeleBoxPortal tbpRef={tbpRef} />

			<video
				ref={videoA}
				key={`VidA`}
				className={' abs-full object-cover '}
				muted={true}
				loop={true}
				onTimeUpdate={e => upVideoTime( e.target )}
			/>

			<video
				ref={videoB}
				key={`VidB`}
				className={'  abs-full object-cover  opacity-0'}
				muted={true}
				loop={true}
				onTimeUpdate={e => upVideoTime( e.target )}
			/>

	</div>

}
