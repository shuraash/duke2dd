// "use client"

import {djs} from "@src/components/djs";

export default async function Djs({params})
{

	const
		dj = djs.find(d => d[0].replaceAll(' ', '').replace("M️♥Love","MLove").toLowerCase() == params.dj.toLowerCase());

	return  (

		<div className={'p10 text-xl'}>

			<div>{params.dj}</div>

			{dj && (<div>
				<div>{dj[0]}</div>
				<div>{dj[1]}</div>
				<div>{dj[2]}</div>
			</div>)
			}

		</div>



	)

}