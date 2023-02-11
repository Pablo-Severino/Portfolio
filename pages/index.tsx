import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import IndexNavbar from "@/components/Navbar/IndexNavbar";
import IndexHeader from "@/components/Header/IndexHeader";
import IndexFooter from "@/components/Footer/IndexFooter";

import stackbitz from "@/public/previews/stackbitz.png";
import sakai from "@/public/previews/sakai.png";
import galaxy from "@/public/previews/galaxy.png";

import linkedin from "@/public/linkedin.svg";
import linkgithub from "@/public/github.svg";
import link from "@/public/external-link.svg";

import javascript from "@/public/linguages/javascript.svg";
import react from "@/public/linguages/react.svg";
import nextjs from "@/public/linguages/nextjs.svg";
import mongodb from "@/public/linguages/mongodb.svg";
import typescript from "@/public/linguages/typescript.svg";
import tailwindcss from "@/public/linguages/tailwindcss.svg";
import nodejs from "@/public/linguages/nodejs.svg";
import git from "@/public/linguages/git.svg";
import github from "@/public/linguages/github.svg";
import html5 from "@/public/linguages/html5.svg";
import css3 from "@/public/linguages/css3.svg";
import vite from "@/public/linguages/vite.svg";
import vscode from "@/public/linguages/vscode.svg";
import figma from "@/public/linguages/figma.svg";

import illustration from "@/public/dev-ed-wave.svg";

