/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },

  darkMode: 'class',

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
        "header_logo_white": "url('../sources/logos/header/header_logo_white.svg')",
        "header_brand_white": "url('../sources/logos/header/header_brand_white.svg')",
        "header_logo_violet": "url('../sources/logos/header/header_logo_violet.svg')",
        "header_brand_violet": "url('../sources/logos/header/header_brand_violet.svg')",
        "footer_la_factory_violet": "url('../sources/logos/footer/footer_la_factory_violet.svg')",
        "footer_la_factory_white": "url('../sources/logos/footer/footer_la_factory_white.svg')",
        "button_arrow": "url('../sources/icons/button_arrow.svg')",
      },
    },
  },

  plugins: [],
};
