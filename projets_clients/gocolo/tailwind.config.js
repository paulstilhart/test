/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },

  darkMode: "selector",

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'neutrals': {
        white: '#FFF',
        dark: '#0C0C0C',
      },
      'green': {
        DEFAULT: '#1B4539',
        50: '#FBFCFC',
        100: '#F1F6F4',
        200: '#D5E4DE',
        300: '#ABC8BE',
        400: '#7EA598',
        500: '#558072',
        600: '#385E52',
        700: '#26433A',
        800: '#1D312B',
        900: '#1A2B26',
      },
      camel : '#FFF2E1',
      camellight : '#FFFBF8',
    },
    fontSize: {
      title_h1: ['3.75rem', '1'],//60px 60px
      title_h1_mobile: ['3rem', '1.15'],//48px 55.2px
      title_h2: ['3rem', '1.25'],//48px 60px
      title_h2_mobile: ['2.125rem', '1.15'],//34px 39.1px
      title_h3: ['2.25rem', '1.25'],//36px 45px
      title_h3_mobile: ['1.875rem', '1.25'],//30px 37.5px
      title_h4: ['1.875rem', '1.25'],//30px 37.5px
      title_h4_mobile: ['1.875rem', '1.25'],//PAS ENCORE TROUVÉ DANS LE DESIGN
      title_h5: ['1.5rem', '1.25'],//24px 30px
      title_h5_mobile: ['1.25rem', '1.5'],//20px 30px
      title_h6: ['1.25rem', '1.5'],//20px 30px
      title_h6_mobile: ['1rem', '1.25'],//16px 20px
      title_mini: ['1rem', '1.5'],//16px 24px

      body_xl: ['1.25rem', '1.5'],//20px 30px
      body_lg: ['1.125rem', '1.5'],//18px 27px
      body_base: ['1rem', '1.5'],//16px 24px
      body_sm: ['0.875rem', '1.25'],//14px 17.5px ou 21px pour le regular (150%) => A CONTROLER
      body_xs: ['0.75rem', '1.25'],//12px 15px
    },
    extend: {
      maxWidth: {
        //permet de rajouter des classes du type max-w-screen-xl	=> max-width: 1280px;
        '1200': '1328px',
      },
      screens: {
        //media queries supplémentaires
        //'3xl': '1700px',
      },
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)
      },

      spacing: {
        '18': '4.5rem',
        '31': '7.75rem',
      },

      fontFamily: {
        'francoisone': ['"Francois One"', 'sans-serif'],//Francois One 400 regular
        'manrope': ['"Manrope"', 'sans-serif'],//Manrope
      },

      lineHeight: {
        '115': '1.15',
        '125': '1.25',
      },

      backgroundImage: {
        arrow_right: "url('../sources/icons/arrow_right.svg')",
      },

      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        fadein: "fadein 1.1s linear",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  // si avec NPM, et pas standalone CLI plugins: [],
};
