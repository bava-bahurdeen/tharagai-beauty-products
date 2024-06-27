import React from "react";
import { useSelector } from "react-redux";

export default function Howtouse() {
  const product = useSelector((state) => state.products.singleProduct);
  return (
    <section className="mt-4">
      <h1 className="text-xl font-bold">How to Use</h1>
      <div className="mt-2">
        {product.howtouse &&
          product.howtouse.map((hwu) => {
            return <p key={hwu?.id}>{hwu?.id}.{hwu?.how_to_use}</p>;
          })}
      </div>
    </section>
  );
}
