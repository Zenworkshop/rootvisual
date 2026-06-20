import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPlug,
  FaWater,
  FaSnowflake,
  FaBuilding,
  FaFileAlt,
  FaUserTie,
  FaCheckCircle,
  FaTools,
  FaShieldAlt
} from "react-icons/fa";

import firestopImage from "../assets/HILTI/ca5.png";
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
import hiltiImg from "../assets/HILTI/ca5.png";
import alatImages from "../assets/HILTI/ca3.png";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function ContentFirestop() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* SECTION 1: HERO - Jasa Firestop */}
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
              Jasa Firestop Profesional & Bersertifikat
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Layanan pemasangan firestop untuk proteksi kebakaran pada celah pipa, kabel, dan ducting di dinding atau lantai bangunan. Mencegah penyebaran api & asap sesuai standar keselamatan proyek.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20dengan%20jasa%20firestop%20untuk%20proyek%20bangunan"
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


      {/* Section 2: Apa Itu Firestop dan Kenapa Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={firestopImage}
            alt="Penjelasan Firestop"
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
            Apa Itu Firestop dan Kenapa Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Firestop adalah sistem proteksi pasif kebakaran yang dirancang untuk menahan penyebaran api dan asap melalui jalur kabel, pipa, dan celah struktural lainnya.
            </p>
            <p>
              Tanpa firestop, api dan asap bisa menyebar sangat cepat antar ruangan atau lantai, memperbesar risiko kerusakan dan kerugian.
            </p>
            <p>
              Pemasangan firestop merupakan standar keamanan wajib untuk proyek gedung bertingkat, pabrik, rumah sakit, hotel, dan fasilitas publik lainnya.
            </p>
          </div>
        </motion.div>
      </section>

            {/* SECTION 3: Jenis Firestop yang Kami Kerjakan */}
      <section className="bg-[#ba1322] py-20 px-4 md:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jenis Firestop yang Kami Kerjakan
          </h2>
          <p className="text-lg text-white/90">
            Tim kami siap menangani berbagai tipe instalasi firestop dengan metode yang sesuai standar keamanan proyek gedung & industri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaPlug className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Firestop Kabel Tray</h3>
              <p className="text-white/80 text-sm">Mencegah penyebaran api melalui jalur kabel antar ruangan.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaWater className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Firestop Pipa PVC/GI</h3>
              <p className="text-white/80 text-sm">Instalasi sistem proteksi pada pipa instalasi air dan gas.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaSnowflake className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Firestop Ducting AC</h3>
              <p className="text-white/80 text-sm">Menahan jalur penyebaran api melalui sistem pendingin ruangan.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaBuilding className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Firestop Shaft Lift & Panel Listrik</h3>
              <p className="text-white/80 text-sm">Perlindungan menyeluruh untuk jalur vertikal & panel sensitif.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaFileAlt className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Sertifikasi & Dokumentasi</h3>
              <p className="text-white/80 text-sm">Kami siapkan dokumentasi proyek & sertifikat sesuai kebutuhan audit.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FaShieldAlt className="text-white text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Firestop Perimeter Bangunan</h3>
              <p className="text-white/80 text-sm">Mengamankan celah antara struktur lantai dan dinding luar dari potensi penyebaran api.</p>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-16">
        <a
          href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi%20mengenai%20instalasi%20firestop."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#ba1322] hover:bg-[#e64a4a] hover:text-white rounded-full text-lg font-semibold shadow-lg transition"
        >
          <FaWhatsapp size={24} /> Konsultasi Sekarang
        </a>
      </div>
      </section>



      {/* Section 4: Keunggulan Zen Workshop di Layanan Firestop */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan yang bakal kamu dapatkan
            </h2>
            <p className="text-lg text-gray-600">
              Aplikator Hilti adalah spesialis firestop terpercaya untuk berbagai proyek gedung, industri, dan infrastruktur.
              Kami menghadirkan kombinasi keahlian teknis, material premium, dan standar kerja yang teliti, menjadikan kami pilihan utama dalam sistem proteksi kebakaran bangunan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaUserTie className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Tenaga Ahli Bersertifikat</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Dikerjakan oleh tim bersertifikat yang berpengalaman dalam instalasi firestop sesuai standar NFPA dan audit proteksi kebakaran bangunan.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Material Berkualitas</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Kami hanya menggunakan produk firestop premium dari brand global seperti Hilti, 3M, dan Boss Fire untuk menjamin performa tahan api maksimal.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaFileAlt className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Laporan & Dokumentasi</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Setiap pekerjaan dilengkapi dokumentasi lengkap: foto before-after, data teknis, dan laporan untuk mendukung keperluan audit dan compliance.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaBuilding className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Siap Tender Proyek</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Mendukung proyek swasta maupun BUMN dengan sistem administrasi rapi, dokumen legal lengkap, dan kesiapan mengikuti tender konstruksi.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaTools className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Garansi & Akurasi</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Kami menjamin hasil kerja rapi, akurat di titik penetrasi, serta sesuai standar teknis dan keselamatan proyek.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-red-600 text-2xl mt-1" />
                <h3 className="font-semibold text-xl">Fire Safety Teruji</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Sistem firestop kami terbukti efektif dalam mencegah penyebaran api dan asap, dengan hasil instalasi yang lolos uji fungsi proteksi pasif kebakaran.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Langkah Kerja Kami - Firestop */}
        <section className="bg-white text-gray-900 py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Langkah Kerja Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-stretch text-left">
              {/* KIRI: Gambar + Penjelasan */}
              <div className="flex flex-col justify-between">
                <img
                  src={hiltiImg} // ganti dengan gambar firestop jika ada
                  alt="Langkah kerja firestop"
                  className="rounded-lg shadow-lg w-full h-full object-cover mb-6 max-h-[480px]"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Proses instalasi <strong>firestop</strong> kami mengikuti standar proteksi kebakaran untuk bangunan gedung, industri, dan fasilitas umum.
                  Setiap langkah dikerjakan oleh tenaga ahli dengan dokumentasi rapi dan penggunaan material firestop bersertifikat.
                </p>
                <div className="flex justify-start">
                  <a
                    href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20dengan%20jasa%20instalasi%20firestop%20dari%20Zen%20Workshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
                  >
                    <FaWhatsapp size={20} className="mb-[1px]" />
                    Konsultasi Sekarang
                  </a>
                </div>
              </div>

              {/* KANAN: Langkah-langkah Firestop */}
              <div className="grid gap-6 self-stretch">
                {[
                  {
                    id: "01",
                    title: "Survey Area 🔍",
                    desc: "Tim kami mengecek titik penetrasi kabel, pipa, ducting, dan elemen lainnya yang membutuhkan firestop.",
                  },
                  {
                    id: "02",
                    title: "Pemilihan Material 🔧",
                    desc: "Kami sesuaikan jenis material (sealant, board, collar, dll) berdasarkan kebutuhan proyek dan spesifikasi sistem proteksi kebakaran.",
                  },
                  {
                    id: "03",
                    title: "Pembersihan Area Instalasi 🧽",
                    desc: "Area sekitar penetrasi dibersihkan untuk memastikan pemasangan firestop berjalan optimal dan merekat sempurna.",
                  },
                  {
                    id: "04",
                    title: "Instalasi Firestop 🔥",
                    desc: "Firestop dipasang sesuai SOP dan teknis produsen (seperti Hilti/3M), baik untuk horizontal maupun vertikal penetrasi.",
                  },
                  {
                    id: "05",
                    title: "Finishing & Dokumentasi 📷",
                    desc: "Setiap titik di-foto dan didokumentasikan sebagai bagian dari laporan akhir untuk audit dan compliance proyek.",
                  },
                ].map((step) => (
                  <motion.div
                    key={step.id}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-gray-100 text-gray-900 border border-gray-200 rounded-xl p-5 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold flex items-center gap-3">
                      <span className="bg-[#0D2C40] text-white font-bold px-3 py-1 rounded-full">
                        {step.id}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>





{/* Section 5: Proyek Terbaru */}
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
              <button className="absolute top-4 right-6 text-white text-3xl" onClick={closeModal}>&times;</button>
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={prevImage}>&#10094;</button>
              <img src={images[activeIndex]} alt={`Preview ${activeIndex + 1}`} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg" />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={nextImage}>&#10095;</button>
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
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien Kami
          </h2>
          <p className="text-lg text-gray-600">
            Apa kata mereka yang sudah menggunakan layanan firestop?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Pengerjaannya cepat, rapi, dan timnya sangat komunikatif. Proyek jadi lebih aman.",
              name: "Pak H – Proyek Gedung Jakarta",
            },
            {
              text: "Sangat membantu untuk kelengkapan dokumen tender BUMN. Lengkap & sesuai standar.",
              name: "Bu S – Proyek Pabrik Tangerang",
            },
            {
              text: "Kualitas material dan hasil pemasangan firestop-nya sangat memuaskan. Recommended!",
              name: "PT Maju Jaya – Rumah Sakit Bekasi",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex mb-3 text-yellow-400 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{review.text}”</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

        

        {/* SECTION 7: FAQ Firestop */}
      <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Pertanyaan Umum seputar Firestop
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* KIRI: Konten FAQ */}
            <div className="space-y-6">
              {[
                {
                  question: "Apakah wajib ada firestop di proyek saya?",
                  answer:
                    "Ya, firestop merupakan syarat wajib untuk gedung bertingkat, rumah sakit, pabrik, dan proyek yang ingin lolos audit keselamatan kebakaran.",
                },
                {
                  question: "Material apa yang digunakan?",
                  answer:
                    "Kami menggunakan material firestop berkualitas tinggi dari merek ternama seperti Hilti, 3M, dan produk bersertifikasi lainnya.",
                },
                {
                  question: "Apakah bisa dikerjakan malam/hari libur?",
                  answer:
                    "Bisa. Tim kami siap bekerja di malam hari atau weekend dengan penjadwalan khusus, tanpa ganggu aktivitas proyek utama.",
                },
                {
                  question: "Apakah ada dokumentasi untuk audit?",
                  answer:
                    "Tentu. Kami menyediakan laporan lengkap, foto progres, dan sertifikat jika dibutuhkan untuk audit internal maupun eksternal.",
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
                alt="FAQ Firestop"
                className="rounded-lg shadow-lg w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Konsultasi & Booking - Jasa Firestop */}
<section className="py-20 px-4 md:px-8 bg-white text-center text-gray-900">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Butuh Sistem Firestop yang Tersertifikasi?
    </h2>
    <p className="text-lg md:text-xl mb-8 text-gray-700">
      Konsultasi Gratis untuk pemasangan firestop gedung, rumah sakit, pabrik, dan infrastruktur. Tim kami siap bantu survei lokasi, pilih material terbaik, dan siapkan dokumentasi audit 🔥<br />
      <span className="text-sm md:text-base block mt-2 text-gray-500">
        *Termasuk pengecekan jalur kabel, pipa, dan dokumen pendukung
      </span>
    </p>
    <a
      href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20tertarik%20dengan%20layanan%20firestop%20untuk%20proyek%20saya."
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
        <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Layanan Firestop Bersertifikat – Jabodetabek & Bandung
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Aplikator Hilti Melayanai jasa pemasangan firestop profesional untuk berbagai kebutuhan proyek:
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 text-base md:text-lg mb-6">
            <li><strong>Firestop kabel dan pipa</strong> di gedung baru maupun renovasi</li>
            <li><strong>Firestop untuk gedung bertingkat</strong>, rumah sakit, hotel, dan pabrik</li>
            <li>Pemasangan <strong>firestop Hilti</strong> untuk proteksi maksimal</li>
            <li>Konsultasi dan eksekusi <strong>firestop Jabodetabek</strong> dan sekitarnya</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700">
            Kami melayani proyek firestop di seluruh <strong>Jabodetabek, Bandung</strong>, dan berbagai kota industri besar lainnya di Indonesia.
            </p>
        </motion.div>
        </section>




    </>
  );
}
