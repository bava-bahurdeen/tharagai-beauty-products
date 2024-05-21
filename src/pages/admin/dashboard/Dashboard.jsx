import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import Orders from "./_components/Orders";
import Addproducts from "./_components/Addproducts";
import Customers from "./_components/Customers";
import Showproducts from "./_components/Showproducts";
import Dash from "./_components/Dash";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);
  const user = useSelector((state) => state.users.users.isAdmin);

  if (userError) {
    return <Navigate to="/login" />;
  }

  if (userLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Access Denied...!</p>;
  }
  return (
    <main>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#7E8427",
            borderRadius: 2,
            colorBgContainer: "rgba(0, 0, 0, 0.11)",
          },
        }}
      >
        <Header></Header>
        <div className="flex gap-4" style={{ marginTop: "0.5px" }}>
          <SideMenu />
          <Routes>
            <Route path="" element={<Dash />} />
            <Route path="order" element={<Orders />} />
            <Route path="addproduct" element={<Addproducts />} />
            <Route path="customers" element={<Customers />} />
            <Route path="show-products" element={<Showproducts />} />
          </Routes>
        </div>
      </ConfigProvider>
    </main>
  );
}
