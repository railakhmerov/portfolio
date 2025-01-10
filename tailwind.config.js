/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '320px', // screen > 320px Не сделал
        // => @media (min-width: 320px) { ... }

        'dm': '375px', // screen > 320px Не сделал
        // => @media (min-width: 320px) { ... }

        'dm-1': '420px', // screen > 320px Не сделал
        // => @media (min-width: 320px) { ... }

        'dm-2': '500px', // screen > 500px Не сделал
        // => @media (min-width: 500px) { ... }

        'dm-3': '640px', // screen > 640px Не сделал
        // => @media (min-width: 640px) { ... }
  
        'md': '768px', // screen > 768px Не сделал
        // => @media (min-width: 768px) { ... }

        'md-1': '780px', // screen > 768px Не сделал
        // => @media (min-width: 768px) { ... }

        'md-2': '900px', // screen > 768px Не сделал
        // => @media (min-width: 768px) { ... }

        'md-3': '1000px', // screen > 768px Не сделал
        // => @media (min-width: 768px) { ... }

        'lg': '1024px', // screen > 1024px Не сделал
        // => @media (min-width: 1024px) { ... }

        'lg-1': '1100px', // screen > 1024px Не сделал
        // => @media (min-width: 1024px) { ... }
        
        'xl': '1280px', // screen > 1280px Не сделал
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px', // screen > 1440px Не сделал
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'my-blue-color': '#00edff',
        'my-purpur-color': '#c6c6ff',
        'my-gold-color': '#ffee00',
        'my-lime-color': '#98FF00',
        'my-black-color': '#000',
        'my-grey-color': '#aaaaaa',
        'my-dark-grey-color': '#222222',
        'my-input-inside-grey-color': '#3B3D3B',
        'my-white-color': '#fff',
        'my-bg-burger-black-color': 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
