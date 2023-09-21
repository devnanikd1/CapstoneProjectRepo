import { useState } from "react";

export default function User({ guest, buttonText, handleSubmit }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  console.log(guest, "NOPE");
  const myData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result, "fetchguest ");
      return result;
    } catch (err) {
      console.error(err);
    }
  };
   
  return(
    <div>
      <h1>WELCOME  users</h1> 
      </div>
    )
}



