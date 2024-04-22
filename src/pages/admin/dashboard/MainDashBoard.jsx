import React, { useEffect } from "react";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";


function MainDashBoard (){


  return (
    <div className="overflow-hidden">
      <section className="lg:p-4 lg:ms-2">
        <div className="border border-gray-400 w-[90%] my-3  p-1 rounded-md md:w-[70%] mx-auto  md:hidden  ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-gray-600 p-1  "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4 place-items-center p-1 lg:p-2 lg:ms-4 ">
          <div className="h-[125px] rounded-xl items-center  bg-gradient-to-r text-white from-[#6BAAFC] to-[#305FEC] flex pl-8 justify-around   gap-5 w-full  ">
            <div className="flex flex-col   ">
              <h3 className="pl-4 text-lg font-medium">Shipping Order</h3>
              <h1 className="text-7xl  -rotate-[20deg]">
                <FaTruckMoving className="opacity-25" />
              </h1>
            </div>
            <h1 className="text-5xl font-medium">67</h1>
          </div>
          <div className="h-[125px] rounded-xl items-center  w-full  bg-gradient-to-r text-white from-[#EF5E7A] to-[#D35385] flex pl-8  justify-around   gap-5  ">
            <div className="flex flex-col  ">
              <h3 className="pl-4 text-lg font-medium">Pending Order</h3>
              <h1 className="text-7xl  -rotate-[20deg]">
                <FaShoppingCart className="opacity-25" />
              </h1>
            </div>
            <h1 className="text-5xl font-medium">09</h1>
          </div>
          <div className="h-[125px] rounded-xl items-center w-full bg-gradient-to-r text-white from-[#D623FE] to-[#A530F2] flex pl-8  justify-around  gap-5  ">
            <div className="flex flex-col  ">
              <h3 className="pl-4 text-lg font-medium">New Orders</h3>
              <h1 className="text-7xl  -rotate-[20deg]">
                <BsBagFill className="opacity-25 pb-1" />
              </h1>
            </div>
            <h1 className="text-5xl font-medium">35</h1>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h1 className="text-2xl font-bold mb-4 ms-7">All Products</h1>
        </div>

           <div className="bg-gray-100 ms-4 rounded mx-auto ">
  <div className="max-w-screen-xl mx-auto">
    <div className="bg-white shadow-md rounded my-6 overflow-scroll h-[300px]">
      <table className="min-w-full table-auto">
        <thead className="sticky top-0 bg-gray-200 text-gray-600 text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Edit</th>
            <th className="py-3 px-6 text-left">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          
        </tbody>
      </table>
    </div>
  </div>
</div>

        
      </section>
    </div>
  );
};
export default MainDashBoard;


