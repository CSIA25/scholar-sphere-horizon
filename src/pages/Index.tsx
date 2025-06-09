
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Mission from '../components/Mission';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
