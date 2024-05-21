import React from "react";
import { Link, Navigate } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import YourOrder from "./YourOrder";
import PaymentOptions from "./PaymentOptions";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../store/axiosInstance";
import { useSelector } from "react-redux";

export default function Account() {
  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const token = useSelector((state) => state.users.token);
  const { isPending, error, data } = useQuery({
    queryKey: ["userAddress"],
    queryFn: () =>
      axiosInstance.get("/users/address", {
        headers: {
          Authorization: `Token ${token}`,
        },
      }),
  });

  const address = data?.data;

  if (userError) {
    return <Navigate to="/login" />;
  }

  if (userLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mb-10">
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">Tharagai</h1>
          </Link>
        </div>
      </div>

      <div className="container mx-auto w-[99%] md:w-10/12 bg-white rounded shadow border-secondary p-2 md:px-4 mt-6">
        <h1 className="text-center text-xl font-bold  border-b pb-4 border-secondary/50">
          CheckOut
        </h1>

        <section className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between">
          <YourOrder />

          <section className="mt-2 flex flex-col lg:w-7/12">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Customer Information</h1>
              <button className="bg-secondary text-white p-1 px-2 rounded hover:bg-success">
                Add new address
              </button>
            </div>
            <section className="border mt-4 rounded">
              {address &&
                address.map((addre) => {
                  return (
                    <div className="border-b  p-4" key={addre.id}>
                      <div className="flex gap-3 ">
                        <input
                          type="radio"
                          name="addressName"
                          id={"addresId" + addre.id}
                          className=""
                        />
                        <label
                          className="font-bold capitalize"
                          htmlFor={"addresId" + addre.id}
                        >
                          {addre.first_name}
                        </label>
                        <p className="text-secondary font-medium capitalize">
                          {addre.address_type}
                        </p>
                        <p className="font-semibold">{addre.mobile}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap mt-2">
                        <p className="capitalize">{addre.street_address}</p>
                        <p className="capitalize">{addre.city}</p>
                        <p className="capitalize">{addre.state}</p>
                        <p className="capitalize font-bold">{addre.pin_code}</p>
                      </div>
                    </div>
                  );
                })}
            </section>
            <OrderSummery />
            <PaymentOptions />

            <div className="mt-5 p-2 flex justify-end">
              <button className="p-1 px-2 bg-secondary rounded-sm text-white hover:bg-success">
                Place Order{" "}
              </button>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
