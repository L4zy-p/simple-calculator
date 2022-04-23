module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(0.7)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}