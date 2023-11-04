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
        'vector-white': "url('/Vector-desktop-white.svg')",
        'software-white': "url('/software-white.svg')",
        'web-white': "url('/web-white.svg')",
        'mobile-white': "url('/mobile-white.svg')",
        'code-white': "url('/code-white.svg')",
        /* Dark */
        'future-dark': "url('/future-desktop-dark.svg')",
        'vector-dark': "url('/Vector-desktop-dark.svg')",
        'software-dark': "url('/software-dark.svg')",
        'web-dark': "url('/web-dark.svg')",
        'mobile-dark': "url('/mobile-dark.svg')",
        'code-dark': "url('/code-dark.svg')",
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
