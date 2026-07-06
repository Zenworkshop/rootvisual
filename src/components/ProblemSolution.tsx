import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import chemicalAnchor from "../assets/layanan1.jpg";
import coringBeton from "../assets/layanan3.jpg";
import pullOutTest from "../assets/layanan2.jpg";

const layanan = [
  {
    image: chemicalAnchor,
    title: "Foto Wisuda, Keluarga & Wedding",
    desc: "Foto wisuda, keluarga, couple, prewedding hingga wedding dengan arahan pose profesional dan hasil berkualitas tinggi.",
  },
  {
    image: coringBeton,
    title: "Pas Foto Profesional",
    desc: "Pas foto untuk kerja, sekolah, visa, paspor, dan dokumen resmi dengan pencahayaan studio profesional.",
  },
  {
    image: pullOutTest,
    title: "Cetak Foto & Frame Premium",
    desc: "File digital resolusi tinggi lengkap dengan layanan cetak foto premium dan pilihan frame eksklusif.",
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-gradient-to-br from-[#ba1322] via-[#b61524] to-[#8d0f1b] py-10 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm tracking-wider uppercase">
            Layanan Kami
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Solusi Foto Profesional
          </h2>

          <p className="text-white/80 mt-3 max-w-2xl mx-auto leading-7">
            Root Visual menghadirkan berbagai layanan studio foto profesional
            dengan kualitas terbaik untuk kebutuhan pribadi maupun bisnis.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {layanan.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .15,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.desc}
                </p>

                <div className="mt-6">
                  <Link
                  to="/paket"
                  className="inline-flex items-center rounded-full border border-[#ba1322] px-5 py-3 font-semibold text-[#ba1322] transition hover:bg-[#ba1322] hover:text-white"
                >
                  Pelajari Selengkapnya →
                </Link>
              </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mt-12"
        >

          <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">

            <div>

              <h3 className="text-2xl font-bold text-gray-900">
                Bingung Memilih Paket?
              </h3>

              <p className="text-gray-600 mt-2 max-w-xl">
                Konsultasikan kebutuhan foto Anda dengan tim Root Visual.
                Kami akan membantu memilih paket yang paling sesuai dengan
                kebutuhan dan budget Anda.
              </p>

            </div>

            <a
              href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20konsultasi%20studio%20foto."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#ba1322]
                hover:bg-[#97101c]
                text-white
                font-semibold
                rounded-full
                px-8
                py-4
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              <FaWhatsapp className="text-2xl" />
              Konsultasi Sekarang
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}