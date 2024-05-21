import { Header } from "antd/es/layout/layout";
import React from "react";
import { BiBell, BiSearch, BiUser } from "react-icons/bi";

export default function DashHeader() {
  return (
    <header className="sticky top-0 z-10 shadow">
      <div className="p-4 xl:px-16 py-6 bg-white flex justify-between ">
        <div className="flex gap-5 items-center relative w-1/3">
          <h1 className="text-2xl font-bold">Tharagai</h1>
          <input
            type="text"
            className="outline-none bg-secondary/20 p-1 rounded w-full"
            placeholder="search "
          />
          <div className="absolute right-0 p-1 bg-secondary h-full w-8 rounded-r flex items-center justify-center ">
            <BiSearch className="text-white" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BiBell className="text-xl font-bold text-secondary" />
          <BiUser className="text-xl font-bold" />
          <h1 className="text-xl font-bold">John Doe </h1>
        </div>
      </div>
    </header>
  );
}
