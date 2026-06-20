import React from 'react';

import ServicesSection from '../components/ServiceSection';
import SolutionSection from '../components/SolutionSection';
import Footer from '../components/Footer';
import OrderSection from '../components/OrderSection';
import Testimonials from '../components/Testimonials';
import JoinSection from '../components/JoinSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* <ServicesSection /> */}
      <SolutionSection />
      <OrderSection />
      <JoinSection />
      <Footer />
    </div>
  );
}