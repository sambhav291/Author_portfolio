module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'ub-grey': '#1a1a1a',
      'ub-warm-grey': "#f8f9fa",
      'ub-cool-grey': "#343a40",
      'ub-orange': "#2c5aa0",
      'ub-lite-abrgn': "#4a5568",
      'ub-med-abrgn': "#2d3748",
      'ub-drk-abrgn': "#1a202c",
      'ub-window-title': "#2d3748",
      'ub-gedit-dark': "#1a202c",
      'ub-gedit-light': "#2c5aa0",
      'ub-gedit-darker': "#000000",
    }),
    textColor: theme => ({
      ...theme('colors'),
      'ubt-grey': '#ffffff',
      'ubt-warm-grey': "#6c757d",
      'ubt-cool-grey': "#343a40",
      'ubt-blue': "#2c5aa0",
      'ubt-green': "#28a745",
      'ubt-gedit-orange': "#2c5aa0",
      'ubt-gedit-blue': "#2c5aa0",
      'ubt-gedit-dark': "#2c5aa0",
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'ubb-orange': '#2c5aa0'
    }),
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
