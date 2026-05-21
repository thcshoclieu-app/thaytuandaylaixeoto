import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-[#ccff00]" />,
      title: 'Hotline Hỗ Trợ',
      value: '0382 5678 38',
      link: 'tel:0382567838',
      color: 'yellow'
    },
    {
      icon: <MessageCircle size={24} className="text-[#39ff14]" />,
      title: 'Zalo Tư Vấn',
      value: '0382 5678 38',
      link: 'https://zalo.me/0382567838',
      color: 'green'
    },
    {
      icon: <MapPin size={24} className="text-[#ff003c]" />,
      title: 'Địa Chỉ',
      value: 'Xã Đức Linh, Tỉnh Lâm Đồng',
      link: 'https://maps.google.com/?q=Đức+Linh,+Lâm+Đồng',
      color: 'red'
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            <span className="text-white">Thông Tin </span>
            <span className="text-[#ccff00] glow-text-yellow">Liên Hệ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={info.link}
                target={info.title.includes('Địa Chỉ') ? '_blank' : '_self'}
                rel="noreferrer"
                className={`glass-panel p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 border-2 ${
                  info.color === 'yellow' 
                    ? 'border-[#ccff00] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] shadow-[0_0_15px_rgba(204,255,0,0.3)] bg-[#111111]/80' 
                    : info.color === 'green' 
                    ? 'border-[#39ff14] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] shadow-[0_0_15px_rgba(57,255,20,0.3)] bg-[#111111]/80' 
                    : 'border-[#ff003c] hover:shadow-[0_0_30px_rgba(255,0,60,0.6)] shadow-[0_0_15px_rgba(255,0,60,0.3)] bg-[#111111]/80'
                } relative overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  info.color === 'yellow' ? 'bg-[#ccff00]' : info.color === 'green' ? 'bg-[#39ff14]' : 'bg-[#ff003c]'
                }`}></div>

                <div className={`w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center mb-6 border-2 transition-all duration-300 group-hover:scale-110 relative z-10 ${
                  info.color === 'yellow' 
                    ? 'border-gray-800 group-hover:border-[#ccff00]/60 group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)]' 
                    : info.color === 'green' 
                    ? 'border-gray-800 group-hover:border-[#39ff14]/60 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.5)]' 
                    : 'border-gray-800 group-hover:border-[#ff003c]/60 group-hover:shadow-[0_0_15px_rgba(255,0,60,0.5)]'
                }`}>
                  {info.icon}
                </div>
                <h4 className="text-gray-400 font-medium mb-2 uppercase tracking-wide text-sm relative z-10">{info.title}</h4>
                <p className={`text-[16px] min-[360px]:text-[17px] md:text-sm lg:text-[17px] xl:text-xl font-heading font-bold text-white transition-colors duration-300 whitespace-nowrap tracking-tight relative z-10 ${
                  info.color === 'yellow' ? 'group-hover:text-[#ccff00]' : info.color === 'green' ? 'group-hover:text-[#39ff14]' : 'group-hover:text-[#ff003c]'
                }`}>
                  {info.value}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
