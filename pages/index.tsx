import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";

import { IndexNavbar } from "@/components/Navbar/IndexNavbar";
import { IndexHeader } from "@/components/Header/IndexHeader";
import { IndexExpertise } from "@/components/Expertise/IndexExpertise";
import { IndexProject } from "@/components/Project/IndexProject";
import { IndexTools } from "@/components/Tools/IndexTools";
import { IndexContact } from "@/components/Contact/IndexContact";
import { IndexFooter } from "@/components/Footer/IndexFooter";

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Severino</title>
        <meta name="description" content="My Portfolio" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <main className={`w-[100%] h-[100%] font-serif overflow-y-scroll scrollbar-hide cursor-mickey bg-[#D4D4D4] dark:bg-[#151517] ${mono.className}`}>
        <IndexNavbar />
        <IndexHeader />
        <section className="w-[100%] h-[521vh] left-0 top-[100vh] z-10 bg-vector-white dark:bg-vector-dark bg-no-repeat">
          <IndexExpertise />
          <IndexProject />
          <IndexTools />
          <IndexContact />
        </section>
        <IndexFooter />
      </main>
    </>
  )
}
