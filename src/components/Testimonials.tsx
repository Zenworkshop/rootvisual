"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";

// Import gambar proyek (pastikan path sesuai)
import proyek19 from "../assets/HILTI/cr1.png";

const testimonials = [
  {
    name: "Andi Saputra",
    review: "Aplikator Hilti sangat profesional dan hasil kerjanya presisi sekali!",
    stars: 5,
  },
  {
    name: "Rina Wijaya",
    review: "Layanan aplikator Hilti cepat dan ramah, saya puas sekali.",
    stars: 4,
  },
  {
    name: "Budi Santoso",
    review: "Harga terjangkau dengan kualitas pengerjaan aplikator Hilti yang terbaik.",
    stars: 5,
  },
  {
    name: "Sari Melati",
    review: "Aplikator Hilti recommended, pengerjaan rapi dan sesuai jadwal.",
    stars: 5,
  },
  {
    name: "Joko Prasetyo",
    review: "Tim aplikator Hilti sangat membantu dan komunikatif selama proses kerja.",
    stars: 4,
  },
  {
    name: "Dewi Anggraeni",
    review: "Saya puas menggunakan jasa aplikator Hilti, hasilnya sangat memuaskan.",
    stars: 5,
  },
];

const faqs = [
  {
    question: "Apakah partisi kaca aluminium cukup kuat dan aman?",
    answer:
      "Sangat aman. Menggunakan kaca tempered dan rangka aluminium yang kuat, sehingga tahan benturan dan tidak mudah rusak.",
  },
  {
    question: "Apakah bisa custom ukuran dan bentuk sesuai ruangan?",
    answer:
      "Tentu bisa. Kami melayani pembuatan partisi kaca custom sesuai layout dan kebutuhan ruangan Anda.",
  },
  {
    question: "Cocok nggak untuk ruang kantor atau cafe?",
    answer:
      "Sangat cocok! Banyak klien kami dari sektor komersial seperti kantor, cafe, dan ruang meeting.",
  },
  {
    question: "Berapa lama proses produksi dan pemasangannya?",
    answer:
      "Proses pengerjaan rata-rata 5–10 hari kerja tergantung desain dan lokasi pemasangan.",
  },
];

export default function HiltiTestimonialsAndFaq() {
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  return (
    <>
      {/* Testimonial Section */}
      <section className="bg-[#1e3a5f] py-20 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center max-w-3xl">
          Testimonial Aplikator Hilti Profesional dan Terpercaya
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
              className="
                flex flex-col bg-[#2a4468] rounded-lg shadow-lg overflow-hidden
                hover:shadow-xl transition-shadow duration-300
                border border-[#3b587f]
                cursor-pointer
                p-6
              "
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-400" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-sm flex-grow">{item.review}</p>

              <div className="mt-6 text-right text-[#cbd5e1] font-semibold text-lg">
                — {item.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps/place/YourBusinessLocationHere" // Ganti sesuai URL lokasi Google Maps aplikator Hilti kamu
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-[#2a4468] text-[#cbd5e1] px-8 py-4 rounded-full
              text-lg font-semibold border border-[#3b587f]
              hover:bg-[#274463] hover:text-white
              transition shadow-lg cursor-pointer
            "
          >
            <FaWhatsapp size={24} />
            Lihat Review di Google
          </a>
        </div>
      </section>

      {/* FAQ Partisi Kaca Aluminium */}
      
    </>
  );
}
