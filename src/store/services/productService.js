import axiosInstance from "../axiosInstance";

const getBestSeller = (type) => {
  return axiosInstance.get(`/products/bestSeller/`);
};
const getProductTypes = (type) => {
  return axiosInstance.get(`/products/product-type/`);
};

const getAllProducts = (type) => {
  return axiosInstance.get(`products/product-filter/${type}/`);
};

const getSingleProducts = (id) => {
  return axiosInstance.get(`/products/product-get/${id}`);
};

const getCarts = async (token) => {
  return await axiosInstance.get(`/products/cart`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

const deleteCart = async ({ token, id }) => {
  return await axiosInstance.delete(`/products/cart/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

const addCarts = async (cartData) => {
  return await axiosInstance.post(`/products/cart/`, cartData, {
    headers: {
      Authorization: `Token ${cartData.token}`,
    },
  });
};

export const productsService = {
  getBestSeller,
  getProductTypes,
  getAllProducts,
  getSingleProducts,
  getCarts,
  addCarts,
  deleteCart,
};
