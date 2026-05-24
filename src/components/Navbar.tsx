import { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Trang chủ', 
      id: 'home', 
      defaultBg: 'bg-[#111111]',
      baseShadow: 'shadow-[0_4px_15px_rgba(204,255,0,0.15)]',
      hoverColor: 'hover:bg-[#ccff00] hover:border-[#ccff00] hover:border-b-[#88aa00] hover:text-[#050505] hover:shadow-[0_10px_30px_rgba(204,255,0,0.5)]'
    },
    { 
      name: 'Dịch vụ', 
      id: 'services', 
      defaultBg: 'bg-[#111111]',
      baseShadow: 'shadow-[0_4px_15px_rgba(57,255,20,0.15)]',
      hoverColor: 'hover:bg-[#39ff14] hover:border-[#39ff14] hover:border-b-[#22aa0c] hover:text-[#050505] hover:shadow-[0_10px_30px_rgba(57,255,20,0.5)]'
    },
    { 
      name: 'Hỗ trợ 24/7', 
      id: 'footer', 
      defaultBg: 'bg-[#111111]',
      baseShadow: 'shadow-[0_4px_15px_rgba(0,191,255,0.15)]',
      hoverColor: 'hover:bg-[#00bfff] hover:border-[#00bfff] hover:border-b-[#0077aa] hover:text-[#050505] hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]'
    },
    { 
      name: 'Liên hệ', 
      id: 'contact', 
      defaultBg: 'bg-[#111111]',
      baseShadow: 'shadow-[0_4px_15px_rgba(255,0,60,0.15)]',
      hoverColor: 'hover:bg-[#ff003c] hover:border-[#ff003c] hover:border-b-[#aa0022] hover:text-[#ffffff] hover:shadow-[0_10px_30px_rgba(255,0,60,0.5)]'
    }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-[#ccff00]/30 shadow-[0_0_15px_rgba(204,255,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center glow-box-yellow transform transition-transform duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <div className="absolute top-[45%] left-2 w-3 h-0.5 bg-[#050505]/60 rounded-full animate-wind-fast"></div>
                <div className="absolute top-[65%] left-3 w-4 h-0.5 bg-[#050505]/60 rounded-full animate-wind-slow" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute top-[55%] left-1 w-2 h-0.5 bg-[#050505]/40 rounded-full animate-wind-fast" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <Car size={24} strokeWidth={2.5} className="text-[#050505] relative z-10 group-hover:animate-car" />
            </div>
            <span className="font-heading font-bold text-xl sm:text-2xl tracking-widest glow-text-yellow hidden sm:block relative">
              HỌC LÁI XE Ô TÔ
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(204,255,0,0.8)]"></span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(item.id);
                }}
                className={`relative group px-6 py-2.5 text-gray-200 transition-all duration-300 text-xs xl:text-sm font-bold uppercase tracking-widest whitespace-nowrap rounded-full border border-b-[4px] border-gray-800 ${item.defaultBg} ${item.baseShadow} active:border-b active:translate-y-[3px] hover:-translate-y-1 ${item.hoverColor}`}
              >
                <span className="relative z-10 transition-all duration-300">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right side - Hotline */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:0382567838"
              className="group relative flex items-center gap-3 px-6 py-2.5 rounded-full border border-b-[4px] border-[#ff003c] hover:border-[#ccff00] cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(204,255,0,0.8)] hover:bg-[#ccff00] bg-[#080808] hover:-translate-y-1 active:border-b active:translate-y-[3px] overflow-hidden"
            >
              <div className="absolute left-4 w-10 h-10 bg-[#ff003c]/25 rounded-full blur-[10px] group-hover:opacity-0 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center">
                <Phone size={22} strokeWidth={2.5} className="text-[#ff003c] group-hover:text-black relative z-10 group-hover:-rotate-12 transition-all duration-300 drop-shadow-[0_0_5px_rgba(255,0,60,0.5)] group-hover:drop-shadow-none" />
              </div>
              <span className="font-heading font-bold text-xl text-[#ff003c] group-hover:text-black relative z-10 tracking-[0.1em] drop-shadow-[0_0_5px_rgba(255,0,60,0.5)] group-hover:drop-shadow-none transition-colors duration-300">
                0382 5678 38
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-[#ccff00] focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden glass-panel border-t border-[#ccff00]/20 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(item.id);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-300 hover:text-[#ccff00] hover:bg-[#111111] uppercase tracking-wider border-b border-gray-800"
              >
                {item.name}
              </button>
            ))}
            <div className="mt-6 px-3">
              <a
                href="tel:0382567838"
                className="group flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-b-[4px] border-[#ff003c] bg-[#111111] w-full transition-all duration-300 active:border-b active:translate-y-[3px]"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff003c] opacity-40 animate-ping"></span>
                  <Phone size={18} className="text-[#ff003c]" />
                </div>
                <span className="font-heading font-bold text-xl text-[#ff003c] drop-shadow-[0_0_5px_rgba(255,0,60,0.5)]">
                  0382 5678 38
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
