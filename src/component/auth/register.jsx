import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Register } from "../../Api/authApi";
import Swal from "sweetalert2";
function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await Register(name, email, password, role);
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
  };
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
            <form onSubmit={submit}>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  name
                </label>
                <input
                  type="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@Example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Role
                </label>
                <select
                  type="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
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
