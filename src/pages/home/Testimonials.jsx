import React from "react";
import doubleQoute from "../../assets/images/bg/doubleQoute.png";
import testi_1 from "../../assets/images/tesimonials/testi_1.jpg";
import testi_2 from "../../assets/images/tesimonials/testi_2.jpg";
import testi_3 from "../../assets/images/tesimonials/testi_3.jpg";
import testi_4 from "../../assets/images/tesimonials/testi_4.jpg";

export default function Testimonials() {
  return (
    <section className="container mx-auto relative mb-10">
      <div className="h-[1px] w-full bg-black opacity-30"></div>
      <img src={doubleQoute} alt="tharagai" className="absolute right-0 w-96" />
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h4 className="font-medium text-xl mb-4">Natalie Attired</h4>
        </div>

      </div>
    </section>
  );
}
