import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import QuestinBottom from "../../assets/components/QuestinBottom";
import { Link, Navigate } from "react-router-dom";
import CartCard from "./CartCard";
import Button from "../../assets/components/Button";
import { FaArrowLeft } from "react-icons/fa6";

export default function Cart() {
  const loading = useSelector((state) => state.products.loading);
  const cart = useSelector((state) => state.products.cart);
  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);

  let total = 0;
  cart.map((ca) => {
    total = Number(ca.total_cart) + Number(total);
  });

  if (userError) {
    // navigate("/login");
    return <Navigate to="/login" />;
  }

  if (userLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="container mx-auto mt-10">
            <div className="shadow-md my-10 bg-white p-2 md:p-6 lg:p-10">
              <div className="w-full border">
                <div className="flex justify-between border-b p-4 pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {cart.length} Items
                  </h2>
                </div>

                <div className="md:flex mt-10 mb-5 border-b pb-2 hidden ">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6"></h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6"></h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                    Product
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                    Price
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">
                    Total
                  </h3>
                </div>

                {cart &&
                  cart.map((carts, id) => {
                    return <CartCard cart={carts} key={id} />;
                  })}

                <Link
                  to={"/categories"}
                  className="flex items-center gap-4 font-semibold text-secondary hover:text-success text-sm mt-10 p-4 w-fit"
                >
                  <FaArrowLeft /> Continue Shopping
                </Link>
              </div>

              <div className="w-full lg:py-10 flex justify-end mt-5">
                <div className="border w-full lg:w-[50%] xl:w-[40%]">
                  <h1 className="text-xl font-bold border-b p-3">
                    Cart Totals
                  </h1>
                  <div className="p-3 flex justify-between border-b">
                    <h1 className="font-hind font-semibold text-dark_gray">
                      Total
                    </h1>
                    <h1 className="font-hind font-semibold text-secondary">
                      ₹{total}
                    </h1>
                  </div>
                  <Link className="p-3" to={"/account"}>
                    <Button lblName="Proceed to checkout" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <QuestinBottom />
        </>
      )}
    </>
  );
}
