import Head from "next/head";
import Header from "#components/Navigation";
import Hero from "#components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Shop</title>
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
