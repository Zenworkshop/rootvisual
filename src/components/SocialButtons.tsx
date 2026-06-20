import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Phone, GitBranch as BrandTiktok } from 'lucide-react';

export default function SocialButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/zenworkshopid?igsh=MW91OHJjNXMzc2ZiMQ==",
      bg: "bg-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      url: "https://wa.me/6281244997748?text=Hallo%20Zen%20Aluminium%2C%20saya%20ingin%20konsultasi",
      bg: "bg-green-500"
    },
    {
      icon: <BrandTiktok className="w-6 h-6" />,
      url: "https://www.tiktok.com/@zenworkshop?_t=ZS-8uaG7et7JeK&_r=1",
      bg: "bg-black"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-center w-12 h-12 rounded-full ${social.bg} text-white shadow-lg hover:scale-110 transition-transform`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
}