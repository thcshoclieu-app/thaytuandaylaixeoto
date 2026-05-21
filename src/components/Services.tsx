import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Car, BookOpen, Shield, CheckCircle, Loader2 } from 'lucide-react';

export default function Services() {
  const [submitting, setSubmitting] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formId: number, email: string) => {
    e.preventDefault();
    setSubmitting(formId);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      form.reset();
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Lỗi khi gửi form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 z-20 bg-[#050505]">
      
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-[#111] border border-[#ccff00]/50 rounded-2xl p-8 max-w-md w-full shadow-[0_0_40px_rgba(204,255,0,0.2)] text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-[#ccff00]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                <CheckCircle className="text-[#ccff00]" size={40} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Gửi Thành Công!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Chân thành cảm ơn Quý khách đã tin tưởng. Chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 bg-[#ccff00] text-[#050505] font-bold rounded-lg hover:bg-[#b3e600] transition-colors uppercase tracking-wider"
              >
                Đóng
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            <span className="text-white">Dịch Vụ </span>
            <span className="text-[#ccff00] glow-text-yellow">Nổi Bật</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Đội ngũ chuyên nghiệp, xe đời mới, cam kết chất lượng đào tạo và dịch vụ di chuyển an toàn hàng đầu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Form 1: Đăng Ký Học Lái Xe */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-10 rounded-2xl border-2 border-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.4)] relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ccff00]/30 blur-[60px] animate-pulse pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#ccff00]/20 flex items-center justify-center border border-[#ccff00] glow-box-yellow shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                <BookOpen className="text-[#ccff00]" size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl xl:text-xl 2xl:text-2xl font-heading font-bold text-white uppercase tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap truncate">Đăng Ký Học Lái Xe</h3>
                <p className="text-gray-300 text-sm mt-1 font-medium">Khóa học lái xe ô tô chất lượng cao</p>
              </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, 1, 'thaytuanlaixedl@gmail.com')} className="space-y-5 relative z-10">
              <input type="hidden" name="_subject" value="ĐĂNG KÝ HỌC LÁI XE Ô TÔ" />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Họ và tên *</label>
                <input required type="text" name="name" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all" placeholder="Nhập họ và tên..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Số điện thoại *</label>
                <input required type="tel" name="phone" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all" placeholder="Nhập số điện thoại..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Địa chỉ</label>
                <input type="text" name="address" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all" placeholder="Nhập địa chỉ của bạn..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Hạng GPLX quan tâm *</label>
                <select required name="licenseType" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all appearance-none">
                  <option value="" disabled selected>Chọn hạng bằng lái...</option>
                  <option value="Hạng B">Hạng B</option>
                  <option value="Hạng C1">Hạng C1</option>
                  <option value="Hạng C">Hạng C</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Ghi chú thêm</label>
                <textarea name="notes" rows={3} className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all" placeholder="Bạn có thắc mắc hoặc yêu cầu gì thêm?"></textarea>
              </div>

              <button disabled={submitting === 1} type="submit" className="w-full mt-4 bg-[#ccff00] hover:bg-[#b3e600] text-[#050505] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow-box-yellow group disabled:opacity-70 disabled:cursor-not-allowed">
                {submitting === 1 ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <span className="uppercase tracking-wider">Gửi Đăng Ký</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Form 2: Đặt Xe Gia Đình */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 sm:p-10 rounded-2xl border-2 border-[#39ff14] shadow-[0_0_30px_rgba(57,255,20,0.4)] relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#39ff14]/30 blur-[60px] animate-pulse pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#39ff14]/20 flex items-center justify-center border border-[#39ff14] glow-box-green shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                <Car className="text-[#39ff14]" size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl xl:text-xl 2xl:text-2xl font-heading font-bold text-white uppercase tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap truncate">Đặt Xe Gia Đình</h3>
                <p className="text-gray-300 text-sm mt-1 font-medium">Dịch vụ xe 4 chỗ - 7 chỗ theo yêu cầu</p>
              </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, 2, 'hotrotaxi38@gmail.com')} className="space-y-5 relative z-10">
              <input type="hidden" name="_subject" value="ĐẶT XE GIA ĐÌNH" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Họ và tên *</label>
                  <input required type="text" name="name" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all" placeholder="Tên của bạn..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Số điện thoại *</label>
                  <input required type="tel" name="phone" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all" placeholder="Số điện thoại..." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Điểm đi *</label>
                  <input required type="text" name="departure" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all" placeholder="Đón tại..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Điểm đến *</label>
                  <input required type="text" name="destination" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all" placeholder="Đến nơi..." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Loại xe *</label>
                  <select required name="carType" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all appearance-none">
                    <option value="" disabled selected>Chọn xe...</option>
                    <option value="4 Chỗ">Xe 4 chỗ</option>
                    <option value="7 Chỗ">Xe 7 chỗ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ngày đi *</label>
                  <input required type="date" name="date" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all [color-scheme:dark]" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Ghi chú thêm</label>
                <input type="text" name="notes" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all" placeholder="Yêu cầu riêng (vd: có trẻ nhỏ, hành lý nhiều)..." />
              </div>

              <button disabled={submitting === 2} type="submit" className="w-full mt-4 bg-[#39ff14] hover:bg-[#2ce00f] text-[#050505] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow-box-green group disabled:opacity-70 disabled:cursor-not-allowed">
                {submitting === 2 ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <span className="uppercase tracking-wider">Gửi Yêu Cầu</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Form 3: Bổ Túc Tay Lái */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 sm:p-10 rounded-2xl border-2 border-[#00bfff] shadow-[0_0_30px_rgba(0,191,255,0.4)] relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00bfff]/30 blur-[60px] animate-pulse pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#00bfff]/20 flex items-center justify-center border border-[#00bfff] glow-box-cyan shadow-[0_0_15px_rgba(0,191,255,0.5)]">
                <Shield className="text-[#00bfff]" size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl xl:text-xl 2xl:text-2xl font-heading font-bold text-[#00bfff] uppercase tracking-wide drop-shadow-[0_0_10px_rgba(0,191,255,0.5)] whitespace-nowrap truncate">Bổ Túc Tay Lái</h3>
                <p className="text-gray-200 text-sm mt-1 font-medium drop-shadow-md">Kèm lái an toàn, tự tin vượt mọi cung đường</p>
              </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, 3, 'thaytuanlaixedl@gmail.com')} className="space-y-5 relative z-10">
              <input type="hidden" name="_subject" value="ĐĂNG KÝ BỔ TÚC TAY LÁI" />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Họ và tên *</label>
                <input required type="text" name="name" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00bfff] focus:ring-1 focus:ring-[#00bfff] transition-all" placeholder="Nhập họ và tên..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Số điện thoại *</label>
                <input required type="tel" name="phone" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00bfff] focus:ring-1 focus:ring-[#00bfff] transition-all" placeholder="Nhập số điện thoại..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Hình thức bổ túc *</label>
                <select required name="carType" className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00bfff] focus:ring-1 focus:ring-[#00bfff] transition-all appearance-none">
                  <option value="" disabled selected>Chọn loại xe...</option>
                  <option value="Số sàn (MT)">Số sàn (MT)</option>
                  <option value="Số tự động (AT)">Số tự động (AT)</option>
                  <option value="Xe của học viên">Xe của học viên</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mục tiêu & Ghi chú</label>
                <textarea name="notes" rows={3} className="w-full bg-[#111111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00bfff] focus:ring-1 focus:ring-[#00bfff] transition-all" placeholder="Vd: Lái xe đường đô thị, lái lên dốc, đỗ xe..."></textarea>
              </div>

              <button disabled={submitting === 3} type="submit" className="w-full mt-4 bg-[#00bfff] hover:bg-[#0099cc] text-[#050505] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all glow-box-cyan group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
                {submitting === 3 ? (
                  <Loader2 size={24} className="animate-spin relative z-10" />
                ) : (
                  <>
                    <span className="relative z-10 uppercase tracking-wider">Gửi Đăng Ký</span>
                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
