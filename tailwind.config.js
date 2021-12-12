module.exports = {
  content: ['./src/**/*.{html,njk,svg,md,js}'],
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
          '"New York Medium"',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
