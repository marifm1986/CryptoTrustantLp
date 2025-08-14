import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: 'Michael Thompson',
    role: 'Crypto Investor',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'CryptoTrustandWill gave me peace of mind knowing my digital assets would be properly handled. The process was straightforward and their legal team was incredibly knowledgeable about crypto regulations.'
  }, {
    name: 'Sarah Johnson',
    role: 'Blockchain Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'As someone deeply involved in the crypto space, I needed a solution that understood the technical aspects of digital asset inheritance. Their service exceeded my expectations with its attention to detail.'
  }, {
    name: 'David Chen',
    role: 'Financial Advisor',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    text: 'I recommend CryptoTrustandWill to all my clients with digital assets. Their legal framework is solid and they stay current with the evolving regulatory landscape around cryptocurrencies.'
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="testimonials" className="py-20 bg-[hsl(var(--primary))] w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from cryptocurrency owners who have secured their digital
            legacy with our services.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Navigation Buttons */}
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 hidden md:block" aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>
          <div className="bg-[hsl(var(--ring))] rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 rounded-full border-4 border-white" />
              </div>
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[hsl(var(--brand))] fill-[hsl(var(--brand))]" />)}
                </div>
                <p className="text-white text-lg mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-300">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop Navigation Button */}
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 hidden md:block" aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 md:hidden">
            <button onClick={prevTestimonial} className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 mr-4" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
          {/* Indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};