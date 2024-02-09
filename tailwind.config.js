module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'light-pink': '#F7C1D3',
        'dark-purple': '#5D3B8C',
        'light-blue': '#91C8FF',
        'soft-lavender': '#CAB8FF',
      },
      backgroundColor: {
        '91C8FF': '#91C8FF',
        '91C8FF-dark': '#7daecc', // Darkened version of Light Blue for hover state
        'CAB8FF': '#CAB8FF',
      },
      textColor: {
        'light-pink': '#F7C1D3',
        'dark-purple': '#5D3B8C',
      }
    },
  },
  variants: {},
  plugins: [],
}
