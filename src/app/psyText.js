import {twMerge} from "tailwind-merge";
import {useEffect, useRef, useState} from "react";
import {arrRandomCycler} from "src/util";
import {psyColors} from "src/components/psyColors";
import {animate} from "framer-motion";

//
	// function PsyChar ({char, className})
	// {
	// 	return <span
	// 		className={twMerge(`psy-char`, className)}
	// 		// maybe just this font ("Lakki Reddy") need this ...
	// 		// style={{translate: `${cdGap ? parseFloat(cdGap.fs/4) + 'px' : '12px'} 0`}}
	// 	>
	// 				{char}
	// 		</span>
	// }
	//
	// const PsyLabel = ({text, className}) => {
	//
	// 	// const ref = useRef()
	//
	// 	// useEffect(() =>
	// 	// {
	// 	//
	// 	// 	[...ref.current.querySelectorAll('.psy-char')]
	// 	// 	.map( c => [c, toRect(c)])
	// 	// 	.forEach( c => reAss2Absolute(c[0], c[1]))
	// 	//
	// 	// }, []);
	//
	// 	return  <div
	// 		// ref={ref}
	// 		className={twMerge(`psy-text flex flex-nowrap items-center justify-evenly relative w-full h-full  `, className)}>
	//
	// 		{text && text.split('').map((c, i) => <span className={'psy-char'} key={c + i}>{c}</span>)}
	//
	// 	</div>
	// }

