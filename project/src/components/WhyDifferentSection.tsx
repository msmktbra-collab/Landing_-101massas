import React from 'react';
import { Check, Shield } from 'lucide-react';

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
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-dark-800 px-2">
          Por que este e-book é <span className="gradient-text">diferente</span>?
        </h2>

        <div className="max-w-3xl mx-auto px-2">
          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-modern flex items-start space-x-4 p-5"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-dark-700 text-sm md:text-base font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="relative mb-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-r from-accent-50 to-white p-8 rounded-2xl shadow-lg border border-accent-100">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="text-accent-600" size={28} />
                <h3 className="text-xl md:text-2xl font-bold text-dark-800">
                  Garantia de Satisfação Total
                </h3>
              </div>
              <p className="text-dark-600 text-center text-base md:text-lg leading-relaxed">
                Você tem <strong className="text-accent-600">7 dias</strong> para experimentar todas as receitas. Se por qualquer motivo não ficar satisfeito, devolvemos <strong className="text-accent-600">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="btn-gradient text-base md:text-lg px-8 md:px-12 py-4 animate-pulse-glow whitespace-nowrap"
            >
              <span>QUERO MEU E-BOOK AGORA</span>
            </button>
            <p className="text-dark-500 text-sm mt-4 font-medium">
              Compra 100% segura e entrega imediata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
