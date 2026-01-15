
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000" 
          alt="Mall Interior" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Aberto agora • Até 22:00
          </div>
          <h1 className="text-7xl md:text-8xl font-serif font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            Onde seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">
              estilo acontece.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Descubra as tendências globais e o conforto que você merece. O Shopping São José é o ponto de encontro de tudo o que é novo.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-400">
              Conheça as Lojas
            </button>
            <button className="px-10 py-5 border-2 border-slate-900 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all">
              Programação Cinema
            </button>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col gap-6 items-end z-20">
        <div className="glass px-6 py-4 rounded-3xl border border-white/40 shadow-xl">
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">PROMOÇÃO DO MÊS</p>
          <p className="text-slate-900 font-serif font-bold text-xl">Sorteio BMW 2024</p>
          <p className="text-xs text-slate-500">A cada R$ 400 em compras</p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-1 bg-slate-900 rounded-full"></div>
          <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
          <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
