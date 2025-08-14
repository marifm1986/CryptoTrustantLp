import React from 'react';
interface HeroProps {
  openForm: () => void;
}
export const Hero: React.FC<HeroProps> = ({
  openForm
}) => {
  return <section id="hero" className="w-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--ring))] text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Protect Your Digital Assets – Create a Will Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Secure your crypto future with a legally binding will tailored for
            your digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={openForm} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Get Started
            </button>
            <a href="#how-it-works" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-colors text-center text-lg">
              Learn More
            </a>
          </div>
          <div className="flex mt-8 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">Certified Legal Experts</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm">
                Secure Blockchain-Based Will Creation
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-[hsl(var(--ring))] rounded-lg transform rotate-3 opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Digital asset protection" className="relative z-10 rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>;
};