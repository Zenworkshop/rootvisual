"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <p className="uppercase tracking-[4px] text-[#ba1322] font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">
            Booking Studio Foto
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-8">
            Hubungi Root Visual untuk booking studio foto,
            konsultasi paket foto, ataupun menanyakan jadwal
            yang masih tersedia.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="space-y-6">

              <div className="bg-white rounded-3xl p-7 shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="bg-[#ba1322] w-14 h-14 rounded-full flex items-center justify-center text-white">

                    <FaWhatsapp size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      WhatsApp
                    </h3>

                    <p className="text-gray-600">
                      0812-4499-7748
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white rounded-3xl p-7 shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="bg-[#ba1322] w-14 h-14 rounded-full flex items-center justify-center text-white">

                    <MdEmail size={24} />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      rootvisualstudio@gmail.com
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white rounded-3xl p-7 shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="bg-[#ba1322] w-14 h-14 rounded-full flex items-center justify-center text-white">

                    <FaMapMarkerAlt size={22} />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Studio
                    </h3>

                    <p className="text-gray-600">
                      Tangerang Selatan
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex gap-4 pt-2">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#ba1322] text-white flex items-center justify-center hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#ba1322] text-white flex items-center justify-center hover:scale-110 transition"
                >
                  <FaTiktok />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#ba1322] text-white flex items-center justify-center hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10"
          >

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Form Booking
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#ba1322]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#ba1322]"
              />

              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#ba1322]"
              />

              <textarea
                rows="5"
                placeholder="Tulis kebutuhan Anda..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#ba1322]"
              ></textarea>

              <button
                className="w-full rounded-full bg-[#ba1322] hover:bg-[#97111c] transition text-white py-4 font-semibold shadow-lg"
              >
                Kirim Booking
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}