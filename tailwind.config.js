/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b8c8',
          400: '#8590a8',
          500: '#67738d',
          600: '#525c73',
          700: '#434b5e',
          800: '#3a4051',
          900: '#1f2330',
          950: '#14171f',
        },
        brand: {
          50: '#eefbf4',
          100: '#d6f5e3',
          200: '#aeebc8',
          300: '#7ad9a8',
          400: '#43c084',
          500: '#1ea66b',
          600: '#128555',
          700: '#0f6a46',
          800: '#0e5439',
          900: '#0c4530',
          950: '#062719',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffedc6',
          200: '#ffd988',
          300: '#ffc04a',
          400: '#ffaa1f',
          500: '#f98a0b',
          600: '#dd6a02',
          700: '#b74d06',
          800: '#943d0c',
          900: '#7a330d',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(20,23,31,0.08), 0 8px 24px -8px rgba(20,23,31,0.12)',
        lift: '0 12px 40px -12px rgba(20,23,31,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
