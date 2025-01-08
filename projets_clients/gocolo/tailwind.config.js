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
      kidorange: {
        DEFAULT: "#FD7E40",
        50: "#FFFBF8",
        100: "#FFF1E9",
        200: "#FFD5BE",
        300: "#FFAC83",
        400: "#EF7D46",
        500: "#C95316",
        600: "#9B3500",
        700: "#702400",
        800: "#531B00",
        900: "#4A1900",
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
      body_regular_sm: ["0.875rem", "1.5"], // 14px 21px
      body_xs: ["0.75rem", "1.25"], // 12px 15px
    },

    extend: {
      maxWidth: {
        1440: "1440px",
      },
      screens: {
        "2xl": "1400px", //pour écraser le 2xl initial par 1400
        "3xl": "1700px", //media queries supplémentaires
      },
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)
      },

      boxShadow: {
        reviews:
          "0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00)",

        cards: "0px 4px 80px 0px rgba(89, 57, 13, 0.10)",
      },

      spacing: {
        3.5: "0.875rem", //14px
        4.5: "1.125rem", //18px
        15: "3.75rem", //60px
        17: "4.25rem", //68px
        18: "4.5rem", //72px
        22: "5.5rem", //88px
        25: "6.25rem", //100px
        26: "6.5rem", //104px
        30: "7.5rem", //120px
        31: "7.75rem", //124px
        34: "8.5rem", //136px
      },

      fontFamily: {
        francoisone: ['"Francois One"', "sans-serif"], //Francois One 400 regular
        manrope: ['"Manrope"', "sans-serif"], //Manrope
        mogra: ['"Mogra"', '"system-ui"'], //Mogra 400 regular
        gochihand: ['"Gochi Hand"', '"cursive"'], //Gochi Hand 400 regular
      },

      lineHeight: {
        115: "1.15",
        125: "1.25",
      },

      backgroundImage: {
        arrow_narrow: "url('../sources/icons/Arrow_narrow.svg')",
        arrow_narrow_green: "url('../sources/icons/Arrow_narrow_green.svg')",
        arrow_narrow_disabled:
          "url('../sources/icons/Arrow_narrow_disabled.svg')",
        phone: "url('../sources/icons/Phone.svg')",
        phone_green: "url('../sources/icons/Phone_green.svg')",
        phone_white: "url('../sources/icons/Phone_white.svg')",
        mail: "url('../sources/icons/Mail.svg')",
        mail_green: "url('../sources/icons/Mail_green.svg')",
        mail_white: "url('../sources/icons/Mail_white.svg')",
        home: "url('../sources/icons/Home.svg')",
        home_green: "url('../sources/icons/Home_green.svg')",
        home_white: "url('../sources/icons/Home_white.svg')",
        add: "url('../sources/icons/add.svg')",
        close: "url('../sources/icons/close.svg')",
        close_red: "url('../sources/icons/close_red.svg')",
        gocolo_yellow: "url('../sources/logos/gocolo_yellow.svg')",
        star_green: "url('../sources/icons/star_green.svg')",
      },

      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        zoomdezoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        slide_2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" }, // 200% correspond à 2 slides
        },
        slide_3: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
        slide_4: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-400%)" },
        },
        slide_5: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500%)" },
        },
        slideCran: {
          "0%": { transform: "translateX(0%)" },
          "33%": { transform: "translateX(-100%)" }, // Se déplace d'une carte (100%)
          "66%": { transform: "translateX(-200%)" }, // Se déplace de deux cartes
          "100%": { transform: "translateX(0%)" }, // Retour à la première carte
        },
        blurAnimation: {
          "0%": { filter: "blur(24px)" },
          "1%": { filter: "blur(24px)" },
          "2%": { filter: "blur(0px)" },
          "98%": { filter: "blur(0px)" },
          "99%": { filter: "blur(24px)" },
          "100%": { filter: "blur(24px)" },
        },
      },
      animation: {
        fadein: "fadein 1.1s linear",
        zoomdezoom: "zoomdezoom 1s ease-in-out infinite",
        homepage_cards_2: "slide_2 5s steps(2) infinite", // 2 étapes pour 2 slides
        homepage_cards_3: "slide_3 7.5s steps(3) infinite",
        homepage_cards_4: "slide_4 10s steps(4) infinite",
        homepage_cards_5: "slide_5 12.5s steps(5) infinite",
        slidecran: "slideCran 6s ease-in-out infinite", // Animation fluide de 6s
        blurAnimation_5s: "blurAnimation 5s linear infinite",
        homepage_reviews_2: "slide_2 10s steps(2) infinite",
        homepage_reviews_3: "slide_3 15s steps(3) infinite",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  // si avec NPM, et pas standalone CLI plugins: [],
};