import styles from "@/styles/Linguages.module.css";
import styled from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Severino</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <IndexNavbar />
      <main className={styled.main}>
        <IndexHeader />
        <div className={styled.projects}>
          <h2>Projects</h2>
          <div className={styled.StackBitzUI}>
            <div className={styled.preview1}>
              <div className={styled.previewbg1}>
                <Link href="https://stack-bitz.vercel.app" target="_blank">
                  <Image
                    src={stackbitz}
                    alt="project demo"
                    className={styled.stackbitz}
                  />
                </Link>
              </div>
            </div>
            <div className={styled.description1}>
              <h1>StackBitz UI</h1>
              <p>
                StackBitz is a website of UI components, created with Tailwind
                CSS, Utilizing React, JavaScript, Next.js, Tailwind CSS,
                Firebase
              </p>
              <div className={styled.tecnolog1}>
                <div className={styled.space1}>
                  <span className={styles.bxreact}>
                    <h4>React</h4>
                  </span>
                </div>
                <div className={styled.space2}>
                  <span className={styles.bxts}>
                    <h4>TypeScript</h4>
                  </span>
                </div>
                <div className={styled.space3}>
                  <span className={styles.bxnext}>
                    <h4>Next JS</h4>
                  </span>
                </div>
                <div className={styled.space4}>
                  <span className={styles.bxtailwind}>
                    <h4>Tailwind CSS</h4>
                  </span>
                </div>
                <div className={styled.space5}>
                  <span className={styles.bxfirebase}>
                    <h4>Firebase</h4>
                  </span>
                </div>
              </div>
              <Link
                href="https://github.com/Pablo-Severino/StackBitz-UI"
                target="_blank"
              >
                <Image
                  src={linkgithub}
                  alt="logotipo github"
                  className={styled.github1}
                />
              </Link>
              <Link href="https://stack-bitz.vercel.app" target="_blank">
                <Image
                  src={link}
                  alt="logotipo link"
                  className={styled.link1}
                />
              </Link>
            </div>
          </div>
          <div className={styled.SakaiUI}>
            <div className={styled.preview2}>
              <div className={styled.previewbg2}>
                <Link href="https://sakai-ui.vercel.app">
                  <Image
                    src={sakai}
                    alt="project demo"
                    className={styled.sakai}
                  />
                </Link>
              </div>
            </div>
            <div className={styled.description2}>
              <h1>Sakai UI</h1>
              <p>
                Sakai UI is a theming website, using React, TypeScript, Next.js,
                Firebase, JWT
              </p>
              <div className={styled.tecnolog1}>
                <div className={styled.space7}>
                  <span className={styles.bxreact}>
                    <h4>React</h4>
                  </span>
                </div>
                <div className={styled.space8}>
                  <span className={styles.bxnext}>
                    <h4>Next JS</h4>
                  </span>
                </div>
                <div className={styled.space9}>
                  <span className={styles.bxts}>
                    <h4>TypeScript</h4>
                  </span>
                </div>
                <div className={styled.space10}>
                  <span className={styles.bxfirebase}>
                    <h4>Firebase</h4>
                  </span>
                </div>
                <div className={styled.space11}>
                  <span className={styles.bxjwt}>
                    <h4>JWT</h4>
                  </span>
                </div>
              </div>
              <Link
                href="https://github.com/Pablo-Severino/Sakai-UI"
                target="_blank"
              >
                <Image
                  src={linkgithub}
                  alt="logotipo github"
                  className={styled.github2}
                />
              </Link>
              <Link href="https://sakai-ui.vercel.app" target="_blank">
                <Image
                  src={link}
                  alt="logotipo link"
                  className={styled.link2}
                />
              </Link>
            </div>
          </div>
          <div className={styled.GalaxyFilmes}>
            <div className={styled.preview1}>
              <div className={styled.previewbg1}>
                <Link href="https://galaxy-films.vercel.app">
                  <Image
                    src={galaxy}
                    alt="project demo"
                    className={styled.galaxy}
                  />
                </Link>
              </div>
            </div>
            <div className={styled.description3}>
              <h1>Galaxy Films</h1>
              <p>
                Galaxy Films is a NetFlix clone, using React, JavaScript,
                Next.js, Firebase, React Icons
              </p>
              <div className={styled.tecnolog1}>
                <div className={styled.space1}>
                  <span className={styles.bxreact}>
                    <h4>React</h4>
                  </span>
                </div>
                <div className={styled.space2}>
                  <span className={styles.bxts}>
                    <h4>TypeScript</h4>
                  </span>
                </div>
                <div className={styled.space3}>
                  <span className={styles.bxnext}>
                    <h4>Next JS</h4>
                  </span>
                </div>
                <div className={styled.space12}>
                  <span className={styles.bxfirebase}>
                    <h4>Firebase</h4>
                  </span>
                </div>
              </div>
              <Link
                href="https://github.com/Pablo-Severino/Galaxy-Films"
                target="_blank"
              >
                <Image
                  src={linkgithub}
                  alt="logotipo github"
                  className={styled.github1}
                />
              </Link>
              <Link href="https://galaxy-films.vercel.app" target="_blank">
                <Image
                  src={link}
                  alt="logotipo link"
                  className={styled.link1}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styled.skills}>
          <h2>Skills & Tools</h2>
          <div className={styled.tools}>
            <div className={styled.javascript}>
              <Image
                src={javascript}
                alt="logo javascript"
                className={styled.js}
              />
              <p>Javascript</p>
            </div>
            <div className={styled.react}>
              <Image
                src={react}
                alt="logo reactjs"
                className={styled.reactjs}
              />
              <p>React JS</p>
            </div>
            <div className={styled.nextjs}>
              <Image src={nextjs} alt="logo nextjs" className={styled.next} />
              <p>Next JS</p>
            </div>
            <div className={styled.mongodb}>
              <Image
                src={mongodb}
                alt="logo mongodb"
                className={styled.mongo}
              />
              <p>MongoDB</p>
            </div>
            <div className={styled.typescript}>
              <Image
                src={typescript}
                alt="logo typescript"
                className={styled.ts}
              />
              <p>Typescript</p>
            </div>
            <div className={styled.tailwindcss}>
              <Image
                src={tailwindcss}
                alt="logo tailwindcss"
                className={styled.tailwind}
              />
              <p>Tailwind CSS</p>
            </div>
            <div className={styled.nodejs}>
              <Image src={nodejs} alt="logo nodejs" className={styled.node} />
              <p>Node JS</p>
            </div>
            <div className={styled.git}>
              <Image src={git} alt="logo git" className={styled.gitimg} />
              <p>GIT</p>
            </div>
            <div className={styled.github}>
              <Image
                src={github}
                alt="logo github"
                className={styled.githubimg}
              />
              <p>GitHub</p>
            </div>
            <div className={styled.html5}>
              <Image src={html5} alt="logo html5" className={styled.html} />
              <p>HTML 5</p>
            </div>
            <div className={styled.css3}>
              <Image src={css3} alt="logo css3" className={styled.css} />
              <p>CSS3</p>
            </div>
            <div className={styled.vite}>
              <Image src={vite} alt="logo vite" className={styled.vitejs} />
              <p>Vite</p>
            </div>
            <div className={styled.vscode}>
              <Image
                src={vscode}
                alt="logo vscode"
                className={styled.vscodeimg}
              />
              <p>VSCode</p>
            </div>
            <div className={styled.figma}>
              <Image src={figma} alt="logo figma" className={styled.figmaimg} />
              <p>Figma</p>
            </div>
          </div>
        </div>
        <div className={styled.contacts}>
          <div className={styled.info}>
            <h2>Give me a touch!</h2>
            <p>I love exchanging ideas about codes!</p>
          </div>
          <div className={styled.city}>
            <h3>Aguaí</h3>
            <h4>São Paulo, Brazil</h4>
          </div>
          <div className={styled.contact}>
            <Link
              href="https://mailto:pabloseverino40@gmail.com"
              target="_blank"
            >
              <h4>pabloseverino40@gmail.com</h4>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pablo-severino-b23883207"
              target="_blank"
            >
              <div className={styled.space13}>
                <span>
                  <Image
                    src={linkedin}
                    alt="logo linkedin"
                    className={styled.linkedinlogo}
                  />
                  <h5 className={styled.txtlinkedin}>Linkedin</h5>
                </span>
              </div>
            </Link>
            <Link href="https://github.com/Pablo-Severino" target="_blank">
              <div className={styled.space14}>
                <span>
                  <Image
                    src={linkgithub}
                    alt="logo github"
                    className={styled.githublogo}
                  />
                  <h5 className={styled.txtgithub}>Github</h5>
                </span>
              </div>
            </Link>
          </div>
          <Image
            src={illustration}
            alt="illustration"
            className={styled.illustration}
          />
        </div>
      </main>
      <IndexFooter />
    </>
  );
}
