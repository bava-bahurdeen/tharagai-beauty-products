import React from "react";

import bg2 from "../../assets/images/hero/hero.png";
import leafBg from "../../assets/images/bg/bgLeaf.png";
import anil from "../../assets/images/ingrediants/anil.png";
import carban from "../../assets/images/ingrediants/carban.png";
import natural from "../../assets/images/ingrediants/natural.png";
import recycle from "../../assets/images/ingrediants/recycle.png";
import { useSelector } from "react-redux";
import ProductCard from "../../assets/components/ProductCard";

import { Link } from "react-router-dom";

import doubleQoute from "../../assets/images/bg/doubleQoute.png";
import testi_1 from "../../assets/images/tesimonials/testi_1.jpg";
import testi_2 from "../../assets/images/tesimonials/testi_2.jpg";
import testi_3 from "../../assets/images/tesimonials/testi_3.jpg";
import testi_4 from "../../assets/images/tesimonials/testi_4.jpg";

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

export default function Home() {
  const productTypes = useSelector((state) => state.products.productTypes);
  const bestSeller = useSelector((state) => state.products.bestSeller);
  return (
    <main>
      {/* Hero Section */}
      <section
        className=" relative bg-cover  bg-center bg-no-repeat w-full h-[56vh] lg:h-[90vh]"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div
          className="bg-cover bg-no-repeat h-full w-full"
          style={{
            backgroundImage: `url(${leafBg})`,
            backgroundPosition: "right",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="h-full w-full flex justify-end pr-2 lg:pr-44 items-center absolute top-0">
          <div className="lg:w-[44%] text-center lg:text-end">
            <h4 className="font-medium text-white ">New Arrival</h4>
            <h1 className="font-semibold text-3xl lg:text-5xl text-light mt-5 lg:leading-[70px]">
              Nourish delicate skin & hair package
            </h1>
            <p className="font-hind text-light mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>
            <button className="bg-light p-2 px-4 mt-5 hover:bg-secondary hover:text-white transition delay-150 ease-in-out text-sm ">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Ingredients  */}

      <section className="container mx-auto bg-primary py-10 lg:grid lg:grid-cols-3 lg:items-center lg:gap-10">
        <h1 className="text-lg text-center font-medium">
          We use only natural ingredients for our products, which are good for
          you and the environment too.
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

      {/* BestSeller  */}

      <section className="container mx-auto bg-primary py-10">
        <h1 className="h-[1px] w-full bg-gray-600 opacity-25"></h1>
        <div className="py-10">
          <h1 className="text-5xl font-medium mb-10">Bestsellers</h1>
          <ul className="mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSeller &&
              bestSeller.map((i) => {
                return <ProductCard i={i} key={i.id} />;
              })}
          </ul>
        </div>
      </section>

      {/* Product Categories */}

      <section className="py-1 lg:container lg:mx-auto mb-20">
        <h1 className="font-medium text-xl text-center mt-10">
          Our Categories
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {productTypes &&
            productTypes.map((cat) => {
              return (
                <Link
                  to={`/categories/${cat.name}/`}
                  className="flex flex-col items-center"
                  key={cat.id}
                >
                  <div className="bg-white/60 rounded-full h-44 w-44 flex justify-center items-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="rounded-full"
                    />
                  </div>
                  <h1 className="text-xl capitalize mt-4 text-secondary font-bold">
                    {cat.name}
                  </h1>
                </Link>
              );
            })}
        </div>
        {/* <h1 className="h-[1px] w-full bg-gray-600 opacity-25 mt-20"></h1> */}
      </section>
      {/* Testimonial */}
      <section className="container mx-auto relative mb-10">
        <div className="h-[1px] w-full bg-black opacity-30"></div>
        <img
          src={doubleQoute}
          alt="tharagai"
          className="absolute right-0 w-96"
        />
        <h1 className="mt-20 font-medium text-4xl">Testimonials</h1>

        <div className="flex flex-col lg:flex-row flex-wrap mt-10">
          {/* testimonails ----- box1 */}

          <div className="lg:w-[50%] p-4 lg:p-24 flex flex-col gap-6 hover:bg-white lg:border-r border-b border-borderLine">
            <img
              src={testi_1}
              alt="tharagai-testimonials"
              className="w-20 h-20 rounded-full"
            />
            <p className="font-hind text-sm lg:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h4 className="font-medium text-xl mb-4">Natalie Attired</h4>
          </div>

          {/* Testimonial ---- box2 */}

          <div className="lg:w-[50%] p-4 lg:p-24 flex flex-col gap-6 hover:bg-white border-b border-borderLine">
            <img
              src={testi_2}
              alt="tharagai-testimonials"
              className="w-20 h-20 rounded-full"
            />
            <p className="font-hind text-sm lg:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h4 className="font-medium text-xl mb-4">Natalie Attired</h4>
          </div>

          {/* testimonails ----- box3 */}

          <div className="lg:w-[50%] p-4 lg:p-24 flex flex-col gap-6 hover:bg-white border-b lg:border-b-0 lg:border-r border-borderLine">
            <img
              src={testi_3}
              alt="tharagai-testimonials"
              className="w-20 h-20 rounded-full"
            />
            <p className="font-hind text-sm lg:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h4 className="font-medium text-xl mb-4">Natalie Attired</h4>
          </div>

          {/* Testimonial ---- box4 */}

          <div className="lg:w-[50%] p-4 lg:p-24 flex flex-col gap-6 hover:bg-white border-b lg:border-b-0 border-borderLine">
            <img
              src={testi_4}
              alt="tharagai-testimonials"
              className="w-20 h-20 rounded-full"
            />
            <p className="font-hind text-sm lg:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h4 className="font-medium text-xl mb-4">Natalie Attired</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
