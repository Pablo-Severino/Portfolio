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
      <main className={`w-[100%] h-[100%] overflow-y-scroll scrollbar-hide cursor-mickey bg-[#bababa] dark:bg-[#121212] ${mono.className}`}>
        <IndexNavbar />
        <main className="w-[100%] h-[100vh] left-0 mt-[-13px] text-white bg-no-repeat bg-future-white dark:bg-future-dark">
          <h1 className="absolute w-[234px] h-[45px] left-[42.18vw] top-[240px] text-white text-[60px] font-bold">Hello.</h1>
          <h1 className="absolute w-[470px] h-[73px] left-[35vw] top-[300px] text-white text-[60px] font-bold">I&apos;m Pablo 👋🏻</h1>
          <p className="absolute w-[55vw] left-[23vw] top-[385px] text-center text-white text-base font-medium leading-[17.84px]">I have a passion for developing accessible websites and applications. and I love this continuous learning of programming.</p>
        </main>
        <section className="w-[100%] h-[398vh] left-0 top-[100vh] z-10 bg-vector-white dark:bg-vector-dark"></section>
      </main>
    </>
  )
}
