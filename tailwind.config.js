module.exports = {
  purge: {
    content: ['./src/**/*.{html,njk,svg,md,js}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"Dank Mono"',
          '"Fira Code"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        serif: [
          '"New York"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
      colors: {
        'jsmn-yellow': '#e5cf5f',
        'jsmn-black': '#242323',
        'jsmn-blue': '#94cbe3',
        'jsmn-red': '#b73f53',
        'jsmn-mauve': '#6b334a',
      },
      rotate: {
        '-25': '-25deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

/*


font mono
      
*/
