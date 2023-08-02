import About from "@base/About/About";
import Projects from "@base/Projects/Projects";
import Intro from "@base/Intro/Intro";
import Skills from "@base/Skills/Skills";
import Head from "next/head";
import Contact from "@base/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Houshangi</title>
        <meta
          name="description"
          content="This site is my portfolio and anything about me"
        />
      </Head>
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export const getStaticProps = () => {
  return { props: {} };
};
