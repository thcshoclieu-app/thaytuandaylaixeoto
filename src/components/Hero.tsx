import { motion } from 'motion/react';
import { ArrowRight, Car, Shield } from 'lucide-react';

export default function Hero() {
  const scrollToServices = (tab: string) => {
    window.location.hash = tab;
    // Small delay to allow state update if needed before scroll
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 lg:pt-20 lg:pb-0">
      {/* Background with abstract neon elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#ccff00] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-[#39ff14] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-96 h-96 bg-[#ff003c] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main heading */}
          <div className="flex flex-col w-full relative z-20 cursor-default gap-2 md:gap-6 lg:gap-8 overflow-visible py-2 sm:py-8">
            <motion.h1 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(1.8rem,7vw,6rem)] font-heading font-bold uppercase leading-[1.1] tracking-tight text-left drop-shadow-2xl ml-[2%] sm:ml-[10%] flex whitespace-nowrap items-center"
            >
              <span className="text-white transition-colors duration-300 hover:text-gray-200 mr-2 sm:mr-4">Làm chủ </span>
              <span className="text-[#ccff00] glow-text-yellow relative inline-block group shrink-0">
                <span className="absolute -inset-2 rounded-full blur-xl bg-[#ccff00] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
                <span className="inline-block transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2">vô lăng</span>
              </span>
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[clamp(1.8rem,7vw,6rem)] font-heading font-bold uppercase leading-[1.1] tracking-tight text-right drop-shadow-2xl mr-[2%] sm:mr-[10%] flex whitespace-nowrap items-center justify-end"
            >
              <span className="text-white transition-colors duration-300 hover:text-gray-200 mr-2 sm:mr-4">Làm chủ </span>
              <span className="text-[#39ff14] glow-text-green relative inline-block group shrink-0">
                <span className="absolute -inset-2 rounded-full blur-xl bg-[#39ff14] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
                <span className="inline-block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">cuộc đời</span>
              </span>
            </motion.h1>
          </div>

          {/* Sub heading */}
          <p className="text-[clamp(0.8rem,3vw,1.5rem)] text-gray-300 font-medium tracking-widest uppercase mt-4 sm:mt-6 mb-8 sm:mb-10 flex items-center justify-center gap-1 sm:gap-4 flex-wrap px-1">
            <span className="h-[1px] w-6 sm:w-12 bg-gray-600 hidden sm:block"></span>
            <span className="whitespace-nowrap">Gửi trọn niềm tin</span> <span className="text-[#ccff00] text-lg sm:text-2xl">★</span> <span className="whitespace-nowrap">Kết nối yêu thương</span>
            <span className="h-[1px] w-6 sm:w-12 bg-gray-600 hidden sm:block"></span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            <button
              onClick={() => scrollToServices('dang-ky')}
              className="group relative px-8 py-4 bg-[#ccff00] text-[#050505] font-heading font-bold text-lg uppercase tracking-wider overflow-hidden rounded-md transition-all hover:scale-105 glow-box-yellow w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Đăng Ký Học</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </button>

            <button
              onClick={() => scrollToServices('dat-xe')}
              className="group relative px-8 py-4 bg-[#39ff14] text-[#050505] font-heading font-bold text-lg uppercase tracking-wider overflow-hidden rounded-md transition-all hover:scale-105 glow-box-green w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Đặt Xe Ngay</span>
              <Car size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </button>

            <button
              onClick={() => scrollToServices('bo-tuc')}
              className="group relative px-8 py-4 bg-[#00bfff] text-[#050505] font-heading font-bold text-lg uppercase tracking-wider overflow-hidden rounded-md transition-all hover:scale-105 glow-box-cyan w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Bổ Túc Tay Lái</span>
              <Shield size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Grid overlay for cyber feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] z-0 pointer-events-none mix-blend-screen overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}></div>
    </section>
  );
}
