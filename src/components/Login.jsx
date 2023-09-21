import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken, token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchLogin = async (username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.token) {
        localStorage.setItem("token", JSON.stringify(result.token));
        setToken(result.token);
        navigate("/products");
      }
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await fetchLogin(username, password);
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Sign In</button>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}
