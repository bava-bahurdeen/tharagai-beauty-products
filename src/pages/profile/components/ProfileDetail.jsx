import React from "react";
import { TbUserEdit } from "react-icons/tb";
import { GoPackageDependents } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone,  } from "react-icons/ci";

import { Button } from "antd";

import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCardOff } from "react-icons/ci";


export default function ProfileDetail({ changeedit }) {
  const ProfileDetails = [
   
    {
      icon: <MdOutlineEmail className="text-secondary text-xl"/>,

      nam: "Email:",
      value: "User@123gmail.com",
    },
    {
      icon: <CiPhone className="text-secondary text-xl"/> ,

      nam: "Phone:",
      value: "+919022019420",
    },
  ];
  const boxes = [
   
    {
      icon:<GoPackageDependents className="text-4xl"/>,

      head: "Your Orders",
      lead: "Track,Return or Buy things again",
      href:"/orders"

    },
    {
      icon: <IoLocationOutline className="text-4xl"/> ,
      head: "Address",
      lead: "Edit Address for Orders",
       href:"/address"
    },

    {
        icon:< MdOutlinePayment className="text-4xl"/>,
        head: "Payment Method",
        lead: "Your Saved UPIs or cards & more ",
         href:"/payment"
      },
  ];
  return (
    <section>
    
    <div>
      {/* profile detail section */}

      <h1 className="text-3xl mt-5 text-center md:text-start">
        Welcome <span>User!</span>
      </h1>
      <div className="flex md:justify-normal items-center gap-10 mt-4 flex-wrap justify-center ">
        {/* user */}
        {ProfileDetails.map((item, index) => {
          return (
            <div key={index} className="flex justify-center gap-2 items-center">
              {item.icon}
              <p className="text-[8px] md:text-sm lg:text-lg inline">
                {item.nam}
              </p>
              <span className="text-[10px] md:text-sm lg:text-lg ">
                {item.value}
              </span>
            </div>
          );
        })}
        {/* edit  */}
        <div>
          <Button
            onClick={changeedit}
            className=" border-none text-[12px] !flex items-center gap-2   md:text-sm lg:text-lg font-light"
          >
            <TbUserEdit className="text-[15px] md:text-lg text-secondary  inline" />
           change password
          </Button>
        </div>
      </div>
    </div>

    <div className=" flex flex-col justify-center gap-6 items-center  flex-wrap lg:flex-nowrap md:flex-row md:justify-around mt-10 container  cursor-pointer ">
      {boxes.map((item, index) => {
        return (
          <Link to={item.href}    key={index}          className="w-2/4 h-36 flex flex-col md:flex-row  group justify-center gap-1 md:gap-10 hover:shadow-md   md:ml-4 items-center border-dashed border-[1px] md:p-6  border-light_gray rounded-3xl md:rounded-xl"
>
        
            <div className="size-10   md:size-20 md:group-hover:bg-secondary md:group-hover:text-white md:bg-white grid md:place-items-center rounded-full text-secondary">
             {item.icon}
            </div>
            <div className="text-center md:text-start">
              <p className=" text-lg- md:text-xl">{item.head}</p>
              <p className="text-xs  md:text-xs">{item.lead}</p>
            </div>

          </Link>
        );
      })}
    </div>
    <div>
      <div className=" flex pb-24  flex-col place-items-center lg:flex-row lg:mt-10 text-center ">
        {/* shipping box */}
        <div className="w-60 h-44  flex justify-center items-center flex-col lg:border-light_gray lg:border-2 ">
          <LiaShippingFastSolid className="text-3xl md:text-5xl text-secondary" />
          <p className="text-dark font-semibold">Free Shipping</p>
          <p className="text-xs font-light">orders Above Rs.399</p>
        </div>
        {/* cod box */}
        <div className="flex flex-col justify-around items-center  lg:flex-row w-4/5 h-44 p-4 lg:border-light_gray border-2 gap-y-14 lg:gap-0">
          <div className="flex justify-center items-center flex-col   ">
            <CiCreditCardOff className="text-3xl md:text-5xl text-secondary" />
            <p className="text-dark font-semibold">Cod Available</p>
            <p className="text-xs font-light">@Rs.40 Per Order</p>
          </div>
          {/* question content */}
          <div className="grid gap-y-4 place-items-center">
            <h1>Have a Queries or Concerns?</h1>
            <Button className="!w-32 !h-10 md:!w-56 md:!h-12 !bg-secondary !text-light hover:!bg-success hover:!border-none">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
}
