import React from "react";

export default function Button({ lblName }) {
  return (
    <button
      className="bg-secondary hover:bg-success text-white p-3 px-8 w-full"
      type="button"
    >
      {lblName}
    </button>
  );
}
