"use client"

import {useEffect, useState} from "react";

const telportFuncs = new Map();

export const useTeleBoxPortal = (ref) =>  (...params) => telportFuncs.has(ref.current) ? telportFuncs.get(ref.current)(...params) : null

export const TeleBoxPortal = ({className, tbpRef})  => {

	const

		[jsx, setJsx] = useState(null),

		updateJsx = (jsx) => {
			setJsx(jsx);
		}

	useEffect(()=> {
			if(tbpRef)
			{
				telportFuncs.set(tbpRef.current, updateJsx)

				return () => telportFuncs.delete(tbpRef.current, updateJsx)
			}

	}, [])


	return jsx
}

export default TeleBoxPortal;

// const TeleBoxPortal = forwardRef(({className, portal}, ref) => {
//
// 	const
//
// 		[jsx, setjsx] = useState(null),
//
// 		updatejsx = (d) => {
// 			setjsx({...d});
// 		}
//
// 	useImperativeHandle(ref, () => ({updatejsx}), [ref]);
//
// 	if(jsx) return (
//
// 				<div className={`py-3 flex items-center w-full justify-center gap-x-10 bg-brand-bg  `}>
//
//
// 				</div>
// 	)
// })