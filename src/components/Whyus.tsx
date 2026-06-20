import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Solusi Fixing yang Kuat & Tahan Lama",
    desc: "Kami menggunakan sistem sambungan dan pemasangan dari HILTI yang terbukti kokoh, presisi, dan memiliki daya tahan tinggi di berbagai kondisi konstruksi."
  },
  {
    title: "Tim Aplikator Bersertifikat",
    desc: "Seluruh teknisi kami telah mengikuti pelatihan resmi dari HILTI, menjamin hasil kerja sesuai standar global dalam keamanan dan performa."
  },
  {
    title: "Support Engineering Langsung",
    desc: "Kami didukung oleh tim engineer HILTI untuk memastikan perencanaan dan eksekusi teknis di lapangan sesuai spesifikasi terbaik."
  },
  {
    title: "Efisiensi Waktu & Biaya Proyek",
    desc: "Dengan sistem HILTI yang praktis dan cepat dalam pemasangan, kami membantu menghemat waktu kerja serta meminimalkan pemborosan material."
  },
  {
    title: "Layanan Site Visit Gratis",
    desc: "Kami siap melakukan kunjungan ke lokasi proyek tanpa biaya untuk mengevaluasi kebutuhan teknis sebelum proses pemasangan dimulai."
  },
  {
    title: "Aman untuk Struktur Bangunan",
    desc: "Teknologi HILTI mengutamakan keamanan dan tidak merusak struktur asli bangunan, cocok untuk proyek retrofit maupun bangunan baru."
  },
  {
    title: "Didukung Produk Original HILTI",
    desc: "Kami hanya menggunakan produk asli HILTI mulai dari anchor, fastener, hingga sistem pemotongan dan pengeboran."
  },
  {
    title: "Pelayanan Profesional & Tepat Waktu",
    desc: "Setiap pekerjaan dilakukan dengan jadwal yang jelas, koordinasi yang rapi, dan komunikasi yang profesional."
  },
  {
    title: "Laporan & Dokumentasi Lengkap",
    desc: "Setiap proyek disertai dengan dokumentasi teknis, foto progress, dan laporan akhir untuk kejelasan pertanggungjawaban."
  },
  {
    title: "Garansi Kualitas Pekerjaan",
    desc: "Kami memberikan garansi terhadap hasil pemasangan sesuai ketentuan teknis dari HILTI dan standar keselamatan proyek."
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
            Kenapa memilih kami sebagai aplikator HILTI?
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
