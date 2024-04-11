import React, { useState } from "react";
import p1 from "../../assets/images/products/P1.png";
import { product } from "../../assets/data";
export default function Productpage() {
  const [toggle, Settoggle] = useState(1);

  return (
    <>
      <div className="bg-primary p-0 md:p-12 overflow-hidden">
        <section className="container md:px-20 md:py-12 mx-auto lg:w-[1200px] lg:h-[1340px] bg-white px-16 py-10  ">
          {/* products details */}
          <div className="flex flex-col  gap-10  lg:flex-row  ">
            <div>
              <img
                src={p1}
                alt="product"
                className="w-[500px] h-[500px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-light_gray font-hind text-[13px]">
                Home / Hair Care / Avocado extract shower gel
              </h1>
              <h1 className="text-sm font-hind text-[15px] text-dark_gray">
                Bath & Body, Hair Care
              </h1>
              <h1 className="text-[24px] font-normal font-lexend">
                Avocado extract shower gel
              </h1>
              <div className="flex items-center flex-wrap">
                <h1 className="font-hind text-[23px] text-light_gray ">
                  $16.25<span className="font-bold">$12.90</span>
                </h1>
                <p className="text-[15px] font-light">+Free Shipping</p>
              </div>
              <div className="max-w-full w-[444px] h-[75px]">
                <h1 className="font-normal text-dark_gray">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </h1>
              </div>
              <div className="flex items-center gap-3 mt-24 sm:mt-5 border-b-2 border-black/20 pb-5">
                <input
                  type="number"
                  className="max-w-full border-2 border-b p-3 text-dark_gray  w-[54px] h-[35px]"
                />
                <button className="bg-secondary w-[230px] h-[34px] ">
                  Add To Cart
                </button>
              </div>
              <div className="border-t-1 border-black w-[440px] h-[34px]">
                <h1 className="text-light_gray text-[13px]">
                  <span className="text-dark_gray font-medium">
                    Categories:
                  </span>
                  Bath & Body, Hair Care
                </h1>
              </div>
            </div>
          </div>
          {/* tab section */}
          <div className="flex gap-2 sm:gap-5">
            <button
              onClick={() => {
                Settoggle(1);
              }}
              className={`${
                toggle == 1
                  ? "border-b-2 border-black text-[13px] sm:text-[20px] "
                  : "border-none"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => {
                Settoggle(2);
              }}
              className={`${
                toggle == 2
                  ? "  border-b-2 border-black text-[13px] sm:text-[20px] "
                  : "border-none hidden sm:block"
              }`}
            >
              Addition Information
            </button>
            <button
              onClick={() => {
                Settoggle(3);
              }}
              className={`${
                toggle == 3
                  ? "border-b-2 border-black text-[13px] sm:text-[20px] "
                  : "border-none"
              }`}
            >
              Reviews
            </button>
          </div>
          <div>
            <p
              className={
                toggle === 1 ? "block font-[15px] mt-8 text-sm " : "hidden"
              }
            >
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eaque minima, rem suscipit aperiam veritatis distinctio
              debitis nobis in dolorum provident odit porro perferendis esse
              nisi culpa ipsam atque totam consequuntur!
            </p>
            <p
              className={
                toggle === 2 ? "block font-[15px] mt-8 text-sm " : "hidden"
              }
            >
              Addition Information Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque minima, rem suscipit aperiam veritatis
              distinctio debitis nobis in dolorum provident odit porro
              perferendis esse nisi culpa ipsam atque totam consequuntur!
            </p>
            <p
              className={
                toggle === 3 ? "block font-[15px] mt-8 text-sm" : "hidden"
              }
            >
              Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eaque minima, rem suscipit aperiam veritatis distinctio debitis
              nobis in dolorum provident odit porro perferendis esse nisi culpa
              ipsam atque totam consequuntur!
            </p>
          </div>
          <div>
            <h1 className="font-lexend  mt-8  sm:mt-6 sm:text-[40px] text-[20px]  font-medium">
              Related products
            </h1>
            {product.map((items) => {
              <div key={items.id} className="flex">
                <img src={items.image} alt="product" />
                <h1>{items.category}</h1>
                <h1>{items.title}</h1>
                <div className="flex">
                  <p>{items.price[0]}</p>
                  <p>{items.price[1]}</p>
                </div>
              </div>;
            })}
          </div>
        </section>
      </div>
    </>
  );
}
