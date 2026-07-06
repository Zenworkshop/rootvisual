import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import officeImg from "../assets/IMG_0500-Edit-2.jpg"; // ganti dengan foto studio Root Visual

export default function OfficeLocation() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={officeImg}
            alt="Studio Root Visual"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📍 Studio Root Visual
          </span>

          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            Datang Langsung ke
            <br />
            Studio Kami
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Root Visual merupakan studio foto profesional yang melayani
            berbagai kebutuhan fotografi mulai dari
            <strong> pas foto, wisuda, keluarga, couple, maternity,
            prewedding, wedding, personal branding, corporate portrait,
            hingga company profile.</strong>

            <br /><br />

            Kami siap membantu Anda mendapatkan hasil foto terbaik dengan
            studio yang nyaman, fotografer profesional, serta proses yang
            cepat dan berkualitas.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <MapPin className="text-black mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  Alamat Studio
                </h4>

                <p className="text-gray-600">
                  02, Jl. H. Rean Gg. Barokah No.46, RW.01, Benda Baru, Kec. Pamulang, Kota Tangerang Selatan, Banten 15415
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-black mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  Email
                </h4>

                <p className="text-gray-600">
                  rootvisual@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-black mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  WhatsApp
                </h4>

                <p className="text-gray-600">
                  +62 8511-7842-891
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-black mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  Jam Operasional
                </h4>

                <p className="text-gray-600">
                  Setiap Hari • 08.00 - 21.00 WIB
                </p>
              </div>
            </div>

          </div>

          <a
            href="https://wa.me/6285117842891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Hubungi Kami
          </a>

        </motion.div>

      </div>
    </section>
  );
}