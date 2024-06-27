import axiosInstance from "../store/axiosInstance";
import { addCart } from "../store/slice/productSlice";
import { useDispatch } from "react-redux";

export async function getCart(token) {
  const dispatch = useDispatch();
  const { data } = await axiosInstance.get(`/products/cart`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  addCart();
}
