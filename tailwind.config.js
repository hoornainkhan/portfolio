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
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'windsong': ['WindSong', 'serif'],
      },
    },
  },
  plugins: [],
};
