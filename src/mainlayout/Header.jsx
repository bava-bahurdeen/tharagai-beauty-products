import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

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
  const [leftNav, setLeftnav] = useState(false);

  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="bg-white w-full  sticky top-0  data-[sticked='true']:shadow z-[2]">
      <section className="container mx-auto flex justify-between items-center py-4  ">
        <div>
          <img src={logo} alt="thargai-logo" />
        </div>

        <div className="lg:hidden">
          <button
            className="bg-secondary text-light p-2 text-xl"
            onClick={() => setLeftnav(!leftNav)}
          >
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

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-6 h-full ">
          <Link className="flex gap-2 items-center">
            <FaUser className="text-success h-4 w-4 font-bold" />
            <p className="text-success font-semibold">Login</p>
          </Link>

          <Link to={"/cart"} className="flex items-center gap-2  ">
            <Badge
              size="small"
              count={cart.length}
              className="font-hind font-extrabold text-xl mt-2"
              style={{ backgroundColor: "#7E8427" }}
            >
              <ShoppingCartOutlined className="font-hind font-extrabold text-secondary" />
            </Badge>
            <p className="font-hind font-semibold text-secondary mt-1">
              Cart
            </p>
          </Link>
        </div>
      </section>

      {leftNav && (
        <section className="h-screen w-full  lg:hidden absolute top-0 bg-white ">
          <div className="text-2xl text-secondary w-full flex justify-end p-5">
            <IoClose
              onClick={() => setLeftnav(!leftNav)}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-10">
            {linkList.map((urls) => {
              return (
                <Link
                  onClick={() => setLeftnav(!leftNav)}
                  to={urls.pathUrl}
                  key={urls.id}
                  className="font-hind font-medium uppercase hover:text-secondary border-b px-2"
                >
                  {urls.pathName}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </header>
  );
}
