/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#213448',
        'custom-medium': '#547792',
        'custom-light': '#94B4C1',
        'custom-beige': '#EAE0CF',
      },
    },
  },
};
