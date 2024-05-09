"use client"

import Link from "next/link";

import DDDisk from "src/components/DD.Flyer/disk";
import PsyText, {PsyTextCrest, PsyTextRow} from "src/components/psyText";
import {animate, motion} from "framer-motion";
import DjDrops from "src/components/dd/djays";
import {useEffect, useRef} from "react";
import {arrRandomCycler, reAss2Absolute, toRect} from "src/util";
import {psyColors} from "src/components/psyColors";


export default function DDFLyear({className})
{
	let psyChars,psyTexts,psyRows,psyCrest,centralD,psyDisk,colorWalk,accColor;

	const
		flyRef = useRef(),
		
		queryEls = () => {
			psyChars = [...flyRef.current.querySelectorAll('char')];
			centralD = flyRef.current.querySelector('.central-D')
			psyCrest = flyRef.current.querySelector('.psy-crest')
			psyDisk = flyRef.current.querySelector('.disco')
			psyTexts = [...flyRef.current.querySelectorAll ('.psy-text')];
			psyRows =  [...flyRef.current.querySelectorAll ('.psy-row')];
		},

		init = () => {

		 	// psyTexts.forEach((t,i) => i % 2 === 0
			//     ? t.style.width = 0
			//     : ( e => {
			// 	        t.style.left = 'unset'
			// 	        t.style.right = 0
			// 	        t.style.width = 0
			//       })(t)
		    // )

			psyRows.forEach((t,i) => animate(t, {scaleX: 0.01, rotateX: '90deg'}, {duration: 0}))

			accColor  = psyColors[ Math.round(Math.random() * psyColors.length - 1 ) ]

			colorWalk = arrRandomCycler(psyColors.filter(c => c != accColor), 3);

			((XCol) => [...psyChars.filter((c,i)=>[0,7,8,15].includes(i)), centralD].forEach( cc => cc.style.color = XCol )) ( accColor )

			psyChars.filter((c,i)=>![0,7,8,15].includes(i)).forEach( cc => cc.style.color = colorWalk.next().value )

			psyCrest.style.opacity = 1;



		},

		loop = async () => {


			init()

			psyRows =  [...document.querySelectorAll ('.psy-row')];

			let seqa =  [
				[psyRows[0], {scaleX: 0.01, rotateX: '90deg'}, {duration: 0}]
				[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn'}]
			]

			console.log('suka seqa', window.seqa = seqa, window.psyRows = psyRows);


//			await alert('suka');

			// await animate([
			// 		// [psyCrest, {opacity: 1}, {duration: 0}]
			// 				[psyRows[0], {scaleX: 1, rotateX: '0deg'}, {duration: 1.6, ease: 'easeIn', delay: 0.0 }],
			//
			// 		],
			// 	{})


		}




	// const
	//
	// 	a = colorWalkS.next().value + 'f0',
	// 	b = colorWalkS.next().value + 'f0',
	// 	c = colorWalkS.next().value + 'f0',
	//
	// 	tshadow = ` 0 0 5px ${a},
    //       0 0 15px ${c},
    //       0 0 20px ${c},
    //       0 0 40px ${c},
    //       0 0 60px ${a},
    //       0 0 10px ${b},
    //       0 0 98px ${a}`;

	// const loop = async () => {
	//
	// 	const
	//
	// 		x1 = '-50%', x2 = '150%', y1='-150%', y2='150%',
	//
	//
	// 		showAll = `polygon(${x1} ${y1}, ${x2} ${y1}, ${x2} ${y2}, ${x1} ${y2})`,
	//
	// 		i42r = `polygon(${x1} ${y1}, ${x1} ${y1}, ${x1} ${y2}, ${x1} ${y2})`,
	// 		i42l = `polygon(${x2} ${y1}, ${x2} ${y1}, ${x2} ${y2}, ${x2} ${y2})`,
	//
	// 		// i42r = 'polygon(-15% -150%, -15% -150%, -15% 150%, -15% 150%, -15% -150%)',
	// 		// i42l = 'polygon(115% -150%, 115% -150%, 115% 150%, 115% 150%, 115% -150%)',
	//
	//
	// 		// a = '#ff0000f0',
	// 		// b = '#ff8d00f0',
	// 		// c = '#ffa500f0',
	//
	//
	//
	//
	//
	// 		noshadow = `  0 0 5px #ffa50000,
    //       0 0 15px #ffa50000,
    //       0 0 20px #ffa50000,
    //       0 0 40px #ffa50000,
    //       0 0 60px #ff000000,
    //       0 0 10px #ff8d0000,
    //       0 0 98px #ff0000`
	// 		//
	// 		// tshadow2 = ` 0 0 5px #ffa500,
    //       // 0 0 15px #ffa500,
    //       // 0 0 20px #ffa500,
    //       // 0 0 40px #ffa500,
    //       // 0 0 60px #ff0000,
    //       // 0 0 10px #ff8d00,
    //       // 0 0 98px #ff0000`,
	// 	  //
	// 	  //
	// 		//
	// 		// notshadow = ` 0 0 0px #ffa500,
    //       // 0 0 0px #ffa50000,
    //       // 0 0 0px #ffa50000,
    //       // 0 0 0px #ffa50000,
    //       // 0 0 0px #ff00000000,
    //       // 0 0 0px #ff8d0000,
    //       // 0 0 0px #ff000000`
	// //
	// // 		tshadow = `-0.2rem -0.2rem 1rem #fffffff0,
    // // 0.2rem 0.2rem 1rem #fffffff0,
    // // 0 0 2rem #71ff41f0,
    // // 0 0 4rem #71ff41f0,
    // // 0 0 6rem #71ff41f0,
    // // 0 0 8rem #71ff41f0,
    // // 0 0 10rem #71ff41f0`
	//
	//
	// 	do
	// 	{
	//
	// 	// 	await animate(
	// 	// 		[
	// 	// 				[psycoDD, {opacity: 1}, {duration: 0}],
	// 	//
	// 	// 				... psyChars.map((c, i) => [
	// 	// 							c,
	// 	// 							{
	// 	// 								opacity: 0,
	// 	// 								color: colorWalk.next().value
	// 	// 							},
	// 	// 							{duration: 0}
	// 	// 				]),
	// 	//
	// 	// 				... psyChars.map((c, i) => [c,
	// 	// 					{
	// 	// 						opacity: 1,
	// 	// 						// color: colorWalk.next().value
	// 	// 					},
	// 	// 					{
	// 	// 						duration: 0.35,
	// 	// 						at: "-0.15"
	// 	// 					}
	// 	// 				]),
	// 	//
	// 	// 				[psycoDD, {opacity: 0}, {duration: 6,ease: 'easeOut', delay: 2}]
	// 	// 		],
	// 	//
	// 	// 		{
	// 	// 			type: "tween",
	// 	// 			ease: 'linear'
	// 	// 		}
	// 	// )
	//
	// 		await animate([
	// 				[psyTxt[0], {clipPath: showAll }, {duration: 3, ease: 'easeIn', delay: 0.0 }],
	// 				[psyTxt[1], {clipPath: showAll }, {duration: 3, ease: 'easeIn',  delay: 0.0, at: '<'}],
	//
	// 		])
	//
	// 		psyTxt[0].clipPath = '';
	// 		psyTxt[1].clipPath = '';
	//
	//
	//
	// 		await animate([
	// 			[psyTxt[2], {clipPath: showAll }, {duration: 3, ease: 'easeIn' }],
	// 			[psyTxt[3], {clipPath: showAll }, {duration: 3, ease: 'easeIn',  at: '<'}],
	// 		])
	//
	// 		psyTxt[2].clipPath = '';
	// 		psyTxt[3].clipPath = '';
	//
	// 		await animate([
	//
	// 		[ ddc, { textShadow: tshadow }, {duration: 1, ease: 'easeIn', }],
	// 		[ psycoDD , { textShadow: tshadow }, {duration: 1, ease: 'easeIn', }],
	// 		// [psyTxt[0], { textShadow: tshadow }, {duration: 1, ease: 'easeIn', at: '<'}],
	// 		// [psyTxt[1], { textShadow: tshadow}, {duration: 1, ease: 'easeIn',  at: '<'}],
	// 		// [psyTxt[2], { textShadow: tshadow }, {duration: 1, ease: 'easeIn',  at: '<'}],
	// 		// [psyTxt[3], { textShadow: tshadow}, {duration: 1, ease: 'easeIn',  at: '<'}],
	//
	//  ]);
	//
	//
	// 		await animate([
	//
	//
	//
	// 		[disk, { rotate: '-1080deg'}, {duration: 3, ease: 'circInOut', delay: 3}]
	//
	// 		// [psyTxt[0], { opacity: 0 }, {duration: 1, ease: 'easeIn', at: '<', delay: 3}],
	// 		// [psyTxt[1], { opacity: 0}, {duration: 1, ease: 'easeIn',  at: '<', delay: 3}],
	// 		// [psyTxt[2], { opacity: 0 }, {duration: 1, ease: 'easeIn',  at: '<', delay: 3}],
	// 		// [psyTxt[3], { opacity: 0}, {duration: 1, ease: 'easeIn',  at: '<', delay: 3}],
	// 		//
	// 		// [psyTxt[3], { opacity: 0}, {duration: 1, ease: 'easeIn', delay: 2}],
	//
	//
	// 				// "ddb",
	// 		// [psyTxt[2], { textShadow: tshadow}, {duration: 2, ease: 'easeIn', at: 'ddb'}],
	// 		// [psyTxt[3], { textShadow: tshadow}, {duration: 2, ease: 'easeIn',  at: 'ddb'}],
	// 		//
	// 		// "ddc",
	// 		// 	[psyTxt[2], { textShadow: tshadow2}, {duration: 2, ease: 'easeIn', at: 'ddb'}],
	// 		// 	[psyTxt[3], { textShadow: tshadow2}, {duration: 2, ease: 'easeIn',  at: 'ddb'}],
	//
	// 			// [psyTxt[0], {opacity: 0}, {duration: 1, ease: 'easeOut', delay: 1}],
	// 			// [psyTxt[1], {opacity: 0},  {duration: 1, ease: 'easeOut',delay: 1, at: '<'}],
	// 			// [psyTxt[2], {opacity: 0},  {duration: 1, ease: 'easeOut', delay: 1}],
	// 			// [psyTxt[3], {opacity: 0},  {duration: 1, ease: 'easeOut', delay: 1, at: '<'}],
	//
	// 		// [psyTxt[0], {clipPath: i4l}, {duration: 1, ease: 'easeOut', delay: 1}],
	// 		// [psyTxt[1], {clipPath: i42r}, {duration: 1, ease: 'easeOut', at: '<'}],
	// 		// [psyTxt[2], {clipPath: i4l}, {duration: 1, ease: 'easeOut'}],
	// 		// [psyTxt[3], {clipPath: i42r}, {duration: 1, ease: 'easeOut', at: '<'}],
	// 	]
	//
	//    // , {repeat: Infinity, repeatType: "loop", ease: 'linear', repeatDelay: 1}
	//
	// 	) //.speed = 0.5
	//
	// 		//
	// 		// psyTxt[0].style.clipPath = i42r;
	// 		// psyTxt[1].style.clipPath = i42l;
	// 		// psyTxt[2].style.clipPath = i42r;
	// 		// psyTxt[3].style.clipPath = i42l;
	// 		// psyTxt[0].style.textShadow = noshadow;
	// 		// psyTxt[1].style.textShadow = noshadow;
	// 		// psyTxt[2].style.textShadow = noshadow;
	// 		// psyTxt[3].style.textShadow = noshadow;
	// 		psyTxt[0].style.opacity = 1;
	// 		psyTxt[1].style.opacity = 1;
	// 		psyTxt[2].style.opacity = 1;
	// 		psyTxt[3].style.opacity = 1;
	//
	// 	} while (true)
	//
	//
	// }
	
	useEffect(() =>
	{

		queryEls()

		init()

		loop()

		console.log(window.animate = animate, window.toRect = toRect, window.reAss2Absolute = reAss2Absolute, window.loop = loop)

// 		// disk =  flyRef.current.querySelectorAll ('.e-rotatoid');
// 		//
// 		// // flyRef.current.querySelectorAll ('.psy-lab')
// 		// //       .forEach( e => ( bc => ['top', 'left','width','height'].forEach(k => e[k] = bc[k] + 'px') ) ( e.getBoundingClientRect() ) || (e.style.transform = '') );
// 		//
// 		// // flyRef.current.querySelector('ddc').style.color = colorWalk.next().value
// 		//
// 		// // ddc = flyRef.current.querySelector('ddc');
// 		// //
// 		// // animate(psyColors.map(c => [ddc, {color: colorWalk.next().value}]), {duration: 1.5, ease: 'linear', repeat: Infinity, repeatType: "loop"})
//
// 	//	loop()
//
//
//
// /*
//
// animate( psyChars.map( (c, i) => [c, {opacity: 1}, {duration: 0.5, at: "-0.25",   type: "tween", ease: 'linear'}] ) )
//
//  */
// 				// animate(cc,
// 				// 		{color: [...arrRandomCycler(psyColors.filter(c => c != cc.style.color), 0)]},
// 				// 		{duration: 3, repeat: Infinity, repeatType: "loop", ease: 'linear'})
//
// 		// let seq = [
// 		// 	... psyChars.map( c => [c, {opacity: 1}, {duration: 0.2, delay: 0.2, ease: 'easeIn'}] ) ,
// 		// 	[psyChars[0], {opacity: 1}, {delay: 1}],
// 		// 	... psyChars.map( c => [c, {opacity: 0}, {duration: 0.1, delay: 0.1, ease: 'easeOut'}] )
// 		// ]
// 		//
// 		// animate(seq, {delay: 1, repeat: Infinity, repeatType: "loop",  repeatDelay: 1})
// 	//	 console.log('suko',    window.tshadow =tshadow, window.psycoDD = psycoDD, window.animate = animate)

	}, []);

	return (
		<motion.div
			ref={flyRef}
			className={'abs-center relative w-full max-w-full sm:max-w-screen-sm  h-auto aspect-square mx-auto opacity-0'}
			initial={{x: '-50%', y: '-50%', opacity: 0, scale: 1}}
			animate={{opacity: 1, scale: 1, transition: {duration: 1.666}}}
		>


			<Link href={'/duckedelic'}
			      className={' torigin-lt  abs-center block w-full max-w-full  sm:max-w-screen-sm  p-4 h-auto aspect-square mx-auto '}
			>



					<DDDisk className={'e-rotatoid1'} >

						<PsyTextCrest className={'glow-1 opacity-0'}/>


							{/*<ddc className={'psy-char-o z-40 block  origin-top-left w-fit leading-normal text-[50px] h-[50px] font-extrabold  drop-shadow-xl text-orange-500 abs-center w-rotatoid  '}>D</ddc>*/}



					</DDDisk>




				{/*<DDDj/>*/}

			</Link>

		</motion.div>
	)
}