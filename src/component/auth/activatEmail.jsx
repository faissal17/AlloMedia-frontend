import React, { useState } from "react";
import { Link } from "react-router-dom";
function activatEmail() {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-3xl font-bold mb-9">
          Hello Your Email has been activated
        </h1>
        <Link className="mt-5 text-xl font-bold text-sky-800" to="/login">
          click Here to login to your account
        </Link>
      </div>
    </React.Fragment>
  );
}
export default activatEmail;
