import React from "react";
import img1 from "../../assets/images/bestSellers/img1.png";
import img2 from "../../assets/images/bestSellers/img2.png";
import img3 from "../../assets/images/bestSellers/img3.png";
import img4 from "../../assets/images/bestSellers/img4.png";
import img5 from "../../assets/images/bestSellers/img5.png";

const bestList = [
  {
    id: 1,
    img: img1,
    name: "Luxurious locks at lower prices",
    price: "12.25",
  },
  {
    id: 2,
    img: img2,
    name: "Cleanse & Protect duo pack",
    price: "23.55",
  },
  {
    id: 3,
    img: img3,
    name: "Drift off naturally and refreshed pack",
    price: "49.90",
  },
  {
    id: 4,
    img: img4,
    name: "Australian clay tea tree cream",
    price: "15.25",
  },
];

export default function BestSeller() {
  return (
    <section className="container mx-auto bg-primary py-10">
      <h1 className="h-[1px] w-full bg-gray-600 opacity-25"></h1>
      <div className="py-10">
        <h1 className="text-5xl font-medium mb-10">Bestsellers</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-5 ">
            {bestList.map((product) => {
              return (
                <div key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <h1 className="font-medium text-lg lg:text-2xl line-clamp-2">
                    {product.name}
                  </h1>
                  <p className="font-hind text-secondary">${product.price}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full">
            <img
              src={img5}
              alt="tharagai-best seller "
              className="w-full h-[82%]"
            />
            <h1 className="font-medium text-2xl">
              Smooth skin super <br /> booster
            </h1>
            <p className="font-hind text-secondary">$10.25</p>
          </div>
        </div>
      </div>
    </section>
  );
}
