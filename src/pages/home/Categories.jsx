import React from "react";
import skin from "../../assets/images/productCategeries/skincare.png";
import hair from "../../assets/images/productCategeries/haircare.png";
import bath from "../../assets/images/productCategeries/bathcare.png";

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
  return (
    <section className="bg-primary grid lg:grid-cols-3 gap-2 p-4">
      {categeryList.map((imgs) => {
        return (
          <div
            style={{ backgroundImage: `url(${imgs.img})` }}
            className="h-[405px] w-full flex flex-col justify-center items-center bg-cover bg-no-repeat"
          >
            <p className="text-white font-medium">{imgs.title}</p>
            <h1 className="text-white font-medium text-[40px] mt-0">
              {imgs.name}
            </h1>
            <button className="bg-white p-3 px-4 text-sm font-medium mt-2 hover:bg-secondary hover:text-white">
              Shop Now
            </button>
          </div>
        );
      })}
    </section>
  );
}
