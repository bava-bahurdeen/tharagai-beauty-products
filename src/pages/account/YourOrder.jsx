import React from "react";
import { useSelector } from "react-redux";

export default function YourOrder() {
  const cart = useSelector((state) => state.products.cart);
  let productTotal = 0;
  const deliveryCharge = 50;

  cart.map((da) => {
    productTotal += Number(da.total_cart);
  });
  const total = productTotal + deliveryCharge;

  return (
    <section className="mt-5 lg:w-4/12">
      <h1 className="font-bold">Price Details</h1>
      <div className="border rounded mt-2">
        <div className="p-2 md:px-4">
          <div className="mt-4 flex justify-between">
            <h1 className="font-medium">Total Product</h1>
            <p>{cart.length}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <h1 className="font-medium">Total Price </h1>
            <p className="font-medium ">₹{productTotal}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <h1 className="font-medium">Delivery Charges </h1>
            <p className="font-medium ">₹{deliveryCharge}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between p-2  md:px-4">
          <h1 className="font-medium text-secondary">Total</h1>
          <h1 className="font-medium text-secondary">₹{total}</h1>
        </div>
      </div>
    </section>
  );
}
