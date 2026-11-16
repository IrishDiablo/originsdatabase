/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#080b14',
          975: '#05080f',
        },
        accent: {
          DEFAULT: '#3b82f6',
          soft: '#60a5fa',
          muted: '#2563eb',
        },
        success: {
          DEFAULT: '#10b981',
          soft: '#34d399',
          muted: '#059669',
        },
        danger: {
          DEFAULT: '#ef4444',
          soft: '#f87171',
          muted: '#dc2626',
        },
        gold: {
          DEFAULT: '#d4a857',
          soft: '#e6c47a',
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.2)',
        'card-hover': '0 4px 16px -2px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.2)',
        'elevated': '0 12px 40px -4px rgba(0,0,0,0.5), 0 4px 12px -2px rgba(0,0,0,0.3)',
        'modal': '0 24px 64px -8px rgba(0,0,0,0.6), 0 8px 24px -4px rgba(0,0,0,0.4)',
        'focus': '0 0 0 3px rgba(59,130,246,0.15)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