const

	PsycoTitlo = ({text, className = '', charsClass = '', colors}) => {

			const chars = text.split('');
			const ref = useRef()

			useEffect(() =>
			{
				const fs = parseFloat(getComputedStyle(ref.current).getPropertyValue('font-size'))
			    ref.current.querySelectorAll('.psy-char').forEach(c => c.style.translate = `0 ${(fs / 4)}px`)

			}, [text])

			return <div ref={ref} className={twMerge( `psy-titlo w-fit h-fit min-w-fit flex items-center justify-evenly gap-x-1 `, className)}>

				{chars.map((c,i) => <span key={c+i} className={twMerge(`w-fit h-fit min-w-fit psy-char ${colors && colors[i] ? `text-[${colors[i]}]` : ''} `, charsClass)}>{c}</span>)}

			</div>

	},

	PsycoRow = ({className, children, ...rest}) => {

		const ref = useRef()

		useEffect(() =>
		{
			const
				fs = parseFloat(getComputedStyle(ref.current).getPropertyValue('font-size'))

			ref.current.style.columnGap = fs;

		}, [])

		return <div ref={ref}
		            className={twMerge(`psy-row abs-center w-full grid grid-cols-2 items-center justify-normal gap-x-[48px]`, className)}
					{...rest}>

			{children}
			{/*<PsycoTitlo text={texts[0]} colors={colors && colors[0] ? colors[0] : undefined} className={'justify-self-end'}/>*/}
			{/*<PsycoTitlo text={texts[1]} colors={colors && colors[1] ? colors[1] : undefined} className={'justify-self-start'}/>*/}
		</div>
	},


	DDCrest = ({className}) => {


		const

			ref = useRef(),

			[lColors, setlColors] = useState(),

			pcColor = arrRandomCycler(psyColors, 5),

			genLColors = () =>  (d => ({d: d, r: arrRandomCycler(psyColors.filter(c => c != d), 5) })) ( pcColor.next().value ),

			psycoChars = async (chars) => {

				let
					psyChars = [...ref.current.querySelectorAll('.psy-char')],
					centralD = ref.current.querySelector('.central-D'),
					psyDDChars = psyChars.filter((c,i) => [0,7,8,15,16].includes(i)),
					psyRRChars = psyChars.filter((c,i) => !([0,7,8,16].includes(i))),
				    colors = genLColors();

		//		console.log('psyChars ', window.psyChars=psyChars)

				if(lColors)
				{
					await animate([
							...psyDDChars.map(c => [c, {color: colors.d}, {at: 0}]),
							...psyRRChars.map(c => [c, {color: colors.r.next().value}, {at: 0}])
						],
						{
							duration: 1,
							ease: 'linear'
						}
					)
				}
				else
				{
					psyDDChars.map(c => c.style.color = colors.d)
					psyRRChars.map(c => c.style.color = colors.r.next().value)
				}

				setlColors(colors)
			}


		useEffect(() =>
		{
	        psycoChars([...ref.current.querySelectorAll('.psy-char')])
		}, [lColors]);

		return <div ref={ref} className={twMerge(``, className)}>

			<PsycoRow>
				<PsycoTitlo text='Duke' className={'w-full'}/>
				<PsycoTitlo text='elic' className={'w-full'}/>
			</PsycoRow>

			<PsycoRow style={{rotate: '90deg'}}>
				<PsycoTitlo text='Duke' className={'w-full'}/>
				<PsycoTitlo text='ance' className={'w-full'}/>
			</PsycoRow>

			<PsycoTitlo text='D' className={`w-rotatoid central-D rounded-full z-20 abs-center opacity-1`} />

		</div>
	},



	PsycoTexto = ({children, className}) => {


		const

			ref = useRef(),

			[lColors, setlColors] = useState(),

			pcColor = arrRandomCycler(psyColors, 5),

			genLColors = () =>  (d => ({d: d, r: arrRandomCycler(psyColors.filter(c => c != d), 5) })) ( pcColor.next().value ),

			psycoChars = async (chars) => {

				let
					psyChars = [...ref.current.querySelectorAll('.psy-char')],
					colors = genLColors();

				//		console.log('psyChars ', window.psyChars=psyChars)

				if(lColors)
				{
					await animate([
							...psyChars.filter(c => c.innerText.toUpperCase() == 'D').map(c => [c, {color: colors.d}, {at: 0}]),
							...psyChars.filter(c => c.innerText.toUpperCase() != 'D').map(c => [c, {color: colors.r.next().value}, {at: 0}])
						],
						{
							duration: 0.75,
							ease: 'linear'
						}
					)
				}
				else
				{
					psyChars.filter(c => c.innerText == 'D').map(c => c.style.color = colors.d)
					psyChars.filter(c => c.innerText != 'D').map(c => c.style.color = colors.r.next().value)
				}

				setlColors(colors)
			}


		useEffect(() =>
		{
			psycoChars([...ref.current.querySelectorAll('.psy-char')])
		}, [lColors]);

		return <div ref={ref} className={twMerge(``, className)}>

			{children}


		</div>
	}




