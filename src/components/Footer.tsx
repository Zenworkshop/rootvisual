import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#70030d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Aplikator Hilti</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Spesialis jasa coring beton, pemasangan anchor, dan pemotongan struktur menggunakan alat Hilti. Akurasi tinggi, aman, dan sesuai standar proyek konstruksi profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">Tentang Kami</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition">Proyek</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition">Testimoni</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +62 812-4499-7748
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                aplikatorhilti@gmail.com
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                Jl. Pd. Kacang No.rt 2, rw3, Pd. Kacang Tim., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15226
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sosial Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aplikator Hilti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
