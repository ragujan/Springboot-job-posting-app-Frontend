import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";
import auth_api from "@/services/auth_api";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("api baseURL:", api.defaults.baseURL);

    try {
      const res = await auth_api.post<{ token: string }>("/login-admin", {
        username,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      navigate("/");
    } catch (error) {
      setError("Invalid credentials");
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-white rounded shadow-md w-96"
      >
        <h2 className="mb-4 text-2xl font-bold">Admin Login</h2>

        {error && <p className="mb-2 text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
