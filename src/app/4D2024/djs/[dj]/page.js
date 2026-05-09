"use client";

import {djs} from "@src/components/djs";
import {PsycoTexto, PsycoTitlo} from "@src/components/psyTexts";
import {useEffect, useRef} from "react";
import Link from "next/link";

export default  function Djs({params})
{

	const
		dj = params.dj.toLowerCase() == 'skvo'

			? 	["skvo's-space", "Ko Pha Ngan.TW",
					<Link href={'https://www.instagram.com/skvo.s.space'} target={'_blank'}>
						<PsycoTexto className={'w-fit mt-3 mx-auto'}><PsycoTitlo text='Just design by life(s)!' className={'text-2xl text-center'}/></PsycoTexto>
					</Link>
				]

			: djs.find(d => d[0].replaceAll(' ', '').replace("M️♥Love","MLove").toLowerCase() == params.dj.toLowerCase()),

		r = useRef()

	useEffect(()=>{

	//	alert(JSON.stringify(dj, null, 4))

		r.current.classList.add('fade-in')

	}, [])

	return  (

		<div ref={r} className={'opacity-0 pt-8 pb-6 mx-auto w-full max-w-screen-sm px-5 '}>

			<div className={'fixed w-full h-full inset-0  bg-[url(/cryz.jpeg)] bg-center bg-cover  z-[-1]'}/>


			{dj && <div className={'border rounded-xl w-full h-fit px-4 py-8 text-base text-neutral-100 bg-[#00000088]'}>


				<div className={'grid items-center justify-center justify-items-center w-full mb-2'}>
					<PsycoTexto className={'w-fit'}><PsycoTitlo text={dj[0]} className={'text-2xl text-center'}/></PsycoTexto>
					<div className={'text-sm text-neutral-300 text-center py-0.5'}>{dj[1]}</div>
				</div>

				<div className={'grid grid-cols-[auto] justify-items-center justify-center items-center w-full h-fit relative'}>

					<img src={'/djs/'+params.dj.toLowerCase()+'.jpg'} className={'w-3/5 shrink-0 h-auto p-0.5 border rounded-full overflow-x-hidden object-cover'}/>

					<div className={'mt-2 w-full p-2 text-lg shrink-0'}>
						{dj[2] ? dj[2] : <>

							<PsycoTexto className={'w-fit mt-3 mx-auto'}><PsycoTitlo text='Just bring you a vibe(s)!' className={'text-2xl text-center'}/></PsycoTexto>

						</>}
					</div>

				</div>

			</div>}

		</div>



	)

}