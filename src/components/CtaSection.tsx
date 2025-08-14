import React from 'react';
interface CtaSectionProps {
  openForm: () => void;
}
export const CtaSection: React.FC<CtaSectionProps> = ({
  openForm
}) => {
  return <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--ring))] w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Peace of Mind Today
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Secure your crypto assets and protect your legacy with a legally sound
          will. Don't leave your digital wealth to chance.
        </p>
  <button onClick={openForm} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-bold py-4 px-10 rounded-md transition-colors text-xl shadow-lg">
          Get Started
        </button>
      </div>
    </section>;
};