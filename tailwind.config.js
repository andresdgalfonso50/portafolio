/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554'
        },
        'violet': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065'
        },
        'emerald': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22'
        },
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F5F5F5',
        'bg-tertiary': '#FAFAFA',
        'text-primary': '#1d1d1f',
        'text-secondary': '#86868b',
        'text-muted': '#9CA3AF',
        'accent': '#0071e3',
        'accent-hover': '#0077ed',
        'accent-light': '#EFF6FF',
        'border': '#e5e5e5',
        'surface': '#FFFFFF',
        'surface-elevated': '#f8fafc',
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Galano', 'Inter', 'sans-serif']
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4', fontWeight: '500' }]
      },
      borderRadius: {
        // Soft Radius System: 8px (small), 16px (medium), 24px (large)
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'radius-sm': '8px',
        'radius': '12px',
        'radius-md': '16px',
        'radius-lg': '24px',
        'radius-xl': '32px',
        'radius-full': '9999px'
      },
      boxShadow: {
        // Minimal shadows - prefer borders
        'card': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 8px 0 rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'overlay': '0 16px 32px -8px rgba(0, 0, 0, 0.15)',
        'premium': '0 8px 30px rgb(0,0,0,0.04)',
        'premium-lg': '0 20px 60px -12px rgba(0,0,0,0.08)',
        // Color glows — used for accent buttons & elevated cards
        'glow-blue': '0 20px 60px -20px rgba(59, 130, 246, 0.35)',
        'glow-blue-lg': '0 30px 80px -20px rgba(59, 130, 246, 0.5)',
        'glow-violet': '0 20px 60px -20px rgba(124, 58, 237, 0.35)',
        'glow-violet-lg': '0 30px 80px -20px rgba(124, 58, 237, 0.5)',
        'glow-emerald': '0 20px 60px -20px rgba(16, 185, 129, 0.35)',
        'glow-emerald-lg': '0 30px 80px -20px rgba(16, 185, 129, 0.5)',
        'inner-soft': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.04)'
      },
      backgroundImage: {
        // Aurora gradients — used for hero/CTAs/fondo oscuro
        'aurora-violet': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(139, 92, 246, 0.25), transparent 60%)',
        'aurora-blue': 'radial-gradient(ellipse 70% 50% at 80% 100%, rgba(59, 130, 246, 0.25), transparent 60%)',
        'aurora-emerald': 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16, 185, 129, 0.15), transparent 60%)',
        'aurora-mixed': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(139, 92, 246, 0.2), transparent 50%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(59, 130, 246, 0.2), transparent 50%)',
        'aurora-dark': 'radial-gradient(ellipse 80% 60% at 30% 0%, rgba(124, 58, 237, 0.4), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(59, 130, 246, 0.3), transparent 60%)',
        'gradient-text-blue': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-text-violet': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'gradient-text-mixed': 'linear-gradient(135deg, #6D28D9 0%, #3B82F6 50%, #10B981 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23000' fill-opacity='0.04'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z'/%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2394a3b8' fill-opacity='0.25'/%3E%3C/svg%3E\")"
      },
      maxWidth: {
        'container': '1200px',
        'content': '800px'
      },
      spacing: {
        'section': '100px',
        'section-md': '80px',
        'section-sm': '60px'
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms'
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    }
  },
  plugins: []
}