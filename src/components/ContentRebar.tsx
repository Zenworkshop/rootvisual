"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function ContentRebar() {
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
              Jasa Pemasangan Chemical Rebar Profesional & Bersertifikat
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Solusi sambungan beton lama dan baru yang kuat dan presisi. Cocok untuk proyek gedung bertingkat, jembatan, struktur kolom tambahan, dan renovasi bangunan.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20pemasangan%20chemical%20rebar"
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


      {/* SECTION 2: Kenapa Harus Pakai Chemical Rebar */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Harus Pakai Chemical Rebar?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: "🧱", title: "Daya Ikat Tinggi", desc: "Menghubungkan rebar ke beton lama dengan kekuatan optimal dan presisi." },
              { icon: "🏗️", title: "Sambungan Struktur Efektif", desc: "Ideal untuk proyek yang melibatkan beton lama dan baru." },
              { icon: "🛠️", title: "Tidak Merusak Beton Eksisting", desc: "Metode injeksi tanpa perlu merusak struktur lama." },
              { icon: "🌍", title: "Stabil di Tanah Bergerak", desc: "Aman untuk bangunan tinggi dan wilayah rawan getaran." },
              { icon: "🧪", title: "Tahan Lama & Getaran", desc: "Material adhesive berkualitas tinggi tahan tekanan dan getaran jangka panjang." },
              { icon: "📏", title: "Presisi dan Rapi", desc: "Proses teknis yang terukur dan hasil akhir yang profesional." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

           {/* SECTION 3: Jenis Aplikasi Chemical Rebar */}
      <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Jenis Aplikasi Chemical Rebar
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Sambungan Balok Beton Baru ke Lama",
                desc: "Menghubungkan balok beton baru ke struktur lama dengan rebar untuk kekuatan maksimal."
              },
              {
                title: "Perkuatan Kolom & Lantai Gedung",
                desc: "Meningkatkan daya dukung struktur dengan penanaman rebar menggunakan sistem chemical."
              },
              {
                title: "Renovasi Jembatan atau Flyover",
                desc: "Solusi sambungan cepat dan kuat untuk perbaikan struktur infrastruktur transportasi."
              },
              {
                title: "Proyek Pabrik dan Infrastruktur",
                desc: "Digunakan untuk struktur skala besar seperti industri berat dan bangunan utilitas."
              },
              {
                title: "Perluasan Gedung Bertingkat",
                desc: "Ideal untuk penambahan lantai atau struktur bangunan dengan metode rebar tanam."
              },
              {
                title: "Sambungan Kolom Baru ke Pondasi Lama",
                desc: "Menjamin keterikatan kuat antara elemen struktur lama dan baru dengan presisi."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20tentang%20chemical%20rebar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#ba1322] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e64a4a] hover:text-white transition shadow-lg"
            >
              <FaWhatsapp size={24} />
              Konsultasi Chemical Rebar
            </a>
          </div>
        </div>
      </section>


            {/* SECTION 4: Langkah Kerja Kami */}
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
                alt="Langkah kerja chemical anchor"
                className="rounded-lg shadow-lg w-full h-full object-cover mb-6 max-h-[480px]"
              />
              <p className="text-gray-700 leading-relaxed mb-4">
                Proses pemasangan <strong>chemical anchor</strong> kami dilakukan secara sistematis dan profesional. Berikut langkah-langkah yang akan Anda dapatkan saat menggunakan layanan dari tim aplikator resmi kami.
              </p>
              <div className="flex justify-start">
                <a
                  href="https://wa.me/6281244997748"
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
                  desc: "Tim kami mengunjungi lokasi proyek untuk memahami kondisi lapangan secara langsung sebelum pengerjaan dimulai.",
                },
                {
                  id: "02",
                  title: "Evaluasi Struktur 📐",
                  desc: "Struktur bangunan diperiksa agar metode pemasangan anchor sesuai standar kekuatan dan keamanan.",
                },
                {
                  id: "03",
                  title: "Pengeboran Presisi 🛠️",
                  desc: "Lubang dibuat secara akurat menggunakan alat coring untuk menjamin posisi dan kekuatan sambungan.",
                },
                {
                  id: "04",
                  title: "Injeksi Chemical 🧪",
                  desc: "Anchor ditanam menggunakan bahan kimia khusus yang memberikan daya rekat maksimal ke dalam beton.",
                },
                {
                  id: "05",
                  title: "Tes Tarik / Uji Kuat 📊",
                  desc: "Kami melakukan pull-out test untuk memastikan setiap titik pemasangan sesuai dengan spesifikasi teknis.",
                },
              ].map((step) => (
                <motion.div
                  key={step.id}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="bg-gray-100 text-gray-900 border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-3">
                    <span className="bg-[#0D2C40] text-white font-bold px-3 py-1 rounded-full">{step.id}</span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: Proyek Terbaru */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyek Terbaru</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid" onClick={() => openModal(index)}>
              <img src={src} alt={`Proyek ${index + 1}`} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeModal}>
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

      {/* SECTION 6: Testimoni Klien / Rating */}
      <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
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
                name: "Proyek Gedung BSI Tower",
                text: "Kualitas pemasangan chemical rebar-nya sangat bagus. Sambungan antar struktur jadi kokoh dan tepat sasaran.",
              },
              {
                name: "PT Mega Konstruksi",
                text: "Tim Zen sangat teliti, hasil pull-out test juga lolos semua. Recommended untuk proyek bertingkat dan ekspansi struktur.",
              },
              {
                name: "Konsultan Teknik Bandung",
                text: "Kami terbantu sekali dengan konsultasi teknis dari awal. Pengerjaan cepat, alat lengkap, dan hasil memuaskan.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow p-6 text-left hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-white text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 italic mb-4">"{review.text}"</p>
                <h3 className="text-md font-semibold text-white">{review.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20terkait%20pemasangan%20chemical%20rebar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#ba1322] hover:bg-[#e64a4a] hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
            >
              Lihat Proyek & Konsultasi
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ Chemical Rebar */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pertanyaan Umum seputar Chemical Rebar
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Gambar Ilustrasi */}
      <div className="text-center flex flex-col items-center justify-center gap-6">
        <img
          src={hiltiImg}
          alt="FAQ Chemical Rebar"
          className="rounded-lg shadow-lg mx-auto w-full max-w-md"
        />
        <p className="text-gray-700 text-base leading-relaxed max-w-sm">
          Inilah solusi sambungan beton modern yang kuat, presisi, dan minim risiko — cocok untuk proyek-proyek konstruksi masa kini.
        </p>
        <a
          href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20tentang%20chemical%20rebar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
        >
          <FaWhatsapp size={20} className="mb-[1px]" />
          Konsultasi Sekarang
        </a>
      </div>


            {/* Pertanyaan & Jawaban */}
            <div className="space-y-6">
              {[ 
                {
                  question: "Apa itu chemical rebar dan kapan digunakan?",
                  answer: "Chemical rebar adalah metode penanaman besi beton dengan bahan kimia khusus untuk memperkuat sambungan struktur lama dan baru. Ideal digunakan pada proyek renovasi, perkuatan struktur, atau sambungan elemen beton."
                },
                {
                  question: "Apa kelebihan chemical rebar dibanding metode lain?",
                  answer: "Kelebihannya antara lain daya rekat yang tinggi, tidak merusak beton eksisting, pemasangan presisi, serta cocok untuk kondisi lokasi yang sempit atau kompleks."
                },
                {
                  question: "Apakah chemical rebar bisa digunakan untuk struktur beban berat?",
                  answer: "Bisa. Asalkan dilakukan dengan produk dan metode yang tepat, chemical rebar mampu menahan beban berat dan telah digunakan dalam banyak proyek berskala besar."
                },
                {
                  question: "Apakah perlu uji tarik setelah pemasangan?",
                  answer: "Untuk proyek besar atau permintaan konsultan, kami sarankan melakukan uji tarik untuk memastikan kekuatan dan standar keamanan struktur."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Akhir */}
      <section className="bg-[#ba1322] text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mulai Proyek Anda?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Konsultasikan kebutuhan pemasangan <strong>chemical rebar</strong> secara gratis. Kami siap datang untuk survey lokasi dan memberikan solusi terbaik untuk proyek Anda.
          </p>
          <a
            href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20terkait%20chemical%20rebar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#ba1322] hover:bg-[#e64a4a] hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi Sekarang
          </a>
        </div>
      </section>

    </>
  );
}
