import React from 'react';
import { Heart, MessageCircle, BadgeCheck } from 'lucide-react';

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
    <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-dark-700 px-2">
          Veja o que nossos clientes estão falando:
        </h2>

        <div className="max-w-md mx-auto space-y-5 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-modern overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-dark-100">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-dark-100"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-accent-500 to-accent-600 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-sm text-dark-700">{testimonial.name}</span>
                      {testimonial.verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-dark-400 font-medium">{testimonial.time}</span>
              </div>

              <div className="p-5">
                <p className="text-sm text-dark-700 leading-relaxed">{testimonial.content}</p>
              </div>

              <div className="flex items-center space-x-6 px-5 py-4 border-t border-dark-100 bg-dark-50/50">
                <button className="flex items-center space-x-2 text-dark-500 hover:text-brand-600 transition-colors">
                  <Heart size={18} />
                  <span className="text-sm font-medium">{testimonial.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-dark-500 hover:text-brand-600 transition-colors">
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">Comentar</span>
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
