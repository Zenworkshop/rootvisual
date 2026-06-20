import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import Welcome from '../components/Welcome';
import ProblemSolution from '../components/ProblemSolution';
import Catalog from '../components/Catalog';
import WhyUs from '../components/Whyus';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SocialButtons from '../components/SocialButtons';
import OrderSection from '../components/OrderSection';
import Client from '../components/Client';
import PriceServices from '../components/PriceServices';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <Welcome />
      <ProblemSolution />
      <Client />
      <PriceServices />
      <Catalog />
      <WhyUs />
      <OrderSection />
      <Testimonials />
      <Faq />
      <Footer />
      <SocialButtons />
    </div>
  );
}