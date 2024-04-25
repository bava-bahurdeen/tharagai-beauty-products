import React from "react";

export default function Button({ lblName, onclick }) {
  return (
    <button
      className="bg-secondary hover:bg-success text-white p-3 px-8 w-full"
      type="button"
      onClick={onclick}
    >
      {lblName}
    </button>
  );
}
