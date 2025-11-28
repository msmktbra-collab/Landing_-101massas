import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-b from-dark-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight px-2 animate-smooth-fade-in">
            <span className="gradient-text">+101 Receitas de Massas<br/>Fáceis e Práticas:</span>
            <span className="block text-dark-800 mt-2">Transforme Ingredientes Simples em Jantares de Chef</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-600 mb-10 leading-relaxed max-w-2xl mx-auto px-4 font-medium">
            Esqueça o delivery caro e a falta de criatividade. Tenha em mãos o guia definitivo para fazer refeições incríveis.
          </p>

          <div className="mb-10 px-4">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-400/20 via-accent-500/20 to-accent-400/20 rounded-3xl blur-xl"></div>
              <img
                src="/Testo del paragrafo-2 copy.jpg"
                alt="101 Receitas de Massas Fáceis e Práticas"
                className="relative mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto rounded-2xl shadow-elevated transition-all duration-500 hover:shadow-3xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-8 px-4">
            <p className="text-sm text-dark-400 line-through mb-1">De R$127 por apenas</p>
            <p className="text-sm text-dark-500 mb-4">(Menos que um lanche na padaria!)</p>
            <p className="text-6xl md:text-7xl font-black gradient-text-accent mb-8">R$19</p>
            <button 
              onClick={scrollToOffers}
              className="btn-gradient text-base md:text-lg px-8 md:px-12 py-4 animate-pulse-glow whitespace-nowrap"
            >
              <span>QUERO MEU E-BOOK POR R$19</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
