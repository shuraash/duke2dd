import {useRef, useState} from "react";
import {twMerge} from "tailwind-merge";


const
	PsyChar = ({char, className}) =>
		<char className={twMerge(` psy-char-o opacity-1 w-fit  leading-normal text-[50px] h-[50px] font-extrabold  `, className)}  >
			{char}
		</char>


export default function PsyText({text, className, aniDelay = 0, repDelay =1.6*4 + 2})
{
	const
		[chars, setChars] = useState(text ? text.split('') : []),

		psyRef = useRef(),


		//x1 = '-50%', x2 = '150%', y1='-150%', y2='150%',
		x1 = '0', x2 = '100%', y1='0', y2='100%',


		showAll = `polygon(${x1} ${y1}, ${x2} ${y1}, ${x2} ${y2}, ${x1} ${y2})`,

		i42r = `polygon(${x1} ${y1}, ${x1} ${y1}, ${x1} ${y2}, ${x1} ${y2})`,
		i42l = `polygon(${x2} ${y1}, ${x2} ${y1}, ${x2} ${y2}, ${x2} ${y2})`
//
// useEffect(()=>{
//
// 	// const ct = [...psyRef.current.querySelectorAll('char')];
// 	//
// 	// ct.forEach( (cc, i) => {
// 	//
// 	// 	cc.style.color = iniColors[i]
// 	//
// 	// 	// animate(cc,
// 	// 	// 		{color: [...arrRandomCycler(ddColors.filter(c => c != cc.style.color), 0)]},
// 	// 	// 		{duration: 3, repeat: Infinity, repeatType: "loop", ease: 'linear'})
// 	// 	}
// 	// );
// 	//
// 	// let seq = [
// 	// 	... ct.map( c => [c, {opacity: 1}, {duration: 0.2, delay: 0.2, ease: 'easeIn'}] ) ,
// 	// 	[ct[0], {opacity: 1}, {delay: 1.6*2 + 1}],
// 	// 	... ct.map( c => [c, {opacity: 0}, {duration: 0.1, delay: 0.1, ease: 'easeOut'}] )
// 	// ]
// 	//
// 	// animate(seq, {delay: aniDelay, repeat: Infinity, repeatType: "loop",  repeatDelay: repDelay})
// 	// // console.log('suko', window.ct =ct, window.seq = seq)
//
// },[])



	return (
			<figure ref={psyRef}
			        className={twMerge(`psy-text  flex items-center gap-x-0.5 justify-evenly relative w-fit h-fit  `, className)}
			        style={{clipPath: text == 'Duke' ? i42r : i42l}}
				// style={{textShadow: '-1px -1px 0 #ccccccf0, 1px -1px 0 #ccccccf0, -1px 1px 0 #ccccccf0, 1px 1px 0 #ccccccf0'}}
			>

				{/*clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%)*/}

				{/*<div className={'clip absolute h-full w-full inset-0 overflow-visible flex items-center gap-x-0.5 justify-evenly flex-nowrap'}*/}
				{/*     style={{clipPath: 'inset(0 0 100% 100%)'}*/}
				{/*>*/}

				{chars.map((c,i) =>

					<PsyChar char={c}  key={c+i} />
					   // animate={{opacity: 1, transition: {duration: 0.33, delay: (i * 0.25 +.25), ease: 'linear', }}}

				)}



			</figure>
	)
}

/*

		<div>
			{chars.map((c,i) =>
				<span key={c+i} className={'psy-char'} style={{animationDelay: `${i * 0.33 +.33}s`}}>
					{c}
				</span>
			)}
		</div>
 */