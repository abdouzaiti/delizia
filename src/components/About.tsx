import { motion } from 'motion/react';
import { Flame, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-red font-mono tracking-widest text-sm mb-4 block uppercase">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Authentic Wood-Fired <br />
            <span className="text-brand-orange">Italian Tradition</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Delizia Pizza offers authentic wood-fired Italian pizzas made with fresh ingredients in a cozy and premium atmosphere. 
            Our secret lies in the 48-hour slow-fermented dough and the intense heat of our traditional wood-fired oven.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Flame size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest">WOOD FIRED</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Leaf size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest">FRESH INGREDIENTS</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <Heart size={24} />
              </div>
              <span className="text-xs font-bold tracking-widest">MADE WITH LOVE</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542834369-f109f1993791?q=80&w=2070&auto=format&fit=crop"
              alt="Chef making pizza"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl hidden lg:block">
            <span className="text-5xl font-serif font-bold text-brand-red block mb-2">10+</span>
            <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Years of Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
