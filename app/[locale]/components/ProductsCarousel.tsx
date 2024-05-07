"use client";
import { Settings } from "@/app/[locale]/providers/settings";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProductsCarousel() {
  const products = Settings.getInstance().products;
  const [activeIndex, setActiveIndex] = useState(0);
  const productsPerSlide = 4;
  const intervalTime = 4000;

  const nextSlide = () => {
    setActiveIndex((current) => (current + productsPerSlide) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - productsPerSlide + products.length) % products.length);
  };

  const getProductsForCurrentSlide = () => {
    return products
      .slice(activeIndex, activeIndex + productsPerSlide)
      .concat(products.slice(0, Math.max(0, activeIndex + productsPerSlide - products.length)));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, intervalTime);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <>
      <div className="flex justify-between items-center px-4">
        <button onClick={prevSlide} className="rounded-full text-2xl bg-gray-300 px-3 p-1 hover:bg-gray-400">
          {"<"}
        </button>
        <div className="flex transition-transform duration-700">
          {getProductsForCurrentSlide().map((product, index) => (
            <div key={index} className="w-1/4 p-4">
              <Image
                src={require(`../assets/products/${product.href}`)}
                alt={product.title}
                width={100}
                height={100}
                layout="responsive"
                className="product-image"
              />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="rounded-full text-2xl bg-gray-300 px-3 p-1 hover:bg-gray-400">
          {">"}
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(products.length / productsPerSlide) }).map((_, idx) => (
          <button
            key={idx}
            className={`h-4 w-4 rounded-full ${
              idx === Math.floor(activeIndex / productsPerSlide) ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(idx * productsPerSlide)}
          />
        ))}
      </div>
    </>
  );
}
