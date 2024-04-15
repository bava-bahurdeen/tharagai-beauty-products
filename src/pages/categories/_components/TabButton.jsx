import React from "react";

export default function TabButton({ activeTab, tabName, handleTabChange,lblName }) {
  return (
    <button
      className={`tab-btn p-2 hover:text-secondary hover:border-b-2 hover:border-success ${
        activeTab === tabName
          ? "border-b-2 border-success rounded-t bg-secondary text-white hover:text-white "
          : ""
      }`}
      onClick={() => handleTabChange(tabName)}
    >
      {lblName}
    </button>
  );
}
