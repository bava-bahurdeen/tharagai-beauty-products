import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummery() {
  const cart = useSelector((state) => state.products.cart);

  return (
    <section className="mt-5 p-2 ">
      <h1 className="font-bold">Order Summary</h1>

      <div className="border rounded mt-4">
        {cart.map((card) => {
          return (
            <section key={card.id} className="p-1 md:p-4 flex items-center justify-between border-b">
              <div>
                <img
                  src={`${import.meta.env.VITE_LOCAL_IMAGE_URL}${card.image}`}
                  alt={card?.product_name}
                  className="w-52"
                />
              </div>
              <div className="w-full">
                <h1 className="capitalize font-semibold text-black/60">
                  {card?.product_name}
                </h1>
                <p>Qty : {card?.item_count}</p>
                <p>Total Price : ₹<b>{card?.total_cart}</b></p>
                <button className="bg-secondary p-1 px-2 text-white rounded-sm hover:bg-success ">Remove</button>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
