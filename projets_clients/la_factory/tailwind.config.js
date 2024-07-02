/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
    ],
  },

  theme: {
    extend: {
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)

        "white-50%": "#ffffff80",     //(255, 255, 255, 0.5)
        "white-30%": "#ffffff3D",   

        "primary-green": "#02EC8E", //rgb(2, 236, 142)
        "primary-black": "#000000", //rgb(0, 0, 0)
        "primary-grey": "#B5B5B5", //rgb(181, 181, 181)

        "secondary-grey": "#D9D9D9", //rgb(217, 217, 217)
      },

      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'neue': ['neue-haas-grotesk-display', 'sans-serif'],

      },

      backgroundImage: {
        "ico-arrow-right-green-cta": "url('../sources/icons/arrow-right-green-cta.svg')",
        "ico-arrow-right-green": "url('../sources/icons/arrow-right-green.svg')",
        "ico-arrow-right-white": "url('../sources/icons/arrow-right-white.svg')",
        "ico-burger-close": "url('../sources/icons/burger-close.svg')",
        "ico-burger-open": "url('../sources/icons/burger-open.svg')",
        "ico-instagram": "url('../sources/icons/instagram.svg')",
        "ico-accordion-close": "url('../sources/icons/accordion-close.svg')",
        "ico-accordion-open": "url('../sources/icons/accordion-open.svg')",
        "ico-button-arrow-white": "url('../sources/icons/button-arrow-white.svg')",
        "ico-arrow-bottom-grey": "url('../sources/icons/arrow-bottom-grey.svg')",

        

        "logo-header-slick.svg": "url('../sources/logos/header-slick.svg')",
        "logo-la-factory.svg": "url('../sources/logos/la-factory.svg')",

        "background-text-cta": "url('../sources/icons/background-text-cta.svg')",
        "background-homepage": "url('../sources/img/homepage.jpg')",
        "background-pages-services": "url('../sources/img/pages-services.jpeg')",
        "background-cards-achat": "url('../sources/img/cards/achat.jpeg')",
        "background-cards-vente": "url('../sources/img/cards/vente.jpeg')",
        "background-cards-recherche": "url('../sources/img/cards/recherche.jpeg')",
      },
    },
  },

  plugins: [],
};
