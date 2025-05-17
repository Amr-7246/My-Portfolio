module.exports = {
  corePlugins: {
    backgroundClip: true,
  },
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        bigshot: ['"Bigshot One"', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
        frijole: ['Frijole', 'cursive'],
        joti: ['"Joti One"', 'cursive'],
        libre: ['"Libre Baskerville"', 'serif'],
        metal: ['"Metal Mania"', 'cursive'],
        nosifer: ['Nosifer', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        ribeye: ['Ribeye', 'cursive'],
        rowdies: ['Rowdies', 'sans-serif'],
        rubikDistressed: ['"Rubik Distressed"', 'cursive'],
        rubikPuddles: ['"Rubik Puddles"', 'cursive'],
        shafarik: ['Shafarik', 'cursive'],
        tagesschrift: ['Tagesschrift', 'cursive'],
        yuji: ['"Yuji Mai"', 'serif'],
      },
      animation: {
        'up-down': 'upDown 3s ease-in-out infinite', 
      },
      boxShadow: {
        'custom-lg': '0 10px 15px rgba(0, 0, 0, 0.3)', // Optional custom shadow
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-20px)' }, 
        },
      },
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        customPurple: 'rgb(144 89 255)',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      borderB: {
        'not-last': 'border-b border-gray-400 ',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    },
  ],
};
