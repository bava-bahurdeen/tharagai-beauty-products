import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import dashboardList from "./dashboardList";
import { BiMessage, BiSolidBellRing } from "react-icons/bi";
import profileImg from "../../../assets/Admin/profile.jpg";
import { FaBarsStaggered } from "react-icons/fa6";

const Dashboard = () => {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <div className="lg:flex lg:justify-around lg:gap-20 xl:gap-2 lg:p-3 lg:w-full">
      <div
        className={
          navbar
            ? " fixed top-0 left-0 w-full h-full bg-white transition-all duration-700 md:w-[50%] lg:static lg:w-auto xl:w-auto "
            : " fixed top-0 -left-full w-full h-full  bg-white transition-all duration-700  lg:static lg:w-auto lg:h-auto text-4xl"
        }
      >
        <SideBar dashboardList={dashboardList} handleNavbar={handleNavbar} />
      </div>
      <div className="lg:w-[70%] xl:w-[70%]">
        <main className="flex text-[#2A4178] justify-between lg:justify-end items-center p-6">
        <FaBarsStaggered onClick={handleNavbar} className="lg:hidden text-2xl " />
          <section className="flex gap-4 ">
          <div className="border border-gray-400  my-3  p-1 rounded-md md:w-full  hidden md:flex   ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-gray-600 p-1  "
          />
        </div>
        <div className="flex items-center md:text-4xl text-xl gap-2">
          <BiMessage />
          <BiSolidBellRing />
          <img
            src={profileImg}
            className="md:w-[70px] w-[50px] h-[50px] object-cover rounded-full  md:rounded-[100%] "
            alt="profile-img"
          />
        </div>
          </section>
        </main>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
