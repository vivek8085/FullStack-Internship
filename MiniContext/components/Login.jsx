import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: username });
    console.log("Loged in", username, password);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
