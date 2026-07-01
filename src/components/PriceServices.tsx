"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const layanan = [
  {
    plan: "Starter",
    title: "Personal / Pas Foto",
    desc: "Simple, cepat, cocok untuk kebutuhan formal.",
    price: "Mulai dari 35k",
    badge: false,
    button: "Pilih Layanan",
    points: [
      "Lightning Clean",
      "Output Digital/print",
      "Proses Cepat",
    ],
  },
  {
    plan: "Pro",
    title: "Couple",
    desc: "Arahan pose, pilihan backdrop, feel premium.",
    price: "Mulai dari 150k",
    badge: true,
    button: "Pilih Layanan",
    points: [
      "Arahan Pose",
      "Retouch Natural",
      "Pilihan Output",
    ],
  },
  {
    plan: "Premium",
    title: "Family /. Wisuda",
    desc: "Arahan pose, pilihan backdrop, feel premium.",
    price: "Mulai dari 650k",
    badge: false,
    button: "Pilih Layanan",
    points: [
      "Style Guidance",
      "Retouch",
      "Pilihan Output",
    ],
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
     

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
        Pilih Paket Foto
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8 mt-5">
        Root Visual menyediakan berbagai <strong>paket studio foto profesional</strong> mulai dari
        <strong> pas foto</strong>, <strong>foto wisuda</strong>, <strong>foto keluarga</strong>,
        <strong> couple</strong>, <strong>prewedding</strong>, hingga
        <strong> wedding</strong> dengan harga terjangkau, hasil berkualitas tinggi,
        dan layanan fotografer profesional.
      </p>
    </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {layanan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
              }}
              className={`
                relative
                bg-white
                rounded-[28px]
                border
                ${
                  item.badge
                    ? "border-indigo-300"
                    : "border-gray-200"
                }
                shadow-xl
                p-8
                flex
                flex-col
              `}
            >

              {item.badge && (
                <div className="absolute -top-4 right-8 bg-indigo-100 border border-indigo-300 rounded-full px-5 py-1.5 text-sm font-semibold">
                  Best Seller
                </div>
              )}

              <p className="text-gray-500 font-semibold text-lg">
                {item.plan}
              </p>

              <h3 className="text-3xl font-bold mt-2 text-gray-900 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-base leading-7 mt-3">
                {item.desc}
              </p>

              <div className="mt-6">

                <p className="text-gray-500 text-base">
                  Mulai dari
                </p>

                <div className="flex items-end mt-1">

                  <span className="text-xl font-semibold">
                    Rp
                  </span>

                  <span className="text-3xl font-black ml-2 text-gray-900">
                    {item.price}
                  </span>

                </div>

              </div>

              <ul className="space-y-3 mt-8 flex-grow">

                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-base text-gray-600"
                  >
                    <span className="text-gray-500">
                      ✓
                    </span>

                    {point}
                  </li>
                ))}

              </ul>

              <a
                href="https://wa.me/6281234567890"
                className={`
                  mt-8
                  w-full
                  rounded-2xl
                  py-4
                  text-center
                  text-lg
                  font-semibold
                  transition
                  ${
                    item.badge
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }
                `}
              >
                {item.button}
              </a>

            </motion.div>
          ))}

        </div>

        

      </div>

    </section>
  );
}