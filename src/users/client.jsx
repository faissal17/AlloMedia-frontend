import React, { useState, useEffect } from "react";
import { getClinet } from "../Api/userApi";
import Cookies from "js-cookie";

function Client() {
  const [client, setClient] = useState({ name: "", role: "" });
  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      const data = await getClinet();
      console.log(data);
      setClient(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {client.userName && <p>Name : {client.userName}</p>}
      {client.userRole && <p>Your Role is : {client.userRole}</p>}
    </div>
  );
}

export default Client;
