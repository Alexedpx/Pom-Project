/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': {
            d: 'path("M0.00259399 248.858C0.530426 204.882 81.8907 162.076 405.189 337L420 -3H0.00259399V248.858C-0.000854492 249.146 -0.000854492 249.435 0.00259399 249.723V248.858Z")',
          },

          '50%': {
            d: 'path("M0.00259399 248.858C150.5304 214.882 211.8907 142.076 405.189 337L420 -3H0.00259399V248.858C-30.0008545 202.146 -0.000854492 249.435 0.00259399 249.723V248.858Z")',
          },

          '100%': {
            d: 'path("M0.00259399 248.858C0.530426 204.882 81.8907 162.076 405.189 337L420 -3H0.00259399V248.858C-0.000854492 249.146 -0.000854492 249.435 0.00259399 249.723V248.858Z")',
          },
        },
      },
      animation: {
        wave: 'wave 4s infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        lightBlack: {
          DEFAULT: 'hsl(var(--lightBlack))',
          foreground: 'hsl(var(--lightBlack-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        veryHappy: {
          DEFAULT: 'hsl(var(--veryHappy))',
          foreground: 'hsl(var(--veryHappy-foreground))',
        },
        happy: {
          DEFAULT: 'hsl(var(--happy))',
          foreground: 'hsl(var(--happy-foreground))',
        },
        sad: {
          DEFAULT: 'hsl(var(--sad))',
          foreground: 'hsl(var(--sad-foreground))',
        },
        angry: {
          DEFAULT: 'hsl(var(--angry))',
          foreground: 'hsl(var(--angry-foreground))',
        },
        tired: {
          DEFAULT: 'hsl(var(--tired))',
          foreground: 'hsl(var(--tired-foreground))',
        },
        sporty: {
          DEFAULT: 'hsl(var(--sporty))',
          foreground: 'hsl(var(--sporty-foreground))',
        },
        audio: {
          DEFAULT: 'hsl(var(--audio))',
          foreground: 'hsl(var(--audio-foreground))',
        },
        cerebral: {
          DEFAULT: 'hsl(var(--cerebral))',
          foreground: 'hsl(var(--cerebral-foreground))',
        },
        relaxation: {
          DEFAULT: 'hsl(var(--relaxation))',
          foreground: 'hsl(var(--relaxation-foreground))',
        },
        creative: {
          DEFAULT: 'hsl(var(--creative))',
          foreground: 'hsl(var(--creative-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        softBlue: {
          DEFAULT: 'hsl(var(--softBlue))',
        },
        lightBlue: {
          DEFAULT: 'hsl(var(--lightBlue))',
        },

        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
