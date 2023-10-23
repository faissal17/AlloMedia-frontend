import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import landingPage from "./component/home/landingPage";
import login from "./component/auth/login";
import register from "./component/auth/register";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={landingPage} />
          <Route path="/auth/login" Component={login} />
          <Route path="/auth/register" Component={register} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
