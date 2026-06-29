import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import chemicalAnchor from "../assets/layanan1.jpg"; // Ganti dengan path gambar yang sesuai
import coringBeton from "../assets/layanan3.jpg"; // Ganti dengan path gambar yang sesuai
import pullOutTest from "../assets/layanan2.jpg"; // Ganti dengan path gambar yang sesuai

const layanan = [
  {
    image: chemicalAnchor,
    title: "Foto Wisuda, Keluarga, Couple & Wedding",
    desc: "Layanan jasa foto wisuda, foto keluarga, couple, prewedding, dan wedding dengan studio profesional, arahan pose yang nyaman, serta hasil foto berkualitas tinggi yang siap dicetak maupun dibagikan ke media sosial.",
  },
  {
    image: coringBeton,
    title: "Pas Foto Profesional & Dokumen Resmi",
    desc: "Layanan pas foto profesional untuk lamaran kerja, sekolah, visa, paspor, KTP, SIM, dan dokumen resmi lainnya dengan pencahayaan studio, proses cepat, serta hasil berkualitas tinggi sesuai standar administrasi.",
  },
  {
    image: pullOutTest,
    title: "File Digital, Cetak Foto & Bingkai Premium",
    desc: "Kami menyediakan file foto digital, cetak foto dengan kualitas terbaik, serta frame premium yang siap dipajang di rumah, kantor, atau dijadikan hadiah untuk keluarga dan orang terdekat.",
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-[#ba1322] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layanan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/80 text-[15px] leading-6">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20mengenai%20layanan%20studio%20foto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#ba1322] px-7 py-3.5 rounded-full text-base font-semibold hover:bg-[#e64a4a] hover:text-white transition duration-300 shadow-xl"
          >
            <FaWhatsapp size={22} />
            Konsultasi via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}