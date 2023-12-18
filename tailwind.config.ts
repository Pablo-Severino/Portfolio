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
        'polaroid': "url('/polaroid.svg')",
        'software-white': "url('/software-white.svg')",
        'web-white': "url('/web-white.svg')",
        'mobile-white': "url('/mobile-white.svg')",
        'code-white': "url('/code-white.svg')",
        /* Dark */
        'software-dark': "url('/software-dark.svg')",
        'web-dark': "url('/web-dark.svg')",
        'mobile-dark': "url('/mobile-dark.svg')",
        'code-dark': "url('/code-dark.svg')",
        /* Languages */
        'css3': "url('/languages/css3.svg')",
        'figma': "url('/languages/figma.svg')",
        'git': "url('/languages/git.svg')",
        'github-white': "url('/languages/github-white.svg')",
        'github-dark': "url('/languages/github-dark.svg')",
        'html5': "url('/languages/html5.svg')",
        'javascript': "url('/languages/javascript.svg')",
        'mongodb': "url('/languages/mongodb.svg')",
        'nextjs-white': "url('/languages/nextjs-white.svg')",
        'nextjs-dark': "url('/languages/nextjs-dark.svg')",
        'nodejs': "url('/languages/nodejs.svg')",
        'reactjs-white': "url('/languages/react-white.svg')",
        'reactjs-dark': "url('/languages/react-dark.svg')",
        'tailwindcss': "url('/languages/tailwindcss.svg')",
        'typescript': "url('/languages/typescript.svg')",
        'vite': "url('/languages/vite.svg')",
        'vscode': "url('/languages/vscode.svg')",
        /* Social */
        'github-social-dark': "url('/social/github-dark.svg')",
        'github-social-white': "url('/social/github-white.svg')",
        'linkedin-dark': "url('/social/linkedin-dark.svg')",
        'linkedin-white': "url('/social/linkedin-white.svg')",
        'dev': "url('/social/dev-ed-wave.svg')",
        /* Preview */
        'spotlife': "url('/previews/spotlife.png')",
        /* Preview Linguage */
        'next-auth': "url('/previews/languages/next-auth.svg')",
        'nextjs-pv-dark': "url('/previews/languages/nextjs-dark.svg')",
        'nextjs-pv-white': "url('/previews/languages/nextjs-white.svg')",
        'react-pv-dark': "url('/previews/languages/react-dark.svg')",
        'react-pv-white': "url('/previews/languages/react-white.svg')",
        'tailwindcss-pv': "url('/previews/languages/tailwindcss.svg')",
        'typescript-pv': "url('/previews/languages/typescript.svg')",
      },

      cursor: {
        'mickey': 'url(/cursor/cursor.cur), default',
        'mickey-hover': 'url(/cursor/cursor.cur), pointer',
      },

      fontFamily: {
        'roboto': ['"Roboto", sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
export default config
