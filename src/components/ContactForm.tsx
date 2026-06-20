import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-[#0f2d46] text-white">
      {/* Kiri: Text & Social Media */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <h3 className="text-orange-400 font-semibold tracking-widest uppercase">
          Contact Us
        </h3>
        <h2 className="text-4xl font-bold mt-2">Get in touch with us</h2>
        <p className="text-gray-300 mt-4 max-w-lg">
          Kami siap membantu Anda mewujudkan visi rumah yang indah dan
          fungsional. Jangan ragu untuk menghubungi kami.
        </p>

        {/* Social Media Icons */}
        <div className="mt-6 flex space-x-4">
          {["facebook", "instagram", "whatsapp"].map((platform) => (
            <motion.a
              key={platform}
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <i className={`fab fa-${platform} text-lg`}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Kanan: Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="bg-[#173b5a] p-8 rounded-lg shadow-xl w-full lg:w-1/2 mt-10 lg:mt-0"
      >
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Nama Depan" className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Nama Belakang" className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Alamat Email" className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2" />
          <input type="tel" placeholder="Nomor WhatsApp" className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2" />
          <textarea placeholder="Tuliskan pesan Anda..." className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2 h-28"></textarea>
          
          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-2 bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
          >
            KIRIM PESAN
          </motion.button>
        </form>
        <p className="text-green-400 text-sm mt-3">✓ Your submission was successful.</p>
      </motion.div>
    </section>
  );
}

