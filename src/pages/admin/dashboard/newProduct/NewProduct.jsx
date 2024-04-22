import React from "react";
import { Outlet } from "react-router-dom";

const NewProduct = ({
  productDetails,
  productErrors,
  handleProductChange,
  handleProductError,
  newProductSave,
  handleMainImageChange,
  handleSubImage1Change,
  handleSubImage2Change,
}) => {
  const handleInputChange = (key, e) => {
    const { value } = e.target;
    handleProductChange(key, value);

    if (value.trim() === "") {
      handleProductError(`${key}Error`, true);
    } else {
      handleProductError(`${key}Error`, false);
    }
  };

 
  return (
    <form>
      <div className="flex flex-col gap-4  items-center md:flex-row md:justify-around ">
        <h1 className="text-center text-lg text-[#2A4178] md:text-left font-semibold">
          Add NewProduct
        </h1>
        <div className="flex items-center gap-3 text-2xl">
          <label htmlFor="category" className="  text-base ">
            Category:
          </label>
          <select
            id="category"
            defaultValue="chooseCategory"
            className="bg-gray-100 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  outline-none font-medium   p-2.5 "
            onChange={(e) => handleInputChange("productCategory", e)}
          >
            <option value="chooseCategory" disabled>
              Choose a category
            </option>
            <option value="skincare">Skin Care</option>
            <option value="haircare">Hair Care</option>
            <option value="facecare">Face Care</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col p-3  md:p-3 lg:flex-row  lg:justify-evenly lg:p-6 lg:gap-3 items-center   ">
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1
          p-4 gap-4 md:gap-7 my-6 border border-gray-300 w-[100%] xl:w-[60%]  rounded-md "
        >
          <input
            type="text"
            placeholder="Product Name"
            className={`border  ${
              productErrors.productNameError
                ? "border-red-500"
                : "border-gray-400"
            } text-gray-600  rounded text-lg p-1 outline-none w-full`}
            value={productDetails.productName}
            onChange={(e) => handleInputChange("productName", e)}
          />
          <input
            type="text"
            placeholder="Product Title"
            className={`border ${
              productErrors.productTitleError
                ? "border-red-500"
                : "border-gray-400"
            } text-gray-700  rounded text-lg p-1 outline-none w-full`}
            onChange={(e) => handleInputChange("productTitle", e)}
          />
          <input
            type="number"
            placeholder="Orginal Price"
            className={
              "border border-gray-400 p-2 text-gray-700  rounded text-lg  outline-none w-full"
            }
            onChange={(e) => handleInputChange("productPrice", e)}
          />
          <input
            type="number"
            placeholder="Offer Price"
            className="border border-gray-400 text-gray-700  rounded text-lg p-2 outline-none w-full"
            onChange={(e) => handleInputChange("productOfferPrice", e)}
          />
          <input
            type="number"
            placeholder="weight"
            className="border border-gray-400 text-gray-700  rounded text-lg p-2 outline-none w-full"
            onChange={(e) => handleInputChange("productWeight", e)}
          />
          <textarea
            placeholder="Product Description"
            className="border border-gray-400 text-gray-700  rounded text-lg p-1 outline-none w-full "
            onChange={(e) => handleInputChange("productDescription", e)}
          ></textarea>
          <button
            className="bg-[#2A4178] p-2 text-white   rounded-md hover:bg-[#456bc3] transition-all duration-500 "
            onClick={newProductSave}
            type="button"
          >
            Add New Product
          </button>
        </section>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-full " >
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-52 rounded-md cursor-pointer bg-pink-200">
              <div className="flex flex-col items-center w-full justify-center pt-5 pb-6 text-gray-900 text-lg">
                {!productDetails.productMainImage ? (
                  <div>Image1</div>
                ) : (
                  <img
                    src={productDetails.productMainImage}
                    alt="Selected Image"
                    className="w-full h-52 object-cover rounded"
                  />
                )}
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleMainImageChange}
              />
            </label>
          </div>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-52 rounded cursor-pointer bg-yellow-200">
              <div className="flex flex-col items-center w-full justify-center pt-5 pb-6 text-gray-900 text-lg">
                {!productDetails.productMainImage ? (
                  <div>Image2</div>
                ) : (
                  <img
                    src={productDetails.productSubImage1}
                    alt="Selected Image"
                    className="w-full h-52 object-cover rounded"
                  />
                )}
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleSubImage1Change}
              />
            </label>
          </div>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-52 rounded cursor-pointer bg-orange-200">
              <div className="flex flex-col items-center w-full justify-center pt-5 pb-6 text-gray-900 text-lg">
                {!productDetails.productMainImage ? (
                  <div>Image3</div>
                ) : (
                  <img
                    src={productDetails.productSubImage2}
                    alt="Selected Image"
                    className="w-full h-52 object-cover rounded"
                  />
                )}
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleSubImage2Change}
              />
            </label>
          </div>
        </div>
      </div>
      <Outlet />
    </form>
  );
};

export default NewProduct;
