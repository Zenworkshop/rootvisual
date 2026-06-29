import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fotografer Profesional & Berpengalaman",
    desc: "Tim fotografer kami berpengalaman menangani foto wisuda, keluarga, wedding, couple, personal branding, hingga corporate portrait dengan arahan pose yang natural."
  },
  {
    title: "Studio Foto Nyaman dengan Lighting Profesional",
    desc: "Menggunakan lighting studio berkualitas tinggi sehingga hasil foto lebih tajam, cerah, dan memiliki warna yang natural tanpa pencahayaan berlebihan."
  },
  {
    title: "Hasil Foto Berkualitas Tinggi",
    desc: "Setiap foto melalui proses editing profesional untuk menghasilkan warna, detail, dan pencahayaan yang lebih maksimal tanpa menghilangkan kesan alami."
  },
  {
    title: "Pilihan Paket Foto Lengkap",
    desc: "Tersedia paket foto wisuda, keluarga, couple, prewedding, wedding, pas foto, personal branding, corporate portrait, hingga company profile sesuai kebutuhan Anda."
  },
  {
    title: "Arahan Pose yang Mudah & Natural",
    desc: "Tidak perlu khawatir jika belum pernah foto studio. Fotografer kami akan membantu mengarahkan pose sehingga hasil foto terlihat lebih percaya diri dan elegan."
  },
  {
    title: "File Digital & Cetak Premium",
    desc: "Selain file digital resolusi tinggi, kami juga menyediakan layanan cetak foto premium dan frame eksklusif yang siap dipajang atau dijadikan hadiah."
  },
  {
    title: "Booking Mudah & Jadwal Fleksibel",
    desc: "Reservasi dapat dilakukan melalui WhatsApp dengan pilihan jadwal yang fleksibel sehingga lebih mudah menyesuaikan waktu Anda."
  },
  {
    title: "Harga Terjangkau & Transparan",
    desc: "Seluruh paket studio foto memiliki harga yang jelas tanpa biaya tersembunyi, sehingga Anda bisa memilih paket sesuai kebutuhan dan anggaran."
  },
  {
    title: "Cocok untuk Berbagai Kebutuhan",
    desc: "Mulai dari foto wisuda, keluarga, couple, pas foto, personal branding, corporate portrait, hingga dokumentasi bisnis dan company profile profesional."
  },
  {
    title: "Dipercaya Ratusan Klien",
    desc: "Root Visual telah membantu ratusan pelanggan mengabadikan momen penting dengan pelayanan profesional dan hasil foto yang memuaskan."
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyUs() {
  return (
    <section className="bg-[#1e3a5f] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center"
        >
          <h3 className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
            Keunggulan Kami
          </h3>
          <h2 className="text-4xl font-bold text-white mt-2">
            Mengapa Root Visual?
          </h2>
        </motion.div>

        {/* Grid Keunggulan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#2a4468] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#3b587f]"
            >
              <div className="text-orange-400 flex-shrink-0">
                <CheckCircle size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
