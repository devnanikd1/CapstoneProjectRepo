import { useState, useEffect } from "react";
import Login from "./Login";

export default function SingleUser({ username, setUsername }) {
  const [token, setToken] = useState(null);
  console.log(token);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setToken(token);
  }, []);

  return (
    <div>
      <h1>WELCOME to single user page </h1>
      <div className="container">{token ? <Products /> : <Login />}</div> 
    </div>
  );
}

