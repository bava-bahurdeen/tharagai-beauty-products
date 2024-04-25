import React from "react";
import bg1 from "../../assets/images/hero/b1.jpg";
import Inputbox from "../../assets/components/InputBox";
import QuestinBottom from "../../assets/components/QuestinBottom";
import Button from "../../assets/components/Button";
import { FaArrowRight } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="">
      <div
        className="w-[full] h-[500px] grid place-items-center sm:grid sm:place-items-center object-cover"
        style={{ background: `url(${bg1})` }}
      >
        <h1 className="text-[50px] font-semibold text-white">Contact</h1>
      </div>
      <div className=" container  mx-auto h-full pt-14 xl:pl-30 flex flex-col xl:flex-row  ">
        <div className=" xl:w-[600px]">
          <h2 className="text-3xl font-semibold">Dedicated to our clients</h2>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            reprehenderit earum aspernatur. Sit id ea fugiat neque possimus
          </p>
        </div>
        <div className="flex flex-col gap-1  ">
          <label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-x-2">
            <div className="flex flex-col">
              <Inputbox />
              <span className="text-sm font-light">First</span>
            </div>
            <div className="flex flex-col">
              <Inputbox />
              <span className="text-sm font-light">Last</span>
            </div>
          </div>
          <label htmlFor="email">
            Email <span className="text-red-600">*</span>
          </label>
          <Inputbox />

          <label htmlFor="Message">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea name="Message" cols="10" rows="5" required></textarea>
      <button className="w-[100px] h-[50px] bg-secondary text-center text-white mt-5">Submit</button>
        </div>
      </div>
      <div className="md:p-28 w-full">
        
      <div className="flex flex-col items-center gap-10  xl:pl-40 sm:flex-col text-center xl:flex-row md:gap-x-32 xl:gap-x-50 border-t-2 border-white pt-16 ">
        <FaArrowRight size={50} className="text-secondary hover:text-violet-600 " />
        <div className="flex flex-col xl:flex-row xl:items-center gap-10 ">
          <div>
            <p className="text-2xl font-semibold">phone</p>
            <p>929-242-6868</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Address</p>
            <p className="text-wrap">Address 123 Fifth Avenue, New York, NY 10160</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Email</p>
            <p>contact@info.com</p>
          </div>
        </div>
      </div>
      </div>
      <QuestinBottom />
    </section>
  );
}
