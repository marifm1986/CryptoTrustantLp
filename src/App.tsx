import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WillForm } from './components/WillForm';
export function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return <div className="flex flex-col min-h-screen bg-white">
      <Toaster position="top-center" />
      <Header openForm={openForm} />
      <main className="flex-grow">
        <Hero openForm={openForm} />
        <HowItWorks openForm={openForm} />
        <Features />
        <Testimonials />
        <CtaSection openForm={openForm} />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      {isFormOpen && <WillForm isOpen={isFormOpen} onClose={closeForm} />}
    </div>;
}