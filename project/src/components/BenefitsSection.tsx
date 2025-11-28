import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "+105 receitas testadas que funcionam com o que você tem em casa",
    "Economia real: aprenda a substituir ingredientes caros por opções baratas sem perder o sabor",
    "Tabela de preços em todas as receitas: saiba exatamente quanto vai custar antes de cozinhar",
    "Do básico ao especial: jantares rápidos para a semana e pratos para impressionar no domingo",
    "Acesse no celular ou imprima: tenha seu guia de economia e sabor sempre à mão"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 px-2 text-dark-800">
          Por que escolher este e-book:
        </h2>
        
        <div className="max-w-2xl mx-auto px-2">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="card-modern flex items-start space-x-4 p-5"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-dark-700 text-sm md:text-base font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
