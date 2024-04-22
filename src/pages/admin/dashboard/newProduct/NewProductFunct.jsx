import React, { useState } from "react";
import NewProduct from "./NewProduct";
import axios from "axios";


function NewProductFunct() {


  const initialProductState = {
    productCategory: "",
    productName: "",
    productTitle: "",
    productPrice: "",
    productOfferPrice: "",
    productWeight: "",
    productDescription: "",
    productMainImage: "",
    productSubImage1: "",
    productSubImage2: "",
  };

  const [productDetails, setProductDetails] = useState(initialProductState);

  const initialErrorState = {
    productCategoryError: false,
    productNameError: false,
    productTitleError: false,
    productPriceError: false,
    productOfferPriceError: false,
    productWeightError: false,
    productDescriptionError: false,
    productMainImageError: false,
    productSubImage1Error: false,
    productSubImage2Error: false,
  };

  const [productErrors, setProductErrors] = useState(initialErrorState);

  const handleProductChange = (key, value) => {
    setProductDetails((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleProductError = (key, value) => {
    setProductErrors((prevState) => ({ ...prevState, [key]: value }));
  };

  const newProductSave = async () => {
    if (
      !productDetails.productCategory.trim() ||
      !productDetails.productName.trim() ||
      !productDetails.productTitle.trim() ||
      !productDetails.productDescription.trim() ||
      !productDetails.productPrice.trim() ||
      !productDetails.productOfferPrice.trim() ||
      !productDetails.productWeight.trim() ||
      !productDetails.productMainImage.trim() ||
      !productDetails.productSubImage1.trim() ||
      !productDetails.productSubImage2.trim()
    ) {
      alert("check all Field  Add image   ");
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:3030/admin/savenewproduct", {
          productCategory: productDetails.productCategory,
          productName: productDetails.productName,
          productTitle: productDetails.productTitle,
          productPrice: productDetails.productPrice,
          productOfferPrice: productDetails.productOfferPrice,
          productWeight: productDetails.productWeight,
          productDescription: productDetails.productDescription,
          productMainImage: productDetails.productMainImage,
          productSubImage1: productDetails.productSubImage1,
          productSubImage2: productDetails.productSubImage2,
        }).then(dispatch(createProduct(productDetails)))    
      }
      catch (err) {
        alert("did not saved")
      }
    }
  };

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setProductDetails((prevState) => ({
          ...prevState,
          productMainImage: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubImage1Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setProductDetails((prevState) => ({
          ...prevState,
          productSubImage1: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubImage2Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setProductDetails((prevState) => ({
          ...prevState,
          productSubImage2: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <NewProduct
      productDetails={productDetails}
      productErrors={productErrors}
      handleProductChange={handleProductChange}
      handleProductError={handleProductError}
      newProductSave={newProductSave}
      handleMainImageChange={handleMainImageChange}
      handleSubImage1Change={handleSubImage1Change}
      handleSubImage2Change={handleSubImage2Change}
    />
  );
}

export default NewProductFunct;
