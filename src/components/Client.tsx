"use client";

import { motion } from "framer-motion";
import totalbangunpersada from "../assets/totalbangunpersada.png";
import jakon from "../assets/jakon.png";
import pp from "../assets/pp.png";
import pulauintanlestari from "../assets/pulauintanlestari.jpg";
import pupr from "../assets/pupr.png";
import waskita from "../assets/waskita.png";
import wika from "../assets/wika.png";
import adhi from "../assets/adhi.png";

const clients = [
  totalbangunpersada,
  pp,
  jakon,
  pulauintanlestari,
  pupr,
  waskita,
  wika,
  adhi,
];

export default function Catalog() {
  return (
    <section className="bg-white px-2 md:px-2 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Judul & Deskripsi */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Klien Besar yang Telah Mempercayakan Proyeknya kepada Aplikator Produk Hilti
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Aplikator Hilti adalah mitra profesional dalam pemasangan sistem anchor, rebar, firestop, dan produk konstruksi lainnya dari Hilti. Kami telah dipercaya oleh berbagai perusahaan kontraktor besar, BUMN, dan instansi pemerintah untuk menangani proyek-proyek teknis yang membutuhkan akurasi tinggi, kekuatan struktur, dan standar keamanan internasional.
          </p>
        </div>

        {/* Grid Logo Klien */}
        <div className="grid grid-cols-4 gap-2 place-items-center">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-1 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`logo-client-${index}`}
                className="h-14 sm:h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
