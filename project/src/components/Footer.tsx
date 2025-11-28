import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ChefHat className="text-white" size={28} />
            <span className="text-lg md:text-xl font-bold">101 Receitas de Massas Italianas</span>
          </div>
          <p className="text-brand-50 text-sm flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-white" fill="white" />
            <span>para amantes de massa</span>
          </p>
          <p className="text-brand-100 text-xs mt-4">
            Todos os direitos reservados – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
