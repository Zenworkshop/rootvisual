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
  proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15
];

export default function Newproject() {
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
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portofolio</h2>

       <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8 mt-5 text-center mb-12">
        Pilihan hasil foto studio, photobox, dan kebutuhan profesional.


      </p>

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
  );
}