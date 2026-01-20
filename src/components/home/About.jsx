"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white text-gray-800">
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-blue-500">About Our Shop</h2>
        <p className="text-gray-600 text-lg">
          Welcome to our store! We provide a wide variety of high-quality products
          to make your everyday life better. Our goal is to deliver fast, reliable,
          and affordable shopping experiences right to your doorstep.
        </p>
      </motion.div>
    </section>
  );
}
