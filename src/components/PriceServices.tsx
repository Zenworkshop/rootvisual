"use client";

import React from "react";
import { motion } from "framer-motion";

const layanan = [
  {
    plan: "Starter",
    title: "Personal / Pas Foto",
    desc: "Cocok untuk kebutuhan formal maupun personal.",
    price: "35K",
    badge: false,
    button: "Pilih Paket",
    points: [
      "Lighting Studio",
      "File Digital",
      "Proses Cepat",
    ],
  },
  {
    plan: "Best Choice",
    title: "Couple",
    desc: "Sesi foto romantis dengan arahan pose profesional.",
    price: "150K",
    badge: true,
    button: "Pilih Paket",
    points: [
      "Arahan Pose",
      "Retouch Natural",
      "Pilihan Background",
    ],
  },
  {
    plan: "Premium",
    title: "Family / Wisuda",
    desc: "Abadikan momen spesial bersama keluarga maupun wisuda.",
    price: "650K",
    badge: false,
    button: "Pilih Paket",
    points: [
      "Unlimited Pose",
      "Retouch Premium",
      "File HD",
    ],
  },
];

export default function LayananGrid() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-10"
        >

          <span className="inline-flex px-4 py-1 rounded-full bg-[#ba1322]/10 text-[#ba1322] text-xs font-semibold tracking-[3px] uppercase">
            Paket Studio Foto
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Pilih Paket yang
            <span className="text-[#ba1322]"> Sesuai Kebutuhanmu</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-7">
            Mulai dari pas foto, couple, keluarga hingga wisuda.
            Semua paket sudah ditangani fotografer profesional
            dengan hasil foto berkualitas tinggi.
          </p>

        </motion.div>

        {/* Card */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {layanan.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[30px]
                bg-white
                border
                ${
                  item.badge
                    ? "border-[#ba1322] shadow-2xl"
                    : "border-gray-200 shadow-lg"
                }
                p-7
                flex
                flex-col
                transition-all
              `}
            >

              {item.badge && (

                <div className="absolute top-5 right-5 bg-[#ba1322] text-white rounded-full px-4 py-1 text-xs font-semibold shadow-lg">

                  ⭐ Best Seller

                </div>

              )}

              <p className="uppercase tracking-[3px] text-xs font-semibold text-[#ba1322]">
                {item.plan}
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-3">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                {item.desc}
              </p>

              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Mulai dari
                </p>

                <div className="flex items-end gap-1 mt-2">

                  <span className="text-xl font-semibold">
                    Rp
                  </span>

                  <span className="text-5xl font-black text-[#ba1322]">
                    {item.price}
                  </span>

                </div>

              </div>

              <ul className="space-y-3 mt-7 flex-grow">

                {item.points.map((point, i) => (

                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div className="w-6 h-6 rounded-full bg-[#ba1322]/10 flex items-center justify-center text-[#ba1322] text-xs font-bold">

                      ✓

                    </div>

                    <span className="text-gray-600">
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

              <a
                href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20booking%20studio%20foto."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  w-full
                  rounded-2xl
                  py-4
                  text-center
                  font-semibold
                  bg-[#ba1322]
                  hover:bg-[#97101c]
                  text-white
                  transition-all
                  duration-300
                  shadow-lg
                "
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