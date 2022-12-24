import Head from "next/head";
import About from "../components/About";
import DividerWithText from "../components/DividerWithText";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

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
      <Portfolio />
    </>
  );
}
