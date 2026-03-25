import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import Logo from './Logo';

const menuPages = [
// ... (rest of the file)
  {
    title: "PIZZA",
    subtitle: "BASE TOMATE & MOZZARELLA",
    image: "/pizza1.jpg",
    items: [
      { name: "MARGARITA", desc: "Basilic, olives noires", price: "700 DA" },
      { name: "VEGETARIENNE", desc: "Champignon, poivron mariné, aubergines grillées, oignons confits", price: "900 DA" },
      { name: "NAPOLITAINE", desc: "Anchois, câpres, olives noires", price: "1100 DA" },
      { name: "NEPTUNE", desc: "Thon, olives noires", price: "1100 DA" },
      { name: "CAMPIONE", desc: "Viande hachée, champignons, oeuf", price: "1200 DA" },
      { name: "ROMAINE", desc: "Jambon de dinde à la provençale, viande hachée, oeuf", price: "1300 DA" },
      { name: "REINE", desc: "Jambon de dinde à la provençale, champignon", price: "1200 DA" },
      { name: "CHICKEN", desc: "Poulet escalope marinées, champignons", price: "1200 DA" },
      { name: "REGINA", desc: "Chorizo fumé, champignons", price: "1300 DA" },
      { name: "4 FROMAGES", desc: "Brie, bleu, chèvre", price: "1200 DA" },
      { name: "4 SAISONS", desc: "Jambon de dinde, poivrons, champignons, oignons confits", price: "1300 DA" },
      { name: "MEDITERRANEENNE", desc: "Fruits de mer marinés à l'huile d'olives, ail, persil", price: "1800 DA" },
      { name: "CALZONE", desc: "Jambon de dinde à la provençale, viande hachée, oeuf", price: "1200 DA" },
      { name: "COUNTRY", desc: "Viande hachée, poivrons, oignons confits", price: "1100 DA" },
      { name: "ORIENTALE", desc: "Merguez, oignons confits, poivrons marinés, oeuf", price: "1200 DA" },
    ],
    supplements: [
      { name: "BURATA", price: "700 DA" },
      { name: "SAUMON", price: "500 DA" },
      { name: "AUTRE SUPPLEMENT", price: "300 DA" }
    ]
  },
  {
    title: "PIZZA",
    subtitle: "BASE CREME FRAICHE & MOZZARELLA",
    image: "/pizza2.jpg",
    items: [
      { name: "PAYSANNE", desc: "Lardons, poulet fumé, champignons", price: "1300 DA" },
      { name: "FERMIERE", desc: "Poulet fumé, champignons, pommes de terre", price: "1200 DA" },
      { name: "CHEVRE", desc: "Viande hachée, chèvre, oignons confits", price: "1200 DA" },
      { name: "SUPREME", desc: "Jambon de dinde nature, oignons confits, pommes de terres", price: "1200 DA" },
      { name: "MILANO", desc: "Lardons, pommes de terre, oignons confits, olives noires, oeuf", price: "1300 DA" },
      { name: "NORVEGIENNE", desc: "Saumon, citron", price: "1500 DA" },
    ],
    specialites: {
      title: "NOS SPECIALITES",
      items: [
        { name: "LA PASTRAMI", desc: "Base tomate, mozzarella, pastrami de boeuf, tomate séchée, oignons confits", price: "1300 DA" },
        { name: "REBLOCHON", desc: "Sauce courgette, mozzarella, lardons reblochon, oignons confits, pomme de terre", price: "1300 DA" },
        { name: "BOURSIN", desc: "Base crème fraiche, mozzarella, viande hachée, pomme de terre, boursin, olives noires", price: "1300 DA" },
        { name: "SALMYSSIA", desc: "Base tomate, mozzarella, viande hachée, merguez, poivrons marinés, oignons confits, oeuf, olives noires", price: "1200 DA" },
        { name: "CHEVRE MIEL", desc: "Base crème fraiche, mozzarella, noix, confiture de figues, chèvre, miel", price: "1400 DA" },
        { name: "BUFFALO", desc: "Base tomate, mozzarella, chorizo fumé, viande hachée, poivrons marinés, champignon, sauce barbecue", price: "1500 DA" },
      ]
    }
  },
  {
    title: "FRESH DRINKS",
    subtitle: "MIXOLOGIES & MOJITOS",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2157&auto=format&fit=crop",
    sections: [
      {
        title: "MIXOLOGIES",
        items: [
          { name: "SUN FLOWER", desc: "Fraise, citron, ananas", price: "650 DA" },
          { name: "BORA BORA", desc: "Fruit de passion, citron, ananas", price: "650 DA" },
          { name: "PINA COLADA", desc: "Coco, ananas", price: "600 DA" },
          { name: "CIMA FORO ROSO", desc: "Citron, ananas, orange", price: "650 DA" },
          { name: "EXOTIQUE", desc: "Fruit de la passion, citron, pomme verte, mangue", price: "650 DA" },
        ]
      },
      {
        title: "MOJITOS",
        items: [
          { name: "MOJITO CLASSIQUE", desc: "Citron, menthe", price: "500 DA" },
          { name: "MOJITO STRAWBERRY", desc: "Fraise, citron, menthe", price: "600 DA" },
          { name: "MOJITO BLUE HAWAI", desc: "Citron, menthe, curaçao", price: "600 DA" },
          { name: "MOJITO AGRUME", desc: "Citron, menthe, agrumes", price: "500 DA" },
          { name: "MOJITO COLA", desc: "Citron, menthe, cola", price: "500 DA" },
        ]
      }
    ]
  },
  {
    title: "FRESH DRINKS",
    subtitle: "COCKTAILS & JUS FRAIS",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
    sections: [
      {
        title: "COCKTAILS",
        items: [
          { name: "LA FRANI", desc: "Fraise, banane", price: "700 DA" },
          { name: "FRUITS DE SAISON", price: "650 DA" },
          { name: "LE M&B", desc: "Melon, banane", price: "650 DA" },
          { name: "LE RIP", desc: "Raisin, pêche", price: "700 DA" },
        ]
      },
      {
        title: "JUS FRAIS",
        items: [
          { name: "JUS FRAISE", price: "600 DA" },
          { name: "JUS CITRON", price: "600 DA" },
          { name: "JUS BANANE", price: "600 DA" },
          { name: "JUS ORANGE", price: "600 DA" },
        ]
      }
    ],
    iceDrinks: {
      title: "ICE DRINKS",
      items: [
        { name: "ICE TEA PECHE", price: "450 DA" },
        { name: "ICE TEA CITRON", price: "450 DA" },
        { name: "ICE TEA ORANGE", price: "450 DA" },
        { name: "ICE LATE CARAMEL", price: "400 DA" },
        { name: "ICE MOCACCINO", price: "500 DA" },
      ]
    },
    supplement: { name: "SUPPLEMENT", desc: "Kitkat, Mars, Snikers", price: "250 DA" }
  },
  {
    title: "FRESH DRINKS",
    subtitle: "MILKSHAKES & BOISSON",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop",
    sections: [
      {
        title: "MILKSHAKES",
        items: [
          { name: "VANILLE", price: "600 DA" },
          { name: "FRAISE", price: "600 DA" },
          { name: "CHOCOLAT", price: "600 DA" },
          { name: "BANANE", price: "600 DA" },
          { name: "NOISETTE", price: "600 DA" },
        ]
      },
      {
        title: "BOISSON",
        items: [
          { name: "EAU MINERALE EN VERRE 1L", price: "300 DA" },
          { name: "EAU 1L", price: "150 DA" },
          { name: "HAMMOUD EN VERRE", price: "150 DA" },
          { name: "HAMMOUD CANETTE", price: "150 DA" },
        ]
      }
    ]
  },
  {
    title: "HOT DRINKS",
    image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1974&auto=format&fit=crop",
    items: [
      { name: "CAFE L'OR", price: "300 DA" },
      { name: "CAFE CAPS", price: "150 DA" },
      { name: "CAFE AU LAIT", desc: "400 DA(CAPS) / 500 DA(L'OR)", price: "" },
      { name: "CAFE MOCCA", price: "500 DA" },
      { name: "CHOCOLAT CHAUD", price: "400 DA" },
      { name: "TISANE", price: "300 DA" },
      { name: "CAPPUCCINO", price: "350 DA" },
      { name: "MOCACCINO", price: "600 DA" },
      { name: "MACCHIATO", price: "400 DA" },
      { name: "LATTE CARAMEL", price: "400 DA" },
      { name: "CAFE LATTE", price: "500 DA" },
      { name: "THE INFUSION", price: "300 DA" },
    ]
  },
  {
    title: "DESSERT",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop",
    items: [
      { name: "CHEESECAKE BUENO", price: "450 DA" },
      { name: "CHEESECAKE CHOCOLAT NOISETTE", price: "450 DA" },
      { name: "CHEESECAKE LOTUS", price: "500 DA" },
      { name: "CHEESECAKE FRUITS ROUGE", price: "500 DA" },
      { name: "CHEESECAKE PISTACHE", price: "600 DA" },
      { name: "FONDANT CHOCOLAT AVEC FRUIT", price: "500 DA" },
      { name: "COOKIES CHOCOLAT", price: "300 DA" },
      { name: "COOKIES VANILLE", price: "300 DA" },
      { name: "COOKIES PISTACHE", price: "350 DA" },
      { name: "CREME BRULEE", price: "400 DA" },
      { name: "PANNA COTTA", price: "500 DA" },
    ]
  }
];

