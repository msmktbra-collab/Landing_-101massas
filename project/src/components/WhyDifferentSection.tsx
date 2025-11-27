import React from 'react';
import { Check } from 'lucide-react';

const WhyDifferentSection: React.FC = () => {
  const features = [
    "Mais de 101 receitas autênticas direto das regiões da Itália",
    "Tabela de preços em cada receita para você controlar seu orçamento",
    "Tempo médio de preparo: 10 a 25 minutos — perfeito para a rotina",
    "Ingredientes acessíveis que você encontra em qualquer mercado",
    "Formato prático: acesse online ou imprima",
    "Dicas profissionais para massa al dente, molhos cremosos e emulsões perfeitas",
    "Adaptado para o Brasil: substituições inteligentes de ingredientes caros"
  ];

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-neutral-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-900 px-2">
          Por que este e-book é diferente?
        </h2>

        <div className="max-w-3xl mx-auto px-2">
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200"
              >
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gold-500 mb-6">
            <h3 className="text-lg md:text-xl font-bold text-neutral-900 text-center mb-3">
              Garantia de Satisfação Total
            </h3>
            <p className="text-neutral-700 text-center text-sm md:text-base leading-relaxed">
              Você tem <strong>7 dias</strong> para experimentar todas as receitas. Se por qualquer motivo não ficar satisfeito, devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="bg-cta-600 hover:bg-cta-700 text-white font-bold py-4 px-8 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full max-w-sm"
            >
              QUERO MEU E-BOOK AGORA
            </button>
            <p className="text-neutral-500 text-sm mt-4">
              Compra 100% segura e entrega imediata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
