"use client"


import {useRef} from "react";
import DDDisk from "@src/components/disk";
import DjDrops from "@src/components/djDrops.gsap";


export default function TESTPG() {

	const ddRef = useRef()



	return (

			<figure   className={'abs-center w-full md:max-w-screen-md h-auto mx-auto aspect-square p-2 md:p-0 !fixed '}>
				<div className={'relative w-full h-full border'}>

					<DDDisk className={'e-rotatoid  '}/>


					<DjDrops/>

				</div>
			</figure>

	)

}


