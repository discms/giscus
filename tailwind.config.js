module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/*.css',
  ],
  theme: {
    extend: {
      screens: {
        // To use device width instead of min-width.
        // Might be useful because min-width will take the iframe's width instead.
        dsm: { raw: '(min-device-width: 640px)' },
        dmd: { raw: '(min-device-width: 768px)' },
        dlg: { raw: '(min-device-width: 1024px)' },
        dxl: { raw: '(min-device-width: 1280px)' },
        d2xl: { raw: '(min-device-width: 1536px)' },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
    },
  },
};
