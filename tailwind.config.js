module.exports = {
  mode: 'jit',
  enabled: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // class, 'media' or boolean
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
 },      
    extend: {
      colors: {
      },
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
