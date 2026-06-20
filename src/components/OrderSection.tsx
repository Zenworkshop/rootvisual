"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import hiltiImg from "../assets/sectionn.png"; // Ganti jika ada gambar HILTI yang lebih sesuai

const steps = [
  { 
    id: "01", 
    title: "Konsultasi Kebutuhan Proyek", 
    desc: "Diskusikan jenis sambungan, area aplikasi, dan kebutuhan teknis struktur bangunan Anda bersama tim kami." 
  },
  { 
    id: "02", 
    title: "Survey Lapangan", 
    desc: "Kami datang langsung ke lokasi proyek untuk analisis teknis dan mengevaluasi metode pemasangan terbaik." 
  },
  { 
    id: "03", 
    title: "Rekomendasi Sistem & Estimasi", 
    desc: "Kami menyusun metode fixing, memilih produk HILTI yang sesuai, dan menyampaikan estimasi biaya secara transparan.",
    highlight: true 
  },
  { 
    id: "04", 
    title: "Pemasangan Sesuai SOP", 
    desc: "Tim aplikator bersertifikat kami akan melakukan pekerjaan dengan standar keselamatan dan kualitas HILTI." 
  },
  { 
    id: "05", 
    title: "Serah Terima & Dokumentasi", 
    desc: "Proyek selesai disertai dokumentasi teknis dan foto, serta garansi hasil pekerjaan dari tim HILTI aplikator resmi." 
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OrderSection() {
  return (
    <section className="bg-gray-50 py-16 px-10 md:px-32">
      <div className="max-w-6xl mx-auto">

        {/* Judul */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          className="text-center"
        >
          <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Layanan Aplikator
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Tahapan Layanan HILTI
          </h2>
        </motion.div>

        {/* Layout Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">

          {/* Gambar & Deskripsi */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[70%] max-w-xs md:w-full md:max-w-md overflow-hidden rounded-lg shadow-lg mx-auto md:mx-0">
              <img 
                src={hiltiImg} 
                alt="Layanan HILTI" 
                className="w-full h-auto object-cover" 
              />
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
              Kami adalah <span className="font-semibold">aplikator resmi HILTI</span> yang siap membantu kebutuhan pemasangan sistem fixing untuk struktur baja, beton, maupun bata ringan.
              Solusi presisi, aman, dan cepat untuk proyek bangunan Anda.
            </p>

            {/* Tombol Kontak WA */}
            <div className="w-full flex justify-center md:justify-start">
              <a
                href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20aplikator%20HILTI."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md transition"
              >
                <FaWhatsapp size={24} />
                Konsultasi Sekarang
              </a>
            </div>
          </div>

          {/* Langkah-langkah */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`p-5 border rounded-lg shadow-md transition-all duration-300 ${
                  step.highlight ? "bg-[#1e3a5f] text-white" : "bg-white hover:shadow-lg"
                }`}
                variants={itemVariant}
              >
                <h3 className={`text-xl font-semibold ${step.highlight ? "text-white" : "text-gray-800"}`}>
                  {step.id} {step.title}
                </h3>
                <p className={`mt-2 ${step.highlight ? "text-gray-200" : "text-gray-600"}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
