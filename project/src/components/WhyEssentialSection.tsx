import React from 'react';
import { Check } from 'lucide-react';

const WhyEssentialSection: React.FC = () => {

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Tabela de preços em cada receita para você controlar seu orçamento",
    "Tempo médio de preparo: 10 a 25 minutos — perfeito para a rotina",
    "Ingredientes acessíveis que você encontra em qualquer mercado",
    "Adaptado para o Brasil: substituições inteligentes de ingredientes caros"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-dark-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8 leading-tight px-2">
          <span className="gradient-text">O que torna esse e-book indispensável na sua cozinha?</span>
        </h2>
        
        <div className="max-w-4xl mx-auto px-2">
          <div className="text-center mb-4">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-400/30 via-accent-400/30 to-brand-400/30 rounded-2xl blur-lg animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white animate-float">
                <img 
                  src="/Ebook_Mockup1.jpg"
                  alt="Ebook Mockup 101 Receitas de Massas"
                  className="w-full max-w-xs md:max-w-sm h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mb-4 max-w-3xl mx-auto px-2">
            <div className="bg-gradient-to-r from-brand-50 to-brand-100 p-6 rounded-2xl mb-6 border border-brand-200 shadow-lg">
              <p className="font-bold text-lg md:text-xl text-brand-700">
                Você não precisa gastar uma fortuna para comer incrivelmente bem.
              </p>
            </div>

            <p className="mb-6 text-base md:text-lg leading-relaxed font-medium px-2 text-dark-600">
              Muita gente acredita que para preparar um jantar especial precisa de ingredientes caros ou passar horas na cozinha, mas a culinária italiana prova o contrário: <span className="gradient-text">ela nasceu da simplicidade</span>.
            </p>
            
            <p className="mb-6 text-base md:text-lg leading-relaxed font-medium px-2 text-dark-600">
              Com este e-book, você aprende a <span className="gradient-text">fazer muito com pouco</span>, usando ovos, bacon, sardinha, legumes e outros ingredientes comuns para criar <span className="gradient-text">massas com nível de restaurante</span>.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed font-medium px-2 text-dark-600">
              <span className="gradient-text">Você economiza, varia o cardápio da família e recebe elogios</span>, sem depender de produtos importados ou estourar o orçamento.
            </p>
          </div>
          
          <div className="grid gap-3 max-w-2xl mx-auto mb-6 px-2">
            {features.map((feature, index) => (
              <div key={index} className="card-modern flex items-center space-x-4 p-4">
                <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-dark-700 text-sm md:text-base font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="btn-gradient text-base md:text-lg px-8 md:px-12 py-4 animate-pulse-glow whitespace-nowrap"
            >
              <span>QUERO AS RECEITAS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEssentialSection;
