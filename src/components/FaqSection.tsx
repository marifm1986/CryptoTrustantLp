import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'How do I create a will for my crypto assets?',
    answer: 'Creating a will for your crypto assets with CryptoTrustandWill is simple. Start by filling out our form, detailing your digital assets, and specifying beneficiaries. Our legal team will then help you create a legally binding document that ensures your crypto assets are transferred according to your wishes.'
  }, {
    question: 'What types of digital assets can be included in my will?',
    answer: 'You can include various types of digital assets in your will, including cryptocurrencies (Bitcoin, Ethereum, etc.), NFTs, tokens, and other blockchain-based assets. Our platform is designed to accommodate the unique characteristics of different digital assets.'
  }, {
    question: 'Is my will legally recognized?',
    answer: 'Yes, all wills created through CryptoTrustandWill are legally recognized and binding. Our documents comply with legal requirements across all 50 states and are reviewed by legal experts specializing in digital asset law to ensure validity.'
  }, {
    question: 'What happens to my digital assets when I pass away?',
    answer: 'When you pass away, your designated executor will follow the instructions in your will to transfer your digital assets to your beneficiaries. Our platform provides detailed instructions for executors, including how to access and transfer different types of crypto assets.'
  }, {
    question: 'Do I need a lawyer to create my will?',
    answer: "While you don't need to hire a separate lawyer, our service includes legal review by crypto-law specialists. This ensures your will is legally sound and properly addresses the unique aspects of digital asset inheritance."
  }];
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-20 bg-[hsl(var(--secondary))] w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Find answers to common questions about crypto wills and digital
            asset inheritance.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button className="w-full flex justify-between items-center p-5 text-left focus:outline-none" onClick={() => toggleFaq(index)} aria-expanded={openIndex === index}>
                <h3 className="text-lg font-semibold text-[hsl(var(--primary))]">
                  {faq.question}
                </h3>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-[hsl(var(--ring))]" /> : <ChevronDown className="w-5 h-5 text-[hsl(var(--ring))]" />}
              </button>
              {openIndex === index && <div className="p-5 pt-0 border-t border-gray-200">
                  <p className="text-[hsl(var(--muted-foreground))]">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};