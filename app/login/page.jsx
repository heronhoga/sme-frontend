"use client";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvestor, setIsInvestor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", {
      username,
      password,
      role: isInvestor ? "Investor" : "UKM",
    });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isInvestor
          ? "bg-gradient-to-r from-teal-600 to-cyan-600"
          : "bg-gradient-to-t from-[#209cff] to-[#68e0cf] min-h-screen "
      }`}
    >
      <div
        id="login-card"
        className="w-96 h-auto bg-white border border-slate-300 shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isInvestor ? "Login - Investor" : "Login - UKM"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full p-3 border border-slate-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="investor-toggle"
              checked={isInvestor}
              onChange={() => setIsInvestor(!isInvestor)}
              className="mr-2"
            />
            <label
              htmlFor="investor-toggle"
              className="text-sm font-medium text-slate-700"
            >
              Masuk sebagai Investor
            </label>
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-md ${
              isInvestor
                ? "bg-teal-500 hover:bg-teal-600"
                : "bg-sky-600 hover:bg-sky-700"
            }`}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
