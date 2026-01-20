"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        className="max-w-2xl mx-auto text-center px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl text-blue-500 font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-10">
          Questions about products, orders, or deliveries? Send us a message below or reach out directly via email or phone.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300  text-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 text-gray-600"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none h-32 text-gray-600"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-md">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
