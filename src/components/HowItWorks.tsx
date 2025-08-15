import React from 'react';
import { UserPlus, Wallet, FileText, CheckCircle } from 'lucide-react';
interface HowItWorksProps {
  openForm: () => void;
}
export const HowItWorks: React.FC<HowItWorksProps> = ({
  openForm
}) => {
  return <section id="how-it-works" className="py-20 bg-[hsl(var(--secondary))] w-full">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
          How it Works
        </h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
          Our guided online platform simplifies creating or updating your will or trust.
          Need expert input? Our attorneys are ready to offer one-on-one support.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[hsl(var(--ring))/10] rounded-full flex items-center justify-center mb-6">
            <UserPlus className="w-7 h-7 text-[hsl(var(--ring))]" />
          </div>
          <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
            1. Create Your Account
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Register with your email and get started with the onboarding
            process.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[hsl(var(--ring))/10] rounded-full flex items-center justify-center mb-6">
            <Wallet className="w-7 h-7 text-[hsl(var(--ring))]" />
          </div>
          <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
            2. Enter Your Crypto Assets
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Securely list your digital assets including wallets,
            cryptocurrencies, and tokens.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[hsl(var(--ring))/10] rounded-full flex items-center justify-center mb-6">
            <FileText className="w-7 h-7 text-[hsl(var(--ring))]" />
          </div>
          <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
            3. Personalize Your Will
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Customize your will for your crypto assets and designate your
            beneficiaries.
          </p>
        </div>
        {/* Step 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[hsl(var(--ring))/10] rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-7 h-7 text-[hsl(var(--ring))]" />
          </div>
          <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
            4. Review & Sign
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            Legal experts review your document, you sign digitally, and we
            provide a backup plan.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button onClick={openForm} className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-bold py-3 px-8 rounded-md transition-colors text-lg">
          Start Your Will / Trust
        </button>
      </div>
    </div>
  </section>;
};