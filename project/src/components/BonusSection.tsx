import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "BÔNUS 1 — Segredos do Cozimento Perfeito",
      description: "Para nunca mais errar o ponto da massa e cozinhar como profissional.",
      originalPrice: "R$27",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BÔNUS 2 — Guia de Molhos Coringas",
      description: "Bases que servem para criar dezenas de pratos novos com ingredientes simples.",
      originalPrice: "R$37",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BÔNUS 3 — Dicas de Substituição Inteligente",
      description: "O manual para trocar ingredientes caros por baratos sem ninguém notar.",
      originalPrice: "R$29",
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-dark-800 px-2">
          <span className="inline-flex items-center space-x-3">
            <Gift className="text-brand-600" size={28} />
            <span>Bônus Inclusos <span className="gradient-text">(Sem Custo Extra)</span>:</span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-5 px-2">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="card-modern flex items-center space-x-5 p-5 md:p-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-accent-400 rounded-xl blur opacity-30"></div>
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover flex-shrink-0 shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold mb-2 leading-tight">
                  <span className="gradient-text">{bonus.title.split(' — ')[0]}</span>
                  <span className="text-dark-700"> — {bonus.title.split(' — ')[1]}</span>
                </h3>
                <p className="text-xs md:text-sm text-dark-600 mb-3 leading-relaxed">{bonus.description}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-sm line-through text-dark-400">{bonus.originalPrice}</span>
                  <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-glow">
                    Grátis
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <div className="inline-block px-6 py-4 bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl border-2 border-brand-200 shadow-lg">
              <p className="text-dark-700 font-bold text-base md:text-lg">
                Ao garantir seu ebook hoje, você leva tudo isso <span className="gradient-text">SEM CUSTO EXTRA!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
