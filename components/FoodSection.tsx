
import React from 'react';

interface FoodSectionProps {
  standalone?: boolean;
}

const FoodSection: React.FC<FoodSectionProps> = ({ standalone = false }) => {
  const restaurants = [
    { name: 'Madero', type: 'Hamburgueria Gourmet', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800' },
    { name: 'Outback', type: 'Steakhouse', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800' },
    { name: 'Starbucks', type: 'Cafeteria', img: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className={`${standalone ? 'py-10' : 'py-32'} bg-neutral-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-black mb-6">Alta Gastronomia</h2>
          <p className="text-slate-500 text-lg">
            De lanches rápidos a jantares sofisticados, nossa praça de alimentação e alameda gourmet oferecem o que há de melhor para o seu paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((res, i) => (
            <div key={i} className="group relative h-[400px] rounded-[40px] overflow-hidden cursor-pointer">
              <img src={res.img} alt={res.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2 block">{res.type}</span>
                <h3 className="text-3xl font-serif font-bold">{res.name}</h3>
              </div>
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <button className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-bold shadow-xl">
                  Ver Cardápio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
