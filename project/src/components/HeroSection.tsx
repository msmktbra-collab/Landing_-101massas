import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight px-2 text-neutral-900 animate-smooth-fade-in">
            +101 Receitas de Massas Fáceis e Práticas: Transforme Ingredientes Simples em Jantares de Chef
          </h1>

          <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto px-4 font-medium">
            Esqueça o delivery caro e a falta de criatividade. Tenha em mãos o guia definitivo para fazer refeições incríveis.
          </p>

          <div className="mb-8 px-4">
            <img
              src="/Testo del paragrafo-2 copy.jpg"
              alt="101 Receitas de Massas Fáceis e Práticas"
              className="mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>

          <div className="mb-8 px-4">
            <p className="text-sm text-neutral-500 line-through mb-2">De R$127 por apenas</p>
            <p className="text-sm text-neutral-600 mb-3">(Menos que um lanche na padaria!)</p>
            <p className="text-5xl md:text-6xl font-black text-success-600 mb-6 animate-pulse">R$19</p>
            <button 
              onClick={scrollToOffers}
              className="bg-success-600 hover:bg-success-700 text-white font-bold py-3 px-6 rounded-full text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-lg whitespace-nowrap"
            >
              QUERO MEU E-BOOK POR R$19
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;