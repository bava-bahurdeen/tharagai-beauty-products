import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SideBar = ({dashboardList , handleNavbar}) => {
  return (
    <div>
         <div className="">
        <div className="text-2xl mb-9 text-[#2A4178] flex justify-between items-center p-4">
          <h1>Thaaragai</h1>
          <FaXmark onClick={handleNavbar} className='lg:hidden'/>
        </div>
        <div className="grid grid-cols-1 gap-5 p-4  lg:w-[130%] xl:w-[150%]">
          {dashboardList.map((item) => {
            return (
              <div className="text-xl text-[#94aade] cursor-pointer hover:text-[#2A4178] font-semibold shadow hover:shadow-lg p-1 rounded-md " key={item.id}>
                <Link to={item.link}>
                <button className="flex gap-6 items-center lg:pl-6 p-2  w-full " onClick={handleNavbar}>
                  {item.icon} <span>{item.list}</span>
                </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBar