"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(email === "admin@sadi.com" && password === "123456"){
            document.cookie = "auth=true; path=/"
            router.push("/products")
            toast.success("Login Successful!")
        } else {
            toast.error("wrong Credentials!")
        }
    }

    return <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back!
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-base font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-lg cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
}