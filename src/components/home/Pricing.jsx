"use client";

import { motion } from "framer-motion";
import { Smartphone, Home, Heart, Shirt } from "lucide-react";

export default function PopularCategories() {
  const categories = [
    {
      title: "Beauty",
      description: "Makeup, skincare, and haircare products for your daily routine.",
      icon: <Heart className="w-12 h-12 text-white" />,
      color: "bg-pink-500",
    },
    {
      title: "Electronics",
      description: "Latest gadgets, headphones, and smart devices for everyone.",
      icon: <Smartphone className="w-12 h-12 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Fashion",
      description: "Trendy clothing and accessories to style your look.",
      icon: <Shirt className="w-12 h-12 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Home & Kitchen",
      description: "Essentials, decor, and tools to make your home cozy.",
      icon: <Home className="w-12 h-12 text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <h2 className="text-5xl text-blue-500 font-bold text-center mb-16">Popular Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform bg-white"
          >
            <div className={`p-4 rounded-full mb-4 ${cat.color}`}>
              {cat.icon}
            </div>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600 text-sm">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
