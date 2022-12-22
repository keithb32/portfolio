import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
      <div style={{height: "200px"}}>
      </div>
    </>
  );
}
