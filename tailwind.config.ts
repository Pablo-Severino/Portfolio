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
        'future-white': "url('/future-desktop-white.png')",
        'future-dark': "url('/future-desktop-dark.png')",
        'vector-white': "url('/Vector-desktop-white.png')",
        'vector-dark': "url('/Vector-desktop-dark.png')",
        'vector': "url('/Vector.svg')",
      }
    },
  },
  plugins: [],
}
export default config
