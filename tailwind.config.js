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
         'xs': '450px',     // 28.1rem at 16px font size
         'sm': '600px',     // 37.5rem
         'md': '800px',     // 50rem
         'lg': '1000px',    // 62.5rem
         'xl': '1200px',    // 75rem
      },

      fontSize: {
         '4xs': '0.469rem',   // 7.5px
         '3xs': '0.563rem',   // 9px
         '2xs': '0.656rem',   // 10.5px
         xs: '0.75rem',      // 12px
         sm: '0.875rem',     // 14px
         md: '1rem',         // 16px
         lg: '1.125rem',     // 18px
         xl: '1.31rem',      // 21px
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
               card: '#f9f9f9',      // Use #ffffff for pure white,  #F7FAFC for beige, rgba(249, 250, 251, 1) for gray-50
               screen: '#eeeeee',    // f0e4d3 for beige, eeeeee for neutral gray
            },

            card: {'button': '#eeeeee'},   // d5d2ab

            bord: { 'std': '#718096' },    // #718096 is Tailwind gray-600

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

            gray: {
              50: 'rgba(249, 250, 251, 1)',
              100: '#f7fafc',
              200: '#edf2f7',
              300: '#e2e8f0',
              400: '#cbd5e0',
              500: '#a0aec0',
              600: '#718096',
              700: '#4a5568',
              800: '#2d3748',
              900: '#1a202c',
            }
            
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
            '9':  '2.25rem',
            '14': '3.5rem',
            '18':  '4.5rem',
            '26':  '6.5rem',
            '28': '7rem',
            '30': '7.5rem',
            '36': '9rem',
            '40': '10rem',
            '42': '10.5rem',
            '44': '11rem',
            '46': '11.5rem',
            '52': '13rem',
            '60': '15rem',
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
            '220': '55rem',
            '250': '62.5rem',
            '300': '75rem',
            '350': '87.5rem',
            '400': '100rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
         },

         maxWidth: {
          '100': '25rem',
          '120': '30rem',
          '140': '35rem',
          '160': '40rem',
          '180': '45rem',
          '200': '50rem',
          '220': '55rem',
          '250': '62.5rem',
          '300': '75rem',
          '350': '87.5rem',
          '400': '100rem',
         }


      }
   },
   variants: {},
   plugins: [],
}
