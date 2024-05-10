// import { sort, sortFn } from "color-sorter";

const

	psyShadows = [
		['#ffa500', '#ff0000', '#ff8d00'],
		['#fdff80', '#fe7e0f', '#fbff00'],
		['#b0ff00',	'#00bfaf', '#0be73a'],
		['#ff99aa','#ff00f4', '#ff3155'],
	],

	palettes = {

	'dddd' : [
		'#e300ff',
		// '#8e3ccb',
		'#00ffd2',
		'#348ef5',
		'#ff3155',
		'#fe7e0f',
		'#0be73a',
		'#fdff2c',

	],

	'Bright As Neon': [

		'#e300ff',
		'#b0ff00',
		'#00ffd2',
		'#fdff00',
		'#ff00f4'

	],

	'Bright Summer': [

		'#ff598f',
		'#fd8a5e',
		'#e0e300',
		'#01dddd',
		'#00bfaf'

	],



	'Bright and Bold': [

		'#fc59a3',
		'#87c830',
		'#ffd400',
		'#fe7e0f',
		'#8e3ccb'

	],
	'Bright Candy': [

		'#ff3155',
		'#ffaf42',
		'#ffed5e',
		'#49f770',
		'#2daefd'

	],
	'Bright Pastel': [

		'#ffc100',
		'#c356ea',
		'#8ff243',
		'#71aef2',
		'#ea5645'

	],

},

//	psyColors = Object.keys(palettes).flatMap(k => palettes[k]).sort(sortFn)

	psyColors = palettes.dddd

//.sort(sortFn)


export {psyColors, psyShadows}