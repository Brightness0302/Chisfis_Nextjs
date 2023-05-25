/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "background":"white",
        "d-background":"black",
        "cornflowerblue":"cornflowerblue", 
        "aliceblue":"aliceblue", 
        "antiquewhite":"antiquewhite", 
        "beige":"beige",
        "wheat":"wheat",
        "thistle":"thistle",
        "cadetblue":"cadetblue",
        "slategrey":"slategrey",
        "white-1/2":"hsla(0,0%,100%,.7)",
        "black-1/2":"hsla(0,0%,20%,.7)",
        "light-brown":"#ff9900",
        'button-bg': 'rgba(0,0,0,.03)', 
        'button-d-bg': 'hsla(0,0%,100%,.06)', 
      },
      spacing: {
        '47': '188px', 
        '95': '380px', 
        '150': '38rem', 
        '9hr': '900px', //100*9
      },
      minWidth: {
        '12': '3rem', 
        '44': '176px', 
        '48': '12rem', 
        '50': '200px', 
        '56': '224px', 
        '95': '380px', 
        '96': '24rem', 
        '3hr': '300px', //100*3
        '24ts': '312px', //24*26
      }, 
      maxWidth: {
        '95': '380px', 
        '4hr': '400px', //100*4
        '8hr': '800px', //100*8
        'fit': '100vw', 
        '6/12': '50%', 
      }, 
      minHeight: {
        '47': '188px', 
        '48': '12rem', 
        '96': '24rem', 
      }, 
      lineHeight: {
        '4nt': '76px', //19*4
        '4xl': '40px', 
      },
      fontSize: {
        '3.3xl':'32px', 
        '4nt': '76px', //19*4
      },
      blur: {
        light: '1px', 
        xs: '2px',
      },
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    screens: {
      'xs': '280px',
      // => @media (min-width: 280px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}