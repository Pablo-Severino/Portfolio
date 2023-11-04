import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'future-white': "url('/future-desktop-white.svg')",
        'future-dark': "url('/future-desktop-dark.svg')",
        'vector-white': "url('/Vector-desktop-white.svg')",
        'vector-dark': "url('/Vector-desktop-dark.svg')",
      },

      cursor: {
        'mickey': 'url(/cursor/cursor.cur), default',
        'mickey-hover': 'url(/cursor/cursor-hover.cur), pointer',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
export default config
