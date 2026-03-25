import { motion } from 'motion/react';
import { MessageCircle, ChevronDown, BookOpen } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-10"
          >
            <Logo className="w-56 h-56 md:w-72 md:h-72 relative z-10" />
          </motion.div>
          
          <span className="text-brand-green font-mono tracking-[0.3em] uppercase text-sm mb-4 block">
            Mostaganem, Algeria
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 tracking-tighter text-glow-orange">
            AU FEU DE BOIS
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The original taste of Italy in the heart of Mostaganem. 
            Experience authentic wood-fired perfection crafted with passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all"
            >
              <BookOpen size={18} />
              VIEW MENU
            </motion.a>
            <motion.a
              href="https://wa.me/placeholder"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-green text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <MessageCircle size={18} />
              BOOK VIA WHATSAPP
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
