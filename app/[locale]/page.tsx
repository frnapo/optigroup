"use client";
import ProductsCarousel from "./components/ProductsCarousel";

//aggiunto carosello su componente a parte per mantenere il codice ben separato e piu' pulito

export default function Home() {
  return (
    <>
      <div className="my-4">
        <h3 className="text-center font-bold text-lg">ULTIMI ARRIVI</h3>
        <ProductsCarousel />
      </div>
    </>
  );
}
