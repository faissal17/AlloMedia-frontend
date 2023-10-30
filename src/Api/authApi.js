import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  timeout: 5000,
});

export const Login = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const Register = async (name, email, password, role) => {
  try {
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
      role: role,
    });
    if (response.status === 201) {
      const token = response.data.token;
      Cookies.set("token", token);
    } else {
      throw new Error("Register failed");
    }
  } catch (error) {
    console.error("Error in Register:", error);
    throw error;
  }
};

export const ForgetPassword = async (email) => {
  try {
    const response = await api.post("/forgetpassword", {
      email: email,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error in operation");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const ResetPassword = async (password, token) => {
  try {
    const response = await api.post(`/resetpassword?token=${token}`, {
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("reset password failed");
    }
  } catch (error) {
    console.error("Error while reseting the password in:", error);
    throw error;
  }
};
export const ActivatEmail = async (email, token) => {
  try {
    const response = await api.post(`/activeEmail?token=${token}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Eamil activation failed");
    }
  } catch (error) {
    console.error("Error while activating the email in:", error);
    throw error;
  }
};
