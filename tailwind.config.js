/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      azul : '#07396b',
      rosa : '#ffc1d4',
      branco : '#fafafa',
      cinza_c : '#e7e7e7',
      cinza_m : '#898989',
      cinza_e : '#121212'
    },
    fontFamily: {
      titulo : ['Anton', 'sans-serif'],
      personalizado : ['Flavors', 'cursive']

    },
    screens: {
      'mob': '640px',
      // => @media (min-width: 640px) { ... }

      'tab': '768px',
      // => @media (min-width: 768px) { ... }

      'lap': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1280px',
      // => @media (min-width: 1280px) { ... }

      'big': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '1' : '1px',
        '2' : '2px',
        '5' : '5px',
        '7' : '7px',
        '10' : '10px',
        '12' : '12px',
        '15' : '15px',
        '20' : '20px',
        '25' : '25px',
        '30' : '30px',
        '35' : '35px',
        '40' : '40px',
        '50' : '50px',
        '60' : '60px',
        '70' : '70px',
        '80' : '80px',
        '90' : '90px',
        '100' : '100px',
      },
      borderRadius: {
        '5' : '5px',
        '10' : '10px',
        '100%' : '100%'
      }
    },
  },
  plugins: [],
}

