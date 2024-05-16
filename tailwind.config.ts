/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'exo-regular': ['Exo-Regular', 'sans-serif'],
      'exo-bold': ['Exo-Bold', 'sans-serif'],
    },
    screens: {
      md: '768px',
      lg: '1440px',
    },
    extend: {},
    corePlugins: {
      container: false,
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          minWidth: '320px',
          maxWidth: '375px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@screen md': {
            paddingLeft: '32px',
            paddingRight: '32px',
            maxWidth: '768px',
          },
          '@screen lg': {
            paddingLeft: '100px',
            paddingRight: '100px',
            maxWidth: '1440px',
          },
        },
      });
    },
  ],
};
