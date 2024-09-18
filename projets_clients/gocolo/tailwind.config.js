/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },

  darkMode: "selector",

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#FFFFFF", // rgb(255, 255, 255)
      black: "#000000", // rgb(0, 0, 0)

      camel: "#FFF2E1", // rgb(255, 242, 225)
      camellight: "#FFFBF8", // rgb(255, 251, 248)

      neutrals: {
        white: "#FFF", // rgb(255, 255, 255)
        dark: "#0C0C0C", // rgb(12, 12, 12)
      },

      green: {
        DEFAULT: "#1B4539", // rgb(27, 69, 57)
        50: "#FBFCFC", // rgb(251, 252, 252)
        100: "#F1F6F4", // rgb(241, 246, 244)
        200: "#D5E4DE", // rgb(213, 228, 222)
        300: "#ABC8BE", // rgb(171, 200, 190)
        400: "#7EA598", // rgb(126, 165, 152)
        500: "#558072", // rgb(85, 128, 114)
        600: "#385E52", // rgb(56, 94, 82)
        700: "#26433A", // rgb(38, 67, 58)
        800: "#1D312B", // rgb(29, 49, 43)
        900: "#1A2B26", // rgb(26, 43, 38)
      },

      dark: {
        DEFAULT: "#0C0C0C", // rgb(12, 12, 12)
        50: "#FCFCFC", // rgb(252, 252, 252)
        100: "#F5F5F5", // rgb(245, 245, 245)
        200: "#E0E0E0", // rgb(224, 224, 224)
        300: "#C1C1C1", // rgb(193, 193, 193)
        400: "#9D9D9D", // rgb(157, 157, 157)
        500: "#787878", // rgb(120, 120, 120)
        600: "#575757", // rgb(87, 87, 87)
        700: "#3D3D3D", // rgb(61, 61, 61)
        800: "#2D2D2D", // rgb(45, 45, 45)
        900: "#282828", // rgb(40, 40, 40)
      },
      neonorange: {
        DEFAULT: "#FD6318",
        50: "#FFFAF7",
        100: "#FFF0E7",
        200: "#FFD2B7",
        300: "#FFA676",
        400: "#FF7332", 
        500: "#D84400", 
        600: "#A72400", 
        700: "#7A1700", 
        800: "#5B1300", 
        900: "#501200", 
      },
      kidgreen: {
        DEFAULT: "#43B97F",
        50: "#F9FDFA",
        100: "#ECF8F0",
        200: "#C5E8D3",
        300: "#8DD0A9",
        400: "#4AAF7C", 
        500: "#008A54", 
        600: "#006638", 
        700: "#004826", 
        800: "#00361D", 
        900: "#002F1A", 
      },
      kidyellow: {
        DEFAULT: "#FFCC49",
        50: "#FEFCF7",
        100: "#FCF4E6",
        200: "#F4DDB5",
        300: "#E1BD70",
        400: "#C19723", 
        500: "#987200", 
        600: "#715200", 
        700: "#523A00", 
        800: "#3E2B00", 
        900: "#372600", 
      },
    },
    fontSize: {
      title_h1: ["3.75rem", "1"], // 60px 60px
      title_h1_mobile: ["3rem", "1.15"], // 48px 55.2px
      title_h2: ["3rem", "1.25"], // 48px 60px
      title_h2_mobile: ["2.125rem", "1.15"], // 34px 39.1px
      title_h3: ["2.25rem", "1.25"], // 36px 45px
      title_h3_mobile: ["1.875rem", "1.25"], // 30px 37.5px
      title_h4: ["1.875rem", "1.25"], // 30px 37.5px
      title_h4_mobile: ["1.875rem", "1.25"], // Pas encore trouvé dans le design
      title_h5: ["1.5rem", "1.25"], // 24px 30px
      title_h5_mobile: ["1.25rem", "1.5"], // 20px 30px
      title_h6: ["1.25rem", "1.5"], // 20px 30px
      title_h6_mobile: ["1rem", "1.25"], // 16px 20px
      title_mini: ["1rem", "1.5"], // 16px 24px

      body_xl: ["1.25rem", "1.5"], // 20px 30px
      body_lg: ["1.125rem", "1.5"], // 18px 27px
      body_base: ["1rem", "1.5"], // 16px 24px
      body_sm: ["0.875rem", "1.25"], // 14px 17.5px
      body_xs: ["0.75rem", "1.25"], // 12px 15px
    },

    extend: {
      maxWidth: {
        1200: "1328px", //permet de rajouter des classes du type max-w-screen-xl	=> max-width: 1280px;
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
        4.5: "1.125rem",//18px
        18: "4.5rem",//72px
        25: "6.25rem",//100px
        31: "7.75rem",//124px
        34: "8.5rem",//136px
      },

      fontFamily: {
        francoisone: ['"Francois One"', "sans-serif"], //Francois One 400 regular
        manrope: ['"Manrope"', "sans-serif"], //Manrope
      },

      lineHeight: {
        115: "1.15",
        125: "1.25",
      },

      backgroundImage: {
        arrow_right: "url('../sources/icons/arrow_right.svg')",
        phone: "url('../sources/icons/phone.svg')",
        mail: "url('../sources/icons/mail.svg')",
        add: "url('../sources/icons/add.svg')",
        close: "url('../sources/icons/close.svg')",
      },

      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        zoomdezoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadein: "fadein 1.1s linear",
        zoomdezoom: 'zoomdezoom 1s ease-in-out infinite',
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  // si avec NPM, et pas standalone CLI plugins: [],
};
