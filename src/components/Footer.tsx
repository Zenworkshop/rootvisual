import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

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
                  to="/gallery"
                  className="text-gray-400 hover:text-white transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Hubungi Kami
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

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="text-[#ba1322] mt-1"
                />

                <span className="text-gray-400">
                  +62 812-4499-7748
                </span>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="text-[#ba1322] mt-1"
                />

                <span className="text-gray-400">
                  rootvisualstudio@gmail.com
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="text-[#ba1322] mt-1 flex-shrink-0"
                />

                <span className="text-gray-400">
                  Tangerang Selatan,
                  Banten, Indonesia
                </span>

              </div>

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
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#ba1322] transition flex items-center justify-center"
              >
                <Youtube size={20} />
              </a>

            </div>

          </div>

        </div>

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