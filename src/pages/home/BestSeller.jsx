import React from "react";
import ProductCard from "../../assets/components/ProductCard";
import { useSelector } from "react-redux";

export default function BestSeller() {
  const bestSeller = useSelector((state) => state.products.bestSeller);
  return (
    <section className="container mx-auto bg-primary py-10">
      <h1 className="h-[1px] w-full bg-gray-600 opacity-25"></h1>
      <div className="py-10">
        <h1 className="text-5xl font-medium mb-10">Bestsellers</h1>
        <ul className="mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestSeller &&
            bestSeller.map((i) => {
              return <ProductCard i={i} key={i.id} />;
            })}
        </ul>
      </div>
    </section>
  );
}
