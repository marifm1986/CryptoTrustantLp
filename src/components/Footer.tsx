import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[hsl(var(--primary))] text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[hsl(var(--brand))] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[hsl(var(--brand))] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[hsl(var(--brand))] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[hsl(var(--brand))] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[hsl(var(--brand))] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[hsl(var(--brand))] transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <p className="text-sm text-gray-300 mb-4">
              The information provided on this website does not constitute legal
              advice. Always consult with a qualified attorney for legal
              matters.
            </p>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} CryptoTrustandWill. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};