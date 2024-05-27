import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/thunks/productThunk";

export default function Categories() {
  const productTypes = useSelector((state) => state.products.productTypes);

  return (
    <section className="py-1 lg:container lg:mx-auto mb-20">
      <h1 className="font-medium text-xl text-center mt-10">Our Categories</h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {productTypes &&
          productTypes.map((cat) => {
            return (
              <Link
                to={`/categories/${cat.name}/`}
                className="flex flex-col items-center"
                key={cat.id}
              >
                <div className="bg-white/60 rounded-full h-44 w-44 flex justify-center items-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-xl capitalize mt-4 text-secondary font-bold">
                  {cat.name}
                </h1>
              </Link>
            );
          })}
      </div>
      {/* <h1 className="h-[1px] w-full bg-gray-600 opacity-25 mt-20"></h1> */}
    </section>
  );
}
