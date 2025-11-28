import React from 'react';
import { Check } from 'lucide-react';

const WhyDifferentSection: React.FC = () => {
  const features = [
    "+101 receitas de massas italianas, dos clássicos às versões criativas",
    "Passo a passo simples para resultado de restaurante em casa",
    "Conteúdo organizado e visual, pronto para usar em qualquer tela ou impresso",
    "Pratos para o dia a dia e para ocasiões especiais",
    "Linguagem direta e prática, sem complicação"
  ];

  return (
    <section className="section-padding bg-white -mb-4 md:-mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-dark-800 px-2">
          Por que este e-book é <span className="gradient-text">diferente</span>?
        </h2>

        <div className="max-w-3xl mx-auto px-2">
          <div className="space-y-2 mb-10">
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
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
