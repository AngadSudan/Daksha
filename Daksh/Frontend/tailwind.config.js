/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about':'url(./src/Images/Daksh_About.jpg)',
        'login':'url(./src/Images/Daksh_Login.jpg)',
        'login-icon':'url(./src/Images/Login_Icon.png)'
      },perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
        '2000': '2000px',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
    }
  },
  plugins: [],
}

