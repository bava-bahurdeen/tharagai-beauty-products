import React from "react";
import { useSelector } from "react-redux";

export default function ProductBenifits() {
  const product = useSelector((state) => state.products.singleProduct);
  return (
    <section className="mt-4">
      <h1 className="text-xl font-bold">Benefits</h1>
      <div className="font-hind lg:w-[70%] mt-2">
        {product?.benifit &&
          product?.benifit.map((beni) => (
            <p key={beni.id} className="font-hind">
              {beni?.id}.{beni?.benifit}
            </p>
          ))}
      </div>
    </section>
  );
}
