import React from 'react';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import WhyEssentialSection from './components/WhyEssentialSection';
import RecipesShowcase from './components/RecipesShowcase';
import BonusSection from './components/BonusSection';
import OffersSection from './components/OffersSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <HeroSection />
      <WhyDifferentSection />
      <WhyEssentialSection />
      <RecipesShowcase />
      <BonusSection />
      <OffersSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;