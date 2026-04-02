/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Paleta “coach digital” / confianza (Material blues + acentos) */
        coach: {
          light: '#e3f2fd',
          100: '#bbdefb',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        solution: '#00c853',
        alert: '#d32f2f',
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B1FF',
          400: '#3397FF',
          500: '#0056B3',
          600: '#004599',
          700: '#003480',
          800: '#002266',
          900: '#001133',
        },
        accent: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#D91E18',
          600: '#B51A15',
          700: '#9E1612',
          800: '#85120F',
          900: '#6C0E0C',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#333333',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        coach: '0 10px 30px rgba(0,0,0,0.2)',
        'coach-card': '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
        'coach-sm': '0 2px 4px rgba(0,0,0,0.1)',
        'coach-md': '0 4px 8px rgba(0,0,0,0.1)',
        'coach-btn': '0 8px 20px rgba(25, 118, 210, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.45s ease-out both',
        'step-in': 'stepIn 0.35s ease-out both',
        shake: 'shake 0.35s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stepIn: {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [],
}

