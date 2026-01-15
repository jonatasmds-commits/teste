
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoreGrid from './components/StoreGrid';
import CinemaListings from './components/CinemaListings';
import AIConsierge from './components/AIConsierge';
import Footer from './components/Footer';
import EventsPreview from './components/EventsPreview';
import FoodSection from './components/FoodSection';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero />
            <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4">
                    O Melhor do Shopping em São José
                  </h2>
                  <p className="text-slate-500 text-lg">
                    Experiência única com as melhores marcas, gastronomia refinada e o cinema mais tecnológico da região.
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentPage(Page.Stores)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
                >
                  Ver Todas as Lojas
                </button>
              </div>
              <StoreGrid featuredOnly />
            </section>
            
            <FoodSection />
            <CinemaListings />
            <EventsPreview />
          </>
        );
      case Page.Stores:
        return (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-6xl font-serif font-black mb-12">Nossas Lojas</h1>
            <StoreGrid />
          </div>
        );
      case Page.Cinema:
        return (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-6xl font-serif font-black mb-12">Cinema</h1>
            <CinemaListings showTitle={false} />
          </div>
        );
      case Page.Food:
        return (
          <div className="pt-32 pb-20">
             <FoodSection standalone />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        activePage={currentPage} 
        onNavigate={setCurrentPage} 
      />
      
      <main>
        {renderContent()}
      </main>

      <AIConsierge />
      <Footer />
    </div>
  );
};

export default App;
