/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que la ruta sea correcta
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#2d3748', // Gris oscuro
        'gray-light': '#4a5568', // Gris ligeramente más claro
      },
      backgroundImage: theme => ({
        'gradient-bg': 'linear-gradient(135deg, #2d3748, #4a5568)',
      }),
    },
  },
  plugins: [],
}
