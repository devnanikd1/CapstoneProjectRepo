
import { useState } from "react";
import AuthForm from "./AuthForm";
import { registerUser } from "../Api/request";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  
  //TODO Sign up for an account with username and password
  async function handleSubmit(e) {
    e.preventDefault();
    const user = await registerUser(username, password);
    // console.log(user, token);
    // setToken(user, token);
  }
  return (
    <div>
      <h1>Register</h1>
      <AuthForm
        buttonText="Register"
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}


