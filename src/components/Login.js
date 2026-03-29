import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="login-box">
    <h2>Hospital Login</h2>

    <input
      type="text"
      placeholder="Username"
      onChange={(e) => setUser(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPass(e.target.value)}
    />

    <button onClick={handleLogin}>Login</button>
  </div>
);
}

export default Login;