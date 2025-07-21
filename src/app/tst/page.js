"use client";

import {useRef} from "react";
import DDDisk from "@src/components/disk";
import DJBubble from "@src/components/djBubble";


export default function TESTPG() {

	const ddRef = useRef()



	return (

			<figure   className={'abs-center w-full md:max-w-screen-md h-auto mx-auto aspect-square p-2 md:p-0 !fixed '}>
				<div className={'relative w-full h-full border'}>

					<DDDisk className={'  '}/>


					<DJBubble className={'bubba absolute left-80 top-80 w-28 h-28'} src={'/bubbles/003.png'}

					          onExploStart={e => console.log('Explo start ', window.e1=Date.now())}
					          onExploEnd={e => console.log('Explo end ' , window.e2=Date.now(), e2 - e1)}

					/>

					{/*<DjDrops/>*/}

				</div>
			</figure>

	)

}


