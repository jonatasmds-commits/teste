
import React from 'react';
import { MOVIES } from '../constants.tsx';
import { Play, Ticket } from 'lucide-react';

interface CinemaListingsProps {
  showTitle?: boolean;
}

const CinemaListings: React.FC<CinemaListingsProps> = ({ showTitle = true }) => {
  return (
    <section id="cinema" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-slate-500 uppercase tracking-[0.3em] font-bold text-xs mb-4 block">EXPERIÊNCIA CINEMATOGRÁFICA</span>
              <h2 className="text-5xl font-serif font-black">Em Cartaz no Cinemark</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              Ver programação completa
              <div className="w-8 h-[2px] bg-slate-700 group-hover:bg-white transition-all"></div>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MOVIES.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-3xl overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <button className="w-16 h-16 bg-white text-slate-950 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl">
                    <Play fill="currentColor" size={24} />
                  </button>
                </div>

                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  Classificação: {movie.rating}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-1">{movie.title}</h3>
                    <p className="text-slate-500 text-sm">{movie.genre}</p>
                  </div>
                  <Ticket className="text-slate-700" size={24} />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {movie.times.map(time => (
                    <button key={time} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold hover:bg-slate-800 transition-colors">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinemaListings;
