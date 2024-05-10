import {useEffect, useRef, useState} from "react";
import {animate} from "framer-motion";


export default function DDDisk({children, className, playing=true})
{

	let
		diskAC, genresAC;

	const
		diskRef = useRef(),

		[isRun, setIsRun] = useState(true),


		start = async () => {

			genresAC = animate([...diskRef.current.querySelectorAll('.ddpicg')].flatMap( (xx, i)=>

						[
							[xx, {opacity: 0.75}, {duration: 1,ease: 'easeIn' , delay: 0}],
							[xx, {opacity: 0}, {duration: 1.5 , ease: 'easeOut', delay: 1}],
							[xx, {opacity: 0}, {duration: 0, ease: 'easeOut', delay: 2.5}],
						]

				),
				{repeat: Infinity, repeatType: "loop", delay: 9, repeatDelay: 0}
			)
		},

		ptMove = (e) => {

			const
				dx =  e.clientX - diskRef._idata.x,
				dy =  e.clientY - diskRef._idata.y,
				md = Math.abs(dy) > diskRef._idata.w/2 ? diskRef._idata.w/2 : dy, // Math.max(Math.abs(dx), Math.abs(dy)),
				r = (diskRef._idata.r + md / (diskRef._idata.w/180))


		//	console.log('draggy!!! ' + r + 'deg' , diskRef._idata)

			diskRef.current.style.transform = ``; //rotate(${r}deg) !important`;
			diskRef.current.style.rotate = r + 'deg';
		},

		ptDown = (e) => {

			diskRef.current.setPointerCapture(e.pointerId)
			diskRef._idata = {
				pid: e.pointerId,
				x: e.clientX,
				y: e.clientY,
				h: diskRef.current.offsetHeigh,
				w: diskRef.current.offsetWidth,
				r: isNaN( parseFloat( getComputedStyle(diskRef.current).getPropertyValue('rotate') ) )
					? '0'
					: parseFloat( getComputedStyle(diskRef.current).getPropertyValue('rotate') )
			}
			diskRef.current.onpointermove = ptMove

			diskRef.current.classList.remove('e-rotatoid');
			diskRef.current.style.transform = ``;
			diskRef.current.style.rotate = diskRef._idata.r + 'deg';

		//	console.log('dragstart  ' , diskRef._idata)
		},

		ptUp = (e) => {
			diskRef.current.style.transform = '';
			diskRef.current.onpointermove = null
			if(diskRef?._idata?.pid)
				diskRef.current.releasePointerCapture(diskRef._idata.pid)
			diskRef.current.classList.add('e-rotatoid');

			diskRef._idata = {}

		//	console.log('drag  stope ')
		}

	useEffect(() =>
	{


		 start()

	}, []);


	return  <div className={' abs-full z-10 ' + className}>


		<div className={'ohuevator-c abs-full z-0'}>

			<div
				ref={diskRef}
				className={'disco abs-full rounded-full  z-10 e-rotatoid' }

				onPointerDown={ptDown}
				onPointerUp={ptUp}

				style={{
					// backgroundImage: 'url(/disk_1_tr80.png)',
					backgroundImage: 'url(/disco_b.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay',
				}}
			>

				<div className={'ddpicg opacity-0 pointer-events-none'}>
					<img
						src={'/greenPsyArc2.png'}
						className={'ddpic opacity-1 abs-h-center top-[5%] w-[47%]  h-auto'}
						alt={'party Psychedelic'}
					/>
					<img
						src={'/greenPsyArc2.png'}
						className={'ddpic opacity-1 abs-h-center bottom-[5%] w-[47%]  h-auto '}
						style={{rotate: '180deg'}}
						alt={'party Psychedelic'}
					/>
				</div>


				<div className={'ddpicg opacity-0 pointer-events-none'}>
					<img
						src={'/greenTekArc2.png'}
						className={'ddpic opacity-1 abs-h-center top-[2%] w-[47%] rotate-[1.0deg] h-auto'}
						alt={'party Techno'}
					/>
					<img
						src={'/greenTekArc2.png'}
						className={'ddpic opacity-1 absolute translate-x-1/2 left-[50%] bottom-[2%] w-[47%] rotate-[-1.0deg] h-auto  '}
						style={{rotate: '180deg'}}
						alt={'party Techno'}
					/>
				</div>

				<div className={'ddpicg opacity-0 pointer-events-none'}>
					<img
						src={'/greenTraArc2.png'}
						className={'ddpic opacity-1 abs-h-center top-[2%] w-[47%] rotate-[1.0deg] h-auto'}
						alt={'party Trance'}
					/>
					<img
						src={'/greenTraArc2.png'}
						className={'ddpic opacity-1 abs-h-center bottom-[2%] w-[47%] rotate-[-1.0deg] h-auto  '}
						style={{rotate: '180deg'}}
						alt={'party Trance'}
					/>
				</div>

			</div>
		</div>

		{children}

	</div>
}