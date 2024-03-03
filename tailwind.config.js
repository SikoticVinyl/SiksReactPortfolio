module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
        '91C8FF-dark': '#7daecc',
        'CAB8FF': '#CAB8FF',
      },
      textColor: {
        'light-pink': '#F7C1D3',
        'dark-purple': '#5D3B8C',
      }
    },
  },
  plugins: [],
}