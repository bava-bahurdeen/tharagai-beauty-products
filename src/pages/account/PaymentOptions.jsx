import React from "react";

export default function PaymentOptions() {
  return (
    <section className="mt-5 p-2 ">
      <h1 className="font-bold">Payment Options</h1>
      <div className="border rounded mt-4 p-2">
        <div className="flex gap-4">
          <input type="radio" name="" id="paymentSelectId" className="" />
          <label className="font-semibold" htmlFor="paymentSelectId">Cash On Delivery</label>
        </div>
      </div>
    </section>
  );
}
