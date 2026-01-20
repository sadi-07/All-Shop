"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    comment: "Amazing products and super fast delivery! Highly recommend this shop.",
  },
  {
    name: "Michael Smith",
    comment: "The quality is top-notch and customer support is great.",
  },
  {
    name: "Sara Williams",
    comment: "I love shopping here! Always find exactly what I need.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100">
      <h2 className="text-5xl text-blue-500 font-bold text-center mb-16">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform"
          >
            <p className="text-gray-600 mb-4">&quot;{t.comment}&quot;</p>
            <h4 className="font-bold text-blue-600">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
