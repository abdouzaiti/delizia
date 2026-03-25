import { motion } from 'motion/react';
import { Phone, Instagram, Facebook, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Logo className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-red transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/213670277059"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-red/20"
          >
            BOOK NOW
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-center hover:text-brand-red"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/213670277059"
            className="bg-brand-red text-white py-4 rounded-xl text-center font-bold"
          >
            BOOK VIA WHATSAPP
          </a>
        </motion.div>
      )}
    </nav>
  );
}
