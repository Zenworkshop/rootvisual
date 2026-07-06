import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function Newproject() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    <section className="py-12 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">

          <span className="inline-block text-[#ba1322] font-semibold uppercase tracking-[3px] text-sm">
            Portofolio
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3">
            Hasil Foto Root Visual
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-7">
            Dokumentasi berbagai sesi foto studio mulai dari wisuda,
            keluarga, couple, personal branding hingga kebutuhan bisnis.
          </p>

        </div>

        {/* Gallery */}
        <div className="columns-2 md:columns-3 gap-5 space-y-5">

          {images.map((src, index) => (

            <div
              key={index}
              onClick={() => openModal(index)}
              className="
                overflow-hidden
                rounded-2xl
                cursor-pointer
                break-inside-avoid
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              <img
                src={src}
                alt={`Portofolio ${index + 1}`}
                loading="lazy"
                className="
                  w-full
                  h-auto
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-10">

          <Link
            to="/gallery"
            className="
              inline-flex
              items-center
              gap-2
              bg-[#ba1322]
              hover:bg-[#97101c]
              text-white
              font-semibold
              rounded-full
              px-7
              py-3
              transition-all
              shadow-lg
            "
          >
            Lihat Semua Galeri →
          </Link>

        </div>

      </div>

      {/* Modal */}
      {isOpen && (

        <div
          onClick={closeModal}
          className="
            fixed
            inset-0
            z-50
            bg-black/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-5
          "
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >

            {/* Close */}
            <button
              onClick={closeModal}
              className="
                absolute
                -top-12
                right-0
                text-white
                text-4xl
              "
            >
              ×
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-white/20
                hover:bg-white/30
                text-white
                text-3xl
                backdrop-blur
              "
            >
              ‹
            </button>

            <img
              src={images[activeIndex]}
              alt=""
              className="
                max-h-[90vh]
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            {/* Next */}
            <button
              onClick={nextImage}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-white/20
                hover:bg-white/30
                text-white
                text-3xl
                backdrop-blur
              "
            >
              ›
            </button>

          </div>

        </div>

      )}

    </section>
  );
}