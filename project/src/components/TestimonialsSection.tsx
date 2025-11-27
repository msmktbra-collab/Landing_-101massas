import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

interface Testimonial {
  name: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  verified?: boolean;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      time: "2h",
      content: "Que descoberta! Consegui economizar muito na alimentação e ainda cozinhar como um chef italiano. A tabela de preços de cada receita é excelente! Agora faço massas todos os dias.",
      likes: 45,
      verified: true
    },
    {
      name: "Fernanda Santos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      time: "6h",
      content: "A dica de substituição inteligente salvou meu orçamento! Virei trocando ingredientes caros por opções baratas e o resultado é o mesmo. Minha família elogiou muito!",
      likes: 52
    },
    {
      name: "Michele Costa",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      time: "12h",
      content: "Não acredito que as receitas one-pot são tão fáceis e sábias! Menos louça a lavar e comida incrível. Virei fã. Recomendo para todo mundo!",
      likes: 58,
      verified: true
    }
  ];

  return (
    <section className="bg-neutral-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-900 px-2">
          Veja o que nossos clientes estão falando:
        </h2>

        <div className="max-w-md mx-auto space-y-4 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header do post */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-cta-600 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-sm text-neutral-900">{testimonial.name}</span>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-neutral-500">{testimonial.time}</span>
              </div>

              {/* Conteúdo do post */}
              <div className="px-4 pb-3">
                <p className="text-sm text-neutral-800 leading-relaxed">{testimonial.content}</p>
              </div>

              {/* Ações do post */}
              <div className="flex items-center space-x-4 px-4 py-3 border-t border-neutral-100">
                <button className="flex items-center space-x-1 text-neutral-500 hover:text-urgency-600 transition-colors">
                  <Heart size={16} />
                  <span className="text-xs font-medium">{testimonial.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-neutral-500 hover:text-accent-500 transition-colors">
                  <MessageCircle size={16} />
                  <span className="text-xs">Comentar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
