import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Abdelkader B.",
    text: "Une pizzeria d'exception ! La pâte est légère, les ingrédients sont frais et le goût du feu de bois est bien présent. Je recommande vivement.",
    rating: 5
  },
  {
    id: 2,
    author: "Meriem L.",
    text: "Meilleure pizza à Mostaganem sans aucun doute. L'accueil est chaleureux et le cadre est magnifique. Un vrai régal !",
    rating: 5
  },
  {
    id: 3,
    author: "Sofiane R.",
    text: "Authentic Italian pizza. Great service and very clean. The burrata pizza is a must-try!",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Guest <span className="text-brand-red">Voices</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[32px] relative group"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center font-bold text-brand-red">
                  {review.author[0]}
                </div>
                <span className="font-bold tracking-widest text-sm uppercase">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
