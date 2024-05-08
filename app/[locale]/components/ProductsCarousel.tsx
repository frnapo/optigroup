"use client";
import { Settings } from "@/app/[locale]/providers/settings";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProductsCarousel() {
  const products = Settings.getInstance().products;
  const [activeIndex, setActiveIndex] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(2);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setProductsPerSlide(3);
      } else {
        setProductsPerSlide(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTranslateX(-activeIndex * (100 / productsPerSlide));
  }, [activeIndex, productsPerSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, productsPerSlide, products.length]);

  const nextSlide = () => {
    setActiveIndex((current) => (current < products.length - productsPerSlide ? current + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : products.length - productsPerSlide));
  };

  return (
    <div className="container mx-auto px-4 md:px-8 select-none">
      <div className="flex justify-between items-center">
        <div
          className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </div>
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${translateX}%)`, width: "100%" }}
          >
            {products.map((product, index) => (
              <div key={index} className="select-none" style={{ width: `${100 / productsPerSlide}%`, flexShrink: 0 }}>
                <Image
                  src={require(`../assets/products/${product.href}`)}
                  alt={product.title}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="product-image"
                  unselectable="on"
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="mt-2 flex justify-center items-center px-2">
                  <button className="border border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-gray-700 py-1 px-3 rounded-0 transition-all z-10">
                    Dettagli
                  </button>
                  <button className="bg-gray-900 text-white py-1 px-3 rounded-0 hover:bg-gray-700 transition-all z-10">
                    Acquista
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </div>
      </div>
    </div>
  );
}
