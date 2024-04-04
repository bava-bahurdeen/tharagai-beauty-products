import React from "react";

import bg1 from "../../assets/images/hero/bg-01-free-img.jpg";
import leafBg from "../../assets/images/bg/bgLeaf.png";

export default function Hero() {
  return (
    <section
      className=" relative bg-cover bg-center bg-no-repeat w-full h-[56vh] lg:h-[86vh]"
      style={{ backgroundImage: `url(${bg1})` }}
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
  );
}
