import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../../assets/components/ProductCard";

export default function RelatedProduct() {
  const products = useSelector((state) => state.products.products);

  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold">Related products</h1>

      <div className="mt-5 grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((i) => {
          return (
            <div
              to={`/product-detail/${i.id}`}
              className="relative group rounded"
              key={i?.id}
            >
              <ProductCard i={i} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
