import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import landingPage from "./component/home/landingPage";
import login from "./component/auth/login";
import register from "./component/auth/register";
import forgetPassword from "./component/auth/forgetPassword";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={landingPage} />
          <Route path="/login" Component={login} />
          <Route path="/register" Component={register} />
          <Route path="/forgetPassword" Component={forgetPassword} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
