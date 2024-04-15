import React from "react";
import { useSelector } from "react-redux";

export default function Howtouse() {
  const product = useSelector((state) => state.products.singleProduct);
  console.log(product.howtouse);
  return (
    <section className="mt-10">
      <h1 className="text-5xl font-bold text-center">How to Use</h1>
      <div>
        {product.howtouse &&
          product.howtouse.map((hwu) => {
            return <p key={hwu?.id}>{hwu?.how_to_use}</p>;
          })}
      </div>
    </section>
  );
}
