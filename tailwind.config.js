module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'serif': ['Playfair Display', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      'mono': ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out forwards',
      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
      'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
      'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      'scale-in': 'scaleIn 0.5s ease-out forwards',
      'float': 'float 6s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite alternate',
      'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      'typewriter': 'typewriter 4s steps(40, end) 1s forwards',
      'book-flip': 'bookFlip 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      'parallax-slow': 'parallax 20s linear infinite',
      'parallax-fast': 'parallax 10s linear infinite',
      'shimmer': 'shimmer 2.5s infinite',
      'bounce-gentle': 'bounceGentle 2s infinite',
      'rotate-slow': 'rotateSlow 20s linear infinite',
      'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      'wave': 'wave 2.5s ease-in-out infinite',
      // Add spin for loader
      'spin': 'spin 1s linear infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      fadeInDown: {
        '0%': { opacity: '0', transform: 'translateY(-30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      slideInLeft: {
        '0%': { opacity: '0', transform: 'translateX(-50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' }
      },
      slideInRight: {
        '0%': { opacity: '0', transform: 'translateX(50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' }
      },
      scaleIn: {
        '0%': { opacity: '0', transform: 'scale(0.9)' },
        '100%': { opacity: '1', transform: 'scale(1)' }
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' }
      },
      glow: {
        '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
        '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' }
      },
      gradientShift: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' }
      },
      typewriter: {
        '0%': { width: '0ch' },
        '100%': { width: '100%' }
      },
      bookFlip: {
        '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
        '50%': { transform: 'perspective(1000px) rotateY(-90deg)' },
        '100%': { transform: 'perspective(1000px) rotateY(0deg)' }
      },
      parallax: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' }
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% center' },
        '100%': { backgroundPosition: '200% center' }
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }
      },
      rotateSlow: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      },
      pulseSoft: {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.05)', opacity: '0.8' }
      },
      wave: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(5deg)' },
        '75%': { transform: 'rotate(-5deg)' }
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      // Deep Blue-Gray Palette
      'primary-dark': '#0a0e1a',        // Deepest blue-gray for main backgrounds
      'primary-darker': '#121825',      // Slightly lighter for containers
      'primary-medium': '#1e2533',      // Medium blue-gray for cards/panels
      'primary-light': '#2a3441',       // Lighter blue-gray for hover states
      'primary-accent': '#354050',      // Subtle accent for borders/dividers
      
      // Accent Colors - Rich Gold & Deep Red
      'accent-gold': '#c9a961',         // Rich, sophisticated gold
      'accent-gold-light': '#e6c878',   // Lighter gold for highlights
      'accent-gold-dark': '#b8965a',    // Darker gold for depth
      'accent-red': '#a8354a',          // Deep, elegant red
      'accent-red-light': '#c54562',    // Lighter red for hover states
      'accent-red-dark': '#8e2d3f',     // Darker red for shadows
      
      // Text Colors
      'text-primary': '#f7f9fc',        // Subtle off-white for main text
      'text-secondary': '#d1d9e0',      // Slightly dimmed for secondary text
      'text-muted': '#9ba3ac',          // Muted for less important text
      'text-accent': '#7a828a',         // Very muted for hints/placeholders
      
      // Legacy Ubuntu colors (for compatibility)
      'literary-dark': '#0a0e1a',
      'literary-darker': '#121825',
      'literary-navy': '#1e2533',
      'literary-purple': '#2a3441',
      'literary-gold': '#c9a961',
      'literary-gold-light': '#e6c878',
      'literary-cream': '#f7f9fc',
      'literary-paper': '#f7f9fc',
      'ub-grey': '#1e2533',
      'ub-warm-grey': "#f7f9fc",
      'ub-cool-grey': "#354050",
      'ub-orange': "#c9a961",
      'ub-lite-abrgn': "#2a3441",
      'ub-med-abrgn': "#1e2533",
      'ub-drk-abrgn': "#121825",
      'ub-window-title': "#1e2533",
      'ub-gedit-dark': "#121825",
      'ub-gedit-light': "#c9a961",
      'ub-gedit-darker': "#0a0e1a",
    }),
    textColor: theme => ({
      ...theme('colors'),
      // Primary Text Colors
      'primary': '#f7f9fc',             // Main text color - subtle off-white
      'secondary': '#d1d9e0',           // Secondary text - slightly dimmed
      'muted': '#9ba3ac',               // Muted text for less important content
      'accent': '#7a828a',              // Very muted for hints/placeholders
      
      // Accent Text Colors
      'accent-gold': '#c9a961',         // Rich gold for highlights
      'accent-gold-light': '#e6c878',   // Lighter gold for hover states
      'accent-gold-dark': '#b8965a',    // Darker gold for depth
      'accent-red': '#a8354a',          // Deep red for emphasis
      'accent-red-light': '#c54562',    // Lighter red for interactive states
      
      // Legacy literary colors (for compatibility)
      'literary-gold': '#c9a961',
      'literary-gold-light': '#e6c878',
      'literary-silver': '#d1d9e0',
      'literary-cream': '#f7f9fc',
      'literary-navy': '#1e2533',
      'literary-dark': '#0a0e1a',
      
      // Legacy Ubuntu colors (for compatibility)
      'ubt-grey': '#f7f9fc',
      'ubt-warm-grey': "#9ba3ac",
      'ubt-cool-grey': "#354050",
      'ubt-blue': "#c9a961",
      'ubt-green': "#a8354a",
      'ubt-gedit-orange': "#c9a961",
      'ubt-gedit-blue': "#c9a961",
      'ubt-gedit-dark': "#c9a961",
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      // New border colors using the updated palette
      'primary': '#354050',              // Primary border color
      'secondary': '#2a3441',            // Secondary borders
      'accent-gold': '#c9a961',          // Gold accent borders
      'accent-gold-light': '#e6c878',    // Light gold borders
      'accent-red': '#a8354a',           // Red accent borders
      'muted': '#1e2533',                // Subtle borders
      
      // Legacy compatibility
      'literary-gold': '#c9a961',
      'literary-gold-light': '#e6c878',
      'ubb-orange': '#c9a961'
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      // Primary gradient stops using deep blue-grays
      'primary-gradient-start': '#0a0e1a',    // Deepest blue-gray
      'primary-gradient-middle': '#1e2533',   // Medium blue-gray
      'primary-gradient-end': '#2a3441',      // Lighter blue-gray
      
      // Accent gradient stops
      'gold-gradient-start': '#b8965a',       // Dark gold
      'gold-gradient-middle': '#c9a961',      // Rich gold
      'gold-gradient-end': '#e6c878',        // Light gold
      'red-gradient-start': '#8e2d3f',        // Dark red
      'red-gradient-middle': '#a8354a',       // Rich red
      'red-gradient-end': '#c54562',          // Light red
      
      // Mixed gradients for sophisticated effects
      'luxury-gradient-start': '#0a0e1a',     // Deep blue-gray
      'luxury-gradient-middle': '#1e2533',    // Medium blue-gray
      'luxury-gradient-gold': '#c9a961',      // Gold accent
      'luxury-gradient-end': '#2a3441',       // Light blue-gray
      
      // Legacy compatibility
      'literary-gradient-start': '#0a0e1a',
      'literary-gradient-middle': '#1e2533',
      'literary-gradient-end': '#2a3441',
      'literary-gold': '#c9a961',
      'literary-gold-light': '#e6c878',
    }),
    backdropBlur: {
      'xs': '2px',
      'sm': '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
      '2xl': '24px',
      '3xl': '40px',
    },
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
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '-10': '-10',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backgroundImage: {
        // Primary gradients using the new deep blue-gray palette
        'primary-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1e2533 50%, #2a3441 100%)',
        'primary-gradient-radial': 'radial-gradient(ellipse at center, #1e2533 0%, #0a0e1a 100%)',
        'primary-gradient-vertical': 'linear-gradient(180deg, #0a0e1a 0%, #1e2533 50%, #2a3441 100%)',
        
        // Accent gradients - Gold
        'gold-gradient': 'linear-gradient(135deg, #b8965a 0%, #c9a961 50%, #e6c878 100%)',
        'gold-gradient-radial': 'radial-gradient(ellipse at center, #c9a961 0%, #b8965a 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #b8965a 0%, #e6c878 50%, #b8965a 100%)',
        
        // Accent gradients - Red
        'red-gradient': 'linear-gradient(135deg, #8e2d3f 0%, #a8354a 50%, #c54562 100%)',
        'red-gradient-radial': 'radial-gradient(ellipse at center, #a8354a 0%, #8e2d3f 100%)',
        
        // Luxury combined gradients
        'luxury-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1e2533 40%, #c9a961 45%, #c9a961 55%, #1e2533 60%, #2a3441 100%)',
        'luxury-diagonal': 'linear-gradient(45deg, #0a0e1a 0%, #1e2533 30%, #c9a961 50%, #1e2533 70%, #2a3441 100%)',
        
        // Glass and depth effects
        'glass-gradient': 'linear-gradient(135deg, rgba(30, 37, 51, 0.8) 0%, rgba(42, 52, 65, 0.6) 100%)',
        'glass-subtle': 'linear-gradient(135deg, rgba(30, 37, 51, 0.4) 0%, rgba(42, 52, 65, 0.2) 100%)',
        
        // Interactive gradients
        'hover-gradient': 'linear-gradient(135deg, #1e2533 0%, #2a3441 50%, #354050 100%)',
        'active-gradient': 'linear-gradient(135deg, #121825 0%, #1e2533 50%, #2a3441 100%)',
        
        // Legacy compatibility
        'literary-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1e2533 50%, #2a3441 100%)',
        'paper-texture': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f7f9fc" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'book-pattern': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(247,249,252,0.03) 2px, rgba(247,249,252,0.03) 4px)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        // Enhanced shadows using the new color palette
        'glow': '0 0 20px rgba(201, 169, 97, 0.3)',
        'glow-lg': '0 0 40px rgba(201, 169, 97, 0.4)',
        'glow-gold': '0 0 25px rgba(201, 169, 97, 0.5)',
        'glow-red': '0 0 25px rgba(168, 53, 74, 0.4)',
        
        // Depth and elevation shadows
        'depth-sm': '0 4px 12px rgba(10, 14, 26, 0.4)',
        'depth-md': '0 8px 25px rgba(10, 14, 26, 0.5)',
        'depth-lg': '0 16px 40px rgba(10, 14, 26, 0.6)',
        'depth-xl': '0 25px 60px rgba(10, 14, 26, 0.7)',
        
        // Glass and material effects
        'glass': '0 8px 32px rgba(10, 14, 26, 0.4), inset 0 1px 0 rgba(247, 249, 252, 0.1)',
        'glass-inset': 'inset 0 2px 4px rgba(247, 249, 252, 0.1), inset 0 1px 2px rgba(201, 169, 97, 0.1)',
        
        // Interactive shadows
        'hover': '0 12px 30px rgba(10, 14, 26, 0.5), 0 0 20px rgba(201, 169, 97, 0.2)',
        'active': '0 4px 15px rgba(10, 14, 26, 0.6)',
        
        // Legacy compatibility
        'literary': '0 10px 30px rgba(10, 14, 26, 0.3)',
        'book': '0 4px 20px rgba(10, 14, 26, 0.2), 0 8px 40px rgba(10, 14, 26, 0.1)',
        'inner-glow': 'inset 0 2px 4px rgba(247, 249, 252, 0.1)',
        'text-glow': '0 0 10px rgba(201, 169, 97, 0.5)',
      },
      blur: {
        'xs': '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'focus', 'active', 'group-hover'],
      rotate: ['hover', 'focus', 'group-hover'],
      brightness: ['hover', 'focus'],
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}