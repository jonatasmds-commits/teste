
import React, { useState } from 'react';
import { STORES } from '../constants.tsx';
import { Search, Filter } from 'lucide-react';

interface StoreGridProps {
  featuredOnly?: boolean;
}

const StoreGrid: React.FC<StoreGridProps> = ({ featuredOnly = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', ...Array.from(new Set(STORES.map(s => s.category)))];

  const filteredStores = STORES.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todas' || store.category === activeCategory;
    const matchesFeatured = !featuredOnly || store.featured;
    return matchesSearch && matchesCategory && matchesFeatured;
  });

  return (
    <div className="space-y-12">
      {!featuredOnly && (
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar loja ou serviço..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredStores.map((store) => (
          <div 
            key={store.id}
            className="group relative aspect-square bg-white rounded-3xl border border-slate-100 p-8 flex flex-col items-center justify-center text-center transition-all hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 cursor-pointer"
          >
            <div className="mb-4 overflow-hidden rounded-2xl w-24 h-24 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={store.logo} alt={store.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{store.name}</h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{store.category}</span>
            <div className="absolute top-4 right-4 bg-slate-100 px-2 py-1 rounded-lg text-[10px] font-black text-slate-500">
              Piso {store.floor}
            </div>
          </div>
        ))}
      </div>

      {filteredStores.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">Nenhuma loja encontrada para sua busca.</p>
        </div>
      )}
    </div>
  );
};

export default StoreGrid;
