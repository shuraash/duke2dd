import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  corePlugins: {
    // aspectRatio: false,
  },

  plugins: [

    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),

    // plugin(function ({ addBase, addComponents, addUtilities, theme }) {
    //
    //   addUtilities({
    //     '.abs-center': {
    //       translate: '-50% -50%',
    //       left: '50%',
    //       top: '50%',
    //       position: 'absolute'
    //     },
    //     '.abs-v-center': {
    //       translate: '0 -50%',
    //       top: '50%',
    //       position: 'absolute'
    //     },
    //     '.abs-h-center': {
    //       translate: '-50% 0',
    //       left: '50%',
    //       position: 'absolute'
    //     },
    //   })
    // })

  ]
}
