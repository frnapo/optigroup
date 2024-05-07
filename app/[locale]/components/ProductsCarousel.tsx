"use client";
import { Settings } from "@/app/[locale]/providers/settings";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProductsCarousel() {
  const products = Settings.getInstance().products;
  const [activeIndex, setActiveIndex] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setProductsPerSlide(4);
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

  const nextSlide = () => {
    if (activeIndex < products.length - productsPerSlide) {
      setActiveIndex((current) => current + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((current) => current - 1);
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveIndex(Number(event.target.value));
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
      <div className="flex justify-center mt-4">
        <input
          type="range"
          min="0"
          max={products.length - productsPerSlide}
          value={activeIndex}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
