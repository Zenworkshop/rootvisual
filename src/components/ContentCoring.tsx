import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaTools,
  FaCheckCircle,
  FaCertificate,
  FaRulerCombined,
  FaQuestionCircle,
  FaUserTie,
  FaBuilding,
  FaPlug,
  FaLayerGroup,
  FaHome,
  FaRoad,
  FaIndustry
} from 'react-icons/fa';

import coringDetail from '../assets/HILTI/cr1.png';
import alatImage from '../assets/HILTI/ca3.png';
import alatImages from '../assets/HILTI/ca5.png';
import metodeImage from '../assets/HILTI/ca3.png';
import proyek1 from '../assets/HILTI/ca1.png';
import proyek2 from '../assets/HILTI/ca2.png';
import proyek3 from '../assets/HILTI/ca3.png';
import proyek4 from '../assets/HILTI/ca4.png';
import proyek5 from '../assets/HILTI/ca5.png';
import proyek6 from '../assets/HILTI/ca6.png';
import proyek7 from '../assets/HILTI/ca7.png';
import proyek8 from '../assets/HILTI/ca8.png';
import proyek9 from '../assets/HILTI/ca9.png';
import proyek10 from '../assets/HILTI/ca10.png';
import proyek11 from '../assets/HILTI/ca11.png';
import proyek12 from '../assets/HILTI/ca12.png';
import proyek13 from '../assets/HILTI/ca13.png';
import proyek14 from '../assets/HILTI/ca14.png';
import proyek15 from '../assets/HILTI/ca15.png';
import hiltiImg from "../assets/HILTI/ca5.png";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

const faqs = [
  {
    question: "Berapa lama pengerjaannya?",
    answer: "Waktu pengerjaan tergantung jumlah titik uji, namun umumnya sekitar 1–2 jam per lokasi." 
  },
  {
    question: "Apakah perlu dibor dulu?",
    answer: "Ya, titik pengujian perlu dibor sesuai spesifikasi anchor sebelum dilakukan penarikan."
  },
  {
    question: "Bisa untuk proyek kecil?",
    answer: "Tentu! Kami melayani proyek skala kecil maupun besar di berbagai sektor."
  },
  {
    question: "Apakah dapat sertifikat hasil uji?",
    answer: "Ya, setiap pengujian akan disertai laporan hasil uji & sertifikat jika diperlukan."
  }
];

