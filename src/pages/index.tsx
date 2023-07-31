import About from "@base/About/About";
import Experiances from "@base/Projects/Projects";
import Header from "@base/Header/Header";
import Skills from "@base/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Experiances />
    </main>
  );
}

export const getStaticProps = () => {
  return { props: {} };
};
