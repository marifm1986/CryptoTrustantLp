import React from 'react';
import { Shield, Scale, Database, Users } from 'lucide-react';
export const Features = () => {
  return <section id="features" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            Features and Benefits
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Our platform offers unique solutions designed specifically for
            cryptocurrency owners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg flex">
            <div className="mr-6">
        <div className="w-16 h-16 bg-[hsl(var(--ring))] rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
        <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">Secure</h3>
        <p className="text-[hsl(var(--muted-foreground))]">
                Blockchain-based encryption ensures your will and assets
                information remain private and tamper-proof. Our multi-layered
                security protocols protect your sensitive data.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
      <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg flex">
            <div className="mr-6">
        <div className="w-16 h-16 bg-[hsl(var(--ring))] rounded-lg flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
        <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                Legal Validity
              </h3>
        <p className="text-[hsl(var(--muted-foreground))]">
                Our wills are officially recognized and legally binding in all
                50 states. Each document is reviewed by legal experts
                specializing in digital asset law.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
      <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg flex">
            <div className="mr-6">
        <div className="w-16 h-16 bg-[hsl(var(--ring))] rounded-lg flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
        <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                Crypto-specific
              </h3>
        <p className="text-[hsl(var(--muted-foreground))]">
                Tailored solutions for different digital asset types including
                cryptocurrencies, NFTs, and other blockchain-based assets. We
                understand the unique requirements of digital inheritance.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
      <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg flex">
            <div className="mr-6">
        <div className="w-16 h-16 bg-[hsl(var(--ring))] rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
        <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                Expert Consultation
              </h3>
        <p className="text-[hsl(var(--muted-foreground))]">
                Access to crypto-law specialists who can provide guidance and
                support throughout the process. Our team stays updated with the
                latest regulations in cryptocurrency law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};