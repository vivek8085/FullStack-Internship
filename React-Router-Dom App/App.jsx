import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Components/Auth";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">React Router App</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-700">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700">About</Link>
            {!isAuthenticated && <Link to="/login" className="text-gray-700 hover:text-blue-700">Login</Link>}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route
            path="/dashboard"
            element={
              <Auth isAuthenticated={isAuthenticated}>
                <Dashboard />
              </Auth>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
