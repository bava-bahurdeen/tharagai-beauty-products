import React from "react";

export default function Label({ id, lblName }) {
  return (
    <label htmlFor={id} className="font-hind ">
      {lblName}
    </label>
  );
}
