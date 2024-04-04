import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Card({ i }) {
  const { id, image, title, category, price } = i;

  return (
    <div className="relative group">
      <img src={image} alt={title} className="w-[290px] rounded-sm" />
      <div className="mt-5 ">
        <p className="text-xs text-black/40">{category}</p>
        <h6 className="text-sm">{title}</h6>
        <div className="flex gap-1 text-xs ">
          {price.oldprice && (
            <del className="text-black/40">${price.oldprice}</del>
          )}
          <p className="font-semibold">${price.newPrice}</p>
        </div>
        <div className="absolute top-5 right-5 bg-white rounded-full shadow-lg p-1 opacity-0 group-hover:opacity-100 transition-all duration-400">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Card;
