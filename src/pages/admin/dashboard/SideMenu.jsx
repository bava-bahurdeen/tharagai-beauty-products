import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";

const sideLinkes = [
  {
    id: 1,
    url: "",
    name: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    id: 2,
    url: "",
    name: "Products",
    icon: <IoCartOutline />,
  },
  {
    id: 3,
    url: "addproduct",
    name: "Add Products",
    icon: <MdAddShoppingCart />,
  },
  {
    id: 4,
    url: "order",
    name: "Orders",
    icon: <MdOutlineFavoriteBorder />,
  },
  {
    id: 5,
    url: "customers",
    name: "Customers",
    icon: <PiUsersThree />,
  },
];

export default function SideMenu() {
  return (
    <aside
      className="bg-white w-2/12 sticky top-16"
      style={{ height: "calc(100vh - 66px)", marginTop: "0.5px" }}
    >
      <p className="text-gray-500 font-semibold text-sm px-14  py-8">
        Main Menu{" "}
      </p>
      <ul className="flex flex-col px-14 gap-5">
        {sideLinkes.map((url) => {
          return (
            <li
              key={url.id}
              className="text-gray-800 font-semibold hover:text-secondary flex gap-2 items-center"
            >
              {url.icon}
              <Link to={url.url}>{url.name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
