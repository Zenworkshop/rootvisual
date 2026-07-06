"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import studioImg from "../assets/IMG_5940.jpg";

const steps = [
  {
    id: "01",
    title: "Hubungi & Pilih Paket",
    desc: "Konsultasikan kebutuhan dan pilih paket foto yang sesuai.",
  },
  {
    id: "02",
    title: "Booking Jadwal",
    desc: "Pilih tanggal dan jam pemotretan sesuai jadwal Anda.",
  },
  {
    id: "03",
    title: "Sesi Foto",
    desc: "Nikmati sesi foto dengan fotografer profesional dan arahan pose terbaik.",
    highlight: true,
  },
  {
    id: "04",
    title: "Editing Foto",
    desc: "Foto diproses dengan editing profesional agar hasil lebih maksimal.",
  },
  {
    id: "05",
    title: "File & Cetak",
    desc: "Terima file digital berkualitas tinggi serta layanan cetak premium.",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function OrderSection() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          className="text-center mb-8"
        >
          <h3 className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]">
            Cara Booking
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Proses Booking Studio Foto Root Visual
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-8 items-start">

          {/* Left */}
          <div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={studioImg}
                alt="Root Visual"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-7">
              <span className="font-semibold">
                Root Visual
              </span>{" "}
              melayani foto wisuda, keluarga, couple,
              prewedding, wedding, personal branding,
              corporate portrait, hingga company profile
              dengan hasil profesional.
            </p>

            <a
              href="https://wa.me/6281244997748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-green-500 text-white font-semibold transition"
            >
              <FaWhatsapp />
              Konsultasi Sekarang
            </a>

          </div>

          {/* Right */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >

            {steps.map((step) => (

              <motion.div
                key={step.id}
                variants={itemVariant}
                className={`
                  rounded-xl
                  border
                  p-4
                  transition
                  ${
                    step.highlight
                      ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                      : "bg-white border-gray-200 hover:shadow-md"
                  }
                `}
              >

                <h3
                  className={`font-semibold text-lg ${
                    step.highlight
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {step.id}. {step.title}
                </h3>

                <p
                  className={`mt-1 text-sm leading-6 ${
                    step.highlight
                      ? "text-gray-200"
                      : "text-gray-600"
                  }`}
                >
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