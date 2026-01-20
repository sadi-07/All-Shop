"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 text-white px-6 py-3 shadow-md flex justify-between items-center">
      {/* Logo */}
      <h1 className="font-bold text-xl md:text-3xl tracking-wide hover:text-gray-200 transition">
        All Shop
      </h1>

      {/* Links */}
      <div className="flex items-center space-x-4 md:space-x-8">
        <Link
          href="/"
          className="hover:text-gray-200 transition-colors font-semibold hover:underline"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-200 transition-colors font-semibold hover:underline"
        >
          Products
        </Link>

        {/* Login button */}
        <Link
          href="/login"
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
