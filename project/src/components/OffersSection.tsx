import React from 'react';
import { Zap, Gift, Check, Crown } from 'lucide-react';

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
    <section id="ofertas" className="section-padding bg-gradient-to-b from-white via-dark-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-dark-800">
          Escolha seu pacote
        </h2>
        <p className="text-center text-dark-500 mb-12 max-w-xl mx-auto">
          Invista menos que um lanche e transforme sua cozinha para sempre
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-modern p-8 relative overflow-hidden">
            <div className="text-center mb-8">
              <div className="bg-dark-100 text-dark-600 px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6 text-sm font-semibold">
                <Zap size={16} />
                <span>OFERTA ESPECIAL</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark-800">
                Pacote Completo
              </h3>
              <p className="text-sm text-dark-500">Tudo que você precisa</p>
            </div>

            <div className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-600" strokeWidth={3} />
                  </div>
                  <span className="text-dark-600 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-sm text-brand-600 line-through mb-1">De R$97 por apenas</div>
              <div className="text-5xl font-black gradient-text-accent mb-2">R$16</div>
              <p className="text-xs text-dark-500 mb-6">(Menos que um lanche na padaria!)</p>
              <a
                href="#"
                className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-6 rounded-full text-base shadow-lg hover:shadow-glow-lg transition-all duration-300 text-center whitespace-nowrap"
              >
                QUERO MEU E-BOOK
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-elevated p-8 border-2 border-brand-500 overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-4 py-1.5 text-xs font-bold rounded-bl-xl flex items-center space-x-1">
                <Crown size={12} />
                <span>Mais Popular</span>
              </div>

              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-5 py-2 rounded-full inline-block mb-6 text-sm font-bold tracking-wide shadow-glow-brand">
                  SUPER OFERTA
                </div>
                <h3 className="text-2xl font-bold mb-2 text-dark-800">
                  Pacote Completo + Bônus
                </h3>
                <p className="text-sm text-dark-500">O melhor valor com tudo incluído</p>
              </div>

              <div className="space-y-3 mb-6">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-600" strokeWidth={3} />
                    </div>
                    <span className="text-dark-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-5 bg-gradient-to-r from-brand-50 to-accent-50 rounded-xl border border-brand-100">
                <div className="text-center mb-4">
                  <span className="gradient-text font-bold text-sm">BÔNUS INCLUSOS</span>
                </div>
                <div className="space-y-2">
                  {premiumBonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-dark-600 text-xs font-medium">{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-brand-600 line-through mb-1">De R$197 por apenas</div>
                <div className="text-6xl font-black gradient-text-accent mb-4">R$27</div>
                <a
                  href="#"
                  className="btn-gradient block w-full text-base md:text-lg animate-pulse-glow whitespace-nowrap"
                >
                  <span>QUERO MEU E-BOOK + BÔNUS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
