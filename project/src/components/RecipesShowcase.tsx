import React from 'react';
import { Sparkles, Clock, Star } from 'lucide-react';

interface Recipe {
  title: string;
  image: string;
  description: string;
  time: string;
  ingredients: string;
}

const RecipesShowcase: React.FC = () => {
  const recipes: Recipe[] = [
    {
      title: "Espaguete Aglio, Olio e Peperoncino",
      image: "/aglio-olio.jpg",
      description: "Alho, azeite e pimenta perfeitos",
      time: "12 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Spaghetti alla Carbonara",
      image: "/carbonara.jpg",
      description: "Cremosa sem usar creme de leite",
      time: "20 min",
      ingredients: "5 Ingred."
    },
    {
      title: "Bucatini Cacio e Pepe",
      image: "/cacio-pepe.jpg",
      description: "Queijo derretido com pimenta moída",
      time: "15 min",
      ingredients: "3 Ingred."
    },
    {
      title: "Rigatoni all'Amatriciana",
      image: "/amatriciana.jpg",
      description: "Tomate rico com bacon crocante",
      time: "25 min",
      ingredients: "6 Ingred."
    },
    {
      title: "Linguine alla Puttanesca",
      image: "/puttanesca.jpg",
      description: "Intenso sabor de azeitona e alcaparra",
      time: "18 min",
      ingredients: "7 Ingred."
    },
    {
      title: "Fettuccine Alfredo",
      image: "/alfredo.jpg",
      description: "Manteiga e queijo derretendo na boca",
      time: "14 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Massas com Sardinha e Atum",
      image: "/tonno.jpg",
      description: "Enlatados viram banquete mediterrâneo",
      time: "15 min",
      ingredients: "6 Ingred."
    },
    {
      title: "Tagliatelle Burro e Salvia",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Manteiga de sálvia dourada e aromática",
      time: "12 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Trofie al Pesto Genovese",
      image: "/pesto.png",
      description: "Manjericão fresco em molho verde",
      time: "18 min",
      ingredients: "7 Ingred."
    },
    {
      title: "Penne all'Arrabbiata",
      image: "/arrabbiata.jpg",
      description: "Molho de tomate picante e viciante",
      time: "18 min",
      ingredients: "5 Ingred."
    },
    {
      title: "Massas One-Pot",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Cozinha massa e molho na mesma panela",
      time: "20 min",
      ingredients: "8 Ingred."
    },
    {
      title: "Molhos de Tomate Caseiros",
      image: "/molho-tomate.jpg",
      description: "Mais baratos e saudáveis que saquinhos",
      time: "25 min",
      ingredients: "6 Ingred."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight px-2 text-dark-700">
            Veja o que você vai aprender a fazer <span className="gradient-text">(gastando pouco!)</span>
          </h2>
          <p className="text-dark-600 text-base md:text-lg font-medium mb-2 px-2">
            Receitas que transformam ingredientes simples em pratos de restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 px-2">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 leading-tight text-dark-700 text-center group-hover:text-brand-600 transition-colors">{recipe.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-4 text-center">{recipe.description}</p>

                <div className="flex justify-center space-x-3">
                  <div className="flex items-center space-x-1.5 bg-brand-50 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-brand-600" />
                    <span className="text-brand-700 text-xs font-semibold">{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-accent-50 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-accent-600" />
                    <span className="text-accent-700 text-xs font-semibold">{recipe.ingredients}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block glass p-6 rounded-2xl shadow-lg max-w-lg mx-2">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Sparkles className="text-brand-500" size={20} />
              <p className="text-xl font-bold gradient-text">E MUITO MAIS...</p>
              <Sparkles className="text-accent-500" size={20} />
            </div>
            <p className="text-sm text-dark-700 font-medium leading-relaxed">São mais de 105 receitas pensadas para sua rotina: receitas one-pot, molhos caseiros, adaptações brasileiras, massas gratinadas, vegetarianas, com proteína e saladas de massa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesShowcase;
