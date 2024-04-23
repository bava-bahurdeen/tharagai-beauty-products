import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

function ProductCard({ i }) {
  const variation = i?.variations[0];

  return (
    <>
      <div className="w-[100%] bg-white rounded-t flex items-center justify-center">
        <img
          src={`${import.meta.env.VITE_LOCAL_IMAGE_URL}${i?.image}`}
          alt={i?.name}
          className="size-[300px] object-contain"
        />
      </div>
      <div className="mt-5 ">
        <p className="text-xs text-black/40">{i?.product_type_name}</p>
        <div className="flex items-center gap-4">
          <h6 className="text-sm font-bold">{i?.name}</h6>
          <p className="flex items-center gap-1">
            5.0 <IoStar className="text-yellow-400" />
            <span className="text-secondary text-sm">(112) Reviews</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs mt-2 ">
          {variation?.price && (
            <del className="text-black/40">${variation?.price * 1.5}</del>
          )}
          <p className="font-semibold text-lg">${variation?.price}</p>
        </div>
        <button className="border p-2 border-secondary hover:bg-secondary  text-secondary hover:text-white rounded-b w-full mt-3 text-sm">
          Add To Cart
        </button>
        <div className="absolute top-5 right-5 bg-white rounded-full shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-all duration-400">
          <FaShoppingCart />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
