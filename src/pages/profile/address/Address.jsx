import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { PiGreaterThanBold } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";

import address from "../../../assets/images/profile-page/flat-design.png"
export default function Address() {
  return (
    <div>
        <div className="">
          {/* top section */}
      <div className="bg-secondary w-full h-72  flex flex-col md:flex-row justify-center  md:justify-around items-center container mx-auto">
<div>
<p className="flex items-center gap-2 text-xs md:text-base text-slate-300">My Account <span><PiGreaterThanBold/></span>  My Address</p>
<h2 className="text-2xl text-white md:text-6xl font-semibold ">My Address</h2>
</div>
<div>
<img src={address} alt="address image" className="w-36 md:w-64" />
</div>

      </div>
      <div className="container mx-auto p-10 flex flex-col md:flex-row  justify-center gap-y-8 md:gap-y-0 gap-x-40 items-center ">

      <div className="size-48 md:size-60 lg:size-80 border-2 border-secondary rounded-2xl grid place-items-center place-content-center gap-2  ">
       <Link to='/new-address'>
       <button
           
           className="font-semibold  lg:text-5xl  px-2 text-white size-8 lg:size-16 rounded-md lg:rounded-2xl bg-secondary hover:bg-success hover:text-black"
         >
           <IoAdd className="" />
         </button>
       </Link>
        
            <p>Add New Address</p>

         </div>
        <div className="size-48 md:size-60 lg:size-80 border-2 border-secondary  rounded-2xl p-3 lg:px-4 lg:py-6 space-y-3" >
         <h2 className="font-semibold text-xl">Andrew jose</h2>
         <p className="text-xs md:text-base">2c,Tower100,Tony Apartment, NewYork </p>
         <p className="text-xs md:text-base">+9166993334433</p>
         <p className="text-xs md:text-base">andrewjose7878@gmail.com</p>
         <Link to='/new-address'>
         
         <button
           
            className=" w-fit text-xs md:text-base flex items-center p-1 md:p-2 space-x-2 border-2 border-secondary  md:rounded-lg hover:bg-success hover:border-none"
          > 
            <TbUserEdit className="" /><span>Edit Address</span>
          </button>
           
         </Link>

       
        </div>
      </div>


        </div>
     
    </div>
  );
}
