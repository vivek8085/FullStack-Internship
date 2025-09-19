import { useNavigate } from "react-router-dom";
export default function Login({ onLogin }) {
  const navigate = useNavigate();

  function handleLogin() {
    onLogin();
    navigate("/dashboard");
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="space-y-3">
        <input type="text" placeholder="Username" className="border px-2 py-1 rounded w-full" />
        <input type="password" placeholder="Password" className="border px-2 py-1 rounded w-full" />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-3 py-2 rounded w-full">Login</button>
      </div>
    </div>
  );
}
