

/**
 * Return new Generator which return a random element of the array in a 'cycle', filtered to noRepLen count of prior returned elements.
 * @param array The sourse.
 * @param noRepLen The count of the elements which can't be repeated in the next result .
 *      If noRepLen == 0 - then function return undefined when all array elemnt's indexes was returned.
 * @returns A Generator which return random element of the @array or undefined if 'cycle' is done (noRepLen == 0)
 *
 **/

function arrRandomCycler(array, noRepLen = 1)
{
	const g = (function* GArrayRandomCycler(array, noRepLen = 1)
	{
		if(Array.isArray(array) && (!noRepLen || noRepLen <= array.length))
		{
			let idx, usedKeys = [], restKeys = [...array.keys()];
			do
			{
				idx = restKeys [ Math.round(Math.random() * (restKeys.length - 1)) ]

				if( usedKeys.push( idx ) >= noRepLen && noRepLen )
					restKeys.push( usedKeys.shift() )

				restKeys = usedKeys.length ? restKeys.filter( i => !usedKeys.includes(i) ) : [...array.keys()]

				yield {value: array[idx], index: idx, usedKeys, restKeys};
			}
			while (restKeys.length)
		}
	}) (array, noRepLen)

	g._orig_next = g.next

	g.next = () => ( r => r ? {...r.value, done: r.done} : undefined ) (g._orig_next())

	return g
}

export {arrRandomCycler}




/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  */

export const randomInt = (min = 0, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const toRect = (e) => Object.fromEntries(  ['Top', 'Left','Width','Height'].map( y => [y.toLowerCase(), e[y.toLowerCase()] ?  e[y.toLowerCase()] : e['offset'+y] + 'px'] ) )

export const  reAss2Absolute = (d, s) =>
{
	d.style.width = s.width
	d.style.height = s.height
	d.style.top = s.top
	d.style.left = s.left
	d.style.position = 'absolute'
}

export const formatTS = (t) => {
	const
		h = Math.floor(t / 3600),
		m = Math.floor((t - h * 3600) / 60),
		s = Math.floor(t - (h * 3600 + m * 60))
	return isNaN(t) ? '' : `${h ? h.toString().padStart(2, '0') + ':' : ''}${m ? m.toString().padStart(2, '0') : '00'}:${s.toString().padStart(2, '0')}`
}

// formatTSD = (s) =>
// {
// 	let t = (new Date(0));
// 	t.setHours(0);
// 	t.setSeconds(s);
// 	return t.toLocaleTimeString()
// }

