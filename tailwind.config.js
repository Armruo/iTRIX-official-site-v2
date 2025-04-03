const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A2A2A8',
          500: '#6E6E76',
          600: '#52525A',
          700: '#3F3F45',
          800: '#2E2E33',
          900: '#000000',
        },
        teal: {
          50: '#F4FFFD',
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#734fa1',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        indigo: {
          50: '#F8FBFF',
          100: '#EBF4FF',
          200: '#C3DAFE',
          300: '#A3BFFA',
          400: '#7F9CF5',
          500: '#667EEA',
          600: '#5A67D8',
          700: '#4C51BF',
          800: '#34399B',
          900: '#1E2156',
        },
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D8FD',
          300: '#D6BCFA',
          400: '#B794F4',
          500: '#568686',
          600: '#805AD5',
          700: '#6B46C1',
          800: '#553C9A',
          900: '#44337A',
        },
        pink: {
          50: '#FFF5F7',
          100: '#FFEBEF',
          200: '#FED7E2',
          300: '#FBB6CE',
          400: '#F687B3',
          500: '#d1abb1',
          600: '#D53F8C',
          700: '#B83280',
          800: '#97266D',
          900: '#702459',
        },
        // brain
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
            1: "#26242C",
        },
        n: {
            1: "#FFFFFF",
            2: "#CAC6DD",
            3: "#ADA8C3",
            4: "#757185",
            5: "#3F3A52",
            6: "#252134",
            7: "#15131D",
            8: "#0E0C15",
          },
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      spacing: {
        128: '32rem',
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
        // brain
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'red-hat-display': ['var(--font-red-hat-display)', 'sans-serif'],
        'cabinet-grotesk': ['var(--font-cabinet-grotesk)', 'sans-serif'], 
        // sans: ["var(--font-sora)", ...fontFamily.sans],
        // code: "var(--font-code)",
        // grotesk: "var(--font-grotesk)", 
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.63rem', { lineHeight: '1.35' }],
        '3xl': ['2.63rem', { lineHeight: '1.24' }],
        '4xl': ['3.5rem', { lineHeight: '1.18' }],
        '5xl': ['4rem', { lineHeight: '1.16' }],
        '6xl': ['5.5rem', { lineHeight: '1.11' }],
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
        //brain
        tagline: ".15em",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
        conic: "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // brain
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
          ".container": {
              "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
                  {},
          },
          ".h1": {
              "@apply font-inter text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
                  {},
          },
          ".h2": {
              "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                  {},
          },
          ".h3": {
              "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
          },
          ".h4": {
              "@apply text-[2rem] leading-normal": {},
          },
          ".h5": {
              "@apply text-2xl leading-normal": {},
          },
          ".h6": {
              "@apply font-inter text-lg leading-8": {},
          },
          ".body-1": {
              "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
                  {},
          },
          ".body-2": {
              "@apply font-inter text-[0.875rem] leading-6 md:text-base":
                  {},
          },
          ".caption": {
              "@apply text-sm": {},
          },
          ".tagline": {
              "@apply font-inter text-xs tracking-tagline uppercase":
                  {},
          },
          ".quote": {
              "@apply font-inter text-lg leading-normal": {},
          },
          ".button": {
              "@apply font-inter text-xs uppercase tracking-wider":
                  {},
          },
        });
        addUtilities({
            ".tap-highlight-color": {
                "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
            },
        });
    }),

  ],
};
