"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import solutiomimg from "../assets/partisi.jpg";
import solutiomimg2 from "../assets/floorhinge.jpg";
import solutiomimg3 from "../assets/sliding.jpg";

const benefits = [
  "Tahan Terhadap Rayap & Korosi",
  "Desain Minimalis & Tampilan Lebih Modern",
  "Biaya Lebih Efisien & Hemat Perawatan",
  "Material Tidak Mudah Terbakar & Aman untuk Hunian",
];

export default function SolutionSection() {
  return (
    <section className="bg-[#1e3a5f] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Kiri - Teks */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-semibold text-orange-400 uppercase tracking-wider">
            SOLUSI
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
            Kenapa Harus Memilih Kusen Aluminium?
          </h2>
          <p className="text-lg md:text-xl text-white mt-6 leading-relaxed">
            Aluminium adalah solusi modern untuk rumah dan bangunan Anda. Berikut beberapa keunggulan kusen aluminium dibandingkan material kayu atau besi:
          </p>

          <ul className="mt-8 space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-xl font-semibold leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={28} className="text-blue-500" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kanan - Gambar tanpa animasi */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex flex-col items-center">
          <div className="relative w-80 h-72 md:w-96 md:h-80 overflow-hidden rounded-tl-[100px] rounded-br-[100px]">
            <img
              src={solutiomimg}
              alt="partisi kaca aluminium"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 mt-4 w-80 md:w-96">
            <div className="basis-1/2 h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={solutiomimg2}
                alt="pintu floorhinge"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="basis-1/2 h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={solutiomimg3}
                alt="pintu sliding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
