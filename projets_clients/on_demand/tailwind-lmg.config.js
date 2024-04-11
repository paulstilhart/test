/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { apply } = require('lodash.merge')
const plugin = require('tailwindcss/plugin')
const {DEFAULT} = require("flowbite-typography/src/styles");

module.exports = {
  //darkMode: 'class',
  content: [
    "./app/scripts/*.js",
    "./app/_includes/assets/js/*.js",
    "./app/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-datepicker/dist/js/*.js"
  ],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors: {
        'raspberry': {
          DEFAULT: '#B10967',
          50: '#FEF0F8',
          100: '#FEE2F2',
          200: '#FCC0E2',
          300: '#FA94CE',
          400: '#F650AE',
          500: '#B10967',
          600: '#9B085B',
          700: '#880750',
          800: '#700642',
          900: '#4E042E'
        },
        'violet': {
          DEFAULT: '#412761',
          50: '#ECE6F5',
          100: '#D7C8E9',
          200: '#B296D5',
          300: '#8A5FBF',
          400: '#643C95',
          500: '#412761',
          600: '#382254',
          700: '#311D49',
          800: '#2A193E',
          900: '#20132F'
        },
        'gray': {
          DEFAULT: '#8F8F8F',
          50: '#FFFFFF',
          100: '#F2F2F2',
          200: '#DBDBDB',
          300: '#C2C2C2',
          400: '#A8A8A8',
          500: '#8F8F8F',
          600: '#787878',
          700: '#5E5E5E',
          800: '#454545',
          900: '#2D2D2D'
        },
        'dark-blue': {
          DEFAULT: '#6987D3',
          50: '#EFF2FA',
          100: '#DFE6F6',
          200: '#C4D0EE',
          300: '#A4B6E5',
          400: '#88A0DD',
          500: '#6987D3',
          600: '#496ECA',
          700: '#365BBA',
          800: '#2D4C9A',
          900: '#243D7C'
        },
        'blue': {
          DEFAULT: '#47BCFF',
          50: '#F9FCFF',
          100: '#C2E9FF',
          200: '#A3DDFF',
          300: '#85D2FF',
          400: '#66C7FF',
          500: '#47BCFF',
          600: '#29B0FF',
          700: '#0AA5FF',
          800: '#0A90E8',
          900: '#017ACD'
        },
        'dark-green': {
          DEFAULT: '#31C8D3',
          50: '#ECEEEE',
          100: '#E1EAEA',
          200: '#CDE3E5',
          300: '#ABDBDE',
          400: '#7DD3D9',
          500: '#31C8D3',
          600: '#1DB8C3',
          700: '#11A6B0',
          800: '#09919A',
          900: '#007078'
        },
        'green': {
          DEFAULT: '#C1DEB5',
          50: '#F9FCF8',
          100: '#F3F9F1',
          200: '#E7F3E3',
          300: '#D9EBD1',
          400: '#CDE5C3',
          500: '#C1DEB5',
          600: '#B5D8A6',
          700: '#AAD298',
          800: '#9BCA87',
          900: '#90C479'
        },
        'yellow': {
          DEFAULT: '#FFD36B',
          50: '#FFFAF0',
          100: '#FFF6E0',
          200: '#FFEEC7',
          300: '#FFE5A8',
          400: '#FFDC8A',
          500: '#FFD36B',
          600: '#FFCB52',
          700: '#FFC233',
          800: '#FFB914',
          900: '#F8AF00'
        },
        'orange': {
          DEFAULT: '#FFBA85',
          50: '#FFF6F0',
          100: '#FFEEE0',
          200: '#FFDFC7',
          300: '#FFCEA8',
          400: '#FFBF8F',
          500: '#FFBA85',
          600: '#FFA057',
          700: '#FF8E38',
          800: '#FF801F',
          900: '#FF7000'
        },
        'red': {
          DEFAULT: '#FF8585',
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFCCCC',
          300: '#FFB8B8',
          400: '#FF9E9E',
          500: '#FF8585',
          600: '#FF6B6B',
          700: '#FF5757',
          800: '#FF3D3D',
          900: '#FF2424'
        },
        'rose': {
          DEFAULT: '#FF61A0',
          50: '#FFEBF3',
          100: '#FFE0ED',
          200: '#FFC2DA',
          300: '#FFA3C8',
          400: '#FF80B3',
          500: '#FF61A0',
          600: '#FF428E',
          700: '#FF247B',
          800: '#FF0569',
          900: '#E4005B'
        },
        'beige': {
          DEFAULT: '#FDEDE2',
          50: '#FFFCFA',
          100: '#FFFCFA',
          200: '#FEF9F5',
          300: '#FEF6F1',
          400: '#FEF0E7',
          500: '#FDEDE2',
          600: '#FDEBDD',
          700: '#FDE8D9',
          800: '#FCE5D4',
          900: '#FCE1CE'
        },
        'brown': {
          DEFAULT: '#E6AD8E',
          50: '#FCF6F2',
          100: '#FAF0EA',
          200: '#F5DED1',
          300: '#F0CEBC',
          400: '#EBBCA3',
          500: '#E6AD8E',
          600: '#E19B75',
          700: '#DC8B60',
          800: '#D77947',
          900: '#D26A30'
        },
        'success': {
          DEFAULT: '#00A083',
          50: '#DBFFF8',
          100: '#B8FFF2',
          200: '#75FFE6',
          300: '#2EFFD9',
          400: '#00E6BB',
          500: '#00A083',
          600: '#008A70',
          700: '#007560',
          800: '#00614F',
          900: '#00473A',
          'surface':{
            'md': '#007560', //'var(--color-success-600)'
            'xlow': '#DBFFF8',//'var(--color-success-50)'
          },
          'text':{
            'md': '#007560',//'var(--color-success-700)'
          },
          'icon':{
            'md': '#007560',//'var(--color-success-700)'
          },
          'stroke':{
            'md': '#008A70', //'var(--color-success-600)',
            'low': '#00E6BB',//'var(--color-success-400)'
          }
        },
        'warning': {
          DEFAULT: '#FF964A',
          50: '#FFF3EB',
          100: '#FFEADB',
          200: '#FFD5B8',
          300: '#FFC194',
          400: '#FFAC70',
          500: '#FF964A',
          600: '#FF7614',
          700: '#DB5B00',
          800: '#C75300',
          900: '#6B2D00',
          'surface':{
            'md': '#FF7614',//'var(--color-warning-600)',
            'xlow': '#FFF3EB',//'var(--color-warning-50)'
          },
          'text':{
            'md': '#C75300',//'var(--color-warning-800)'
          },
          'icon':{
            'md': '#C75300',//'var(--color-warning-800)'
          },
          'stroke':{
            'md': '#FF7614',//'var(--color-warning-600)',
            'low': '#FFAC70',//'var(--color-warning-400)'
          }
        },
        'error': {
          DEFAULT: '#E6AD8E',
          50: '#FFE6E6',
          100: '#FFD1D1',
          200: '#FF9E9E',
          300: '#FE7171',
          400: '#FE3E3E',
          500: '#FE1010',
          600: '#E00101',
          700: '#B70101',
          800: '#890101',
          900: '#610000',
          'surface':{
            'md': '#E00101',//'var(--color-error-600)',
            'xlow': '#FFE6E6',//'var(--color-error-50)'
          },
          'text':{
            'md': '#B70101',//'var(--color-error-700)'
          },
          'icon':{
            'md': '#B70101',//'var(--color-error-700)'
          },
          'stroke':{
            'md': '#E00101',//'var(--color-error-600)',
            'low': '#FE3E3E',//'var(--color-error-400)'
          }
        },
        'primary':{
          '700': '#700642',
          'surface':{
            'xhigh': '#700642',//'var(--color-raspberry-800)',
            'md': '#B10967',//'var(--color-raspberry-500)',
            'low': '#FEE2F2',//'var(--color-raspberry-100)',
            'xlow': '#FEF0F8',//'var(--color-raspberry-50)'
          },
          'text':{
            'xhigh': '#700642',//'var(--color-raspberry-800)',
            'md': '#B10967',//'var(--color-raspberry-500)',
          },
          'icon':{
            'md': '#B10967',//'var(--color-raspberry-500)',
          },
          'stroke':{
            'md': '#B10967',//'var(--color-raspberry-500)',
          }
        },
        'secondary':{
          'surface':{
            'xhigh': '#2A193E',//'var(--color-violet-800)',
            'md': '#412761',//'var(--color-violet-500)',
            'low': '#D7C8E9',//'var(--color-violet-100)',
            'xlow': '#ECE6F5',//'var(--color-violet-50)'
          },
          'text':{
            'md': '#412761',//'var(--color-violet-500)',
          },
          'icon':{
            'md': '#412761',//'var(--color-violet-500)',
          },
          'stroke':{
            'md': '#412761',//'var(--color-violet-500)',
          }
        },
        'tertiary':{
          'dark-blue':{
            'xhigh': '#243D7C',//'var(--color-dark-blue-900)',
            'high': '#2D4C9A',//'var(--color-dark-blue-800)',
            'md': '#496ECA',//'var(--color-dark-blue-600)',
            'low': '#88A0DD',//'var(--color-dark-blue-400)',
            'xlow': '#C4D0EE',//'var(--color-dark-blue-200)'
          },
          'blue':{
            'xhigh': '#017ACD',//'var(--color-blue-900)',
            'high': '#0A90E8',//'var(--color-blue-800)',
            'md': '#29B0FF',//'var(--color-blue-600)',
            'low': '#66C7FF',//'var(--color-blue-400)',
            'xlow': '#C2E9FF',//'var(--color-blue-200)'
          },
          'dark-green':{
            'xhigh': '#007078',//'var(--color-dark-green-900)',
            'high': '#09919A',//'var(--color-dark-green-800)',
            'md': '#1DB8C3',//'var(--color-dark-green-600)',
            'low': '#7DD3D9',//'var(--color-dark-green-400)',
            'xlow': '#CDE3E5',//'var(--color-dark-green-200)'
          },
          'green':{
            'xhigh': '#90C479',//'var(--color-green-900)',
            'high': '#9BCA87',//'var(--color-green-800)',
            'md': '#B5D8A6',//'var(--color-green-600)',
            'low': '#CDE5C3',//'var(--color-green-400)',
            'xlow': '#E7F3E3',//'var(--color-green-200)'
          },
          'yellow':{
            'xhigh': '#F8AF00',//'var(--color-yellow-900)',
            'high': '#FFB914',//'var(--color-yellow-800)',
            'md': '#FFCB52',//'var(--color-yellow-600)',
            'low': '#FFDC8A',//'var(--color-yellow-400)',
            'xlow': '#FFEEC7',//'var(--color-yellow-200)'
          },
          'orange':{
            'xhigh': '#FF7000',//'var(--color-orange-900)',
            'high': '#FF801F',//'var(--color-orange-800)',
            'md': '#FFA057',//'var(--color-orange-600)',
            'low': '#FFBF8F',//'var(--color-orange-400)',
            'xlow': '#FFDFC7',///'var(--color-orange-200)'
          },
          'red':{
            'xhigh': '#FF2424',//'var(--color-red-900)',
            'high': '#FF3D3D',//'var(--color-red-800)',
            'md': '#FF6B6B',//'var(--color-red-600)',
            'low': '#FF9E9E',//'var(--color-red-400)',
            'xlow': '#FFCCCC',//'var(--color-red-200)'
          },
          'rose':{
            'xhigh': '#E4005B',//'var(--color-rose-900)',
            'high': '#FF0569',//'var(--color-rose-800)',
            'md': '#FF428E',//'var(--color-rose-600)',
            'low': '#FF80B3',//'var(--color-rose-400)',
            'xlow': '#FFC2DA',//'var(--color-rose-200)'
          },
          'beige':{
            'xhigh': '#FCE1CE',//'var(--color-beige-900)',
            'high': '#FCE5D4',//'var(--color-beige-800)',
            'md': '#FDEBDD',//'var(--color-beige-600)',
            'low': '#FEF0E7',//'var(--color-beige-400)',
            'xlow': '#FEF9F5',//'var(--color-beige-200)'
          },
          'brown':{
            'xhigh': '#D26A30',//'var(--color-brown-900)',
            'high': '#D77947',//'var(--color-brown-800)',
            'md': '#E19B75',//'var(--color-brown-600)',
            'low': '#EBBCA3',//'var(--color-brown-400)',
            'xlow': '#F5DED1',//'var(--color-brown-200)'
          }
        },
        'neutral':{
          'surface':{
            'xhigh': '#2D2D2D',//'var(--color-gray-900)',
            'high': '#A8A8A8',//'var(--color-gray-400)',
            'md': '#F2F2F2',//'var(--color-gray-100)',
            'low': '#F9FCFF',
            'xlow': '#FFFFFF'
          },
          'text':{
            'xhigh': '#2D2D2D',//'var(--color-gray-900)',
            'high': '#5E5E5E',//'var(--color-gray-700)',
            'md': '#A8A8A8',//'var(--color-gray-400)',
            'low': '#DBDBDB',//'var(--color-gray-200)',
            'xlow': '#FFFFFF'
          },
          'icon':{
            'xhigh': '#2D2D2D',//'var(--color-gray-900)',
            'high': '#5E5E5E',//'var(--color-gray-700)',
            'md': '#A8A8A8',//'var(--color-gray-400)',
            'low': '#DBDBDB',//'var(--color-gray-200)',
            'xlow': '#FFFFFF'
          },
          'stroke':{
            'xhigh': '#2D2D2D',//'var(--color-gray-900)',
            'high': '#5E5E5E',//'var(--color-gray-700)',
            'md': '#A8A8A8',//'var(--color-gray-400)',
            'low': '#DBDBDB',//'var(--color-gray-200)',
            'xlow': '#FFFFFF'
          }
        },
      },
      fontFamily: {
        'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
        'mono': ['Manrope', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '15xl': '104px',
        '14xl': '96px',
        '13xl': '82px',
        '12xl': '74px',
        '11xl': '64px',
        '10xl': '56px',
        '9xl': '52px',
        '8xl': '48px',
        '7xl': '42px',
        '6xl': '40px',
        '5xl': '36px',
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
        'xl': '20px',
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px'
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      lineHeight: {
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '32': '8rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '36': '9rem',
        '37': '9.25rem',
        '38': '9.5rem'
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '64px',
        '7xl': '96px',
        '8xl': '128px',
        'badge': '4px',
        'ds-xs': '8px',
        'ds-sm': '16px',
        'ds-md': 'var(--borderRadius-4xl)',
        'ds-lg': '96px',
        'ds-xl': '128px',
        'ds-full': '9999px',
      },
      spacing: {
        'block-xs': '1.5rem',
        'block-sm': '3rem',
        'block-md': '4rem',
        'block-lg': '6rem',
        'block-xl': '8rem',
        'component-3xs': '0.125rem',
        'component-2xs': '0.25rem',
        'component-xs': '0.375rem',
        'component-sm': '0.5rem',
        'component-md': '0.75rem',
        'component-lg': '1rem',
        'component-xl': '1.5rem',
        'component-2xl': '3rem',
        'component-3xl': '3.5rem',
        'component-4xl': '6rem',
        'space-between-2xs': '0.125rem',
        'space-between-xs': '0.25rem',
        'space-between-sm': '0.5rem',
        'space-between-md': '0.75rem',
        'space-between-lg': '1rem',
        'space-between-xl': '1.5rem',
        'space-between-2xl': '2rem',
        'space-between-3xl': '3rem',
        'space-between-4xl': '4rem',
        'icon-shapes-1': '26px',
        'icon-shapes-2': '32px',
        'icon-shapes-3': '36px',
        'icon-shapes-4': '40px',
        'icon-shapes-5': '42px',
        'icon-shapes-6': '48px',
        'icon-shapes-7': '56px',
        'icon-shapes-8': '64px',
        'icon-shapes-9': '80px',
        'badge-icon-1': '14px',
        'badge-icon-2': '16px',
        'badge-icon-3': '20px',
        'badge-icon-4': '24px',
        'link-icon-1': '16px',
        'link-icon-2': '24px',
        'link-icon-3': '32px',
        'pagination-button-icon':'24px',
      },
      minWidth: {
        'link-icon-1': '16px',
        'link-icon-2': '24px',
        'link-icon-3': '32px',
      },
      gap: {
        'space-between-2xs': '0.125rem',//'var(--spacing-space-between-2xs)',
        'space-between-xs': '0.25rem',//'var(--spacing-space-between-xs)',
        'space-between-sm': '0.5rem',//'var(--spacing-space-between-sm)',
        'space-between-md': '0.75rem',//'var(--spacing-space-between-md)',
        'space-between-lg': '1rem',//'var(--spacing-space-between-lg)',
        'space-between-xl': '1.5rem',//'var(--spacing-space-between-xl)',
        'space-between-2xl': '2rem',//'var(--spacing-space-between-2xl)',
        'space-between-3xl': '3rem',//'var(--spacing-space-between-3xl)',
        'space-between-4xl': '4rem'//'var(--spacing-space-between-4xl)'
      },
      space: {
        'space-between-2xs': '0.125rem',//'var(--spacing-space-between-2xs)',
        'space-between-xs': '0.25rem',//'var(--spacing-space-between-xs)',
        'space-between-sm': '0.5rem',//'var(--spacing-space-between-sm)',
        'space-between-md': '0.75rem',//'var(--spacing-space-between-md)',
        'space-between-lg': '1rem',//'var(--spacing-space-between-lg)',
        'space-between-xl': '1.5rem',//'var(--spacing-space-between-xl)',
        'space-between-2xl': '2rem',//'var(--spacing-space-between-2xl)',
        'space-between-3xl': '3rem',//'var(--spacing-space-between-3xl)',
        'space-between-4xl': '4rem'//'var(--spacing-space-between-4xl)'
      },
      boxShadow: {
        'sm': '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
        'lg': '0px 4px 25px 0px rgba(217, 222, 231, 0.50)',
        'inner-sm': 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'badge-inner': 'inset 0 0 0 1.5px',
        'link-1': 'inset 0 -1px ',
        'link-2': 'inset 0px -2px ',
        'link-focus': 'inset 0 0 0 2px',
        'button-outline': 'inset 0 0 0 2px',
        'button-nav-hover': 'inset 0 -4px',
        'button-nav-focus': 'inset 0 0 0 3px',
        'controls': 'inset 0 0 0 1.5px',
        'controls-invalid': '0 0 0 1.5px',
      },
      dropShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.25)',
        'xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'xs': '375px',
        'md': '768px',
        'xl': '1400px',
      },
      maxWidth: {
        'xs': 'var(--screens-xs)',
      },
      borderWidth: {
        '3': '3px',
        '10': '10px',
      },
      outlineWidth: {
      '3': '3px',
      '10': '10px',
      },
      backgroundImage: {
        'image-card-gradiant':"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 34.94%, rgba(0, 0, 0, 0.28) 40%, rgba(0, 0, 0, 0.60) 49.84%, rgba(0, 0, 0, 0.83) 100%)",
      }
    },
  },
  'plugins': [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    plugin(function({ theme, addBase, addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addComponents({
        // BRAND LOGO
        '.size-logo-brand-xs': {
          height: '24px',
          width: 'auto'
        },
        '.size-logo-brand-sm': {
          height: '32px',
          width: 'auto'
        },
        '.size-logo-brand-md': {
          height: '43px',
          width: 'auto'
        },
        '.size-logo-brand-lg': {
          height: '58px',
          width: 'auto'
        },
        '.size-logo-brand-xl': {
          height: '87px',
          width: 'auto'
        },
        '.size-logo-brand-horizontal-xs': {
          height: '24px',
          width: 'auto'
        },
        '.size-logo-brand-horizontal-sm': {
          height: '32px',
          width: 'auto'
        },
        '.size-logo-brand-horizontal-md': {
          height: '48px',
          width: 'auto'
        },
        '.size-logo-brand-horizontal-lg': {
          height: '64px',
          width: 'auto'
        },
        '.size-logo-brand-horizontal-xl': {
          height: '96px',
          width: 'auto'
        },
        '.size-logo-brand-vertical-xs': {
          height: '54px',
          width: 'auto'
        },
        '.size-logo-brand-vertical-sm': {
          height: '70px',
          width: 'auto'
        },
        '.size-logo-brand-vertical-md': {
          height: '102px',
          width: 'auto'
        },
        '.size-logo-brand-vertical-lg': {
          height: '133px',
          width: 'auto'
        },
        '.size-logo-brand-vertical-xl': {
          height: '196px',
          width: 'auto'
        },
        // AVATAR
        '.avatar-size--xs': {
          height: '32px',
          width: '32px',
          borderWidth: config('theme.borderWidth.3'),
          flex: 'none',
        },
        '.avatar-size--sm': {
          height: '64px',
          width: '64px',
          borderWidth: config('theme.borderWidth.3'),
          flex: 'none',
        },
        '.avatar-size--md': {
          height: '80px',
          width: '80px',
          borderWidth: config('theme.borderWidth.4'),
          flex: 'none',
        },
        '.avatar-size--lg': {
          height: '160px',
          width: '160px',
          borderWidth: config('theme.borderWidth.10'),
          flex: 'none',
        },
        '.avatar-size--xl': {
          height: '220px',
          width: '220px',
          borderWidth: config('theme.borderWidth.10'),
          flex: 'none',
        },
      })
    }),

// This plugin expose core color palette has css variables
    plugin(function({ addUtilities, theme }) {
      function extractVars (obj, group = '', prefix) {
        return Object.keys(obj).reduce((vars, key) => {
          const value = obj[key];
          const cssVariable = key === "DEFAULT" ? `--${prefix}${group}` : `--${prefix}${group}-${key}`;

          const newVars =
              typeof value === 'string'
                  ? { [cssVariable]: value }
                  : extractVars(value, `-${key}`, prefix);

          return { ...vars, ...newVars };
        }, {});
      }
      addUtilities({
        ':root': {
          ...extractVars(theme('colors'), '', 'color'),
          ...extractVars(theme('spacing'), '', 'spacing'),
          ...extractVars(theme('boxShadow'), '', 'box-shadow'),
          ...extractVars(theme('screens'), '', 'screens')
        }
      })
    })
  ],
  safelist: [
    'btn-outline-disabled',
    'btn-disabled',
    'btn-success',
    'btn-size-xs',
    'btn-size-sm',
    'btn-size-base',
    'btn-size-lg',
    'btn-size-xl',
    'btn-size-xs--icon',
    'btn-size-sm--icon',
    'btn-size-base--icon',
    'btn-size-lg--icon',
    'btn-size-xl--icon',
    'btn-size-xs--spinner',
    'btn-size-sm--spinner',
    'btn-size-base--spinner',
    'btn-size-lg--spinner',
    'btn-size-xl--spinner',
    'text-neutral-text-xlow',
    'text-primary-text-md',
    'text-secondary-text-md',
    'text-tertiary-text-md',
    'text-tertiary-blue-high',
    'text-tertiary-blue-xhigh',
    'text-neutral-text-high',
    'bg-tertiary-blue-xhigh',
    'bg-tertiary-dark-blue-xlow',
    'after:shadow-primary-stroke-md',
    'after:shadow-secondary-stroke-md',
    'after:shadow-tertiary-stroke-md',
    'hover:bg-primary-surface-xlow',
    'hover:bg-secondary-surface-xlow',
    'hover:bg-tertiary-surface-xlow',
    'hover:bg-tertiary-blue-xlow',
    'active:bg-primary-surface-low',
    'active:bg-primary-surface-md',
    'active:bg-secondary-surface-low',
    'active:bg-secondary-surface-md',
    'active:bg-tertiary-surface-low',
    'active:bg-tertiary-blue-xhigh',
    '[&.active]:bg-primary-surface-low',
    '[&.active]:bg-secondary-surface-low',
    '[&.active]:bg-tertiary-surface-low',
    '[&.active]:bg-tertiary-blue-xhigh',
    'badge-label-size--sm',
    'badge-label-size--base',
    'badge-label-size--lg',
    'badge-label-size--xl',
    'badge-label-outline-size--sm',
    'badge-label-outline-size--base',
    'badge-label-outline-size--lg',
    'badge-label-outline-size--xl',
    'badge-chips-size--sm',
    'badge-chips-size--base',
    'badge-chips-size--lg',
    'badge-chips-size--xl',
    'rounded-full',
    'rounded-badge',
    'active:bg-primary-surface-xlow',
    'active:bg-secondary-surface-xlow',
    'active:bg-tertiary-blue-xlow',
    'hover:bg-primary-surface-md',
    'hover:bg-secondary-surface-md',
    'hover:bg-tertiary-blue-xhigh',
    '[&.checked]:bg-primary-surface-xlow',
    '[&.checked]:bg-secondary-surface-xlow',
    '[&.checked]:bg-tertiary-blue-xlow',
    'fill-primary-icon-md',
    'fill-secondary-icon-md',
    'fill-tertiary-blue-xhigh',
    'link-size--sm',
    'link-size--base',
    'link-size--lg',
    'link-size--xl',
    'link-size--2xl',
    'icon-shapes-dark-size--xs',
    'icon-shapes-dark-size--sm',
    'icon-shapes-dark-size--base',
    'icon-shapes-dark-size--md',
    'icon-shapes-dark-size--lg',
    'icon-shapes-dark-size--xl',
    'icon-shapes-light-size--xs',
    'icon-shapes-light-size--sm',
    'icon-shapes-light-size--base',
    'icon-shapes-light-size--md',
    'icon-shapes-light-size--lg',
    'icon-shapes-light-size--xl',
    'avatar-size--xs', 'avatar-size--sm', 'avatar-size--md','avatar-size--lg','avatar-size--xl',
    'search-primary', 'search-secondary', 'search-tertiary',
    'focus:shadow-tertiary-dark-blue-xhigh',
  ]
}
