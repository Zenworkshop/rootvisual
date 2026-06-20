import { motion } from "framer-motion";



export default function JoinSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Call to Action Section */}
      <div className="mt-16 bg-[#1e3a5f] text-white py-12 px-6 md:px-20 rounded-lg text-center shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Ingin bekerjasama dengan kami?
        </motion.h2>
        <p className="mt-3 text-gray-200">
          Silakan klik tombol di bawah ini untuk konsultasi kebutuhan Anda. Kami siap membantu dengan sepenuh hati.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg shadow-md font-semibold"
        >
          ✨ Konsultasi
        </motion.button>
      </div>
    </section>
  );
};

