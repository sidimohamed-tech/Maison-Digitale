/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#2563EB',
          700: '#1E40AF',
        },
        gray: {
          900: '#111827',
          600: '#6B7280',
          50: '#F3F4F6',
        },
        green: {
          600: '#10B981',
        },
        yellow: {
          600: '#F59E0B',
        },
        red: {
          600: '#EF4444',
        },
      },
      borderRadius: {
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
};
