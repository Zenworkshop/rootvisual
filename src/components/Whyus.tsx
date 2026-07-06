import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fotografer Profesional",
    desc: "Fotografer berpengalaman dengan arahan pose natural untuk berbagai kebutuhan foto."
  },
  {
    title: "Lighting Studio Profesional",
    desc: "Pencahayaan berkualitas menghasilkan foto tajam, cerah, dan natural."
  },
  {
    title: "Editing Berkualitas",
    desc: "Retouch profesional dengan hasil tetap natural dan elegan."
  },
  {
    title: "Paket Foto Lengkap",
    desc: "Tersedia paket wisuda, keluarga, couple, prewedding, wedding hingga corporate."
  },
  {
    title: "Arahan Pose",
    desc: "Tidak perlu pengalaman, kami membantu pose agar lebih percaya diri."
  },
  {
    title: "File Digital & Cetak",
    desc: "Mendapatkan file resolusi tinggi dan pilihan cetak premium."
  },
  {
    title: "Booking Mudah",
    desc: "Reservasi cepat melalui WhatsApp dengan jadwal yang fleksibel."
  },
  {
    title: "Harga Transparan",
    desc: "Harga jelas tanpa biaya tersembunyi sesuai paket pilihan."
  },
  {
    title: "Berbagai Kebutuhan",
    desc: "Cocok untuk personal, keluarga, bisnis, hingga company profile."
  },
  {
    title: "Dipercaya Banyak Klien",
    desc: "Ratusan pelanggan telah mengabadikan momen terbaik bersama Root Visual."
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyUs() {
  return (
    <section className="bg-[#1e3a5f] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-8"
        >
          <h3 className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Keunggulan Kami
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Mengapa Root Visual?
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                flex
                items-start
                gap-3
                bg-[#2a4468]
                border
                border-[#3b587f]
                rounded-xl
                p-4
                transition
                hover:shadow-lg
              "
            >

              <div className="text-orange-400 mt-1 flex-shrink-0">
                <CheckCircle size={22} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-300 leading-6 mt-1">
                  {feature.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}