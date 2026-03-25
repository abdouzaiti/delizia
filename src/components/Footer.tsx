import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Logo className="w-24 h-24" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Crafting authentic Italian wood-fired experiences in Mostaganem. 
              Quality ingredients, traditional methods, and a passion for perfection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-widest text-sm uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-red transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest text-sm uppercase mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red" />
                <a href="tel:0670277059" className="hover:text-brand-red transition-colors">0670 27 70 59</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red" />
                <span>hello@deliziapizza.dz</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-green" />
                <a href="https://wa.me/213670277059" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">WhatsApp Available</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest text-sm uppercase mb-8">Newsletter</h4>
            <p className="text-xs text-white/40 mb-6 uppercase tracking-widest">Get special offers & updates</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs w-full focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red px-4 py-3 rounded-xl hover:bg-red-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.3em]">
          <p>© 2026 Delizia Pizza Mostaganem. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
