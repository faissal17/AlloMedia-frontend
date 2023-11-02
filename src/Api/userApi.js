import axios from "axios";
import Cookies from "js-cookie";

const userApi = axios.create({
  baseURL: "http://localhost:3000/user/me",
  withCredentials: true,
});

export const getClinet = async () => {
  try {
    const response = await userApi.get("/client");

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    console.error("something went wrong:", error);
    throw error;
  }
};
