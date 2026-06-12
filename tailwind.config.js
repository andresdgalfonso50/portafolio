/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Electric palette — ONLY system. Generic scales removed to prevent regression.
        'midnight': '#0A1022',
        'body': '#52607A',
        'surface': '#F8FAFC',
        'borderline': '#E8EDF5',
        'primary': '#0071e3',
        'secondary': '#0071e3',
        'highlight': '#0071e3',
        'chip': '#F3F5F8',
        // Legacy Apple-style neutrals (kept for backwards-compat only)
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
        // Color glows — Apple-style system blue only
        'glow-primary': '0 20px 60px -20px rgba(0, 113, 227, 0.20)',
        'glow-primary-lg': '0 30px 80px -20px rgba(0, 113, 227, 0.30)',
        'glow-secondary': '0 20px 60px -20px rgba(0, 113, 227, 0.20)',
        'glow-secondary-lg': '0 30px 80px -20px rgba(0, 113, 227, 0.30)',
        'inner-soft': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.04)'
      },
      backgroundImage: {
        // Apple-style: ultra-subtle system blue atmospheric gradients
        'aurora-primary': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(0, 113, 227, 0.06), transparent 60%)',
        'aurora-secondary': 'radial-gradient(ellipse 70% 50% at 80% 100%, rgba(0, 113, 227, 0.05), transparent 60%)',
        'aurora-mixed': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(0, 113, 227, 0.05), transparent 50%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(0, 113, 227, 0.05), transparent 50%)',
        'aurora-dark': 'radial-gradient(ellipse 80% 60% at 30% 0%, rgba(0, 113, 227, 0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(0, 113, 227, 0.05), transparent 60%)',
        'gradient-text-primary': 'linear-gradient(135deg, #0071e3 0%, #1D1D1F 100%)',
        'gradient-text-secondary': 'linear-gradient(135deg, #0071e3 0%, #1D1D1F 100%)',
        'gradient-text-mixed': 'linear-gradient(135deg, #1D1D1F 0%, #0071e3 50%, #1D1D1F 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23000' fill-opacity='0.04'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z'/%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2394a3b8' fill-opacity='0.25'/%3E%3C/svg%3E\")",
        'gradient-electric': 'linear-gradient(135deg, #0071e3 0%, #1D1D1F 50%, #0071e3 100%)',
        'gradient-electric-br': 'linear-gradient(to bottom right, #0071e3, #1D1D1F, #0071e3)'
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