import React, { useEffect, useState } from "react";
import { getProducts } from "../../store/thunks/productThunk";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
// import axios from "axios";

export default function Productpage() {
  let { productId } = useParams();

  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product1 = useSelector((state) => state.products);
  console.log("The products are :", product1);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_LOCAL_URL}tharagai/products/${productId}/`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("The error is IS : ", error);
  //     });
  // }, []);

  return (
    <main className="p-4 md:p-10 lg:px-20">
      <section className="bg-white container mx-auto grid w-full">
        <div className="bg-green-400 w-full">
          <img
            src={`${import.meta.env.VITE_LOCAL_URL}${product?.image}`}
            alt={product.name}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
