"use client"

import {djs} from "@src/components/djs";
import {PsycoTexto, PsycoTitlo} from "@src/components/psyTexts";
import {useEffect, useRef} from "react";

export default  function Djs({params})
{

	const
		dj = djs.find(d => d[0].replaceAll(' ', '').replace("M️♥Love","MLove").toLowerCase() == params.dj.toLowerCase()),
		r = useRef()

	useEffect(()=>{

		r.current.classList.add('fade-in')

	}, [])

	return  (

		<div ref={r} className={'opacity-0 pt-8 pb-6 mx-auto w-full max-w-screen-sm px-5'}>


			{dj && <div className={'border rounded-xl w-full h-fit px-4 py-8 text-base text-neutral-100'}>


				<div className={'grid items-center justify-center justify-items-center w-full mb-2'}>
					<PsycoTexto className={'w-fit'}><PsycoTitlo text={dj[0]} className={'text-2xl text-center'}/></PsycoTexto>
					<div className={'text-sm text-neutral-300 text-center py-0.5'}>{dj[1]}</div>
				</div>

				<div className={'grid grid-cols-[auto] justify-items-center justify-center items-center w-full h-fit relative'}>

					<img src={'/djs/'+params.dj+'.jpg'} className={'w-3/5 shrink-0 h-auto p-0.5 border rounded-full overflow-x-hidden object-cover'}/>

					<div className={'mt-2 w-full p-2 text-base shrink-0'}>
						{dj[2] ? dj[2] : <>

							<p>Some description text</p>
							<p>Some description text</p>
							<p>Some description text</p>
							<p>Some description text</p>

						</>}
					</div>

				</div>

			</div>}

		</div>



	)

}