import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.a
        href="https://wa.me/6285117842891?text=Halo%20Root%20Visual,%20saya%20ingin%20konsultasi%20studio%20foto."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          w-16 h-16
          rounded-full
          bg-[#25D366]
          hover:bg-[#20b95a]
          flex
          items-center
          justify-center
          text-white
          shadow-2xl
        "
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </div>
  );
}