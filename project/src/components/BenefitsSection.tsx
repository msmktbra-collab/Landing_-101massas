import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "+105 receitas testadas que funcionam com o que você tem em casa",
    "Economia real: aprenda a substituir ingredientes caros por opções baratas sem perder o sabor",
    "Tabela de preços em todas as receitas: saiba exatamente quanto vai custar antes de cozinhar",
    "Do básico ao especial: jantares rápidos para a semana e pratos para impressionar no domingo",
    "Acesse no celular ou imprima: tenha seu guia de economia e sabor sempre à mão"
  ];

  return (
    <section className="bg-neutral-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 px-2 text-neutral-900">
          Por que escolher este e-book:
        </h2>
        
        <div className="max-w-2xl mx-auto px-2">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200"
              >
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;