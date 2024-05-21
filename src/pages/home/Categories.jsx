import React from "react";
import skin from "../../assets/images/productCategeries/skincare.png";
import hair from "../../assets/images/productCategeries/haircare.png";
import bath from "../../assets/images/productCategeries/bathcare.png";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../store/axiosInstance";

const categeryList = [
  {
    id: 1,
    img: skin,
    title: "Skin Care Products",
    name: "Skin Care",
  },
  {
    id: 2,
    img: hair,
    title: "Hair Care Products",
    name: "Hair Care",
  },
  {
    id: 3,
    img: bath,
    title: "Bath & Body Care Products",
    name: "Bath & Body",
  },
];

export default function Categories() {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsType"],
    queryFn: () =>
      axiosInstance.get("/products/product/type/").then((res) => {
        return res.data;
      }),
  });

  console.log("The data is  : ", data);
  return (
    <section className="bg-primary grid lg:grid-cols-6 gap-2 p-4">
      {data &&
        data.map((typ) => {
          return (
            <div key={typ.id}>
              <h1>{typ.name}</h1>
            </div>
          );
        })}
    </section>
  );
}
