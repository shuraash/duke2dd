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
		}


	useEffect(() =>
	{


	 start()

	}, []);


	return  <div className={'disco abs-full z-10 ' + className}>


		<div className={'ohuevator-c abs-full z-0'}>

			<div
				ref={diskRef}
				className={'abs-full rounded-full  z-0' }

				style={{
					// backgroundImage: 'url(/disk_1_tr80.png)',
					backgroundImage: 'url(/disco_b.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay',
				}}
			>

				<div className={'ddpicg opacity-0'}>
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


				<div className={'ddpicg opacity-0'}>
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

				<div className={'ddpicg opacity-0'}>
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