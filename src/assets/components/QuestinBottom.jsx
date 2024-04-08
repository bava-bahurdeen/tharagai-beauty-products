import React from "react";

export default function QuestinBottom() {
  return (
    <section className=" mt-10  bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-center md:items-start gap-6 md:w-[60%]">
          <h1 className="text-3xl font-medium md">Have questions?</h1>
          <a
            className="bg-secondary text-white hover:bg-success p-3 px-5 text-sm"
            href="#"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-xl">Track Your Order</h1>
          <p className="text-sm font-hind text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
          <a href="#" className="text-sm text-secondary hover:text-success">
            Track your Order
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-xl">Return & Refund</h1>
          <p className="text-sm font-hind text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
          <a href="#" className="text-sm text-secondary hover:text-success">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
