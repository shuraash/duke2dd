"use client"

import {useEffect, useRef} from "react";

import {wrapCycle, formatTS} from "../util";
import VJLoops from "./psyBG.vjloops.json";

import TeleBoxPortal, {useTeleBoxPortal} from "./teleBoxPortal";

import gsap from 'gsap';

const

	aniPresetDefDuration = 2.345,

	aniPresetDefState = { opacity: 0.75, scale: 1, rotate: '0deg', x: 0, y: 0, z: 0},

	aniPresets = {
		fade: { opacity: 0 },
		ZoomOut: { scale: 0, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .7}} },
		zoomIn: { scale: 3, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .7}} },
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
				    <span>{clip.value.replace('vj.loops/', '').replace('.mp4', '')}</span>
				</li>
				<li className="m-1.5 text-pink-50 flex items-center gap-x-3">
				    <span className={'text-orange-500'}>-{formatTS(vid.duration - vid.currentTime)} </span>
					<span className={'font-light'}>{formatTS(vid.duration)} cft:({formatTS(clip.cfTime)}) | {formatTS(vid.currentTime)}</span>
				</li>

		</ul>


export default function PsyBG({vjLoops = VJLoops.map(c => `/vj.loops/${c}`), onInfoUpdate, className})
{
	const

		tbpRef= useRef(),
		myRef  = useRef(),
		videoA  = useRef(),
 		videoB  = useRef(),

		infoUpHandler =	useTeleBoxPortal(tbpRef),

		// fmpCyclerIn =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k)), 1),
		// fmpCyclerOut =  arrRandomCycler(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k)), 1),
		fmpCyclerIn =  wrapCycle(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k))),
		fmpCyclerOut =  wrapCycle(aniPresetsKeys.filter(k => ['fade','zoomIn','zoomOut' ].includes(k))),

		//vjLoopsCycler = arrRandomCycler(vjLoops, 7),
		vjLoopsCycler = wrapCycle(gsap.utils.shuffle(vjLoops)),




		nextClip = () => ({value: vjLoopsCycler.next().value, preset: {in: fmpCyclerIn.next().value, out: fmpCyclerOut.next().value} }),

		setNext = (vid) => {
			vid._clip = nextClip()
			vid._clip.cfTime = vid._clip.preset?.out?.transition?.duration ? vid._clip.preset.out.transition.duration : aniPresetDefDuration
			vid.src = vid._clip .value;
		},

		videoEnter = (vid) => {
			vid.play()
			gsap.fromTo(vid,
				{...aniPresetDefState, ...aniPresets[vid._clip.preset.in],  transition: {}},
				{duration: aniPresetDefDuration, ...aniPresetDefState, transition: aniPresets[vid._clip.preset.in]?.transition}
			)
		},


		videoExit = async (vid) => {
			await gsap.to(vid, {duration: aniPresetDefDuration, ... aniPresets[vid._clip.preset.out]})
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
 		videoA.current.addEventListener('canplaythrough', e => {
		    videoA.current.play()
	    } , {once: true});

		setNext(videoA.current)
		setNext(videoB.current)

		// ios troubles
		setTimeout( () =>  videoA.current.paused ? videoA.current.play() : null, 1000 )
		setTimeout( () =>  videoA.current.paused ? videoA.current.play() : null, 3000 )
		setTimeout( () =>  videoA.current.paused ? videoA.current.play() : null, 5000 )
		setTimeout( () =>  videoA.current.paused ? videoA.current.play() : null, 6500 )

	    gsap.to(myRef.current, {opacity: 1, duration: 3.33})


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

	return <div className={'psy-bg bg-black opacity-0 z-[-1] pointer-events-none ' + className} ref={myRef}>

			<TeleBoxPortal tbpRef={tbpRef} />

			<video
				ref={videoA}
				key={`VidA`}
				className={' abs-full object-cover opacity-75'}
				muted={true}
				loop={true}
				playsInline={true}
				onTimeUpdate={e => upVideoTime( e.target )}
			/>

			<video
				ref={videoB}
				key={`VidB`}
				className={'  abs-full object-cover  opacity-0'}
				muted={true}
				loop={true}
				playsInline={true}
				onTimeUpdate={e => upVideoTime( e.target )}
			/>

	</div>

}
