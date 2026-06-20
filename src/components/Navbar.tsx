import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaWhatsapp, FaTiktok, FaChevronDown } from "react-icons/fa";
import { MdOutlineMail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logohilti.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20ingin%20konsultasi.";

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      {/* BAGIAN ATAS */}
      <div className="hidden md:flex justify-between items-center bg-[#000000] text-white px-8 py-2 text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MdAccessTime />
            <span>Setiap Hari : 08:00 - 17:00</span>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <FiPhone />
            <span>081244997748</span>
          </a>
          <a href="mailto:zenworkshopid@gmail.com" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <MdOutlineMail />
            <span>aplikatorhilti@gmail.com</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.tiktok.com/@zenworkshop" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaTiktok /></a>
          <a href="https://www.youtube.com/@zenworkshop" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaYoutube /></a>
          <a href="https://instagram.com/zenworkshopid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaInstagram /></a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaWhatsapp /></a>
        </div>
      </div>

      {/* NAVBAR UTAMA */}
      <div className="relative mx-auto px-6 py-4 bg-white shadow-md">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Zen Workshop Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Tombol menu mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center relative">
            <Link to="/" className="text-gray-900 hover:text-gray-300 transition">Beranda</Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-300 transition">Profil</Link>

            {/* Dropdown Layanan */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-900 cursor-pointer pb-2">
                <span>Layanan</span>
                <FaChevronDown className="mt-1" />
              </div>
              <div className="absolute hidden group-hover:block top-full left-0 bg-[#f9f9f9] shadow-lg rounded-lg py-2 w-48 z-50">
                <div className="absolute h-2 w-full top-[-8px]"></div>
                <Link to="/chemical-anchor" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Chemical Anchor</Link>
                <Link to="/chemical-rebar" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Chemical Rebar</Link>
                <Link to="/pull-out-test" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Tes Tarik (Pull Out Test)</Link>
                <Link to="/coring-lantai" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Coring Lantai dan Dinding Beton</Link>
                <Link to="/fire-stop" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Firestop</Link>
                <Link to="/water-proofing" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Jasa Waterproofing</Link>
              </div>
            </div>

            <Link to="/gallery" className="text-gray-900 hover:text-gray-300 transition">Portofolio</Link>

            {/* Dropdown Blog */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-900 cursor-pointer pb-2">
                <span>Blog</span>
                <FaChevronDown className="mt-1" />
              </div>
              <div className="absolute hidden group-hover:block top-full left-0 bg-[#f9f9f9] shadow-lg rounded-lg py-2 w-48 z-50">
                <div className="absolute h-2 w-full top-[-8px]"></div>
                <Link to="/artikel" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Artikel</Link>
                <Link to="/berita" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Berita</Link>
              </div>
            </div>

            <Link to="/contact" className="text-gray-900 hover:text-gray-300 transition">Kontak</Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-green-500 text-white px-4 py-2 rounded-lg transition flex items-center space-x-2">
              <FaWhatsapp className="text-white" />
              <span>Konsultasi</span>
            </a>
          </div>
        </motion.div>

        {/* MENU MOBILE - Dropdown style (not fullscreen) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-900 z-40 p-6 space-y-4 shadow-md rounded-b-lg">
            <Link to="/" className="text-base font-medium block" onClick={() => setIsOpen(false)}>Beranda</Link>
            <Link to="/about" className="text-base font-medium block" onClick={() => setIsOpen(false)}>Profil</Link>

            <div>
              <p className="text-base font-medium mb-2">Layanan</p>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/chemical-anchor" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Chemical Anchor</Link>
                <Link to="/chemical-rebar" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Chemical Rebar</Link>
                <Link to="/pull-out-test" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Tes Tarik (Pull Out Test)</Link>
                <Link to="/coring-lantai" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Coring Lantai dan Dinding Beton</Link>
                <Link to="/fire-stop" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Firestop</Link>
                <Link to="/water-proofing" className="text-sm" onClick={() => setIsOpen(false)}>Jasa Waterproofing</Link>
              </div>
            </div>

            <Link to="/gallery" className="text-base font-medium block" onClick={() => setIsOpen(false)}>Portofolio</Link>

            <div>
              <p className="text-base font-medium mb-2">Blog</p>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/artikel" className="text-sm" onClick={() => setIsOpen(false)}>Artikel</Link>
                <Link to="/berita" className="text-sm" onClick={() => setIsOpen(false)}>Berita</Link>
              </div>
            </div>

            <Link to="/contact" className="text-base font-medium block" onClick={() => setIsOpen(false)}>Kontak</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
