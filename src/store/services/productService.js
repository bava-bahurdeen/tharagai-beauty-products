import axiosInstance from "../axiosInstance";

const getProducts = (data) => {
  return axiosInstance.get(`/products`);
};

const getSingleProducts = (id) => {
  return axiosInstance.get(`/products/${id}`);
};

export const productsService = {
  getProducts,
  getSingleProducts,
};
