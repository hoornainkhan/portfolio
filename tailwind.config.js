/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baigan: '#28293E',
        pinky: '#EF6D58',
        'light-baigan': '#B550F8',
        'light-pinky': '#FDF0E9',
        banana: '#F7CC47',
        'text-brown': '#391400',
        'text-light': '#FFFFFF',
        'lyt-bgn': '#32334C',
      },
      boxShadow: {
        orange: '0 4px 6px -1px rgba(255, 159, 64, 0.3), 0 2px 4px -1px rgba(255, 159, 64, 0.2)',
        blue: '0 4px 6px -1px rgba(33, 150, 243, 0.3), 0 2px 4px -1px rgba(33, 150, 243, 0.2)',
        lightBlue: '0 4px 6px -1px rgba(173, 216, 230, 0.3), 0 2px 4px -1px rgba(173, 216, 230, 0.2)',
        paleBlue: '0 4px 6px -1px rgba(173, 216, 230, 0.3), 0 2px 4px -1px rgba(173, 216, 230, 0.2)',
        yellow: '0 4px 6px -1px rgba(255, 255, 0, 0.3), 0 2px 4px -1px rgba(255, 255, 0, 0.2)',
        black: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        purple: '0 4px 6px -1px rgba(128, 0, 128, 0.3), 0 2px 4px -1px rgba(128, 0, 128, 0.2)',
        custom: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'windsong': ['WindSong', 'serif'],
      },
      // backgroundImage: {
      //   'pinkDev':"url('../src/assets/bg.jpg')",
      // },
    },
  },
  plugins: [],
};
