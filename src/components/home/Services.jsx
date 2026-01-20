"use client";

import { motion } from "framer-motion";
import { Truck, RefreshCcw, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      description: "Get your products delivered quickly and reliably.",
      icon: <Truck className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days for all products.",
      icon: <RefreshCcw className="w-8 h-8 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Secure Payments",
      description: "Shop with confidence using secure payment options.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <h2 className="text-5xl text-blue-500 font-bold text-center mb-16">Why Shop With Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform"
          >
            <div className={`p-4 rounded-full mb-4 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
