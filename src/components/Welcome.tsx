import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, LayoutGrid, ThumbsUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import pengalamanImg from "../assets/welcome.jpg";

export default function Welcome() {
  const stats = [
    {
      icon: <Users size={38} className="text-[#ba1322]" />,
      value: 25,
      label: "Professional Team",
    },
    {
      icon: <LayoutGrid size={38} className="text-[#ba1322]" />,
      value: 906,
      label: "Projects Completed",
    },
    {
      icon: <ThumbsUp size={38} className="text-[#ba1322]" />,
      value: 504,
      label: "Satisfied Customer",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .15,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-14">

      {/* Blur */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-red-200/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div
              variants={fadeIn}
              className="inline-flex items-center rounded-full bg-[#ba1322]/10 text-[#ba1322] font-semibold px-4 py-2 text-sm"
            >
              📸 Studio Foto Profesional
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900"
            >
              Abadikan Momen,
              <br />
              Jadi Kenangan Selamanya.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-5 text-gray-600 text-lg leading-8 max-w-xl"
            >
              Root Visual melayani foto wisuda, keluarga, couple,
              wedding, personal branding, corporate portrait,
              hingga company profile dengan hasil profesional.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-3 mt-8"
            >

              <a
                href="https://wa.me/6281234567890"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-[#ba1322]
                  hover:bg-[#97101c]
                  text-white
                  rounded-full
                  px-6
                  py-3
                  font-semibold
                  shadow-lg
                  transition
                "
              >
                <FaWhatsapp />
                Booking Sekarang
              </a>

              <a
                href="#portfolio"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  hover:border-[#ba1322]
                  hover:text-[#ba1322]
                  transition
                "
              >
                Lihat Portfolio
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <img
                src={pengalamanImg}
                alt="Studio Root Visual"
                className="w-full h-[500px] object-cover hover:scale-105 duration-700"
              />

            </div>

          </motion.div>

        </div>

        {/* STATISTICS */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 mt-12"
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="
                bg-white
                border
                border-gray-100
                rounded-3xl
                p-6
                text-center
                shadow-lg
                hover:shadow-xl
                transition-all
              "
            >

              <div className="flex justify-center mb-3">
                {item.icon}
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#ba1322]">

                <CountUp
                  end={item.value}
                  duration={2}
                />

                +

              </h2>

              <p className="mt-2 text-gray-500 font-medium">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}