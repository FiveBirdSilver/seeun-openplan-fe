export default {
  theme: {
    content: ['../ui/src/**/*.{ts,tsx}', '../../apps/web/**/*.{ts,tsx}'],
    extend: {
      screens: {
        xs: '480px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          80: 'rgba(0, 0, 0, 0.8)',
          90: 'rgba(0, 0, 0, 0.9)',
        },
        gray: {
          DEFAULT: '#adadad',
          50: '#f7f7f7',
          100: '#ededed',
          200: '#e5e5e5',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
        },
        blue: {
          DEFAULT: '#05a2e0',
          50: '#eff9ff',
          100: '#dff3ff',
          200: '#b7e9ff',
          300: '#78d9ff',
          400: '#30c6ff',
          500: '#05a2e0',
          600: '#008ccf',
          700: '#0070a7',
          800: '#025e8a',
          900: '#084e72',
        },
        red: {
          DEFAULT: '#f8453b',
          50: '#fff2f1',
          100: '#ffe3e1',
          200: '#ffcac7',
          300: '#ffa5a0',
          400: '#ff746c',
          500: '#f8453b',
          600: '#e5281d',
          700: '#c11d14',
          800: '#a01c14',
          900: '#841e18',
        },
      },
      fontSize: {
        title: [
          '2rem',
          {
            fontWeight: '600',
            letterSpacing: '-2px',
            lineHeight: '140%',
          },
        ],
      },
    },
  },
  plugins: [],
}