const PisaTower = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none overflow-hidden">
    <svg viewBox="0 0 100 200" className="h-[120%] w-auto transform -rotate-3">
      <path d="M30 180 L70 180 L65 20 L35 20 Z" fill="currentColor" />
      <rect x="32" y="30" width="36" height="4" fill="currentColor" />
      <rect x="33" y="50" width="34" height="4" fill="currentColor" />
      <rect x="34" y="70" width="32" height="4" fill="currentColor" />
      <rect x="35" y="90" width="30" height="4" fill="currentColor" />
      <rect x="36" y="110" width="28" height="4" fill="currentColor" />
      <rect x="37" y="130" width="26" height="4" fill="currentColor" />
      <rect x="38" y="150" width="24" height="4" fill="currentColor" />
    </svg>
  </div>
);

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    if (currentPage + newDirection >= 0 && currentPage + newDirection < menuPages.length) {
      setDirection(newDirection);
      setCurrentPage(currentPage + newDirection);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const page = menuPages[currentPage];

  return (
    <section id="menu" className="py-24 bg-[#050505] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Logo className="w-24 h-24" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Digital <span className="text-brand-red">Menu</span>
          </motion.h2>
          <p className="text-white/50 text-sm tracking-widest uppercase">Drag the edge or click to flip pages</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto perspective-2000">
          {/* Book Container */}
          <motion.div 
            layout
            className="relative w-full flex flex-col md:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-2xl overflow-visible paper-texture text-[#1a1a1a] transition-all duration-500 ease-in-out"
          >
            
            {/* Central Spine (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-30 bg-gradient-to-r from-black/20 via-black/40 to-black/20 pointer-events-none shadow-inner" />

            {/* Left Side: Image / Static Page */}
            <div className="hidden md:block w-1/2 relative overflow-hidden border-r border-black/10 z-10 min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={page.image}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    alt="Menu Preview"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Content (The Flipping Page) */}
            <div className="w-full md:w-1/2 relative z-20 min-h-[600px] flex flex-col">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  initial={{ 
                    rotateY: direction > 0 ? 90 : -90,
                    opacity: 0,
                    transformOrigin: direction > 0 ? "left" : "right"
                  }}
                  animate={{ 
                    rotateY: 0,
                    opacity: 1,
                    transition: { 
                      type: "spring", 
                      stiffness: 70, 
                      damping: 15,
                      mass: 1
                    }
                  }}
                  exit={{ 
                    rotateY: direction > 0 ? -90 : 90,
                    opacity: 0,
                    transition: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="w-full p-8 md:p-12 flex flex-col paper-texture relative cursor-grab active:cursor-grabbing shadow-[-20px_0_50px_-10px_rgba(0,0,0,0.1)] h-full"
                >
                  <PisaTower />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-1">{page.title}</h3>
                      {page.subtitle && (
                        <p className="text-brand-red text-xs font-bold tracking-widest uppercase">{page.subtitle}</p>
                      )}
                    </div>

                    <div className="space-y-6 pb-16">
                      {/* Render Items */}
                      {page.items && (
                        <div className="grid grid-cols-1 gap-4">
                          {page.items.map((item, idx) => (
                            <div key={idx} className="flex flex-col">
                              <div className="flex justify-between items-baseline border-b border-black/10 pb-1">
                                <span className="font-serif font-bold text-sm md:text-base">{item.name}</span>
                                <span className="font-bold text-xs md:text-sm ml-2 whitespace-nowrap">{item.price}</span>
                              </div>
                              {item.desc && <span className="text-[10px] md:text-xs text-black/60 italic mt-0.5">{item.desc}</span>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Render Specialites */}
                      {page.specialites && (
                        <div className="mt-8">
                          <h4 className="text-brand-red text-center font-serif font-bold text-xl mb-4">{page.specialites.title}</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {page.specialites.items.map((item, idx) => (
                              <div key={idx} className="flex flex-col">
                                <div className="flex justify-between items-baseline border-b border-black/10 pb-1">
                                  <span className="font-serif font-bold text-sm md:text-base">{item.name}</span>
                                  <span className="font-bold text-xs md:text-sm ml-2 whitespace-nowrap">{item.price}</span>
                                </div>
                                {item.desc && <span className="text-[10px] md:text-xs text-black/60 italic mt-0.5">{item.desc}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Render Sections (Drinks) */}
                      {page.sections && page.sections.map((section, sIdx) => (
                        <div key={sIdx} className="mt-4">
                          <h4 className="text-brand-red text-center font-serif font-bold text-xl mb-4">{section.title}</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {section.items.map((item, idx) => (
                              <div key={idx} className="flex flex-col">
                                <div className="flex justify-between items-baseline border-b border-black/10 pb-1">
                                  <span className="font-serif font-bold text-sm md:text-base">{item.name}</span>
                                  <span className="font-bold text-xs md:text-sm ml-2 whitespace-nowrap">{item.price}</span>
                                </div>
                                {item.desc && <span className="text-[10px] md:text-xs text-black/60 italic mt-0.5">{item.desc}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Render Ice Drinks */}
                      {page.iceDrinks && (
                        <div className="mt-8">
                          <h4 className="text-brand-red text-center font-serif font-bold text-xl mb-4">{page.iceDrinks.title}</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {page.iceDrinks.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-baseline border-b border-black/10 pb-1">
                                <span className="font-serif font-bold text-sm md:text-base">{item.name}</span>
                                <span className="font-bold text-xs md:text-sm ml-2 whitespace-nowrap">{item.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Render Supplements */}
                      {page.supplements && (
                        <div className="mt-8 grid grid-cols-1 gap-2">
                          {page.supplements.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-baseline text-xs font-bold border-b border-black/5">
                              <span>{item.name}</span>
                              <span>{item.price}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Render Single Supplement */}
                      {page.supplement && (
                        <div className="mt-8 p-4 border-2 border-black/10 rounded-lg text-center">
                          <span className="block font-serif font-bold text-brand-red">{page.supplement.name}</span>
                          <span className="block text-[10px] text-black/60 uppercase tracking-widest mb-1">{page.supplement.desc}</span>
                          <span className="font-bold">{page.supplement.price}</span>
                        </div>
                      )}
                    </div>

                    {/* Italian Flag Bottom Decoration */}
                    <div className="mt-auto pt-8 flex justify-center">
                      <div className="flex h-1 w-32 rounded-full overflow-hidden">
                        <div className="w-1/3 bg-brand-green" />
                        <div className="w-1/3 bg-white" />
                        <div className="w-1/3 bg-brand-red" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8 z-40 bg-black/5 backdrop-blur-sm px-6 py-2 rounded-full">
              <button
                onClick={() => paginate(-1)}
                disabled={currentPage === 0}
                className={`p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all ${currentPage === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 opacity-40" />
                <span className="text-[10px] font-bold tracking-widest opacity-40">
                  {currentPage + 1} / {menuPages.length}
                </span>
              </div>
              <button
                onClick={() => paginate(1)}
                disabled={currentPage === menuPages.length - 1}
                className={`p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all ${currentPage === menuPages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Page Stack Effect (Desktop) */}
          <div className="hidden md:block absolute -right-2 top-2 w-full h-full bg-white/5 rounded-2xl -z-10" />
          <div className="hidden md:block absolute -right-4 top-4 w-full h-full bg-white/5 rounded-2xl -z-20" />
        </div>
      </div>
    </section>
  );
}
