import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
interface HeaderProps {
  openForm: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  openForm
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/public/logo.png"
            alt="Logo"
            className={`h-8 w-auto md:h-10 transition-all duration-300 ${isScrolled ? '' : 'filter brightness-0 invert'}`}
            style={{ maxWidth: '250px', height: 'auto' }}
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            Home
          </a>
          <a href="#about" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            About
          </a>
          <a href="#how-it-works" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            How It Works
          </a>
          <a href="#features" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            Features
          </a>
          <a href="#testimonials" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            Testimonials
          </a>
          <a href="#faq" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            FAQ
          </a>
          <a href="#contact" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`}>
            Contact
          </a>
        </nav>
  <button onClick={openForm} className={`${isScrolled ? 'bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))]' : 'bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] shadow-md'} font-semibold py-2 px-4 rounded-md transition-colors hidden md:block`}>
          Start Your Will
        </button>
        {/* Mobile Menu Button */}
  <button className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))]' : 'text-white'} md:hidden`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className={`md:hidden w-full py-4 px-4 shadow-lg ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-80'}`}>
          <nav className="flex flex-col space-y-4">
            <a href="#" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#how-it-works" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#features" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#testimonials" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className={`${isScrolled ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]' : 'text-white hover:text-gray-200'} font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <button onClick={() => {
          openForm();
          setIsMobileMenuOpen(false);
        }} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-semibold py-2 px-4 rounded-md transition-colors w-full">
              Start Your Will
            </button>
          </nav>
        </div>}
    </header>;
};