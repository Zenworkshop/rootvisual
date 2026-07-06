"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    name: "Andi Saputra",
    review:
      "Hasil foto wisuda saya sangat memuaskan. Fotografernya ramah dan hasil editnya natural.",
    stars: 5,
  },
  {
    name: "Rina Wijaya",
    review:
      "Studio nyaman, pencahayaan bagus, dan proses pemotretan keluarga berjalan santai.",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    review:
      "Pas foto cepat jadi dan hasilnya jauh lebih bagus dibanding studio lain.",
    stars: 5,
  },
  {
    name: "Sari Melati",
    review:
      "Foto prewedding kami hasilnya elegan. Tim Root Visual sangat profesional.",
    stars: 5,
  },
  {
    name: "Joko Prasetyo",
    review:
      "Pelayanan sangat ramah, hasil corporate portrait sesuai ekspektasi perusahaan kami.",
    stars: 5,
  },
  {
    name: "Dewi Anggraeni",
    review:
      "Sangat puas foto keluarga di Root Visual. Anak-anak juga nyaman selama sesi foto.",
    stars: 5,
  },
];

export default function RootVisualTestimonials() {
  return (
    <section className="bg-[#1e3a5f] py-14 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
            Testimonial
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Apa Kata Pelanggan Root Visual?
          </h2>

          <p className="text-gray-300 mt-3 max-w-2xl mx-auto leading-7">
            Kepuasan pelanggan adalah prioritas kami. Berikut pengalaman mereka
            setelah melakukan sesi foto di Root Visual Studio.
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="bg-[#2a4468] rounded-2xl border border-[#3b587f] p-5 shadow-lg"
            >

              <div className="flex gap-1 mb-3">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <BsStarFill
                    key={i}
                    className="text-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-7 text-sm">
                "{item.review}"
              </p>

              <p className="mt-5 text-white font-semibold">
                — {item.name}
              </p>

            </motion.div>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-10">

          <a
            href="https://maps.app.goo.gl/KY2vcSChbrzkdVPx6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#1e3a5f] px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <FaGoogle />
            Lihat Review Google
          </a>

        </div>

      </div>

    </section>
  );
}