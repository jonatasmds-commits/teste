
import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <span className="text-3xl font-serif font-black tracking-tighter">
                SÃO JOSÉ
              </span>
              <span className="text-[10px] block uppercase tracking-[0.2em] font-bold text-slate-500">
                SHOPPING CENTER
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              O destino preferido de quem busca exclusividade, conforto e as melhores marcas. Venha viver essa experiência.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-500">Explorar</h4>
            <ul className="space-y-4 text-slate-400">
              {['Lojas', 'Cinema', 'Restaurantes', 'Eventos', 'Serviços'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-500">Contato</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="text-slate-600 shrink-0" size={20} />
                <span className="text-sm">R. Izabel A Redentora, 1434 - Centro, São José dos Pinhais - PR</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-slate-600 shrink-0" size={20} />
                <span className="text-sm">(41) 3381-1000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-slate-600 shrink-0" size={20} />
                <span className="text-sm">contato@shoppingsaojose.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-500">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Receba convites para eventos exclusivos e novidades.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm"
              />
              <button className="bg-white text-slate-950 font-bold py-3 rounded-2xl hover:bg-slate-200 transition-all">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <p>© 2024 SHOPPING SÃO JOSÉ. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
