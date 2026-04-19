import { Printer } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import BrandOverview from './sections/BrandOverview';
import TrendResearch from './sections/TrendResearch';
import ProductDevelopment from './sections/ProductDevelopment';
import MerchandisingStrategy from './sections/MerchandisingStrategy';
import CompetitiveAnalysis from './sections/CompetitiveAnalysis';
import KeyInsights from './sections/KeyInsights';
import FinalPositioning from './sections/FinalPositioning';
import Footer from './sections/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Hero />
        <BrandOverview />
        <TrendResearch />
        <ProductDevelopment />
        <MerchandisingStrategy />
        <CompetitiveAnalysis />
        <KeyInsights />
        <FinalPositioning />
      </main>

      <Footer />

      {/* Floating Print Button */}
      <button
        onClick={() => window.print()}
        className="floating-print-btn fixed bottom-6 right-6 z-40 bg-[#8a9b5b] text-white p-4 rounded-full shadow-lg hover:bg-[#7a8b4b] transition-all duration-200 hover:scale-105 no-print"
        aria-label="Print assignment"
        title="Print as PDF"
      >
        <Printer size={22} />
      </button>
    </div>
  );
}
