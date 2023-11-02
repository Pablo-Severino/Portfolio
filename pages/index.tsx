import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

import IndexNavbar from '@/components/Navbar/IndexNavbar';

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Severino</title>
        <meta name="description" content="My Portfolio" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <main className={`h-screen dark:bg-black dark:text-white ${mono.className}`}>
        <IndexNavbar />
        <h1 className="flex flex-col items-center justify-between p-24">Hello World</h1>
      </main>
    </>
  )
}
