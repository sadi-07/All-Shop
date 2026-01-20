"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-120 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 overflow-hidden text-white">
      
      {/* Floating background circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse-slow"></div>

      <div className="text-center px-4 md:px-0 z-10">
        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Welcome to All Shop
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Add. Pay. Recieve.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link
            href="/products"
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
