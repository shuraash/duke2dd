import {useEffect, useRef, useState} from "react";
import {twMerge} from "tailwind-merge";

const

	cache = new Map(),


	makeMosaic = (imgSrc, w,h, pcnt = 10) => new Promise( (ok) =>
	{

				if(cache.has(imgSrc))
					 return ok ( cache.get(imgSrc).cloneNode(true) )

				const
					img = document.createElement('img'),

					cpImage = () => {

							const
								df = document.createDocumentFragment(),

								// dw = ref.current.offsetWidth / pcnt,
								// dh = ref.current.offsetHeight / pcnt,
								dw = w ? w / pcnt : img.width / pcnt,
								dh = h ? h / pcnt: img.height / pcnt,
								sw = img.width / pcnt,
								sh = img.height / pcnt

							for (let x = 0; x < pcnt; x++)
								for (let y = 0; y < pcnt; y++)
								{
									const c = document.createElement('canvas')

									// c.style.position = 'absolute';
									// c.style.zIndex = 999;
									//
									// c.style.width = dw + 'px';
									// c.style.height = dh + 'px';
									// c.style.left = (x * dw) + 'px';
									// c.style.top = (y * dh) + 'px';

									// c.style.width = 100/pcnt + '%';
									// c.style.height = 100/pcnt + '%';
									// c.style.left = (x * (100/pcnt)) + '%';
									// c.style.top = (y * (100/pcnt)) + '%';

								//	c.style.transition = 'all 1.6s ease-out'

									c.width = dw
									c.height = dh
								//	c.style.outline = '1px solid yellow';

									//ref.current.appendChild(c)

									c.getContext("2d").drawImage(img, x * sw, y * sh, sw, sh, 0, 0, dw, dh)

									const 
										i = new Image()
									i.style.position = 'absolute';
									i.style.zIndex = 999;
									// i.style.width = dw + 'px';
									// i.style.height = dh + 'px';
									// i.style.left = (x * dw) + 'px';
									// i.style.top = (y * dh) + 'px';
									// i.style.outline = '1px solid yellow';

									i.style.width = 100/pcnt + '%';
									i.style.height = 100/pcnt + '%';
									i.style.left = (x * (100/pcnt)) + '%';
									i.style.top = (y * (100/pcnt)) + '%';

									i.src = c.toDataURL()
									
									df.appendChild(i)
								}

							cache.set(imgSrc, df)

						// const ret = document.createDocumentFragment();
						//
						// [...df.children].forEach(c => ret.appendChild( c.cloneNode() ))

						 ok( df.cloneNode(true)  )

						//return  makeMosaic(imgSrc, w, h, pcnt)
					}

				img.onload = e => cpImage(img)
				img.style.position = 'absolute'
				img.src = imgSrc

	}),

	explode = (df) => [...df.children].forEach( p =>
	{
		//const pcnt = Math.sqrt( df.children.length )

	})

//
// async function loadBubbles()
// {
// 	const bubblerPics = Array.from({length: 9}, (_, i) => `/bubbles/00${i+1}.png`)
//
// 	for( const b of bubblerPics)
// 		await makeMosaic(b, 64, 64)
//
// 	window._bubok = true
//
// 	window.dispatchEvent(new Event("bb-build"))
// }
//
// loadBubbles()

