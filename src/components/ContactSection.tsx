import React, { useState } from 'react';
import { send } from '@emailjs/browser';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await send('service_dmcg5kd', 'template_jzlj6ts', {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      }, 'rH43x0yeLSByYteCS');
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Contact Us</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">Have questions about creating a will for your crypto assets? Get in touch with our team.</p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Your email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Your message"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-bold py-3 px-4 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Sending...' : 'Get in Touch'}
              </button>
            </form>
          </div>

          <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-6">Other Ways to Reach Us</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[hsl(var(--ring))] mb-1">Email</h4>
                <p className="text-[hsl(var(--muted-foreground))]">support@cryptotrustandwill.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-[hsl(var(--ring))] mb-1">Phone</h4>
                <p className="text-[hsl(var(--muted-foreground))]">(800) 123-4567</p>
              </div>

              <div>
                <h4 className="font-semibold text-[hsl(var(--ring))] mb-1">Office Hours</h4>
                <p className="text-[hsl(var(--muted-foreground))]">Monday - Friday: 9am - 5pm EST</p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Our team of specialists is ready to assist you with any questions about creating a will or trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};