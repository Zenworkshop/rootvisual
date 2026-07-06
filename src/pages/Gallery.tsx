import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

import proyek1 from "../assets/IMG_0500-Edit-2.jpg";
import proyek2 from "../assets/IMG_0502-Edit-4.jpg";
import proyek3 from "../assets/IMG_0604.jpg";
import proyek4 from "../assets/IMG_1230.jpg";
import proyek5 from "../assets/IMG_2241.jpg";
import proyek6 from "../assets/IMG_2266.jpg";
import proyek7 from "../assets/IMG_2959-Edit.jpg";
import proyek8 from "../assets/IMG_4111.jpg";
import proyek9 from "../assets/IMG_4313-Edit.jpg";
import proyek10 from "../assets/IMG_4382.jpg";
import proyek11 from "../assets/IMG_4534-Edit-1.jpg";
import proyek12 from "../assets/IMG_4602-Edit-2.jpg";
import proyek13 from "../assets/IMG_4631.jpg";
import proyek14 from "../assets/IMG_4826.jpg";
import proyek15 from "../assets/IMG_4877-2.jpg";

const images = [
  proyek1,
  proyek2,
  proyek3,
  proyek4,
  proyek5,
  proyek6,
  proyek7,
  proyek8,
  proyek9,
  proyek10,
  proyek11,
  proyek12,
  proyek13,
  proyek14,
  proyek15,
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#ba1322] text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="uppercase tracking-[4px] text-white/80 text-sm font-semibold">
            Root Visual Studio
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Gallery
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-white/90 leading-8">
            Kumpulan hasil foto studio profesional mulai dari wisuda,
            keluarga, couple, personal branding, maternity, hingga
            kebutuhan bisnis dan company profile.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow hover:shadow-2xl transition duration-500"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-5"
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-5xl"
            >
              ×
            </button>

            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full w-12 h-12 text-white text-3xl"
            >
              ‹
            </button>

            <img
              src={images[activeIndex]}
              alt=""
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full w-12 h-12 text-white text-3xl"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}