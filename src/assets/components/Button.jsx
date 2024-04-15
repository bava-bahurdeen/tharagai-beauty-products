import React from "react";

export default function Button({ lblName }) {
  return (
    <button
      className="bg-secondary hover:bg-success text-white p-3 px-8 mt-5"
      type="button"
    >
      {lblName}
    </button>
  );
}
