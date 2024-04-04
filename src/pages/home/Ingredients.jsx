import React from "react";
import anil from "../../assets/images/ingrediants/anil.png";
import carban from "../../assets/images/ingrediants/carban.png";
import natural from "../../assets/images/ingrediants/natural.png";
import recycle from "../../assets/images/ingrediants/recycle.png";

const ingredientsList = [
  {
    id: 1,
    img: natural,
    name: "Natural Ingredients",
  },
  {
    id: 2,
    img: anil,
    name: "Cruelty Free",
  },
  {
    id: 3,
    img: carban,
    name: "Carbon Natural",
  },
  {
    id: 4,
    img: recycle,
    name: "Recyclable Packaging",
  },
];

export default function Ingredients() {
  return (
    <section className="container mx-auto bg-primary py-10 lg:grid lg:grid-cols-3 lg:items-center lg:gap-10">
      <h1 className="text-lg text-center font-medium">
        We use only natural ingredients for our products, which are good for you
        and the environment too.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 col-span-2 ">
        {ingredientsList.map((ingredient) => {
          return (
            <div
              key={ingredient.id}
              className="flex justify-center items-center flex-col"
            >
              <img
                src={ingredient.img}
                alt={ingredient.name}
                className="w-[50%]"
              />
              <p className="font-medium mt-5 text-gray-600 w-full text-center">
                {ingredient.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
