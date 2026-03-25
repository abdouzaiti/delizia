import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Find <span className="text-brand-green">Us</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-sm uppercase mb-2">Address</h4>
                  <p className="text-white/60 leading-relaxed">
                    Rue de la Marine, Mostaganem 27000, Algeria<br />
                    Near the historic harbor district.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-sm uppercase mb-2">Get Directions</h4>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Easily accessible by car or public transport.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nV1JRSL2aVaXsPQM6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-red font-bold text-sm hover:underline flex items-center gap-2"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12965.434567890123!2d0.0890123!3d35.9312345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1281f6c7c8d9e0f1%3A0x1234567890abcdef!2sMostaganem%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1234567890123!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
