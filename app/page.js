import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

async function getData() {
  const products = await fetch("https://fakestoreapi.com/products");
  return products.json();
}

export default async function Home() {
  const products = await getData();

  return (
    <main>
      {/* BANNER */}
      <Banner />
      {/* PRODUCTS */}
      <ProductFeed products={products} />
    </main>
  );
}

// https://fakestoreapi.com/products
