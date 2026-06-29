/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep agronomic green — institutional primary
        pine: {
          50: '#eef5ef',
          100: '#d4e6d7',
          200: '#a9ccaf',
          300: '#74ab7f',
          400: '#4a8a58',
          500: '#2f6b3d',
          600: '#1f5230',
          700: '#163f26',
          800: '#0f2e1d',
          900: '#0a2114',
          950: '#06160d',
        },
        // Harvest gold — accent, drawn from the CUTM seal & grain
        harvest: {
          50: '#fdf8ed',
          100: '#f8eccb',
          200: '#f0d894',
          300: '#e8c25c',
          400: '#e0ad36',
          500: '#cf9420',
          600: '#b3741a',
          700: '#8e551a',
          800: '#75451c',
          900: '#623a1b',
        },
        // Parchment — warm document background
        parchment: {
          DEFAULT: '#f7f4ec',
          50: '#fbfaf5',
          100: '#f7f4ec',
          200: '#efe9d8',
          300: '#e3d9bf',
        },
        // Spectral teal — remote-sensing data accent (NDVI / VNIR)
        spectral: {
          400: '#2aa090',
          500: '#1b7a6e',
          600: '#155f57',
        },
        // Laterite — Odisha red soil, used very sparingly
        laterite: '#b5572e',
        ink: '#15140f',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '76rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,46,29,0.04), 0 8px 28px -12px rgba(15,46,29,0.18)',
        lift: '0 20px 50px -20px rgba(15,46,29,0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn: 'fadeIn 0.8s ease both',
        scaleIn: 'scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
