import { motion } from 'motion/react';

const images = [
  "/pizza1.jpg",
  "/pizza2.jpg",
  "/pizza3.jpg",
  "/pizza4.jpg",
  "/pizza5.jpg",
  "/pizza6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Visual <span className="text-brand-green">Experience</span>
          </motion.h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A glimpse into our kitchen and the cozy atmosphere we've created for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">Delizia</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
