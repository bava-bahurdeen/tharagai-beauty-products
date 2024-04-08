import React from "react";
import img1 from "../../assets/images/favorites/img1.png";
import img2 from "../../assets/images/favorites/img2.png";
import img3 from "../../assets/images/favorites/img3.png";
import img4 from "../../assets/images/favorites/img4.png";
import img5 from "../../assets/images/favorites/img5.png";

const favoriteList = [
  {
    id: 1,
    img: img1,
    name: "Replumping conditioner lorem ipsum",
    price: 19.5,
  },
  {
    id: 2,
    img: img2,
    name: "Advanced night repair lorem ipsum",
    price: 19.5,
  },
  {
    id: 3,
    img: img3,
    name: "Tropical rehab shampoo and lorem ipsum",
    price: 19.5,
  },
  {
    id: 4,
    img: img4,
    name: "Lorem Ipsum anti-cellulite body oil",
    price: 19.5,
  },
  {
    id: 5,
    img: img5,
    name: "Replumping conditioner lorem ipsum",
    price: 19.5,
  },
];

function Favorite() {
  return (
    <section className="py-10 lg:container lg:mx-auto mb-10">
      <h1 className="font-medium text-xl text-center mt-10">
        Founders Top 5 Favorites
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-16">
        {favoriteList.map((fav) => {
          return (
            <a
              href=""
              className="w-[80%] md:w-[40%] lg:w-[25%] flex flex-col justify-center items-center"
              key={fav.id}
            >
              <img src={fav.img} alt="tharagai-1" className="rounded-full" />
              <h4 className="font-medium w-[70%] lg:w-[80%] text-center mt-4">
                {fav.name}
              </h4>
              <p className="text-secondary">${fav.price}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Favorite;
