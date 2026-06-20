import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      {/* Animasi fade-in untuk judul */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-900"
      >
        Our Services
      </motion.h2>

      {/* Animasi fade-in untuk deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-gray-500 max-w-2xl mt-4"
      >
        Kami adalah mitra terpercaya dalam menyediakan solusi aluminium untuk
        rumah, apartemen, perkantoran, dan proyek-proyek komersial lainnya.
      </motion.p>

      {/* Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur-3xl"
      />
    </section>
  );
}
