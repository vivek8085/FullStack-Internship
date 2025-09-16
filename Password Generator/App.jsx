import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    let charset = "";
    if (includeChars) charset += chars + symbols;
    if (includeNumbers) charset += numbers;
    if (!includeChars && !includeNumbers) charset = chars;
    if (charset.length === 0) charset = chars;
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(pass);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-300">
      <div className="bg-zinc-400 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Password Generator
        </h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="accent-blue-600"
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(!includeChars)}
              className="accent-blue-600"
            />
            Characters & Symbols
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4"
        >
          Generate Password
        </button>
        <div className="text-center text-lg font-mono break-all select-all p-2 border rounded bg-gray-50">
          {password || "password space"}
        </div>
      </div>
    </div>
  );
}

export default App;
