"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp } from "lucide-react"; // fixed icon names

export default function Features() {
  const features = [
    {
      title: "Fast",
      description: "Experience lightning-fast performance with optimized code.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Secure",
      description: "Your data is safe with industry-standard security practices.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Scalable",
      description: "Built to grow with your needs, from small to enterprise.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 ">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-500">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform"
          >
            <div className={`p-4 rounded-full mb-4 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
