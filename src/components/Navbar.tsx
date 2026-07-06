import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { MdOutlineMail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logoroot.png";

export default function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappLink =
    "https://wa.me/6281244997748?text=Halo%20Root%20Visual,%20saya%20ingin%20booking%20studio%20foto.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Tentang",
      path: "/about",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Paket",
      path: "/pricing",
    },
    {
      title: "Kontak",
      path: "/contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white"
      }`}
    >
      {/* TOP BAR */}

      <div className="hidden lg:flex justify-between items-center bg-black text-gray-200 text-sm px-8 py-2">

        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2">
            <MdAccessTime />
            08.00 - 21.00 WIB
          </div>

          <a
            href={whatsappLink}
            className="flex items-center gap-2 hover:text-white"
          >
            <FiPhone />
            0812-4499-7748
          </a>

          <a
            href="mailto:rootvisualstudio@gmail.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <MdOutlineMail />
            rootvisualstudio@gmail.com
          </a>

        </div>

        <div className="flex gap-5 text-lg">

          <a
            href="https://www.instagram.com/rootvisual/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ba1322]"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@rootvisual_"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ba1322]"
          >
            <FaTiktok />
          </a>

          <a
            href="#"
            className="hover:text-[#ba1322]"
          >
            <FaYoutube />
          </a>

        </div>

      </div>

      {/* MAIN NAVBAR */}

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-20 flex justify-between items-center">

          {/* Logo */}

          <Link to="/">
            <img
              src={logo}
              alt="Root Visual"
              className="h-12 lg:h-14"
            />
          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className={`relative font-medium transition ${
                  location.pathname === menu.path
                    ? "text-[#ba1322]"
                    : "text-gray-700 hover:text-[#ba1322]"
                }`}
              >
                {menu.title}

                {location.pathname === menu.path && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ba1322] rounded-full" />
                )}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="ml-3 bg-[#ba1322] hover:bg-[#98111d] transition text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold shadow-lg"
            >
              <FaWhatsapp />
              Booking Sekarang
            </a>

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="lg:hidden bg-white border-t shadow-lg"
        >

          <div className="flex flex-col py-5">

            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 ${
                  location.pathname === menu.path
                    ? "text-[#ba1322] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {menu.title}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mx-6 mt-5 bg-[#ba1322] rounded-full text-center py-3 text-white font-semibold"
            >
              Booking Sekarang
            </a>

          </div>

        </motion.div>

      )}
    </nav>
  );
}