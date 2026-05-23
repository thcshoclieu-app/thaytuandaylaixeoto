import { ShieldCheck, MapPin, Phone, Car, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#050505] border-t border-[#ccff00]/20 pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Decorative neon line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-50"></div>
      <div className="absolute top-0 right-[20%] w-[100px] h-[2px] bg-[#ccff00] glow-box-yellow mix-blend-screen shadow-[0_0_20px_#ccff00]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center glow-box-yellow transform transition-transform duration-500 group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                  <div className="absolute top-[45%] left-2 w-3 h-0.5 bg-[#050505]/60 rounded-full animate-wind-fast"></div>
                  <div className="absolute top-[65%] left-3 w-4 h-0.5 bg-[#050505]/60 rounded-full animate-wind-slow" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-[55%] left-1 w-2 h-0.5 bg-[#050505]/40 rounded-full animate-wind-fast" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <Car size={24} strokeWidth={2.5} className="text-[#050505] relative z-10 group-hover:animate-car" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-widest text-white relative">
                HỌC LÁI XE Ô TÔ
                <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(204,255,0,0.8)]"></span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Trường đào tạo lái xe uy tín, chất lượng tại Lâm Đồng. Cung cấp dịch vụ xe gia đình 4-7 chỗ tiện lợi, an toàn, giá cả hợp lý.
            </p>
            <div className="flex items-center gap-3 text-[#39ff14] font-bold text-xl sm:text-2xl drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
              <ShieldCheck size={28} className="shrink-0" />
              <span className="tracking-wide">Hỗ trợ 24/7 - Cam kết chất lượng</span>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-6 pb-2 border-b border-gray-800">Dịch Vụ</h4>
            <ul className="space-y-4">
              <li><button onClick={() => { window.location.hash = 'dang-ky'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 10); }} className="text-gray-400 hover:text-[#ccff00] transition-colors flex items-center gap-2 text-left"><span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0"></span> Học Lái Xe Hạng B</button></li>
              <li><button onClick={() => { window.location.hash = 'dang-ky'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 10); }} className="text-gray-400 hover:text-[#ccff00] transition-colors flex items-center gap-2 text-left"><span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0"></span> Học Lái Xe Hạng C</button></li>
              <li><button onClick={() => { window.location.hash = 'dat-xe'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 10); }} className="text-gray-400 hover:text-[#39ff14] transition-colors flex items-center gap-2 text-left"><span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] shrink-0"></span> Đặt Xe Gia Đình</button></li>
              <li><button onClick={() => { window.location.hash = 'bo-tuc'; setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 10); }} className="text-gray-400 hover:text-[#ff003c] transition-colors flex items-center gap-2 text-left"><span className="w-1.5 h-1.5 rounded-full bg-[#ff003c] shrink-0"></span> Bổ Túc Tay Lái</button></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-6 pb-2 border-b border-gray-800">Liên Hệ</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="https://maps.google.com/?q=Lâm+Đồng" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group hover:text-white transition-colors">
                  <MapPin size={20} className="text-[#ff003c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>Xã Đức Linh, Tỉnh Lâm Đồng</span>
                </a>
              </li>
              <li>
                <a href="tel:0382567838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:text-[#ccff00] transition-colors">
                  <Phone size={20} className="text-[#ccff00] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>0382 5678 38</span>
                </a>
              </li>
              <li>
                <a href="https://zalo.me/0382567838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:text-[#39ff14] transition-colors">
                  <div className="w-5 h-5 bg-[#39ff14] text-[#050505] rounded flex items-center justify-center text-[10px] font-bold shrink-0 group-hover:scale-110 transition-transform">Zl</div>
                  <span>0382 5678 38</span>
                </a>
              </li>
              <li>
                <a href="mailto:thaytuanlaixedl@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:text-[#00bfff] transition-colors">
                  <Mail size={20} className="text-[#00bfff] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>thaytuanlaixedl@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Học Lái Xe Ô Tô & Đặt Xe Gia Đình. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
        
        {/* Motivation Quote */}
        <div className="text-center mt-10 relative overflow-hidden w-full flex justify-center">
          <p className="font-heading text-[8px] min-[375px]:text-[9px] min-[400px]:text-[10px] sm:text-[13px] md:text-lg lg:text-2xl xl:text-3xl font-bold tracking-wider lg:tracking-[0.1em] uppercase text-[#ccff00] drop-shadow-[0_0_15px_rgba(204,255,0,0.8)] whitespace-nowrap">
            Sự hài lòng của quý khách là nguồn động lực cho chúng tôi
          </p>
        </div>
      </div>
    </footer>
  );
}
