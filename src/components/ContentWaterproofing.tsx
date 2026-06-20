import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaWater, FaBuilding, FaHome, FaArrowAltCircleDown, FaBath, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import waterproofingHero from "../assets/HILTI/ca5.png"; // Gambar hero
import proyek1 from "../assets/HILTI/ca1.png";
import proyek2 from "../assets/HILTI/ca2.png";
import proyek3 from "../assets/HILTI/ca3.png";
import proyek4 from "../assets/HILTI/ca4.png";
import proyek5 from "../assets/HILTI/ca5.png";
import proyek6 from "../assets/HILTI/ca6.png";
import proyek7 from "../assets/HILTI/ca7.png";
import proyek8 from "../assets/HILTI/ca8.png";
import proyek9 from "../assets/HILTI/ca9.png";
import proyek10 from "../assets/HILTI/ca10.png";
import proyek11 from "../assets/HILTI/ca11.png";
import proyek12 from "../assets/HILTI/ca12.png";
import proyek13 from "../assets/HILTI/ca13.png";
import proyek14 from "../assets/HILTI/ca14.png";
import proyek15 from "../assets/HILTI/ca15.png";
import alatImages from "../assets/HILTI/ca3.png";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function ContentWaterproofing() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* SECTION 1: HERO - Jasa Waterproofing */}
        <motion.section
          className="bg-[#ba1322] text-white py-28 px-6 md:px-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Jasa Waterproofing Profesional & Anti Bocor
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Layanan pelapisan anti bocor untuk dak beton, atap, kamar mandi, rooftop, dan dinding retak. Proses cepat, rapi, dan tahan lama dengan material waterproofing terbaik.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20dengan%20jasa%20waterproofing%20untuk%20proyek%20saya"
              onClick={() => {
                fbq("track", "Contact");
                return gtag_report_conversion("https://wa.me/6281244997748");
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#ba1322] hover:bg-[#e64a4a] hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} /> Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </motion.section>


      {/* SECTION 2: Kenapa Waterproofing Itu Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={waterproofingHero}
            alt="Ilustrasi Kenapa Waterproofing Penting"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kenapa Waterproofing Itu Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Tanpa perlindungan yang tepat, area seperti dak, rooftop, dan kamar mandi rentan bocor.
              Kebocoran yang dibiarkan bisa menyebabkan struktur bangunan rusak, timbul jamur, dan boros biaya perbaikan.
            </p>
            <p>
              Waterproofing adalah solusi jangka panjang yang melindungi bangunan dari rembesan air,
              memastikan umur bangunan lebih awet dan aman digunakan.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: Area Layanan Waterproofing */}
      <section className="bg-[#ba1322] py-20 px-4 md:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Area Layanan Waterproofing
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Kami melayani berbagai kebutuhan pelapisan anti bocor untuk area-area penting bangunan, cocok untuk gedung bertingkat, rumah tinggal, hingga fasilitas industri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white text-lg">
          {[
            {
              icon: <FaBuilding className="text-white text-2xl mt-1" />,
              title: "Atap Beton",
              desc: "Solusi waterproofing dak beton agar tahan terhadap hujan dan perubahan cuaca ekstrem."
            },
            {
              icon: <FaHome className="text-white text-2xl mt-1" />,
              title: "Dinding Luar",
              desc: "Mencegah rembesan air dari luar yang dapat merusak estetika dan kekuatan struktur bangunan."
            },
            {
              icon: <FaWater className="text-white text-2xl mt-1" />,
              title: "Balkon / Teras",
              desc: "Melindungi balkon dan teras dari genangan air yang berpotensi bocor ke area bawah."
            },
            {
              icon: <FaArrowAltCircleDown className="text-white text-2xl mt-1" />,
              title: "Basement / Lantai Bawah",
              desc: "Mencegah masuknya air tanah dan tekanan hidrostatik di area basement dan kolong bangunan."
            },
            {
              icon: <FaBath className="text-white text-2xl mt-1" />,
              title: "Kamar Mandi & Area Lembap",
              desc: "Memberikan perlindungan maksimal pada kamar mandi, toilet, dan area basah lainnya."
            },
            {
              icon: <FaTools className="text-white text-2xl mt-1" />,
              title: "Retakan Struktur & Sambungan Beton",
              desc: "Penanganan retak halus dan sambungan beton agar tidak menjadi jalur masuk air."
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow"
            >
              {item.icon}
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



            {/* SECTION 4: Metode & Material yang Digunakan */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Metode & Material yang Digunakan
          </h2>
          <p className="text-lg text-gray-600">
            Kami menerapkan metode terbaik sesuai kondisi lapangan—untuk hasil waterproofing yang tahan lama dan efektif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🛡️</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Coating Polyurethane</h3>
              <p className="text-sm text-gray-600">
                Waterproofing elastis untuk atap beton dan area terbuka, tahan cuaca & sinar UV.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🔥</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Membrane Bakar</h3>
              <p className="text-sm text-gray-600">
                Lapisan anti bocor bitumen untuk dak & rooftop, awet dan kuat terhadap genangan air.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">🧱</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Cementitious Coating</h3>
              <p className="text-sm text-gray-600">
                Solusi pelapis berbasis semen untuk dinding kamar mandi, basement, dan area lembap.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex items-start gap-4">
            <div className="text-blue-700 text-2xl mt-1">💧</div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Injeksi Anti Bocor</h3>
              <p className="text-sm text-gray-600">
                Injeksi tekanan tinggi ke celah beton untuk mengatasi rembesan secara akurat dan tahan lama.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


            {/* SECTION 5: Keunggulan Jasa Waterproofing Kami */}
      <section className="bg-[#ba1322] text-white py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keunggulan Jasa Waterproofing Kami
          </h2>
          <p className="text-lg text-white/90">
            Kami berpengalaman menangani berbagai jenis proyek, mulai dari rumah tinggal hingga gedung bertingkat. Semua layanan dilakukan oleh tenaga profesional, dengan material terbaik dan hasil rapi tahan bocor.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-lg">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow"
          >
            <span className="text-white text-2xl mt-1">👷</span>
            <p>Teknisi berpengalaman dan bersertifikat khusus waterproofing</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow"
          >
            <span className="text-white text-2xl mt-1">🧪</span>
            <p>Menggunakan material premium tahan bocor seperti membrane, PU, dan semen khusus</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow"
          >
            <span className="text-white text-2xl mt-1">⚡</span>
            <p>Pengerjaan cepat, rapi, dan minim gangguan ke aktivitas proyek</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow"
          >
            <span className="text-white text-2xl mt-1">🏢</span>
            <p>Bisa untuk rumah tinggal, gedung kantor, hotel, pabrik, hingga infrastruktur besar</p>
          </motion.div>
        </div>
      </section>


      {/* SECTION 6: Proyek Terbaru */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyek Terbaru</h2>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Proyek ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-6 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={prevImage}
              >
                &#10094;
              </button>

              <img
                src={images[activeIndex]}
                alt={`Preview ${activeIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={nextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-block bg-[#0D2C40] hover:bg-[#133C56] text-white px-6 py-3 rounded-lg text-base font-semibold transition">
            Lihat Semua Proyek Kami →
          </Link>
        </div>
      </section>

      {/* SECTION 6: Testimoni Klien */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Klien Kami
            </h2>
            <p className="text-lg text-gray-600">
              Beberapa klien yang puas dengan hasil kerja waterproofing dari Zen Workshop:
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 text-gray-700">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow"
            >
              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-lg italic">“Pengerjaannya cepat dan rapi. Sudah 6 bulan tidak ada bocor lagi.”</p>
              <p className="mt-4 font-semibold text-sm text-gray-500">– Ibu Lina, Proyek Rumah Pribadi di Depok</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow"
            >
              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-lg italic">“Teknisi profesional, hasilnya bersih dan detail. Recommended!”</p>
              <p className="mt-4 font-semibold text-sm text-gray-500">– Pak Hendra, Proyek Kantor Jakarta Timur</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-xl shadow md:col-span-2"
            >
              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-lg italic">“Sesuai janji, garansi diberikan dan hasil tahan hujan besar. Terima kasih tim Zen!”</p>
              <p className="mt-4 font-semibold text-sm text-gray-500">– Bapak Rudi, Proyek Gudang di Bekasi</p>
            </motion.div>
          </div>
        </section>


      {/* SECTION 7: FAQ Waterproofing */}
        <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Pertanyaan Umum seputar Waterproofing
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* KIRI: Konten FAQ */}
              <div className="space-y-6">
                {[
                  {
                    question: "Apa itu jasa waterproofing dan kenapa penting?",
                    answer:
                      "Waterproofing adalah perlindungan bangunan dari kebocoran air. Penting untuk mencegah kerusakan struktur, jamur, dan meningkatkan usia bangunan.",
                  },
                  {
                    question: "Area mana saja yang perlu dilapisi waterproofing?",
                    answer:
                      "Umumnya dilakukan pada atap beton, dinding luar, balkon, kamar mandi, dan basement. Area lembap sangat rentan bocor tanpa perlindungan ini.",
                  },
                  {
                    question: "Apakah bisa waterproofing tanpa membongkar lantai/dinding?",
                    answer:
                      "Bisa. Kami memiliki metode yang fleksibel, seperti injeksi atau coating, tergantung dari kondisi area dan permukaan yang ingin dilindungi.",
                  },
                  {
                    question: "Berapa lama proses pengerjaannya?",
                    answer:
                      "Rata-rata 1–3 hari kerja, tergantung luas area dan jenis metode waterproofing yang dipilih. Kami juga menyediakan layanan cepat jika dibutuhkan.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-md"
                  >
                    <h3 className="font-semibold text-lg text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-white/90 text-base">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              {/* KANAN: Gambar */}
              <div className="flex justify-center">
                <img
                  src={alatImages}
                  alt="FAQ Waterproofing"
                  className="rounded-lg shadow-lg w-full max-w-sm object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA Konsultasi & Booking - Jasa Waterproofing */}
        <section className="py-20 px-4 md:px-8 bg-white text-center text-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bingung Atasi Rembesan atau Bocor di Bangunan?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Konsultasi Gratis untuk solusi waterproofing atap, dinding, kamar mandi, basement, dan area rentan bocor lainnya. Kami bantu survei, analisa kebutuhan, dan rekomendasi metode paling efektif 💧<br />
              <span className="text-sm md:text-base block mt-2 text-gray-500">
                *Termasuk estimasi biaya dan pengecekan kondisi permukaan
              </span>
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20tertarik%20dengan%20layanan%20waterproofing%20untuk%20bangunan%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ba1322] text-white hover:bg-[#e64a4a] rounded-full text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} />
              Konsultasi via WhatsApp
            </a>
          </motion.div>
        </section>



        {/* SECTION 9: SEO & Lokasi Layanan */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Jasa Waterproofing Jabodetabek & Sekitarnya
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Zen Workshop melayani berbagai proyek <strong>waterproofing atap beton, dinding luar, dan area rawan bocor</strong> lainnya dengan material terbaik dan teknisi bersertifikat.
            </p>
            <p className="text-md text-gray-600">
            Area layanan kami mencakup: <strong>Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, dan kota industri besar lainnya di Indonesia.</strong>
            </p>
            <p className="text-sm text-gray-500 mt-6">
            Keyword: jasa waterproofing, waterproofing atap beton, waterproofing dinding, anti bocor, waterproofing Jabodetabek
            </p>
        </motion.div>
        </section>





    </>
  );
}
