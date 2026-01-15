
import React from 'react';
import { ChevronRight } from 'lucide-react';

const EventsPreview: React.FC = () => {
  const events = [
    { title: 'Exposição Arte Moderna', date: 'De 01 a 15 de Outubro', category: 'CULTURA' },
    { title: 'Workshop de Culinária Kids', date: 'Todos os Sábados', category: 'ENTRETENIMENTO' },
    { title: 'Liquidação de Inverno', date: 'Últimos Dias', category: 'PROMOÇÃO' },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-serif font-black">Próximos Eventos</h2>
          <button className="p-4 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 mb-6 block group-hover:text-slate-900 transition-colors">{ev.category}</span>
              <h3 className="text-3xl font-serif font-bold mb-4">{ev.title}</h3>
              <p className="text-slate-500 mb-8">{ev.date}</p>
              <div className="w-12 h-1 bg-slate-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
