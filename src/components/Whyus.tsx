import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fotografer Profesional",
    desc: "Berpengalaman dengan arahan pose natural."
  },
  {
    title: "Lighting Studio",
    desc: "Pencahayaan profesional menghasilkan foto lebih tajam."
  },
  {
    title: "Editing Premium",
    desc: "Retouch natural dengan warna yang elegan."
  },
  {
    title: "Paket Lengkap",
    desc: "Wisuda, keluarga, wedding hingga corporate."
  },
  {
    title: "Arahan Pose",
    desc: "Tidak perlu pengalaman saat sesi foto."
  },
  {
    title: "File HD & Cetak",
    desc: "Resolusi tinggi dengan opsi cetak premium."
  },
  {
    title: "Booking Mudah",
    desc: "Reservasi cepat melalui WhatsApp."
  },
  {
    title: "Harga Transparan",
    desc: "Tanpa biaya tersembunyi."
  },
  {
    title: "Berbagai Kebutuhan",
    desc: "Personal, keluarga maupun bisnis."
  },
  {
    title: "Dipercaya Klien",
    desc: "Ratusan pelanggan telah menggunakan Root Visual."
  },
];

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .6,
    },
  },
};

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-br from-[#17314d] via-[#1e3a5f] to-[#264872] py-12 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-10"
        >

          <span className="inline-block px-4 py-1 rounded-full bg-orange-400/10 border border-orange-400/30 text-orange-300 text-xs font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            Mengapa Memilih
            <span className="text-orange-400"> Root Visual?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 mt-3 text-sm md:text-base leading-7">
            Kami menghadirkan pengalaman foto studio yang nyaman,
            profesional, dan berkualitas tinggi untuk setiap momen penting Anda.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .05,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                p-4
                hover:border-orange-400/40
                hover:bg-white/10
                duration-300
              "
            >

              <div className="w-10 h-10 rounded-full bg-orange-400/15 flex items-center justify-center flex-shrink-0">

                <CheckCircle
                  size={20}
                  className="text-orange-400"
                />

              </div>

              <div>

                <h3 className="text-white font-semibold text-base">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm mt-1 leading-6">
                  {feature.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}