const DJBubble = ({src, className, pcnt = 10, defIsExplo, onExploStart, onExploEnd }) => {


	const

		ref = useRef(),
		refDf = useRef(),

		[isExplo, setIsExplo] = useState(),

		ctrD = (d) =>  ({cx: d.offsetLeft + d.offsetWidth / 2, cy: d.offsetTop + d.offsetHeight / 2}),

		calcExploSt = (d) => {

			const
				mx = ref.current.offsetWidth / 2 ,
				my = ref.current.offsetHeight / 2,
				mq = 3,
				q = () => mq + (mq * (1-(Math.random() + 0.5)))/3 ,
				{cx, cy} = ctrD(d),

				dx = cx > mx ? cx - mx : mx - cx,
				dy = cy > my ? cy - my : my - cy,

				// dx = mx - cx,
				// dy = my - cy,

				qx = dx > 0 ? 1 : -1,
				qy = dy > 0 ? 1 : -1,


				dl = cx > mx
					? (cx + (dx * q())) - d.offsetWidth / 2
					: (cx - (dx * q())) - d.offsetWidth / 2,

				dt = cy > my
					? (cy + (dy * q())) - d.offsetHeight / 2
					: (cy - (dy * q())) - d.offsetHeight / 2


			d._st_noraml = d._st_noraml ? d._st_noraml : {
				left: d.style.left,
				top: d.style.top,
				rotate: '0deg',
				opacity: 1,
				scale: 1,

			}

			d._st_exploded = {
				left:   dl + 'px',
				top:   dt + 'px',
				rotate:   (360 *  (0.5-(Math.random()+0.5))) + 'deg',
				opacity:   0,
				scale:   0.01,

			}

			return {true: d._st_exploded, false: d._st_noraml}
		},

		cpImg = (img) => {

			if(refDf.current) return;

			let df;

			//if(!cache.has(img.src))
			{

				refDf.current = [];
				df = document.createDocumentFragment()

				const

					dw = ref.current.offsetWidth / pcnt,
					dh = ref.current.offsetHeight / pcnt,
					sw = img.width / pcnt,
					sh = img.height / pcnt

				for (let x = 0; x < pcnt; x++)
					for (let y = 0; y < pcnt; y++)
					{
						const c = document.createElement('canvas')

						c.style.position = 'absolute';
						c.style.zIndex = 99;
						c.style.width = dw + 'px';
						c.style.height = dh + 'px';
						c.style.left = (x * dw) + 'px';
						c.style.top = (y * dh) + 'px';
						c.style.transition = 'all 1.6s ease-out'
						c.width = dw
						c.height = dh
						//c.style.outline = '1px solid yellow';

						//ref.current.appendChild(c)

						c.getContext("2d").drawImage(img, x * sw, y * sh, sw, sh, 0, 0, dw, dh)

						//calcExploSt(c)
						///console.log('img', x*sw, y*sh, sw, sh, 0, 0, dw, dh);
						refDf.current.push(c);

						df.appendChild(c)
					}

				cache.set(img.src, {df: df, ccc: refDf.current})
			}
			// else
			// {
			// 	let x = cache.get(img.src);
			// 	df = x.df;
			// 	refDf.current = x.ccc
			// 	refDf.current.forEach(d => Object.assign(d.style, {transition: '',... calcExploSt(d)[false]}))
			// }
			//console.log(' appd ',  df)

			ref.current.appendChild(df)

			if (isExplo)
				explode()
		},

		explode = () => {

			if(onExploStart) onExploStart(ref.current);

			let fc = refDf.current.length;

			refDf.current.forEach( d =>
			{
				d.addEventListener('transitionend', () => fc = fc > 1 ? fc - 1 : (onExploEnd ? onExploEnd(ref.current) : 0), {once: true})
				Object.assign(d.style, {transition: 'all 1.6s ease-out', ... calcExploSt(d)[true]})
			})
		},

		inito = async () =>
		{
			// const img = document.createElement('img')
			// img.onload = e => cpImg(img)
			// img.style.position = 'absolute'
			// img.src = src

			refDf.current = await makeMosaic(src, ref.current.offsetWidth, ref.current.offsetHeight);

			console.log('cur ', window.cur = [...refDf.current.children])

			ref.current.appendChild(refDf.current)
		}



	useEffect( () =>
	{
		if(refDf.current)
		{

			// if (isExplo)
			// 	explode()
			// else
			// 	refDf.current.forEach(d => Object.assign(d.style, {transition: '',... calcExploSt(d)[false]}))
		}
		else
		{
			// const img = document.createElement('img')
			// img.onload = e => cpImg(img)
			// img.style.position = 'absolute'
			// img.src = src
			if(window._bubok)
				inito()
			else
				window.addEventListener('bb-build', () => inito() )
		}

		ref.current._doExplode = () => setIsExplo(true);
		//setIsExplo(defIsExplo)

	}, [isExplo])

	return <div ref={ref} className={twMerge(`explo-pic overflow-visible `, className)}

	             // onClick={e => setIsExplo(!isExplo)}

	/>


}


export default DJBubble;