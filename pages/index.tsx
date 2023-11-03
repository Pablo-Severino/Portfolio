import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";

import IndexNavbar from "@/components/Navbar/IndexNavbar";

const mono = JetBrains_Mono({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Severino</title>
        <meta name="description" content="My Portfolio" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <main className={`bg-[#bababa] dark:bg-[#121212] ${mono.className}`}>
        <IndexNavbar />
        <main className="relative w-[100%] h-[634px] left-0 top-[53px] text-white bg-future-white dark:bg-future-dark">
          <h1 className="absolute left-[42.18vw] top-[229px] text-center font-medium text-6xl">Hello.</h1>
          <h1 className="absolute left-[36.61vw] top-[291px] items-center justify-between font-medium text-6xl">I&apos;m Pablo 👋🏼</h1>
          <p className="absolute w-[55vw] left-[23vw] top-[370px] text-center">I have a passion for developing accessible websites and applications. and I love this continuous learning of programming.</p>
        </main>
      </main>
    </>
  )
}
