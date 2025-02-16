import Head from "next/head";
import Header from "#components/Navigation";
import Hero from "#components/Hero";
import Products from "#components/Products";
import Newsletters from "#components/Newsletters";

const products = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Shop</title>
      </Head>
      <Header />
      <Hero />
      <Products title="Featured Products" products={products} />
      <Newsletters />
    </div>
  );
}
