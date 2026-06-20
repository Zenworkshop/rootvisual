import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import chemicalAnchor from "../assets/cemicalancor.jpg";
import chemicalRebar from "../assets/cemicalrebar.jpg";
import coringBeton from "../assets/coringbeton.jpg";
import pullOutTest from "../assets/pullouttest.jpeg";
import firestop from "../assets/firestop.jpg";
import waterproofing from "../assets/waterproofing.png";

const layanan = [
  {
    image: chemicalAnchor,
    title: "Pemasangan Chemical Anchor",
    desc: "Jasa pemasangan anchor kimia yang kuat dan tahan lama untuk struktur beton.",
  },
  {
    image: chemicalRebar,
    title: "Rebar Chemical System Hilti",
    desc: "Layanan rebar chemical untuk sambungan tulangan beton yang kokoh.",
  },
  {
    image: pullOutTest,
    title: "Tes Tarik (Pull Out Test)",
    desc: "Pengujian kekuatan tarik anchor atau rebar sesuai standar teknik sipil.",
  },
  {
    image: coringBeton,
    title: "Coring Beton Presisi",
    desc: "Pengeboran beton bersih dan presisi tanpa merusak struktur utama.",
  },
  {
    image: firestop,
    title: "Instalasi Firestop",
    desc: "Proteksi kebakaran profesional untuk celah antar lantai & dinding.",
  },
  {
    image: waterproofing,
    title: "Waterproofing Anti Bocor",
    desc: "Solusi pelapis bangunan tahan air untuk atap, basement, dan dinding.",
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-[#ba1322] py-20 px-4 md:px-8 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-bold text-center mb-16"
      >
        Layanan Aplikator Hilti & Spesialis Beton
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {layanan.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed m-0">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20tanya%20tentang%20layanan%20aplikator%20Hilti"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-white text-[#ba1322] px-8 py-4 rounded-full
                  text-lg font-semibold border border-white
                  hover:bg-[#e64a4a] hover:text-white
                  transition shadow-lg cursor-pointer
                "
              >
                <FaWhatsapp size={24} />
                Konsultasi via whatsapp
              </a>
            </div>
    </section>
  );
}
