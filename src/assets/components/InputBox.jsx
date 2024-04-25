import React from "react";

export default function InputBox({ id, value, changeFun, type, placeholder }) {
  return (
    <input
      className="outline-0 border shadow p-3 w-full mt-1 bg-transparent"
      id={id}
      value={value}
      type={type ? type : "text"}
      onChange={(e) => changeFun(e.target.value)}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}
