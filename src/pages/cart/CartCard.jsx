import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCarts, deleteCart } from "../../store/thunks/productThunk";

export default function CartCard({ cart }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);

  const { id, image, product_name, item_count, price, total_cart, _id } = cart;

  const [ItemCount, setItemcount] = useState(Number(item_count));

  const addCartt = (qty) => {
    const cartData = {
      id: _id,
      qty: qty,
      token: token,
    };
    dispatch(addCarts(cartData));
    
  };

  const changesAmount = (event, action) => {
    if (action === "+") {
      setItemcount(ItemCount + 1);
      addCartt(ItemCount + 1);
    }
    if (action === "-") {
      setItemcount(1 < ItemCount ? ItemCount - 1 : ItemCount);
      addCartt(1 < ItemCount ? ItemCount - 1 : ItemCount);
    }
    if (action === "=") {
      setItemcount(Number(event.target.value));
      addCartt(Number(event.target.value));
    }
  };

  const removeCart = (id) => {
    const cartData = {
      id: id,
      token: token,
    };
    dispatch(deleteCart(cartData));
  };

  return (
    <div className="flex flex-wrap items-center hover:bg-gray-100 px-6 py-5 ">
      <div className="flex justify-center items-center w-2/6 md:w-1/6 font-semibold text-sm">
        <CiCircleRemove
          className="text-3xl font-bold cursor-pointer text-red-400"
          onClick={() => removeCart(id)}
        />
      </div>
      <div className="flex justify-center items-center w-2/6 md:w-1/6 font-semibold text-sm">
        <img
          className="h-24"
          src={`${import.meta.env.VITE_LOCAL_IMAGE_URL}${image}`}
          alt={product_name}
        />
      </div>

      <a
        href="#"
        className="text-center w-2/6 md:w-1/6 font-semibold text-sm text-secondary capitalize"
      >
        {product_name}
      </a>

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
        ₹{price}
      </span>

      <span className="text-center w-2/6 mt-5 md:mt-0 md:w-1/6 font-semibold text-sm text-dark_gray">
        ₹{total_cart}
      </span>
    </div>
  );
}
