import axiosInstance from "../axiosInstance";

const getProducts = () => {
  return axiosInstance.get(`/products`);
};

const getSingleProducts = (id) => {
  return axiosInstance.get(`/products/${id}`);
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
  getProducts,
  getSingleProducts,
  getCarts,
  addCarts,
  deleteCart,
};
