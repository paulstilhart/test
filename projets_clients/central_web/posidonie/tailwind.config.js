/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], //content: ["./src/**/*.{html,js}"], => la reco de tailwind

  theme: {
    extend: {
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)
        "primary-orange": "#F5911E", //rgb(245, 145, 30)
        "primary-blue": "#00437C", //rgb(0, 67, 124)
        "primary-green": "#00A79B", //rgb(0, 167, 155)
        "primary-grey": "#F0F0F0", //rgb(240, 240, 240)

        "secondary-orange": "#F5911E", //rgb(245, 145, 30)
        "secondary-blue": "#006CAE", //rgb(0, 108, 174)
        "secondary-green": "#00A498", //rgb(0, 164, 152)

        "tertiary-orange": "#F9AE3B", //rgb(249, 174, 59)
        "tertiary-blue": "#197C94", //rgb(25, 124, 148)
        "tertiary-green": "#62D4A8", //rgb(98, 212, 168)

        "black_pop_up" : "#000000cc",//rgba(0, 0, 0, 0.8)
      },

      backgroundImage: {
        "ico-linkedin": "url('../sources/icons/linkedin.svg')",
        "ico-youtube": "url('../sources/icons/youtube.png')",
        "ico-mail": "url('../sources/icons/mail.png')",
        "ico-location": "url('../sources/icons/location.svg')",
        "ico-close": "url('../sources/icons/close.svg')",
        "ico-alarm": "url('../sources/icons/alarm.png')",
        "ico-download": "url('../sources/icons/download.png')",
        "ico-plus": "url('../sources/icons/plus.svg')",

        "background-wave": "url('../sources/img/wave_background.png')",
        "background-wave-hero": "url('../sources/img/wave_hero.png')",
        "background-wave-orange": "url('../sources/img/wave_orange.png')",
        "background-round-orange": "url('../sources/img/background-round-orange.png')",

        "background-landingPage1": "url('../sources/img/landing_page/landing_page_1.png')",
        "background-landingPage2": "url('../sources/img/landing_page/landing_page_2.png')",

        "logo_alliance_posidionia_blue": "url('../sources/logos/alliance_posidionia_blue.png')",
        "logo_alliance_posidionia_white": "url('../sources/logos/alliance_posidionia_white.png')",

      },
    },
  },

  //pour nettoyer le fichier css des classes non utilisées
  purge: {
    enabled: false, //a mettre à true pour le dernier passage du terminal sur le sujet
    content: ["./*.html"],
  },

  plugins: [],
};
