import React from 'react';

export default function Logo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <div className={`relative rounded-full overflow-hidden border-2 border-brand-red/30 bg-black flex items-center justify-center logo-glow ${className}`}>
      <img 
        src="/logo.png" 
        alt="Delizia Pizza Logo" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback if logo.png is not found
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<div class="text-brand-red font-serif font-black text-center px-2">DELIZIA PIZZA</div>';
        }}
      />
    </div>
  );
}
