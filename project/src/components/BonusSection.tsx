import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "BONÚS 1 — Segredos do Cozimento Perfeito",
      description: "Para nunca mais errar o ponto da massa e cozinhar como profissional.",
      originalPrice: "R$27",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BONÚS 2 — Guia de Molhos Coringas",
      description: "Bases que servem para criar dezenas de pratos novos com ingredientes simples.",
      originalPrice: "R$37",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BONÚS 3 — Dicas de Substituição Inteligente",
      description: "O manual para trocar ingredientes caros por baratos sem ninguém notar.",
      originalPrice: "R$29",
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="bg-neutral-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-neutral-900 px-2">
          <span className="inline-flex items-center space-x-2">
            <Gift className="text-gold-500" size={24} />
            <span>Bônus Inclusos (Sem Custo Extra):</span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 px-2">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4 border border-neutral-200"
            >
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-20 h-20 md:w-28 md:h-28 rounded-lg object-cover flex-shrink-0 shadow-sm"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold mb-1 text-neutral-900 leading-tight">
                  <span className="text-gold-600">{bonus.title.split(' — ')[0]}</span>
                  <span className="text-neutral-700"> — {bonus.title.split(' — ')[1]}</span>
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 mb-2 leading-snug">{bonus.description}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-xs md:text-sm line-through text-neutral-400">{bonus.originalPrice}</span>
                  <span className="bg-cta-600 text-white px-3 py-1 rounded-full font-bold text-xs md:text-sm">
                    Grátis
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <p className="text-neutral-700 font-semibold text-base md:text-lg px-4 py-3 bg-gold-500/10 rounded-lg border border-gold-500/30 inline-block">
              Ao garantir seu ebook hoje, você leva tudo isso SEM CUSTO EXTRA!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