// export default function PsyText({className})
// {
// 	const
// 		ref = useRef(),
// 	    [cdGap, setCdGap] = useState() // text-5xl
//
//
//
// 	const
//
// 		PsyChar = ({char, className}) => <span
// 					className={twMerge(`psy-char`, className)}
// 					// maybe just this font ("Lakki Reddy") need this ...
// 					style={{translate: `0 ${cdGap ? parseFloat(cdGap.fs/4) + 'px' : '12px'} 0`}}
// 				>
// 							{char}
// 					</span>,
//
//
// 		PsyLabelX = ({text, className}) => {
//
// 				// const ref = useRef()
//
// 				// useEffect(() =>
// 				// {
// 				//
// 				// 	[...ref.current.querySelectorAll('.psy-char')]
// 				// 	.map( c => [c, toRect(c)])
// 				// 	.forEach( c => reAss2Absolute(c[0], c[1]))
// 				//
// 				// }, []);
//
// 				return  <div
// 					// ref={ref}
// 					className={twMerge(`psy-text flex flex-nowrap items-center justify-evenly relative w-full h-full  `, className)}>
//
// 					{/*{text && text.split('').map((c, i) => <span className={'psy-char'} key={c + i}>{c}</span>)}*/}
//
// 					{text && text.split('').map((c, i) => <PsyChar key={c + i} char={c}/>)}
//
// 				</div>
// 			},
//
//
// 			PsyTextRow = ({left, right,  isVert, cdGap = '48px', className, ...rest}) => {
//
// 				return <div
//
// 					className={twMerge(`psy-row abs-center w-full grid grid-cols-2 items-center justify-center `, className)}
// 					// height: cdGap,
// 					// style={{rotate: isVert ? '90deg': '0deg', columnGap: cdGap}}>
// 					{...rest}
// 				>
//
// 					{/*<PsyLabelX text={left}/>*/}
// 					{/*<PsyLabelX text={right}/>*/}
//
// 					<PsycoTitlo text={left}/>
// 					<PsycoTitlo text={right}/>
//
// 				</div>
// 			},
//
// 			PsyCentralD = ({}) => <div className={`psy-char w-rotatoid22 origin-center central-D rounded-full z-20 abs-center opacity-1`} >D</div>
//
//
// 	// useLayoutEffect(() => {
// 	//
// 	// 	if(ref.current)
// 	// 	{
// 	// 		let cdg = {fs: getComputedStyle(ref.current).getPropertyValue('font-size'), sh: ref.current.querySelector('.central-D').offsetHeight};
// 	//
// 	// 		console.log(window.cdg = cdg)
// 	//
// 	// 		setCdGap(cdg)
// 	// 	}
// 	//
// 	// }, [])
//
// 	useEffect(() =>
// 	{
// 		// let cdg = {fs: getComputedStyle(ref.current).getPropertyValue('font-size'), sh: ref.current.querySelector('.central-D').offsetHeight};
// 		//
// 		// console.log(window.cdg = cdg)
// //		setCdGap(cdg)
//
// 		const
// 			fs = parseFloat( getComputedStyle(ref.current).getPropertyValue('font-size') ),
// 			cd = ref.current.querySelector('.central-D');
//
// 		setCdGap({fs: fs})
//
// 		// [...ref.current.querySelectorAll('.psy-char:not(.central-D)')].map( c => [c, toRect(c)]).forEach( c => {
// 		//
// 		// //	reAss2Absolute(c[0], c[1]);
// 		// 	c[0].style.translate = `0 ${(fs/4)}px`
// 		//
// 		// });
//
// 		let pizdy = ref.current.querySelectorAll('.psy-char:not(.central-D)');
//
// 		//
// 		//
// 		// pizdy.forEach( c => {
// 		// 	  c.style.translate = `0 ${(fs/4)}px`
// 		//
// 		// 	  console.log('suka ', c, ' ', c.style.translate)
// 		//
// 		// })
// 		//
// 		// console.log(window.pizdy = pizdy)
//
// 		cd.style.paddingTop = `${(fs/2)}px`;
//
// 		[...ref.current.querySelectorAll('.psy-row')].forEach( c => { c.style.height =  fs + 'px'; c.style.columnGap = fs + 'px'} );
//
//
// 	}, []);
//
// 	return <div
// 		ref={ref}
// 		className={twMerge(`psy-crest abs-center w-full h-fit aspect-square flex items-center justify-center font-extrabold text-5xl `, className)}
// 	>
//
// 		<PsyTextRow left="Duke" right="eliC" style={{height: cdGap ? cdGap.fs : 'fit-content', columnGap: cdGap ? cdGap.fs : '48px'}}/>
//
// 		<PsyTextRow left="Duke" right="ancE" style={{height: cdGap ? cdGap.fs : 'fit-content', rotate: '90deg', columnGap: cdGap ? cdGap.fs : '48px'}} />
//
// 		<PsyCentralD/>
//
// 	</div>
//
// }


export {PsycoRow, PsycoTitlo, DDCrest, PsycoTexto}

//, PsyTextRow, PsyTextCrest, PsyChar}
