import React from 'react';
import { Zap, Gift } from 'lucide-react';

const OffersSection: React.FC = () => {
  const basicFeatures = [
    "Ebook Completo +101 Receitas de Massas",
    "Acesso Vitalício",
    "Todos os Bônus Inclusos",
    "Entrega Imediata por E-mail"
  ];

  const premiumFeatures = [
    "Ebook Completo +101 Receitas de Massas",
    "Tabela de preços em cada receita",
    "Receitas adaptadas para o Brasil",
    "Receitas One-Pot e molhos coringas",
    "Dicas de substituição inteligente"
  ];

  const premiumBonuses = [
    "Segredos do Cozimento Perfeito",
    "Guia de Molhos Coringas",
    "Dicas de Substituição Inteligente"
  ];

  return (
    <section id="ofertas" className="bg-neutral-50 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-neutral-900">
          Escolha sua oferta
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Oferta Básica */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-neutral-200 relative overflow-hidden">
            <div className="text-center mb-6">
              <div className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full inline-block mb-4 text-xs font-semibold uppercase tracking-wide">
                <div className="flex items-center space-x-2 justify-center">
                  <Zap size={14} />
                  <span>Oferta Especial</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 leading-tight">
                Pacote Completo
              </h3>
              <p className="text-sm text-neutral-500">Tudo que você precisa</p>
            </div>

            <div className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-accent-500 flex-shrink-0 text-base font-bold">✓</span>
                  <span className="text-neutral-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-neutral-100">
              <div className="text-sm text-urgency-600 line-through mb-2 font-medium">De R$127 por apenas</div>
              <div className="text-5xl font-black text-gold-500 mb-2">R$19</div>
              <p className="text-xs text-neutral-500 mb-6">(Menos que um lanche na padaria!)</p>
              <a
                href="#"
                className="block w-full bg-cta-600 hover:bg-cta-700 text-white font-bold py-4 px-6 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-200 text-center uppercase tracking-wide"
              >
                Quero meu E-book
              </a>
            </div>
          </div>

          {/* Super Oferta - Destaque */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gold-500 relative overflow-hidden md:scale-105">
            <div className="absolute top-0 right-0 bg-gold-500 text-neutral-900 px-4 py-1.5 text-xs font-bold rounded-bl-xl uppercase tracking-wide">
              Mais Popular
            </div>

            {/* Header Premium */}
            <div className="text-center mb-6">
              <div className="bg-urgency-600 text-white px-4 py-2 rounded-full inline-block mb-4 text-xs font-bold tracking-wide uppercase">
                Super Oferta
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 leading-tight">
                Pacote Completo + Bônus
              </h3>
              <p className="text-sm text-neutral-500">O melhor valor com tudo incluído</p>
            </div>

            <div className="space-y-2 mb-6">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-accent-500 flex-shrink-0 text-base font-bold">✓</span>
                  <span className="text-neutral-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bônus Section */}
            <div className="mb-6 p-4 bg-gold-500/10 rounded-xl border border-gold-500/30">
              <div className="text-center mb-3">
                <span className="text-gold-600 font-bold text-sm block uppercase tracking-wide">Bônus Inclusos</span>
              </div>
              <div className="space-y-2">
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3 text-neutral-900" />
                    </div>
                    <span className="text-neutral-700 text-xs font-medium leading-tight">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4 border-t border-neutral-100">
              <div className="text-sm text-urgency-600 line-through mb-2 font-medium">De R$127 por apenas</div>
              <div className="text-6xl font-black text-gold-500 mb-4">R$19</div>
              <a
                href="#"
                className="block w-full bg-cta-600 hover:bg-cta-700 text-white font-bold py-4 px-6 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-200 text-center uppercase tracking-wide"
              >
                Quero meu E-book + Bônus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
