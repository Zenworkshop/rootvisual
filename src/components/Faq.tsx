"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import studioImage from "../assets/IMG_6194.jpg"; // Ganti dengan path gambar yang sesuai

export default function FAQRootVisual() {
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah harus booking sebelum datang?",
      answer:
        "Ya. Kami menyarankan booking terlebih dahulu agar jadwal studio dan fotografer dapat disiapkan sesuai waktu yang Anda inginkan.",
    },
    {
      question: "Apakah bisa foto keluarga dengan banyak anggota?",
      answer:
        "Tentu bisa. Studio kami dapat melayani sesi foto keluarga kecil maupun keluarga besar dengan pengaturan lighting dan pose yang nyaman.",
    },
    {
      question: "Berapa lama hasil foto selesai?",
      answer:
        "Estimasi editing sekitar 3–7 hari kerja tergantung paket yang dipilih. Jika membutuhkan lebih cepat, silakan konsultasikan dengan tim kami.",
    },
    {
      question: "Apakah mendapatkan file digital?",
      answer:
        "Ya. Semua paket mendapatkan file digital berkualitas tinggi. Beberapa paket juga tersedia pilihan cetak foto dan frame premium.",
    },
    {
      question: "Apakah fotografer akan mengarahkan pose?",
      answer:
        "Tentu. Anda tidak perlu khawatir jika belum pernah foto studio. Fotografer kami akan membantu mengarahkan pose agar hasil terlihat natural dan percaya diri.",
    },
    {
      question: "Apakah bisa untuk personal branding dan company profile?",
      answer:
        "Bisa. Root Visual melayani personal branding, corporate portrait, company profile, hingga kebutuhan konten profesional untuk bisnis.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-[#ba1322] uppercase tracking-[4px] text-sm font-semibold">
            Frequently Asked Questions
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600 leading-7">
            Masih bingung sebelum booking studio foto?
            Berikut beberapa pertanyaan yang paling sering ditanyakan oleh
            pelanggan Root Visual.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* FAQ */}
          <div className="space-y-4">

            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setFaqIndex(index === faqIndex ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-50 transition"
                >
                  {item.question}

                  {faqIndex === index ? (
                    <FiMinus className="text-[#ba1322]" />
                  ) : (
                    <FiPlus className="text-[#ba1322]" />
                  )}
                </button>

                <AnimatePresence>
                  {faqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-7">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={studioImage}
              alt="Studio Foto Root Visual"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}