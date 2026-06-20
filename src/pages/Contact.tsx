import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import OfficeLocation from '../components/OfficeLocation';
import MapSection from '../components/MapSection';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <ContactForm />
      <OfficeLocation />
      <MapSection />
      <Footer />
    </div>
  );
}