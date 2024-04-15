import React, { useEffect, useState } from "react";
import { getSingleProducts } from "../../store/thunks/productThunk";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import ProductDetailsBottom from "./ProductDetailsBottom";
import RelatedProduct from "./_components/RelatedProduct";
import QuestinBottom from "../../assets/components/QuestinBottom";

export default function Productpage() {
  let { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProducts(productId));
  }, [dispatch, productId]); // Added productId to the dependency array

  const product = useSelector((state) => state.products.singleProduct);
  const loading = useSelector((state) => state.products.loading);
  console.log(product);

  const variations = product?.variations;
  const [selectedVariation, setSelectedVariation] = useState(null); // Initialize with null

  useEffect(() => {
    if (variations && variations.length > 0) {
      setSelectedVariation(variations[0]); // Set the first variation if variations exist
    }
  }, [variations]);

  const handleVariationChange = (variation) => {
    setSelectedVariation(variation);
  };

  const [itemCount, setItemcount] = useState(1);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <main className="p-4 md:p-10 lg:px-20">
            <section className="bg-white mx-auto grid w-full lg:grid-cols-2 p-4 md:p-6 lg:p-10 gap-5">
              <div className="w-full flex justify-center items-center ">
                <img
                  src={`${import.meta.env.VITE_LOCAL_IMAGE_URL}${
                    product?.image
                  }`}
                  alt={product.name}
                  className="w-full"
                />
              </div>

              <div className="text-sm text-light_gray font-hind ">
                <div className="flex gap-1 flex-wrap">
                  <Link to={"/"} className="font-hind">
                    Home
                  </Link>
                  /
                  <Link to={"/"} className="font-hind">
                    {product.product_type_name}
                  </Link>
                  /
                  <Link to={"/"} className="font-hind">
                    {product.name}
                  </Link>
                </div>

                <p className="text-base text-light_gray font-hind mt-2">
                  {product.product_type_name}
                </p>

                <div className="flex gap-4 items-baseline flex-wrap">
                  <h1 className="text-2xl lg:text-4xl font-semibold mt-2 text-black">
                    {product.name}
                  </h1>
                  <p className="flex items-center gap-1">
                    5.0 <IoStar className="text-yellow-400" />
                    <span className="text-secondary">(112) Reviews</span>
                  </p>
                </div>

                <h6 className="mt-2 uppercase">
                  GLOWING SKIN AND BRIGHTNEING SKIN IN JUST 7 DAYS
                </h6>

                <h3 className="text-dark_gray text-2xl font-hind mt-3">
                  {selectedVariation ? (
                    <>
                      <del className="font-hind">
                        ₹{selectedVariation.price * 1.5}.00
                      </del>{" "}
                      <span className="font-semibold text-secondary">
                        ₹{selectedVariation.price}
                      </span>{" "}
                      <span className="text-sm">+ Free Shipping</span>
                    </>
                  ) : (
                    "Loading..."
                  )}
                </h3>

                <div className="flex gap-4 mt-5">
                  {variations &&
                    variations.map((variation) => {
                      return (
                        <div key={variation.id}>
                          <button
                            onClick={() => handleVariationChange(variation)}
                            className={`${
                              selectedVariation &&
                              selectedVariation.id === variation.id
                                ? "border-secondary"
                                : ""
                            } px-4 py-2 border-2`}
                          >
                            {variation.weight}
                          </button>
                        </div>
                      );
                    })}
                </div>

                <div className="flex items-center flex-wrap mt-5 gap-5">
                  <div className="border border-secondary flex p-3 px-4 md:w-fit ">
                    <button
                      onClick={() =>
                        setItemcount(1 < itemCount ? itemCount - 1 : itemCount)
                      }
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      value={itemCount}
                      onChange={(e) => setItemcount(Number(e.target.value))}
                      className="border-none outline-none no-spinner w-16 lg:w-28 text-center text-lg"
                    />
                    <button onClick={() => setItemcount(itemCount + 1)}>
                      <FaPlus />
                    </button>
                  </div>
                  <div className="border border-secondary flex p-3 px-4 bg-secondary ">
                    <button className="text-lg text-white w-32 lg:w-36">
                      Add to cart
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-full w-full absolute cursor-pointer opacity-0 top-0"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <div className="border bg-secondary p-3 flex justify-between items-center">
                      <h1 className="text-white font-semibold">Skin Type</h1>
                      <FaAngleDown
                        className={`text-white transition-transform duration-500 ${
                          isChecked ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    <div
                      className={`bg-white overflow-hidden transition-all duration-500 ${
                        isChecked ? "max-h-fit" : "max-h-0"
                      }`}
                    >
                      <div className="p-2">
                        {product?.skintype &&
                          product?.skintype.map((skin) => {
                            return (
                              <p className="text-lg " key={skin?.id}>
                                {skin.skinType}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ProductDetailsBottom />
          </main>
          <QuestinBottom />
        </>
      )}
    </>
  );
}
