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
    desc: "Tentukan tanggal serta jam pemotretan sesuai waktu Anda.",
  },
  {
    id: "03",
    title: "Sesi Foto Profesional",
    desc: "Fotografer kami akan mengarahkan pose agar hasil terlihat natural dan elegan.",
    highlight: true,
  },
  {
    id: "04",
    title: "Editing Foto",
    desc: "Setiap foto melalui proses editing profesional sebelum dikirim.",
  },
  {
    id: "05",
    title: "Terima Hasil",
    desc: "File digital berkualitas tinggi siap diterima, lengkap dengan opsi cetak premium.",
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      ease: "easeOut",
    },
  },
};

export default function OrderSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          className="text-center mb-16"
        >

          <h3 className="text-[#ba1322] uppercase tracking-[4px] text-sm font-semibold">
            Cara Booking
          </h3>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Booking Studio Foto
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 leading-8">
            Mulai dari konsultasi hingga hasil foto selesai, semua proses dibuat
            sederhana, cepat, dan dibantu langsung oleh tim Root Visual.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">

          {/* LEFT */}
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="relative">

              <div className="overflow-hidden rounded-[32px] shadow-2xl">

                <img
                  src={studioImg}
                  alt="Studio Root Visual"
                  className="w-full h-[520px] object-cover hover:scale-105 duration-700"
                />

              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4">

                <p className="text-sm text-gray-500">
                  Studio Foto Profesional
                </p>

                <h4 className="text-xl font-bold mt-1">
                  Root Visual
                </h4>

              </div>

            </div>

            <p className="mt-7 text-gray-600 leading-8">
              Root Visual menghadirkan pengalaman foto studio yang nyaman untuk
              wisuda, keluarga, couple, prewedding, wedding, personal branding,
              corporate portrait hingga company profile dengan hasil profesional.
            </p>

            <a
              href="https://wa.me/6281244997748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-[#ba1322] hover:bg-[#97101c] text-white rounded-full px-7 py-4 font-semibold transition shadow-lg"
            >
              <FaWhatsapp size={22} />
              Booking Sekarang
            </a>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >

            {steps.map((step) => (

              <motion.div
                key={step.id}
                variants={itemVariant}
                whileHover={{ y: -5 }}
                className={`
                  flex
                  gap-5
                  rounded-3xl
                  border
                  p-6
                  transition-all
                  duration-300
                  ${
                    step.highlight
                      ? "bg-[#ba1322] border-[#ba1322] text-white shadow-xl"
                      : "bg-white border-gray-200 hover:border-[#ba1322]/30 hover:shadow-lg"
                  }
                `}
              >

                <div
                  className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-lg
                    flex-shrink-0
                    ${
                      step.highlight
                        ? "bg-white text-[#ba1322]"
                        : "bg-[#ba1322] text-white"
                    }
                  `}
                >
                  {step.id}
                </div>

                <div>

                  <h3
                    className={`text-xl font-bold ${
                      step.highlight
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-2 leading-7 ${
                      step.highlight
                        ? "text-gray-200"
                        : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}