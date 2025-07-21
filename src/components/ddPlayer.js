import {useEffect, useRef, useState} from "react";
import {IconPlayCircle, IconPlayPause} from "@src/components/psy.icons";
import {formatTS} from "@src/util";


const DDPlayer = ({ className, fullh, asrc = '/mp3/opdakop.mp3' } ) =>
{


	const

		ref = useRef(),
		muzRef = useRef(),

		[isExplo, setIsExplo] = useState(),
		[playPos, setPlayPos] = useState(0),
		[tlen, setTlen] = useState(0) //29 + 16*60 + 3600) // '1:16:29'

	const


		hPlay = (s) =>
		{
			setTlen( muzRef.current?.duration )

 			setIsExplo(s)
		},

		upPTime = () => {

			if(muzRef.current)
			{

				let
					a = muzRef.current,
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
			a = muzRef.current // ref.current.querySelector('play')

		 a.currentTime = a.duration/100 * pc;

		//setPlayPos( pc > 0 ? pc : 0 )
	}


	const ponoff = (e) => {

		if(e.target.closest('.sukoposer')) return

		try
		{
			let padla =  muzRef.current.paused

			console.log(`do play , now is ${Boolean(padla)}`)

			if(padla)
			{
				muzRef.current.play()
			}
			else
			{
				muzRef.current.pause()
			}

			//hPlay(!isExplo, fullh) // isExplo ?  ref.current.querySelector('play').pause()  :  ref.current.querySelector('play').play()
		}
		catch(e)
		{
			//silence
		}
	}


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

		window.addEventListener('click', e => ponoff(e),  {once: !fullh})

		//setTimeout( e => document.querySelector('div').click(), 666)

		return  fullh ? window.removeEventListener('click', ponoff) : null


	}, [])



	return (

<>

			<div ref={ref} className={' fixed w-full left-0 bottom-0 h-[40px] z-30 mix-blend-screen px-5  '}>

		        <audio className={'absolute left-[-6789px] h-0 w-0 opacity-0'} ref={muzRef}
			           src={asrc}

			           playsInline={true}
			           autoPlay={true}

			           // muted={true}

			           onPlay={e => hPlay(true)}
			           onPause={e => hPlay(false)}

			           onTimeUpdate={e => upPTime()}

		               onCanPlay={ e => setTlen( muzRef.current?.duration )}

		               preload={'auto'}

			    />

				{/*/!*<progress className={'h-8 bg-transparent text-orange-500 w-full max-w-screen-sm bottom-1 abs-h-center '} value={13} max={100}/>*!/*/}

				<div className={`h-[127px] w-full left-0 -bottom-4 opacity-70 fixed ohuevator ${isExplo ? ' aka-player' : '' }`}/>

				<div className={'max-w-screen-2xl mx-auto w-full h-fit relative pb-2'}>

					<div className={'absolute abs-h-center left-0 bottom-0 flex justify-normal items-center  -translate-y-1  h-fit  '}>

							<div className={'w-fit h-fit  z-50  relative cursor-pointer  '}
							     onClick={e => !fullh
								     ? ponoff(e) //isExplo ?  ref.current.querySelector('play').pause()  :  ref.current.querySelector('play').play()
									 : null
								}
							>
								{isExplo
									? <IconPlayPause  className={'h-12 w-12  text-neutral-500  '}/>
									: <IconPlayCircle  className={'h-12 w-12  text-lime-500  '}/>
								}

							</div>


							<div className={'text-neutral-200 shrink-0 text-xs font-[Audiowide] space-x-0 w-fit h-fit'}>
								{formatTS(tlen/100*playPos)}/{formatTS(tlen)}
							</div>

					</div>

				</div>

				<div className={'sukoposer px-2 py-1 h-6 w-full absolute left-0  bottom-1   shrink-1 overflow-hidden cursor-pointer z-50 relative'}

				     onClick={ e => setAPos(e) }
				>
					<div className="w-full h-full bg-neutral-200/20 border rounded-xl mix-blend-screen ">
						<div
							className="h-full bg-lime-500" style={{ width: `${playPos}%` }}
						/>
					</div>
				</div>


			</div>




			{/*<div className={`fixed inset-0 left-0 z-50 ${fullh ?  'top-0 h-full ' : 'bottom-0 h-fit'}`}*/}
			{/*     onClick={e => isExplo ?  ref.current.querySelector('play').pause()  :  ref.current.querySelector('play').play()  }*/}
			{/*>*/}
			{/*	test*/}
			{/*</div>*/}



</>

	)

}

export default DDPlayer;