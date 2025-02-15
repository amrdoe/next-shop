import Head from "next/head";
import Header from "#components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Shop</title>
      </Head>
      <Header />
    </div>
  );
}
