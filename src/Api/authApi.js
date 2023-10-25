import axios from "axios";

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
    const response = await api.post(
      "/register",
      {
        name: name,
        email: email,
        password: password,
        role: role,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Register failed");
    }
  } catch (error) {
    console.error("Error in Register:", error);
    throw error;
  }
};

export default api;
