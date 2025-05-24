"use client";

import Image from "next/image";
import { FaWhatsapp, FaCheck, FaTshirt, FaTruck } from "react-icons/fa";
import { MdDryCleaning, MdLocalLaundryService, MdIron } from "react-icons/md";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const bounce = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-white">
        <motion.div
          className="container-custom text-center z-10 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Fast. Clean. Reliable.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Laundry made simple with Qwik.
          </motion.p>
          <motion.a
            href="https://wa.me/2335XXXXXXXXX?text=Hi%20Qwik%20Laundry!%20I'd%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl" />
            Order Now on WhatsApp
          </motion.a>
        </motion.div>
      </section>

      {/* Motto Section */}
      <section className="section-padding bg-gray-100">
        <motion.div
          className="container-custom text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={bounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Your Time Matters
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Let Qwik Laundry Handle the Dirty Work.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={bounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl text-primary mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={bounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Price List
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {prices.map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-primary font-bold">₵{item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={bounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheck className="text-primary text-xl" />
                </motion.div>
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Nkawkaw, Ghana</p>
              <p>Phone: +233 5X XXX XXXX</p>
              <p>Email: info@qwiklaundry.com</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Facebook
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center mt-8 pt-8 border-t border-gray-800"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>Powered by Qwik Laundry & Cleaning Services</p>
          </motion.div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/2335XXXXXXXXX?text=Hi%20Qwik%20Laundry!%20I'd%20like%20to%20place%20an%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaWhatsapp className="text-xl" />
        Order Now
      </motion.a>
    </div>
  );
}

const services = [
  {
    title: "Wash & Fold",
    description: "Professional washing and folding service for your clothes",
    price: "From ₵5 per item",
    icon: <MdLocalLaundryService />,
  },
  {
    title: "Wash & Iron",
    description: "Complete washing and ironing service for a crisp finish",
    price: "From ₵8 per item",
    icon: <MdIron />,
  },
  {
    title: "Iron Only",
    description: "Professional ironing service for your clothes",
    price: "From ₵3 per item",
    icon: <MdIron />,
  },
  {
    title: "Duvet/Blanket Cleaning",
    description: "Specialized cleaning for your duvets and blankets",
    price: "From ₵20 per item",
    icon: <MdDryCleaning />,
  },
  {
    title: "Pick-Up & Delivery",
    description: "Convenient pick-up and delivery service (Coming Soon)",
    price: "Contact for pricing",
    icon: <FaTruck />,
  },
];

const prices = [
  { name: "Shirts", price: "5" },
  { name: "Trousers", price: "6" },
  { name: "Bed sheets", price: "8" },
  { name: "Suits", price: "15" },
  { name: "Duvets", price: "20" },
];

const features = [
  "Fast turnaround",
  "High-quality machines (Bosch, Bruhm, TCL)",
  "Affordable pricing",
  "Professional care & same-day service",
];
