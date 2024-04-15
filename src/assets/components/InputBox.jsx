import React from "react";

export default function InputBox({ id, reviewName, setReviewName, type }) {
  return (
    <input
      className="outline-0 border p-3 w-full mt-1"
      id={id}
      value={reviewName}
      type={type ? type : "text"}
      onChange={(e) => setReviewName(e.target.value)}
    />
  );
}
