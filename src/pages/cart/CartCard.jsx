import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCart, cartTot } from "../../store/slice/productSlice";

export default function CartCard({ cart }) {
  const dispatch = useDispatch();

  const { itemCount, productId, selectedVariationPrice } = cart;

  const [ItemCount, setItemcount] = useState(itemCount);

  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item?.id === productId);

  const changesAmount = (event, action) => {
    if (action === "+") {
      console.log("add");
      setItemcount(ItemCount + 1);
    }
    if (action === "-") {
      console.log("sub");
      setItemcount(1 < ItemCount ? ItemCount - 1 : ItemCount);
    }
    if (action === "=") {
      console.log("equ");
      setItemcount(event.target.value);
    }

    updateCart();
  };

  const updateCart = () => {
    let card = JSON.parse(localStorage.getItem("cart")) || [];
    let productExists = card.find((item) => item.productId === productId);

    if (productExists) {
      productExists.itemCount = ItemCount;
    }
    localStorage.setItem("cart", JSON.stringify(card));
    dispatch(addCart(card));
    
    dispatch(cartTot(Number(ItemCount) * Number(selectedVariationPrice)));
  };

  const removeCart = () => {
    let card = JSON.parse(localStorage.getItem("cart")) || [];
    card = card.filter((item) => item.productId !== cart.productId);

    localStorage.setItem("cart", JSON.stringify(card));
    dispatch(addCart(card));
  };

  return (
    <div className="flex flex-wrap items-center hover:bg-gray-100 px-6 py-5 ">
      <div className="flex justify-center items-center w-2/6 md:w-1/6 font-semibold text-sm">
        <CiCircleRemove
          className="text-3xl font-bold cursor-pointer text-red-400"
          onClick={removeCart}
        />
      </div>
      <div className="flex justify-center items-center w-2/6 md:w-1/6 font-semibold text-sm">
        <img
          className="h-24"
          src={`${import.meta.env.VITE_LOCAL_IMAGE_URL}${product?.image}`}
          alt={product?.name}
        />
      </div>

      <span className="text-center w-2/6 md:w-1/6 font-semibold text-sm text-secondary">
        {product?.name}
      </span>

      <div className="text-center w-2/6 mt-5 md:mt-0 md:w-1/6">
        <div className="border border-secondary flex justify-between p-3 px-4 w-fit ">
          <button onClick={(e) => changesAmount(e, "-")}>
            <FaMinus />
          </button>
          <input
            type="number"
            value={ItemCount}
            onChange={(e) => changesAmount(e, "=")}
            className="border-none outline-none no-spinner text-center w-[20%] bg-transparent"
          />
          <button onClick={(e) => changesAmount(e, "+")}>
            <FaPlus />
          </button>
        </div>
      </div>

      <span className="text-center w-2/6 mt-5 md:mt-0 md:w-1/6 font-semibold text-sm text-success">
        ₹{selectedVariationPrice}
      </span>

      <span className="text-center w-2/6 mt-5 md:mt-0 md:w-1/6 font-semibold text-sm text-dark_gray">
        ₹{ItemCount * selectedVariationPrice}
      </span>
    </div>
  );
}
