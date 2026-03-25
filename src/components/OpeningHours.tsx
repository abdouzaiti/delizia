import { motion } from 'motion/react';
import { Clock, Calendar } from 'lucide-react';

export default function OpeningHours() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Opening <span className="text-brand-red">Hours</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl shadow-brand-red/5"
        >
          <img 
            src="/hours.jpg" 
            alt="Delizia Pizza Opening Hours" 
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="text-white">
              <p className="text-xs tracking-[0.4em] uppercase font-bold text-brand-red mb-1">Authentic Experience</p>
              <h3 className="text-2xl font-serif italic">Delizia Pizza</h3>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-white/40 text-xs tracking-[0.3em] uppercase"
        >
          Reservations recommended for weekends
        </motion.p>
      </div>
    </section>
  );
}
