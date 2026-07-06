import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

import pengalamanImg from "../assets/img_6364-2.jpg";

export default function C() {

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

        {/* LEFT - IMAGE */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-[40px] p-5 shadow-2xl">
            <img
              src={pengalamanImg}
              alt="Studio Foto Root Visual"
              className="w-full h-[520px] object-cover rounded-[30px]"
            />
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            className="text-[#ba1322] font-semibold uppercase tracking-widest"
          >
            Root Visual Studio
          </motion.h2>

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-black leading-tight mt-3"
          >
            Kenapa Foto Studio
            <br />
            di Root Visual?
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-gray-600 mt-6 text-lg leading-8"
          >
            Root Visual adalah <strong>studio foto profesional</strong> yang
            menghadirkan pengalaman pemotretan nyaman dengan fotografer
            berpengalaman, pencahayaan studio profesional, serta proses editing
            yang detail sehingga setiap hasil foto terlihat lebih tajam,
            natural, dan elegan. Cocok untuk{" "}
            <strong>
              foto wisuda, foto keluarga, foto couple, prewedding, wedding,
              pas foto, personal branding, corporate portrait, hingga company
              profile.
            </strong>
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex gap-4 mt-10 flex-wrap"
          >
            <a
              href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20booking%20studio%20foto."
              className="bg-[#ba1322] text-white rounded-full px-8 py-4 flex items-center gap-2 font-semibold hover:bg-[#97101c] transition"
            >
              <FaWhatsapp />
              Konsultasi Sekarang
            </a>

            <a
              href="#portfolio"
              className="border border-gray-300 rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              Lihat Portfolio
            </a>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}