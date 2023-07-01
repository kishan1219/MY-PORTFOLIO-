
import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Projects from '../components/project';
import Skills from '../components/skills';
import Head from 'next/head';
const Home = () => {
  return (
    <>
      <Head>
        <title>Kishan's Portfolio</title>
        <meta name="description" content="Kishan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;