export default function ContentCoring() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + images.length) % images.length);

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
      {/* SECTION 1: HERO */}
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
              Jasa Coring Beton Profesional & Presisi
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Layanan pengeboran beton untuk lantai, dinding, dan struktur bangunan. Cocok untuk instalasi pipa, kabel, ducting, hingga modifikasi struktur. Hasil bersih, cepat, dan menggunakan alat coring berkualitas tinggi.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20dengan%20jasa%20coring%20beton%20untuk%20lantai%20atau%20dinding"
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


          {/* Section 2: Kenapa Coring Itu Penting */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={coringDetail}
            alt="Kenapa Coring Itu Penting"
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
            Kenapa Coring Itu Penting?
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              Coring adalah metode pengeboran beton yang digunakan untuk membuka jalur pipa, kabel, ventilasi, atau keperluan teknis lainnya tanpa merusak struktur utama bangunan.
            </p>
            <p>
              Berbeda dengan pengeboran manual, coring menggunakan alat khusus seperti mesin Hilti yang menghasilkan lubang lebih rapi, cepat, dan minim getaran.
            </p>
            <p>
              Jika dilakukan sembarangan, proses pengeboran bisa menyebabkan retak struktural, suara bising, atau kerusakan pada permukaan beton yang memakan biaya perbaikan lebih mahal.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Keunggulan Jasa Coring dari Zen Workshop */}
      <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Keunggulan Jasa Coring dari Zen Workshop
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <FaTools className="text-white text-3xl mb-4" />,
                title: "Mesin Coring Hilti",
                desc: "Presisi tinggi dengan hasil lubang rapi dan minim kesalahan struktur.",
              },
              {
                icon: <FaRulerCombined className="text-white text-3xl mb-4" />,
                title: "Bisa Vertikal & Horizontal",
                desc: "Cocok untuk coring dinding maupun lantai, sesuai kebutuhan proyek.",
              },
              {
                icon: <FaBuilding className="text-white text-3xl mb-4" />,
                title: "Aman untuk Area Aktif",
                desc: "Minim getaran dan suara, ideal untuk rumah, kantor, atau area publik.",
              },
              {
                icon: <FaUserTie className="text-white text-3xl mb-4" />,
                title: "Teknisi Berpengalaman",
                desc: "Dikerjakan oleh tim bersertifikat dan berpengalaman di proyek skala besar.",
              },
              {
                icon: <FaCheckCircle className="text-white text-3xl mb-4" />,
                title: "Struktur Tidak Rusak",
                desc: "Pengeboran dilakukan dengan hati-hati agar struktur beton tetap aman.",
              },
              {
                icon: <FaCertificate className="text-white text-3xl mb-4" />,
                title: "Tersedia Sertifikat Hasil",
                desc: "Kami berikan laporan dokumentasi dan sertifikat resmi bila diperlukan.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-md transition text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20tentang%20jasa%20coring%20beton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#ba1322] hover:bg-[#e64a4a] hover:text-white rounded-full text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi Sekarang
          </a>
        </div>
      </section>

            {/* Section 4: Jenis Proyek yang Bisa Dilayani */}
        <section className="bg-white py-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Jenis Proyek yang Bisa Dilayani
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaPlug className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instalasi Pipa & Kabel</h3>
              <p className="text-gray-600 text-sm">Coring presisi untuk jalur utilitas teknis.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaLayerGroup className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gedung Bertingkat</h3>
              <p className="text-gray-600 text-sm">Untuk coring antar lantai & dinding lift.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaHome className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rumah & Renovasi</h3>
              <p className="text-gray-600 text-sm">Aman untuk rumah tinggal, minim getaran.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaRoad className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastruktur</h3>
              <p className="text-gray-600 text-sm">Jalan raya, jembatan, dan proyek sipil lainnya.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaIndustry className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proyek Industri</h3>
              <p className="text-gray-600 text-sm">Pabrik, warehouse, dan instalasi teknis industri.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <FaBuilding className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bandara & Fasilitas Umum</h3>
              <p className="text-gray-600 text-sm">Coring untuk instalasi sistem di bandara & terminal publik.</p>
            </motion.div>
          </div>
        </section>


      {/* SECTION 4: Langkah Kerja Kami - Tes Tarik / Pull-Out Test */}
      <section className="bg-white text-gray-900 py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Langkah Kerja Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-stretch text-left">
            {/* KIRI: Gambar + Penjelasan */}
            <div className="flex flex-col justify-between">
              <img
                src={hiltiImg}
                alt="Langkah kerja pull out test"
                className="rounded-lg shadow-lg w-full h-full object-cover mb-6 max-h-[480px]"
              />
              <p className="text-gray-700 leading-relaxed mb-4">
                Proses <strong>uji tarik (pull-out test)</strong> kami dilakukan dengan alat resmi dan teknisi bersertifikat. Cocok untuk proyek gedung bertingkat, infrastruktur besar, hingga kebutuhan tender konstruksi.
              </p>
              <div className="flex justify-start">
                <a
                  href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20tentang%20uji%20tarik%20(pull%20out%20test)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
                >
                  <FaWhatsapp size={20} className="mb-[1px]" />
                  Konsultasi Sekarang
                </a>
              </div>
            </div>

            {/* KANAN: Langkah-langkah */}
            <div className="grid gap-6 self-stretch">
              {[
                {
                  id: "01",
                  title: "Survey Lokasi 📍",
                  desc: "Tim teknisi kami datang ke lokasi untuk mengecek titik pengujian dan kondisi area sebelum test dimulai.",
                },
                {
                  id: "02",
                  title: "Persiapan Alat & Perlengkapan ⚙️",
                  desc: "Alat uji tarik digital dikalibrasi, disiapkan sesuai kapasitas kebutuhan proyek, dan diposisikan di titik pengujian.",
                },
                {
                  id: "03",
                  title: "Pemasangan Load Cell 📐",
                  desc: "Load cell dan adaptor anchor dipasang pada titik uji sesuai standar teknis yang dibutuhkan.",
                },
                {
                  id: "04",
                  title: "Pelaksanaan Uji Tarik 🧪",
                  desc: "Pengujian dilakukan secara bertahap hingga titik maksimum, sambil memantau grafik kekuatan dari alat Hilti.",
                },
                {
                  id: "05",
                  title: "Dokumentasi & Sertifikat 📊",
                  desc: "Hasil test dicetak, didokumentasi, dan disiapkan sertifikat resmi bila dibutuhkan oleh konsultan atau tender.",
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



      {/* Section 4: Dokumentasi Proyek Pull Out Test */}
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

      {/* SECTION 6: Testimoni Klien - Jasa Coring Beton */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apa Kata Klien Kami?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Proyek Apartemen Mutiara City",
                text: "Pekerjaan coring sangat rapi dan presisi. Tidak ada kerusakan di sekitar titik bor. Kami sangat puas!",
              },
              {
                name: "Kontraktor Villa Sentul",
                text: "Kami butuh coring cepat untuk jalur pipa. Tim Zen langsung datang & hasilnya sesuai harapan.",
              },
              {
                name: "Teknisi PT Karya Beton",
                text: "Coring di area aktif pabrik berhasil tanpa gangguan ke operasional. Timnya profesional & alatnya lengkap.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-6 text-left hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <h3 className="text-md font-semibold text-gray-900">{review.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5: FAQ Jasa Coring Beton */}
      <section className="bg-[#ba1322] py-20 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            FAQ: Pertanyaan Seputar Jasa Coring Beton
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Kiri: Konten FAQ */}
            <div className="space-y-6 bg-[#96101b] p-6 rounded-xl">
              {[
                {
                  question: "Apa itu jasa coring beton?",
                  answer:
                    "Coring beton adalah proses pengeboran pada beton menggunakan alat khusus untuk membuat lubang yang presisi tanpa merusak struktur utama.",
                },
                {
                  question: "Apa bedanya coring horizontal dan vertikal?",
                  answer:
                    "Coring horizontal dilakukan pada permukaan lantai atau plat, sementara vertikal dilakukan pada dinding beton. Keduanya membutuhkan teknik dan alat yang berbeda.",
                },
                {
                  question: "Berapa ukuran lubang yang bisa dibuat?",
                  answer:
                    "Diameter lubang coring bisa disesuaikan antara 2 cm hingga 20 cm tergantung kebutuhan proyek dan jenis mata bor yang digunakan.",
                },
                {
                  question: "Apakah proses coring menimbulkan getaran besar?",
                  answer:
                    "Tidak. Mesin coring kami bertekanan air dan minim getaran, sehingga aman digunakan di area aktif seperti kantor atau rumah tinggal.",
                },
                {
                  question: "Apakah bisa coring untuk instalasi pipa dan listrik?",
                  answer:
                    "Bisa, sangat cocok. Kami sering menangani jalur pipa, kabel listrik, dan ducting pada proyek gedung dan perumahan.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-white/30 pb-4">
                  <button
                    onClick={() => setFaqIndex(faqIndex === index ? null : index)}
                    className="flex items-start w-full text-left text-lg font-semibold text-white gap-3"
                  >
                    <FaQuestionCircle className="text-white mt-1" />
                    {faq.question}
                  </button>
                  <AnimatePresence>
                    {faqIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-white/90 text-base"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Kanan: Gambar */}
            <div className="flex items-start justify-center">
              <img
                src={alatImages}
                alt="FAQ Jasa Coring Beton"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Section 6: CTA Konsultasi & Booking */}
        <section className="py-20 px-4 md:px-8 bg-white text-center text-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Butuh Coring Beton yang Rapi dan Presisi?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Konsultasi Gratis untuk jasa coring lantai dan dinding beton. Kami siap bantu survei, analisa kebutuhan, dan kerjakan dengan alat Hilti terbaik ⚙️<br />
              <span className="text-sm md:text-base block mt-2 text-gray-500">
                *Termasuk pengecekan kondisi struktur dan layout titik coring
              </span>
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20tertarik%20dengan%20jasa%20coring%20beton%20yang%20presisi%20dan%20rapi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ba1322] text-white hover:bg-[#e64a4a] rounded-full text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} />
              Konsultasi via WhatsApp
            </a>
          </motion.div>
        </section>

    </>
  );
}
