import { ConfigProvider, Table } from "antd";
import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";

const dashData = [
  {
    id: 1,
    counts: 200,
    head: "Orders",
    color: "#B5F1CC",
    icon: <BsCartCheckFill className="text-3xl text-secondary" />,
  },
  {
    id: 2,
    counts: 160,
    head: "Products",
    color: "#C9F4AA",
    icon: <IoCartOutline className="text-3xl text-secondary" />,
  },
  {
    id: 3,
    counts: 150,
    head: "Customers",
    color: "#FCC2FC",
    icon: <PiUsersThree className="text-3xl text-secondary" />,
  },
  {
    id: 4,
    counts: 300,
    head: "Orders",
    color: "#E5FDD1",
    icon: <BsCartCheckFill className="text-3xl text-secondary" />,
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Order Id",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (name) => {
      return <a className="">{name}</a>;
    },
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export default function () {

  return (
    <main className="p-6 bg-white  w-[80%] mt-10 rounded-2xl">
      <section className="grid grid-cols-4 gap-2">
        {dashData.map((data) => {
          return (
            <div
              key={data.id}
              className={`h-20  rounded bg-secondary p-2 px-8 flex  items-center gap-4 shadow-lg hover:shadow-xl`}
            >
              <div className="h-16  w-16 rounded-full bg-white flex justify-center items-center">
                {data.icon}
              </div>
              <div>
                <h1 className="text-xl font-semibold">{data.head}</h1>
                <p className="text-sm font-semiboldfont-hind">{data.counts}</p>
              </div>
            </div>
          );
        })}
      </section>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
            borderRadius: 2,
            colorBgContainer: "rgba(0, 0, 0, 0.11)",
            // headerBg: "rgba(0, 0, 0, 0.88)",
            // headerColor: "rgba(0, 0, 0, 0.11)",
          },
        }}
      >
        <section className="mt-10">
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </ConfigProvider>
    </main>
  );
}
