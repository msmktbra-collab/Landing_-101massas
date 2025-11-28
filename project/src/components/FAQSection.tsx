import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Pode ser impresso?",
      answer: "Sim! O livro digital pode ser impresso quantas vezes quiser. Você pode imprimir as receitas que mais gosta ou o livro completo para ter sempre à mão na cozinha."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Você receberá o acesso completo por e-mail imediatamente após a compra. Basta clicar no link e começar a usar!"
    },
    {
      question: "Funciona para iniciantes?",
      answer: "Com certeza! É um guia completo passo a passo com receitas fáceis e deliciosas — até para quem nunca cozinhou! Todas as receitas são simples de seguir com ingredientes acessíveis."
    },
    {
      question: "Preciso de ingredientes caros?",
      answer: "Não! Essa é a beleza do e-book. Todas as receitas usam ingredientes simples que você tem em casa ou encontra facilmente no mercado. Temos dicas de substituição inteligente também!"
    },
    {
      question: "Tenho garantia?",
      answer: "Sim! Teste as receitas por 7 dias. Se você não sentir que economizou e comeu melhor, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
    },
    {
      question: "Quais são os bônus?",
      answer: "Ao comprar hoje, você recebe: Segredos do Cozimento Perfeito, Guia de Molhos Coringas, e Dicas de Substituição Inteligente - tudo SEM CUSTO EXTRA!"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3 mb-10">
          <HelpCircle className="text-brand-600" size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-dark-700">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto px-2">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="card-modern mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-5 py-5 text-left flex items-center justify-between hover:bg-dark-50 transition-colors duration-200"
              >
                <span className="font-semibold text-base text-dark-700 pr-4">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openItem === index ? 'bg-brand-100' : 'bg-dark-100'}`}>
                  {openItem === index ? (
                    <ChevronUp className="text-brand-600" size={20} />
                  ) : (
                    <ChevronDown className="text-dark-500" size={20} />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 pb-5">
                  <p className="text-dark-600 leading-relaxed text-base">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
