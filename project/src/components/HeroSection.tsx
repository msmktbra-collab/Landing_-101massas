import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 sm:pt-20 bg-gradient-to-b from-dark-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-black mb-6 sm:mb-8 leading-tight px-2 animate-smooth-fade-in flex flex-col items-center">
            <span className="gradient-text inline-block text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4">+101 Receitas de Massas Fáceis e Práticas</span>
            <span className="gradient-text block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Transforme Ingredientes Simples em Jantares de Chef</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-dark-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-3 sm:px-4 font-medium">
            Esqueça o delivery caro e a falta de criatividade. Tenha em mãos o guia definitivo para fazer refeições incríveis.
          </p>

          <div className="mb-12 sm:mb-16 px-2 sm:px-4">
            <div className="relative inline-block">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-accent-400/20 via-accent-500/20 to-accent-400/20 rounded-2xl sm:rounded-3xl blur-xl"></div>
              <img
                src="/Testo del paragrafo-2 copy.jpg"
                alt="101 Receitas de Massas Fáceis e Práticas"
                className="relative mx-auto w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto rounded-xl sm:rounded-2xl shadow-elevated transition-all duration-500 hover:shadow-3xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-4 px-3 sm:px-4">
            <p className="text-xs sm:text-sm text-brand-600 line-through mb-1 sm:mb-2">De R$97 por apenas</p>
            <p className="text-xs sm:text-sm text-dark-500 mb-4 sm:mb-6">(Menos que um lanche na padaria!)</p>
            <p className="text-5xl sm:text-6xl md:text-7xl font-black gradient-text-accent mb-8 sm:mb-10">R$16</p>
            <button 
              onClick={scrollToOffers}
              className="btn-gradient text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 animate-pulse-glow whitespace-nowrap"
            >
              <span>QUERO AS RECEITAS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
