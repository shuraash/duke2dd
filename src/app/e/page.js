"use client"

import {useEffect, useRef} from "react";
import {useDragControls, motion, animate} from "framer-motion";

export default function Experiments() {

	const
		ref = useRef(),
		cref = useRef(),

		iCopy = useRef( ),

		gg = useRef({}),

	// const
	// isa = {
	// 	ow: ref.current.offseWidth,
	// 	oh: ref.current.offsetHeight,
	//
	// 	prs: []
	// }

		cvCpImg = (src,dst, w,h, cnt = 10) => {
			for(let x = 0; x < cnt; x++)
				for(let y = 0; y < cnt; y++)
				{
					const
						sx= x,
						sy=y,
						sw=iCopy.width/cnt,
						sh=iCopy.height/cnt,
						dx=sx * w/iCopy.width,
						dy=sy * h/iCopy.height;

					dst.drawImage(src, sx, sy, sw, sh, dx, dy, sw, sh)
				}
		},

		drugCtrls= useDragControls(),


		dragoA = () => {

			// var proxy = document.createElement("div");
			// Draggable.create(proxy, {
			// 	trigger: '#wheel',
			// 	type: "x",
			// 	onDrag(e) {
			// 		gsap.set('#wheel', {rotation: this.x / maxDistance * 180})
			// 	}
			// })

			//ref.current.addEventListener('onDrag', e => console.log('draggy!!! ', e))

		},

		dragStart = (e) => {

			const {clientX, clientY} = e;

			console.log('draggy start ', e)

			gg.current = {
				aX: e.clientX,
				aY: e.clientY,
				aR: !isNaN(parseFloat( window.getComputedStyle( ref.current ).rotate))
					? window.getComputedStyle( ref.current ).rotate
					: '0deg',
				aH: ref.current.offsetHeight
			}

		},

		dragOn = (e) => {

		const su = (parseFloat(gg.current.aR) + (e.clientY - gg.current.aY) / (gg.current.aH / 360)) + 'deg'

		console.log('draggy!!! ' + su , gg)

  			// animate(ref.current, {rotate: su})

			ref.current.style.rotate = su

		}


		useEffect( () => {

			// if(!iCopy.current)
			// {
			// 	const ups = () => {
			// 		iCopy.current = document.createElement('canvas')
			// 		iCopy.current.width = ref.current.offsetWidth
			// 		iCopy.current.height = ref.current.offseHeight
			// 		cvCpImg(ref.current, iCopy.current.getContext("2d"), iCopy.current.width, iCopy.current.height)
			// 	}
			//
			// 	if(ref.current.complete)
			// 		ups()
			// 	else
			// 		ref.current.addEventListener("load", (e) => ups() );
			// }
			//
			// // if(iCopy.current)
			// // 	cvCpImg(iCopy.current.getContext("2d"), cref.current.getContext("2d"), cref.current.offsetWidth, cref.current.offseHeight)

			dragoA()

		 //	console.log(window.ic = iCopy.current, window.piz = () => cvCpImg(ref.current, iCopy.current.getContext("2d"), iCopy.current .width, iCopy.current .height) )


		}, [])

	return (
		<>

		<div className={'fixed w-full h-full inset-0 details-bg z-[-1] opacity-30'}/>

		<div className={'mt-[100px] w-full max-w-screen-md mx-auto px-4 sm:px-0 py-10 rounded-xl border bg-neutral-600/50 text-center relative min-h-[888px]'}>

			<button onClick={e => cvCpImg(ref.current, cref.current.getContext("2d"), cref.current.offsetWidth, cref.current.offseHeight)}>CLCC!@!</button>


<img ref={ref} src={'/bubbles/007.png'} alt = 'x' className={'absolute left-10 top-10 w-64 h-64'}

onPointerDown={e => drugCtrls.start(e)}

/>
	<motion.div className={'absolute left-10 top-10 w-64 h-64'}
		dragControls={drugCtrls}
		drag
		onDragStart={ e => dragStart(e) }
		onDrag={ e => dragOn(e) }

	/>


{/*<canvas ref={cref}  className={'absolute left-80 top-80 w-64 h-64'}/>*/}

		</div>

		</>
	)

}