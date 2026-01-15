
import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ShoppingBag, Utensils, Film, Calendar, Info, Search } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Lojas', icon: ShoppingBag, page: Page.Stores },
    { label: 'Cinema', icon: Film, page: Page.Cinema },
    { label: 'Gastronomia', icon: Utensils, page: Page.Food },
    { label: 'Eventos', icon: Calendar, page: Page.Events },
    { label: 'Serviços', icon: Info, page: Page.Services },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all rounded-full ${isScrolled ? 'glass shadow-lg border border-white/20 px-8 py-3' : 'bg-transparent'}`}>
        
        {/* Logo */}
        <button 
          onClick={() => { onNavigate(Page.Home); window.scrollTo(0, 0); }}
          className="flex flex-col items-start"
        >
          <span className="text-2xl font-serif font-black tracking-tighter text-slate-900">
            SÃO JOSÉ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            SHOPPING CENTER
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-all flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-100 ${activePage === item.page ? 'text-slate-900 bg-slate-100' : 'text-slate-500'}`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
            <Search size={20} className="text-slate-600" />
          </button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Estacionamento
          </button>
          
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white p-6 pt-24 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { onNavigate(item.page); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-4 text-2xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                <item.icon size={28} className="text-slate-400" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
