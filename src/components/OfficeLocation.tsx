import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function OfficeLocation () {
  return (
    <section className="bg-[#0f2d46] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image with animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-lg"
        >
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="Office" className="w-full object-cover" />
        </motion.div>

        {/* Text content with animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <p className="text-orange-400 uppercase text-sm tracking-wide">Our Office</p>
          <h2 className="text-3xl font-bold mt-2">Office Location</h2>
          <p className="mt-4 text-gray-300">
            Terima kasih atas minat dan kepercayaan Anda pada layanan kami. Kami berharap dapat membantu Anda dalam menghasilkan solusi aluminium terbaik untuk rumah atau proyek Anda.
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-lg font-semibold">Our Main Office</p>
            <p className="text-gray-300">Jl. Pd. Kacang No.rt 2, rw3, Pd. Kacang Tim., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15226</p>
            <p className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5 text-orange-400" /> zenworkshopid@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone className="w-5 h-5 text-orange-400" /> +62 812-4499-7748
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

