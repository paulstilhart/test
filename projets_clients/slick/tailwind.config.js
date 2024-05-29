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
        "ico-arrow-right-green": "url('../sources/icons/arrow-right-green.svg')",
        "ico-burger-close": "url('../sources/icons/burger-close.svg')",
        "ico-burger-open": "url('../sources/icons/burger-open.svg')",
        "ico-instagram": "url('../sources/icons/instagram.svg')",

        "logo-header-slick.svg": "url('../sources/logos/header-slick.svg')",

        "background-text-cta": "url('../sources/icons/background-text-cta.svg')",
        "background-pages-services": "url('../sources/img/services/pages-services.jpeg')",
        "background-services-cards-achat": "url('../sources/img/services/cards/achat.jpeg')",
        "background-services-cards-vente": "url('../sources/img/services/cards/vente.jpeg')",
        "background-services-cards-recherche": "url('../sources/img/services/cards/recherche.jpeg')",
      },
    },
  },

  plugins: [],
};
