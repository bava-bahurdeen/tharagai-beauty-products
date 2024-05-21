import axiosInstance from "../axiosInstance";

// const logIn = async (token) => {
//   return await axiosInstance.get(`/users/profile/`, token);
// };
const logIn = async (token) => {
  return await axiosInstance.get(`/users/profile/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const loginService = {
  logIn,
};
