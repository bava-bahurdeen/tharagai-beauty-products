import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const linkList = [
  {
    id: 1,
    pathUrl: "/",
    pathName: "Home",
  },
  {
    id: 2,
    pathUrl: "/categories",
    pathName: "Bath & Body",
  },
  {
    id: 3,
    pathUrl: "/",
    pathName: "Hair Care",
  },
  {
    id: 4,
    pathUrl: "/",
    pathName: "Skin Care",
  },
  {
    id: 5,
    pathUrl: "/about",
    pathName: "About Us",
  },
  {
    id: 6,
    pathUrl: "/",
    pathName: "Contact",
  },
];

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 bg-white  sticky top-0  data-[sticked='true']:shadow z-[2] ">
      <div>
        <img src={logo} alt="thargai-logo" />
      </div>

      <div className="lg:hidden">
        <button className="bg-secondary text-light p-2 text-xl">
          <IoMenuSharp />
        </button>
      </div>

      <div className="hidden lg:flex lg:gap-4 xl:gap-10">
        {linkList.map((urls) => {
          return (
            <Link
              to={urls.pathUrl}
              key={urls.id}
              className="font-hind font-medium uppercase hover:text-secondary"
            >
              {urls.pathName}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2 h-full ">
        <FaUser className="text-success h-5 w-5 font-bold" />
        <p className="font-hind font-semibold text-secondary mt-2">$0.00</p>
        <Badge
          size="small"
          count={2}
          className="font-hind font-extrabold text-xl mt-2"
          style={{ backgroundColor: "#7E8427" }}
        >
          <ShoppingCartOutlined className="font-hind font-extrabold text-secondary" />
        </Badge>
      </div>
    </header>
  );
}
