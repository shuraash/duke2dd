import {useEffect, useRef, useState} from "react";
import {IconPlayCircle, IconPlayPause} from "@src/components/psy.icons";
import {formatTS} from "@src/util";


const DDPlayer = ({ className }) =>
{


	const

		ref = useRef(),
		muzRef = useRef(),

		[isExplo, setIsExplo] = useState(),
		[playPos, setPlayPos] = useState(0),

		tlen = 29 + 16*60 + 3600 // '1:16:29'


	useEffect(() => {

		// animate(ref.current, {bottom: 0, opacity: 1}, {duration: 1.2, ease: "easeIn", delay: 1.8})
		//
		// animate(
		// 	[
		// 			[ref.current, {scaleX: 1, scaleY: 1.3}, {duration: 2, ease: "easeOut", delay: 0}],
		// 			[ref.current, {scaleX: 1, scaleY: 1}, {duration: 1, ease: "easeIn", delay: 1}],
		//
		// 	],
		// 	{repeat: Infinity, repeatType: "loop", delay: 7.5, repeatDelay: 7.5}
		// )

		window.addEventListener('click', () => requestAnimationFrame( () =>
			{
				try
				{
					ref.current.querySelector('audio').play()
				}
				catch(e)
				{
					//silence
				}
			}),

			{once: true}
		)

	}, [])


	const


		hPlay = (s) =>
		{
			setIsExplo( s )
		},

		upPTime = () => {

		if(ref.current)
		{

			let
				a = ref.current.querySelector('audio'),
				ct = a.currentTime,
				cp = ct / (a.duration / 100)

			setPlayPos(cp)
		}
	},

	setAPos = (e) => {

		let
			bc = e.target.getBoundingClientRect(),
			dx = e.clientX - bc.x,
			pc = dx/ (bc.width/100),
			a = ref.current.querySelector('audio')

		 a.currentTime = a.duration/100 * pc;

		//setPlayPos( pc > 0 ? pc : 0 )
	}


	return (



	<div ref={ref} className={' fixed w-full bottom-0 h-fit z-30 mix-blend-screen px-5'}>

 		<audio className={'absolute left-[-6789px] h-0 w-0 opacity-0'} ref={muzRef}
	           src="https://trancescript.ddns.net/audio/opdakop.mp3"

	           playsInline={true}
	           autoPlay={true}

	           onPlay={e => hPlay(true)}
	           onPause={e => hPlay(false)}

	           onTimeUpdate={e => upPTime()}

	    />

		{/*/!*<progress className={'h-8 bg-transparent text-orange-500 w-full max-w-screen-sm bottom-1 abs-h-center '} value={13} max={100}/>*!/*/}

		<div className={`h-6 w-full left-0 -bottom-4 opacity-50 fixed ohuevator ${isExplo ? ' aka-player' : '' }`}/>

		<div className={'max-w-screen-sm mx-auto w-full flex h-fit justify-center sm:justify-end'}>

			<div className={' flex justify-normal  items-center  -translate-y-1  w-full max-w-[333px]  h-fit  '}>

			<div className={'w-fit h-fit  z-50  relative cursor-pointer  '}
			     onClick={e => isExplo ?  ref.current.querySelector('audio').pause()  :  ref.current.querySelector('audio').play()  }
			>
				{isExplo
					? <IconPlayPause  className={'h-12 w-12  text-neutral-500  '}/>
					: <IconPlayCircle  className={'h-12 w-12  text-lime-500  '}/>
				}

			</div>

			<div className={'px-2 py-1 h-6 w-full  shrink-1 overflow-hidden cursor-pointer z-50    relative'}

			     onClick={ e => setAPos(e) }
			>
				<div className="w-full h-full bottom-0 bg-neutral-200/20 border rounded-xl mix-blend-screen overflow-hidden">
					<div
						className="h-full bg-lime-500" style={{ width: `${playPos}%` }}
					/>
				</div>
			</div>

			<div className={'text-neutral-200 shrink-0 text-xs font-[Audiowide] space-x-0 w-fit h-fit'}>
				{formatTS(tlen/100*playPos)}/{formatTS(tlen)}
			</div>

		</div>

		</div>


	</div>


	)

}

export default DDPlayer;