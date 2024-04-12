import axiosInstance from "../axiosInstance";

const getProducts = (data) => {
  return axiosInstance.get(`/products`);
};

export const productsService = {
  getProducts,
};
