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
    <section id="ofertas" className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Oferta Básica */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-neutral-200 relative overflow-hidden">
            <div className="text-center mb-6">
              <div className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-full inline-block mb-4 text-xs font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <Zap size={14} />
                  <span>OFERTA ESPECIAL</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 leading-tight">
                Pacote Completo
              </h3>
              <p className="text-sm text-neutral-600">Tudo que você precisa</p>
            </div>

            <div className="space-y-3 mb-6">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-lg">
                  <span className="text-success-600 flex-shrink-0 text-base">✓</span>
                  <span className="text-neutral-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-sm text-neutral-500 line-through mb-2">De R$127 por apenas</div>
              <div className="text-5xl font-black text-success-600 mb-3 animate-pulse">R$19</div>
              <p className="text-xs text-neutral-600 mb-4">(Menos que um lanche na padaria!)</p>
              <a
                href="#"
                className="block w-full bg-success-600 hover:bg-success-700 text-white font-bold py-3 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 text-center whitespace-nowrap overflow-hidden text-ellipsis"
              >
                QUERO MEU E-BOOK
              </a>
            </div>
          </div>

          {/* Super Oferta - Destaque */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-primary-600 relative overflow-hidden md:scale-105">
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              Mais Popular
            </div>

            {/* Header Premium */}
            <div className="text-center mb-6">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-full inline-block mb-4 text-xs font-bold tracking-wide">
                SUPER OFERTA
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 leading-tight">
                Pacote Completo + Bônus
              </h3>
              <p className="text-sm text-neutral-600">O melhor valor com tudo incluído</p>
            </div>

            <div className="space-y-2 mb-6">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-lg">
                  <span className="text-success-600 flex-shrink-0 text-base">✓</span>
                  <span className="text-neutral-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bônus Section */}
            <div className="mb-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="text-center mb-3">
                <span className="text-primary-600 font-bold text-sm block">BÔNUS INCLUSOS</span>
              </div>
              <div className="space-y-2">
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700 text-xs font-medium leading-tight">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-neutral-500 line-through mb-2">De R$127 por apenas</div>
              <div className="text-6xl font-black text-success-600 mb-4 animate-pulse">R$19</div>
              <a
                href="#"
                className="block w-full bg-success-600 hover:bg-success-700 text-white font-bold py-3 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 text-center whitespace-nowrap overflow-hidden text-ellipsis"
              >
                QUERO MEU E-BOOK + BÔNUS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
