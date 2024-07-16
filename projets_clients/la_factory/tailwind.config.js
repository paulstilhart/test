/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)

        "primary-violet": "#633ADE", //rgb(99, 58, 222)
        "primary-lilas": "#D9CCFF", //rgb(217, 204, 255)
        "primary-jaune": "#E4F24B", //rgb(228, 242, 75)
        "primary-noir-gris": "#302F2E", //rgb(48, 47, 46)
      },

      // PF Mellon bold 700
      // Poppins bold 700
      // Poppins regular 400

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pfmellonbold: ["PFMellonBold", "sans-serif"],
      },

      backgroundImage: {
        header_monogramme_violet:
          "url('../sources/logos/header/header_monogramme_violet.svg')",
        header_monogramme_white:
          "url('../sources/logos/header/header_monogramme_white.svg')",

        header_logo_white:
          "url('../sources/logos/header/header_logo_white.svg')",
        header_brand_white:
          "url('../sources/logos/header/header_brand_white.svg')",
        header_logo_violet:
          "url('../sources/logos/header/header_logo_violet.svg')",
        header_brand_violet:
          "url('../sources/logos/header/header_brand_violet.svg')",

        footer_la_factory_violet:
          "url('../sources/logos/footer/footer_la_factory_violet.svg')",
        footer_la_factory_white:
          "url('../sources/logos/footer/footer_la_factory_white.svg')",
        button_arrow_black: "url('../sources/icons/button_arrow_black.svg')",
        button_arrow_yellow: "url('../sources/icons/button_arrow_yellow.svg')",
        button_arrow_violet: "url('../sources/icons/button_arrow_violet.svg')",

        map_pin_shadow: "url('../sources/icons/map_pin_shadow.svg')",
      },

      keyframes: {
        expertises_title1: {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        expertises_title2: {
          "0%": { transform: "translateY(110%)" },
          "22%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        expertises_title3: {
          "0%": { transform: "translateY(110%)" },
          "36%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        expertises_fadein: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        title1: {
          "0%": { transform: "translateX(-100px)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(-100px)" },
        },
        title1_mobile: {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-20%)" },
        },
        title2: {
          "0%": { transform: "translateX(200px)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" },
        },
        title2_mobile: {
          "0%": { transform: "translateX(20%)" },
          "50%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(20%)" },
        },
        title3: {
          "0%": { transform: "translateX(-100px)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(-100px)" },
        },
        title3_mobile: {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-20%)" },
        },
      },
      animation: {
        expertises_title1: "expertises_title1 0.7s ease-in-out",
        expertises_title2: "expertises_title2 0.9s ease-in-out",
        expertises_title3: "expertises_title2 1.1s ease-in-out",
        expertises_fadein: "expertises_fadein 1.1s linear",
        title1: "title1 15s linear infinite",
        title2: "title2 15s linear infinite",
        title3: "title3 15s linear infinite",
        title1_mobile: "title1_mobile 15s linear infinite",
        title2_mobile: "title2_mobile 15s linear infinite",
        title3_mobile: "title3_mobile 15s linear infinite",
      },
    },
  },

  plugins: [],
};
