// Built by following video at https://tailwindcss.com/course/setting-up-tailwind-and-postcss
// This file must stay in the project root directory

module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   purge: [],
   theme: {

      screens: {
         'xs': '400px',
         'sm': '600px',
         'md': '800px',
         'lg': '1000px',
         'xl': '1200px',
      },

      fontSize: {
         '2xs': '.656rem',   // 10.5px
         xs: '0.75rem',      // 12px
         sm: '0.875rem',     // 14px
         md: '1rem',         // 16px
         lg: '1.125rem',     // 18px
         xl: '1.25rem',      // 20px
         '2xl': '1.5rem',    // 24px
         '3xl': '1.875rem',  // 30px
         '4xl': '2.25rem',   // 36px
         '5xl': '3rem',      // 48px
         '6xl': '3.75rem',   // 60px
         '7xl': '4.5rem',    // 72px
      },

      fontWeight: {
         '100': '100',
         '200': '200',
         '300': '300',
         '400': '400',
         '500': '500',
         '600': '600',
         '700': '700',
         '800': '800',
         '900': '900',
      },

      fontFamily: {

         soft_sans:['"Proxima Soft"', 'Nunito', 'Roboto', '"Open Sans"', 'sans-serif'],
         // sans: ['Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"','sans-serif'],
         mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },

      extend: {
   
         colors: {

            backgnd: {
               card: '#ffffff',      // Use #ffffff for pure white  #F7FAFC
               screen: '#F5F0E4',    // f0e4d3 for beige, 
              //  button: 
              //  buttonHighlight
            },

            card: {'button': '#eeeeee'},       // d5d2ab

            bord: { 'std': '#718096' },

            blue: {
               100: '#ebf8ff',
               200: '#bee3f8',
               300: '#90cdf4',
               400: '#63b3ed',
               500: '#4299e1',
               600: '#3182ce',
               700: '#2b6cb0',
               800: '#2c5282',
               900: '#2a4365',
               'vibrant': '0939c2',
            },

            // For neutral grays
            // gray: {
            //    '100': '#f5f5f5',
            //    '200': '#eeeeee',
            //    '300': '#e0e0e0',
            //    '400': '#bdbdbd',
            //    '500': '#9e9e9e',
            //    '600': '#757575',
            //    '700': '#616161',
            //    '800': '#424242',
            //    '900': '#212121',
            // },

         },

         spacing: {
            '7':  '1.75rem',
            '28': '7rem',
            '72': '18rem',
            '80': '20rem',
            '88': '22rem',
            '92': '23rem',
            '96': '24rem',
            '100': '25rem',
            '120': '30rem',
            '140': '35rem',
            '160': '40rem',
            '180': '45rem',
            '200': '50rem',
            '250': '62.5rem',
            '300': '75rem',
            '350': '87.5rem',
            '400': '100rem',
         },


      }
   },
   variants: {},
   plugins: [],
}
