import Footer from "../components/Footer";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

import proyek1 from "../assets/IMG_0500-Edit-2.jpg";
import proyek2 from "../assets/IMG_0502-Edit-4.jpg";
import proyek3 from "../assets/IMG_0604.jpg";
import proyek4 from "../assets/IMG_1230.jpg";

const packages = [
  {
    title: "Paket Foto Wisuda",
    image: proyek1,
    price: "Mulai Rp299.000",
    features: [
      "30 Menit Sesi Foto",
      "10 Foto Edit Premium",
      "Semua File Digital",
      "Free Arahan Pose",
    ],
  },
  {
    title: "Paket Foto Couple",
    image: proyek2,
    price: "Mulai Rp399.000",
    features: [
      "60 Menit Sesi Foto",
      "20 Foto Edit",
      "Semua File Digital",
      "Free Properti Studio",
    ],
  },
  {
    title: "Paket Foto Keluarga",
    image: proyek3,
    price: "Mulai Rp499.000",
    features: [
      "Maksimal 6 Orang",
      "15 Foto Edit",
      "Semua File Digital",
      "Free Pose Direction",
    ],
  },
  {
    title: "Personal Branding",
    image: proyek4,
    price: "Mulai Rp499.000",
    features: [
      "Konten Profesional",
      "Outfit Bebas",
      "Lighting Premium",
      "Semua File Digital",
    ],
  },
];

import {
  FaCamera,
  FaLightbulb,
  FaUserTie,
  FaSmile,
  FaMagic,
  FaImage,
  FaDownload,
  FaCouch,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaCamera />,
    title: "Studio Profesional",
    desc: "Studio nyaman dengan berbagai pilihan background dan properti foto.",
  },
  {
    icon: <FaLightbulb />,
    title: "Lighting Premium",
    desc: "Pencahayaan profesional untuk menghasilkan foto yang lebih estetik.",
  },
  {
    icon: <FaUserTie />,
    title: "Photographer Berpengalaman",
    desc: "Tim fotografer berpengalaman mengarahkan pose terbaik Anda.",
  },
  {
    icon: <FaSmile />,
    title: "Free Arahan Pose",
    desc: "Tidak perlu khawatir bingung bergaya saat sesi foto berlangsung.",
  },
  {
    icon: <FaMagic />,
    title: "Editing Premium",
    desc: "Retouch wajah dan warna dilakukan secara profesional.",
  },
  {
    icon: <FaImage />,
    title: "High Resolution",
    desc: "Seluruh hasil foto dikirim dalam kualitas tinggi.",
  },
  {
    icon: <FaDownload />,
    title: "Semua File Digital",
    desc: "File foto dikirim secara digital tanpa biaya tambahan.",
  },
  {
    icon: <FaCouch />,
    title: "Ruang Tunggu Nyaman",
    desc: "Area tunggu bersih dan nyaman untuk keluarga maupun teman.",
  },
];

const faqs = [
  {
    q: "Apakah harus booking terlebih dahulu?",
    a: "Kami sangat menyarankan booking agar jadwal Anda dapat dipastikan tersedia.",
  },
  {
    q: "Berapa lama proses edit foto?",
    a: "Estimasi proses editing sekitar 3–7 hari kerja tergantung paket yang dipilih.",
  },
  {
    q: "Apakah mendapatkan semua file?",
    a: "Ya, seluruh paket sudah termasuk file digital sesuai ketentuan paket.",
  },
  {
    q: "Apakah bisa ganti jadwal?",
    a: "Bisa, selama menghubungi kami sebelum jadwal pemotretan berlangsung.",
  },
];

