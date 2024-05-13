import {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";

export default function DDDisk({children, className, playing=true})
{

	let
		diskAC, genresAC;

	const
		diskRef = useRef(),

		[isRun, setIsRun] = useState(true),


		start = async () => {

			genresAC = gsap.timeline({repeat: -1, delay: 4.4, repeatDelay: 0, });

			diskRef.current.querySelectorAll('.ddpicg').forEach(
				xx => genresAC
					.fromTo(xx, {opacity: 0}, {opacity: 0.75, duration: 1, ease: 'power3.in' , delay: 2.5})
					.to(xx, {opacity: 0, duration: 1.5 , ease: 'easeOut', delay: 1})
			)
		}

	useEffect(() =>
	{
		 start()

	}, []);


	return  <div ref={diskRef} className={'disco e-rotatoid111 abs-full z-30 overscroll-contain  ' + className}>


		<div className={'ohuevator abs-full z-20'}>

			<div

				className={' abs-full rounded-full  z-10 ' }

				style={{
					// backgroundImage: 'url(/disk_1_tr80.png)',
					backgroundImage: 'url(/disco_b.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundBlendMode: 'overlay',
				}}
			>

				<div className={'ddpicg opacity-0  '}>
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