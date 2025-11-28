import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ChefHat className="text-accent-400" size={28} />
            <span className="text-lg md:text-xl font-bold">101 Receitas de Massas Italianas</span>
          </div>
          <p className="text-dark-400 text-sm flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-brand-500" fill="currentColor" />
            <span>para amantes de massa</span>
          </p>
          <p className="text-dark-500 text-xs mt-3">
            Todos os direitos reservados – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
