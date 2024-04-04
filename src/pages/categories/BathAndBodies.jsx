import React from "react";
import { product } from "../../assets/data";
import Card from "./Card";


function BathAndBodies() {
  
  return (
    <>
      <section className="bg-success/25 container mx-auto pt-10 pb-10">
        <div className="">
          <h1 className="text-5xl">Bath & Body </h1>
          <p className="mt-14 text-[15px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Dolore eu fugiat nulla pariatur
            sint occaecat cupidatat non proident sunt in culpa qui officia
            deserunt.
          </p>
        </div>
        <div className="mt-14 text-[15px] font-light flex justify-between">
          <h6 className="font-light">Showing all results</h6>
          <select name="Sorting" id="" className="bg-transparent ">
            <option value="">Default sorting</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Average Rating</option>
            <option value="">Sort by Latest</option>
            <option value="">Sort by Price: Low to High</option>
            <option value="">Sort by Price: High to low</option>
          </select>
        </div>
        <div className="mt-14">
          {
            product.map((i)=>{
              return(<Card i={i} key={i.id}/>)
            })
          }
        </div>
      </section>
    </>
  );
}

export default BathAndBodies;
