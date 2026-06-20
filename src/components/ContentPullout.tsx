import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle, FaTools, FaCertificate, FaRulerCombined, FaQuestionCircle } from 'react-icons/fa';
import heroImage from '../assets/HILTI/ca3.png';
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

export default function ContentPullout() {
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
              Jasa Tes Tarik (Pull-Out Test) Bersertifikat
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Layanan pengujian daya tarik anchor dan rebar langsung di lokasi proyek. Akurat, bersertifikat, dan sesuai standar teknis untuk kebutuhan proyek gedung, jembatan, dan infrastruktur berat.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20tertarik%20melakukan%20tes%20tarik%20(pull%20out%20test)"
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

                  {/* Section 2: Kenapa Uji Tarik Itu Penting */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Kenapa Uji Tarik Itu Penting?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={alatImage}
              alt="Ilustrasi Uji Tarik"
              className="rounded-2xl shadow-lg w-full h-full object-cover max-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Uji tarik (Pull Out Test) merupakan bagian krusial dalam proses quality control konstruksi. Prosedur ini memastikan kekuatan ikatan anchor pada beton, sangat vital untuk struktur seperti gedung bertingkat, jembatan, dan infrastruktur berat lainnya.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-800 text-lg">
                <FaCheckCircle className="text-green-500 mt-1" />
                Mengetahui daya tahan sekrup/baut pada beton
              </li>
              <li className="flex items-start gap-3 text-gray-800 text-lg">
                <FaCheckCircle className="text-green-500 mt-1" />
                Memenuhi standar teknis pengujian struktur
              </li>
              <li className="flex items-start gap-3 text-gray-800 text-lg">
                <FaCheckCircle className="text-green-500 mt-1" />
                Wajib untuk banyak tender BUMN dan swasta
              </li>
            </ul>
            <a
              href="https://wa.me/6281244997748?text=Halo%20saya%20ingin%20konsultasi%20tentang%20tes%20tarik%20(pull%20out%20test)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
            >
              <FaWhatsapp size={20} className="mb-[1px]" />
              Konsultasi Tes Tarik
            </a>
          </motion.div>
        </div>
      </section>


            {/* Section 3: Metode & Alat yang Digunakan */}
      <section className="bg-[#ba1322] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Metode & Alat yang Digunakan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ 
              {
                icon: <FaTools className="text-white text-3xl" />,
                title: "Alat Uji Tarik Hilti",
                desc: "Menggunakan alat digital dari Hilti yang terkenal presisi dan handal di proyek konstruksi."
              },
              {
                icon: <FaRulerCombined className="text-white text-3xl" />,
                title: "Kapasitas Uji Sesuai Proyek",
                desc: "Mampu menguji daya tarik anchor hingga puluhan kiloNewton sesuai kebutuhan proyek."
              },
              {
                icon: <FaCheckCircle className="text-white text-3xl" />,
                title: "Kalibrasi Berkala",
                desc: "Alat diuji dan dikalibrasi secara berkala agar hasil uji tetap akurat dan terpercaya."
              },
              {
                icon: <FaCertificate className="text-white text-3xl" />,
                title: "Sertifikat Uji Tersedia",
                desc: "Kami menyediakan hasil uji dalam bentuk sertifikat resmi jika dibutuhkan oleh konsultan atau pihak proyek."
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
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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

      {/* SECTION 6: Testimoni Klien - Pull Out Test */}
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
                name: "PT Pilar Struktur Indonesia",
                text: "Tim Zen sangat profesional dan teliti. Hasil pull-out test membantu kami memastikan kekuatan setiap titik rebar.",
              },
              {
                name: "Kontraktor Proyek RS Bina Sehat",
                text: "Proses uji tarik cepat, alat lengkap, dan hasilnya langsung diberikan dalam bentuk laporan teknis resmi.",
              },
              {
                name: "Proyek Jembatan Kuningan",
                text: "Kami puas dengan pelayanan Zen Workshop. Data hasil uji sangat membantu untuk laporan kelayakan struktur.",
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


      {/* SECTION 5: FAQ Uji Tarik */}
      <section className="bg-[#ba1322] py-20 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            FAQ: Pertanyaan Seputar Uji Tarik
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Kiri: Konten FAQ */}
            <div className="space-y-6 bg-[#96101b] p-6 rounded-xl">
              {faqs.map((faq, index) => (
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
                alt="FAQ Uji Tarik"
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
              Sudah Siap Pastikan Kekuatan Struktur Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Konsultasi Gratis dan Jadwalkan Uji Tarik Sekarang 👷‍♂️<br />
              <span className="text-sm md:text-base block mt-2 text-gray-500">
                *Termasuk survei lokasi & pengecekan awal
              </span>
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20jadwalkan%20uji%20tarik%20(pull%20out%20test)."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ba1322] text-white hover:bg-[#e64a4a] rounded-full text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} />
              Konsultasi via WhatsApp
            </a>
          </motion.div>
        </section>                                      


       {/* Section 7: SEO Tips Tambahan (Non-visual, untuk implementasi teknis) */}
      {/* SEO Meta Keywords (gunakan di <Helmet> atau <Head> component) */}
      {/*
        <Helmet>
          <title>Jasa Uji Tarik | Pull Out Test Beton Profesional</title>
          <meta name="description" content="Layanan uji kekuatan anchor & baut pada struktur beton dengan alat Hilti. Sertifikasi lengkap. Melayani Jabodetabek & seluruh Indonesia." />
          <meta name="keywords" content="jasa uji tarik, pull out test, uji kekuatan anchor, uji tarik hilti, sertifikasi uji tarik beton" />
        </Helmet>
      */}

      {/* Schema.org FAQ Structured Data */}
      {/*
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Berapa lama pengerjaannya?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Waktu pengerjaan tergantung jumlah titik uji, namun umumnya sekitar 1–2 jam per lokasi."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah perlu dibor dulu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, titik pengujian perlu dibor sesuai spesifikasi anchor sebelum dilakukan penarikan."
              }
            },
            {
              "@type": "Question",
              "name": "Bisa untuk proyek kecil?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu! Kami melayani proyek skala kecil maupun besar di berbagai sektor."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah dapat sertifikat hasil uji?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, setiap pengujian akan disertai laporan hasil uji & sertifikat jika diperlukan."
              }
            }
          ]
        }
        `}
        </script>
      */}

      {/* Testimoni & Lokasi Layanan (bisa dimasukkan ke section proyek atau testimonial terpisah) */}
      {/*
        <section className="bg-white py-12 text-center text-gray-700">
          <p className="text-lg">Dipercaya oleh berbagai proyek di Jabodetabek, Bandung, Surabaya, dan kota lainnya.</p>
          <p className="text-lg italic mt-2">"Layanan profesional dan hasil akurat! Sangat direkomendasikan." – Pak H, Proyek Jakarta</p>
        </section>
      */}
    </>
  );
}
