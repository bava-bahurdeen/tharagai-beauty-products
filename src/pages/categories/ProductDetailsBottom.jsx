import React, { useState } from "react";
import TabButton from "./_components/TabButton";
import ProductDescription from "./_components/ProductDescription";
import ProductBenifits from "./_components/ProductBenifits";
import Reviews from "./_components/Reviews";
import RelatedProduct from "./_components/RelatedProduct";
import Howtouse from "./_components/Howtouse";

export default function ProductDetailsBottom() {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white mx-auto w-full p-4 md:p-6 lg:p-10">
      <div className="flex items-center border-b border-gray-200">
        <TabButton
          activeTab={activeTab}
          tabName={"description"}
          handleTabChange={handleTabChange}
          lblName="Description"
        />
        <TabButton
          activeTab={activeTab}
          tabName={"benefits"}
          handleTabChange={handleTabChange}
          lblName="Benefits"
        />
        <TabButton
          activeTab={activeTab}
          tabName={"howtoUse"}
          handleTabChange={handleTabChange}
          lblName="How To Use "
        />
      </div>

      {activeTab === "description" && <ProductDescription />}
      {activeTab === "benefits" && <ProductBenifits />}
      {activeTab === "howtoUse" && <Howtouse />}
      <br />
      <Reviews />

      <RelatedProduct />
    </div>
  );
}
