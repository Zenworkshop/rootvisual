import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, LayoutGrid, ThumbsUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import pengalamanImg from "../assets/HILTI/ca8.png";

export default function Welcome() {
  const stats = [
    {
      icon: <Users size={48} className="text-blue-500" />,
      value: 25,
      label: "Professional Team",
    },
    {
      icon: <LayoutGrid size={48} className="text-blue-500" />,
      value: 906,
      label: "Projects Completed",
    },
    {
      icon: <ThumbsUp size={48} className="text-blue-500" />,
      value: 504,
      label: "Satisfied Customer",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left - Image & Badge */}
        <motion.div
          className="w-full md:w-1/2 relative mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={pengalamanImg}
              alt="Foto pengalaman Zen Kitchen Set"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-4 md:right-12 bg-[#ba1322] text-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <div className="text-4xl font-bold">15<sup>+</sup></div>
            <div className="text-sm md:text-base">Tahun Pengalaman</div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-orange-400 mb-1">SELAMAT DATANG DI</motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Aplikator Hilti
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-gray-600 mb-8"
            >
              Aplikator Hilti adalah aplikator resmi Hilti terpercaya yang berpengalaman lebih dari 10 tahun dalam jasa coring beton dan pemasangan anchor untuk kebutuhan konstruksi. Kami menggunakan <strong>alat dan teknologi Hilti terbaru untuk memastikan hasil kerja yang presisi, kuat, dan sesuai standar keselamatan proyek. </strong> Cocok untuk proyek gedung, infrastruktur, maupun renovasi teknik sipil.
            </motion.p>

            <a
              href="https://wa.me/6281234567890" // Ganti dengan nomor WA kamu
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
            >
              <FaWhatsapp size={20} />
              Konsultasikan Sekarang
            </a>
          </motion.div>
        </div>
      </div>

      {/* Statistik */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeIn}>
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <h2 className="text-4xl font-bold text-blue-600">
              <CountUp end={stat.value} duration={2.5} />+
            </h2>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
