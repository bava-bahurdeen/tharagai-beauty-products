import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ i }) {
  const variation = i?.variations[0];
  console.log(variation);

  return (
    <>
      <div className="p-4 bg-white">
        <img
          src={`${import.meta.env.VITE_LOCAL_URL}${i?.image}`}
          alt={i?.name}
          className="w-[290px] rounded-sm"
        />
      </div>
      <div className="mt-5 ">
        <p className="text-xs text-black/40">{i?.product_type_name}</p>
        <h6 className="text-sm mt-2">{i?.name}</h6>
        <div className="flex gap-2 text-xs mt-2 ">
          {variation?.price && (
            <del className="text-black/40">${variation?.price * 1.5}</del>
          )}
          <p className="font-semibold">${variation?.price}</p>
        </div>
        <div className="absolute top-5 right-5 bg-white rounded-full shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-all duration-400">
          <FaShoppingCart />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
