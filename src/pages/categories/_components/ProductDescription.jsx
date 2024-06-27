import React from "react";
import { useSelector } from "react-redux";

export default function ProductDescription() {
  const product = useSelector((state) => state.products.singleProduct);
  return (
    <section className="mt-4">
      <h1 className="text-xl font-bold">Description</h1>
      <p className="font-hind lg:w-[70%] mt-2">{product.description}</p>
    </section>
  );
}
