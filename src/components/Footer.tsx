import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

import { FaTiktok, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-2xl font-bold">
              Root Visual
            </h2>

            <p className="mt-4 text-gray-400 leading-7 text-sm">
              Studio foto profesional yang melayani foto wisuda,
              keluarga, couple, prewedding, wedding,
              personal branding, corporate portrait,
              hingga company profile dengan hasil berkualitas tinggi.
            </p>

          </div>

          {/* Menu */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Navigasi
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  Tentang
                </Link>
              </li>

              <li>
                <Link
                  to="/Gallery"
                  className="text-gray-400 hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/Paket"
                  className="text-gray-400 hover:text-white transition"
                >
                  Paket
                </Link>
              </li>

              <li>
                <Link
                  to="/Kontak"
                  className="text-gray-400 hover:text-white transition"
                >
                  Kontak
                </Link>
              </li>

              

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold mb-5">
              Hubungi Kami
            </h3>

            <div className="space-y-4 text-sm">

              <a
                href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20konsultasi%20studio%20foto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <Phone
                  size={18}
                  className="text-[#ba1322] mt-1 transition-transform group-hover:scale-110"
                />

                <span className="text-gray-400 group-hover:text-[#ba1322] transition">
                  +62 851 1784 2891
                </span>
              </a>

              <a
                href="mailto:rootvisualstudio@gmail.com?subject=Konsultasi%20Root%20Visual%20Studio&body=Halo%20Root%20Visual,%20saya%20ingin%20bertanya%20mengenai%20layanan%20foto."
                className="flex gap-3 items-start group"
              >
                <Mail
                  size={18}
                  className="text-[#ba1322] mt-1 transition-transform group-hover:scale-110"
                />

                <span className="text-gray-400 group-hover:text-[#ba1322] transition">
                  rootvisualstudio@gmail.com
                </span>
              </a>

              <a
                href="https://maps.app.goo.gl/usxcuavrERTBoDLn8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start group"
              >
                <MapPin
                  size={18}
                  className="text-[#ba1322] mt-1 flex-shrink-0 transition-transform group-hover:scale-110"
                />

                <span className="text-gray-400 group-hover:text-[#ba1322] transition">
                  MP7C+FF Benda Baru, Kota Tangerang Selatan, Banten
                </span>
              </a>

            </div>

          </div>

           {/* Social */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Ikuti Kami
            </h3>

            <p className="text-sm text-gray-400 leading-6 mb-5">
              Lihat hasil karya terbaru Root Visual melalui media sosial kami.
            </p>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/rootvisual/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@rootvisual_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20konsultasi%20studio%20foto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div> {/* <-- INI YANG KURANG. Penutup div grid */}


        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Root Visual. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Crafted with ❤️ by Root Visual
          </p>

        </div>

      </div>

    </footer>
  );
}