import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, LayoutGrid, ThumbsUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import pengalamanImg from "../assets/welcome.jpg"; // Ganti dengan path gambar yang sesuai

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
  <section className="relative overflow-hidden py-20">
    {/* Background Blur */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
      <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/30 blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeIn}
          className="inline-flex rounded-full border bg-white px-5 py-2 text-sm shadow"
        >
          📸 Studio Foto Profesional sejak 2003
        </motion.div>

        <motion.h1
          variants={fadeIn}
          className="text-5xl lg:text-6xl font-black leading-tight mt-6"
        >
          Abadikan Momen,
          <br />
          Hidupkan Kenangan.
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-600 mt-6 text-lg leading-relaxed"
        >
          Studio foto profesional untuk{" "}
          <strong>
            wisuda, keluarga, couple, wedding, foto grup, pas foto,
            personal branding, corporate portrait hingga company profile.
          </strong>
        </motion.p>

        

        {/* Button */}
        <motion.div
          variants={fadeIn}
          className="flex gap-4 mt-8 flex-wrap"
        >
          <a
            href="https://wa.me/6281234567890"
            className="bg-black text-white rounded-2xl px-7 py-4 flex items-center gap-2 font-semibold hover:bg-gray-800"
          >
            <FaWhatsapp />
            Konsultasikan
          </a>

          <a
            href="#portfolio"
            className="bg-white rounded-2xl px-7 py-4 shadow font-semibold hover:bg-gray-50"
          >
            Lihat Portfolio
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-[40px] p-5 shadow-2xl">

          <div className="relative">

            <img
              src={pengalamanImg}
              alt="Studio Root Visual"
              className="w-full h-[520px] object-cover rounded-[30px]"
            />

            

          </div>

          
        </div>
      </motion.div>

    </div>

    {/* Statistik */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
        >
          <div className="flex justify-center mb-3">
            {stat.icon}
          </div>

          <h2 className="text-5xl font-bold text-blue-600">
            <CountUp end={stat.value} duration={2} />+
          </h2>

          <p className="mt-2 text-gray-600">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
}
