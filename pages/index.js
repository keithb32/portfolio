import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollButton from "../components/ScrollButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keith Butler</title>
        <meta name="description" content="Portfolio for Keith Butler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollButton />
    </>
  );
}
