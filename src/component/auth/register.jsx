import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Register } from "../../Api/authApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";
function register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    onSubmit: async (values) => {
      try {
        await Register(values.name, values.email, values.password, values.role);
        Swal.fire({
          title: "Success!",
          text: "Register successful",
          icon: "success",
        }).then(() => {
          window.location.href = "/login";
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "something went wrong",
          icon: "error",
        });
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "name is required";
      } else if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email form";
      } else if (!values.password) {
        errors.password = "password is required";
      } else if (!values.role) {
        errors.role = "please select a role";
      }
      return errors;
    },
  });

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center px-3 py-3 my-7">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-bold text-blue-500 uppercase"
        >
          Allo<span className="text-red-500">Media</span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl text-purple-400 font-bold">
              Creat Your Account
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  name
                </label>
                <input
                  type="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 mt-5 text-lg font-semibold">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 mt-5 text-lg font-semibold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 mt-5 text-lg font-semibold">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Role
                </label>
                <select
                  type="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="role"
                  {...formik.getFieldProps("role")}
                >
                  {formik.touched.role && formik.errors.role ? (
                    <div className="text-red-500 mt-5 text-lg font-semibold">
                      {formik.errors.role}
                    </div>
                  ) : null}
                  <option value="">Select option</option>
                  <option value="client">client</option>
                  <option value="livreur">livreur</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded-full"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline dark ml-1"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default register;
