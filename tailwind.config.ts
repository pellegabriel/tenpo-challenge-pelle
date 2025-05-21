import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'bg-styles-3': 'var(--bg-styles-3)',
        'blue-teenpo': 'var(--blue-teenpo)',
        black: 'var(--black)',
        primary: 'var(--primary)',
        color: 'var(--color)',
        'dark-grey': 'var(--accessible-components-dark-grey)',
        teenpo: 'var(--teenpo)',
        'conversion-light-coral': 'var(--conversion-flow-library-light-coral)',
        'teenpo-2': 'var(--teenpo-2)',
        'tenpo-business': 'var(--tenpo-business)',
        'tb-secundary': 'var(--tb-secundary)',
        'medium-purple': 'var(--conversion-flow-library-medium-purple)',
        tutorial: 'var(--tutorial-2)',
        transparent: 'var(--transparent)',
        'sandy-brown': 'var(--conversion-flow-library-sandy-brown)',
        coral: 'var(--conversion-flow-library-coral)',
        'dodger-blue': 'var(--accessible-components-dodger-blue)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      }
    },
  },
  plugins: [],
}
export default config
