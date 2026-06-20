"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import hiltiImage from "../assets/HILTI/cr1.png"; // Ganti dengan path gambar Hilti yang relevan

export default function FAQHilti() {
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa peran utama aplikator Hilti di proyek konstruksi?",
      answer:
        "Aplikator Hilti bertugas menggunakan peralatan Hilti untuk instalasi, pengikatan, pemotongan, dan pengeboran sesuai standar teknis dan keamanan di lapangan.",
    },
    {
      question: "Bagaimana cara memilih alat Hilti yang tepat?",
      answer:
        "Pilih alat berdasarkan jenis pekerjaan dan material yang akan dikerjakan, serta pastikan alat tersebut memiliki sertifikasi dan fitur keamanan lengkap.",
    },
    {
      question: "Apa tips agar penggunaan alat lebih efisien dan aman?",
      answer:
        "Gunakan APD lengkap, lakukan perawatan rutin alat, ikuti SOP penggunaan, dan selalu cek kondisi alat sebelum dan sesudah digunakan.",
    },
    {
      question: "Bagaimana aplikator Hilti mengatasi kendala teknis?",
      answer:
        "Aplikator dapat menghubungi support teknis Hilti, mengikuti pelatihan resmi, dan menggunakan manual produk untuk solusi dan troubleshooting cepat.",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">FAQ Aplikator Hilti</h2>
        <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-600">
          Jawaban lengkap untuk para aplikator Hilti mengenai penggunaan peralatan, teknik kerja, dan tips aman di lapangan agar proyek konstruksi berjalan lancar dan maksimal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-lg md:order-last"
          >
            <img
              src={hiltiImage}
              alt="Contoh penggunaan alat Hilti oleh aplikator"
              className="w-full h-[220px] md:h-[400px] object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center space-y-6 text-left">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setFaqIndex(index === faqIndex ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-lg font-semibold hover:bg-gray-200"
                  aria-expanded={faqIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{item.question}</span>
                  {faqIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                <AnimatePresence>
                  {faqIndex === index && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-5 text-gray-700 bg-gray-50 text-left"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
