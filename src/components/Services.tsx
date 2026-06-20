import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, PenTool as Tool } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Solutions",
      description: "Custom aluminum and glass solutions for office buildings, storefronts, and commercial spaces."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Residential Projects",
      description: "Beautiful and secure windows, doors, and partitions for your home."
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: "Installation & Maintenance",
      description: "Professional installation and maintenance services by certified experts."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions for all your aluminum and glass needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}