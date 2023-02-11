

import styled from "@/styles/Header.module.css"

export default function IndexHeader() {
  return (
    <>
      <header className={styled.header}>
        <section className={styled.section}>
          <h1>Hello. I&#39;m Pablo</h1>
          <p>I have a passion for developing accessible websites and applications. and I love this continuous learning of programming.</p>
          <div className={styled.astronaut} />
        </section>
      </header>
    </>
  )
}