export default function Paket() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#ba1322] text-white pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <span className="uppercase tracking-[4px] text-sm font-semibold text-white/80">
            Root Visual Studio
          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Paket Foto Studio Profesional
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-8">
            Pilihan paket foto untuk wisuda, keluarga, couple,
            maternity, personal branding, corporate portrait,
            hingga company profile dengan harga transparan dan
            kualitas terbaik.
          </p>

        </div>
      </section>

      {/* SEO */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-black mb-6">
            Pilihan Paket Root Visual Studio
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Root Visual Studio menyediakan berbagai paket foto profesional
            untuk kebutuhan pribadi maupun bisnis. Dengan fotografer
            berpengalaman, studio nyaman, serta proses editing premium,
            kami siap membantu mengabadikan setiap momen berharga Anda.
          </p>

        </div>
      </section>

      {/* CARD PAKET */}
        <section className="pb-20 px-4 md:px-8">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {packages.map((item, index) => (

            <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-500"
            >

                <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover hover:scale-105 transition duration-700"
                />

                <div className="p-8">

                <h3 className="text-2xl font-bold">
                    {item.title}
                </h3>

                <p className="text-[#ba1322] text-3xl font-black mt-3">
                    {item.price}
                </p>

                <div className="mt-6 space-y-3">

                    {item.features.map((feature, i) => (

                    <div
                        key={i}
                        className="flex gap-3 items-center"
                    >
                        <FaCheckCircle className="text-green-500" />
                        <span>{feature}</span>
                    </div>

                    ))}

                </div>

                <a
                    href="https://wa.me/6281244997748?text=Halo%20Root%20Visual,%20saya%20tertarik%20dengan%20paket%20foto."
                    className="mt-8 w-full justify-center inline-flex items-center gap-2 bg-[#ba1322] text-white py-3 rounded-full font-semibold hover:bg-[#97101c] transition"
                >
                    <FaWhatsapp />
                    Booking Sekarang
                </a>

                </div>

            </div>

            ))}

        </div>

        </section>

        {/* BENEFIT */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[4px] text-[#ba1322] font-semibold text-sm">
        Kenapa Memilih Kami
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        Semua Paket Sudah Termasuk
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
        Semua paket foto di Root Visual Studio sudah mencakup fasilitas terbaik
        sehingga Anda cukup datang dan menikmati pengalaman foto yang nyaman.
      </p>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {benefits.map((item, index) => (

        <div
          key={index}
          className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
        >

          <div className="w-16 h-16 rounded-2xl bg-[#ba1322]/10 flex items-center justify-center text-[#ba1322] text-3xl group-hover:bg-[#ba1322] group-hover:text-white transition">

            {item.icon}

          </div>

          <h3 className="text-xl font-bold mt-6">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-7 mt-3">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Gallery Preview */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    <div className="text-center mb-12">

      <span className="uppercase tracking-[3px] text-[#ba1322] font-semibold text-sm">
        Hasil Foto Kami
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-3">
        Beberapa Hasil Foto Root Visual
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
        Setiap foto dikerjakan dengan lighting profesional,
        editing premium, dan arahan pose sehingga menghasilkan
        foto yang natural sekaligus berkelas.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      <img
        src={proyek1}
        alt="Foto Wisuda Root Visual"
        className="rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
      />

      <img
        src={proyek2}
        alt="Foto Couple Root Visual"
        className="rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
      />

      <img
        src={proyek3}
        alt="Foto Studio Root Visual"
        className="rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
      />

      <img
        src={proyek4}
        alt="Foto Personal Branding"
        className="rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
      />

    </div>

    <div className="text-center mt-12">

      <a
        href="/gallery"
        className="inline-flex items-center bg-[#ba1322] hover:bg-[#97101c] text-white px-8 py-4 rounded-full font-semibold transition"
      >
        Lihat Semua Gallery →
      </a>

    </div>

  </div>

</section>

      

      {/* CTA */}
      <section className="bg-[#ba1322] py-20 text-white">

        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-5xl font-black">
            Siap Mengabadikan Momen Terbaik?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Konsultasikan kebutuhan foto Anda bersama tim Root Visual
            Studio. Kami siap membantu memilih paket terbaik sesuai
            kebutuhan dan budget Anda.
          </p>

          <a
            href="https://wa.me/6281244997748"
            className="inline-flex items-center gap-3 mt-10 bg-white text-[#ba1322] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            <FaWhatsapp />
            Konsultasi via WhatsApp
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}