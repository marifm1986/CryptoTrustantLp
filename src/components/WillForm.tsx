import React, { useState } from 'react';
import { X } from 'lucide-react';
import { send } from '@emailjs/browser';
import { toast } from 'sonner';
interface WillFormProps {
  isOpen: boolean;
  onClose: () => void;
}
export const WillForm: React.FC<WillFormProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    formType: '',
    hasBeneficiary: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Note: In a real implementation, you would replace these with your actual EmailJS service, template, and user IDs
      await send('service_dmcg5kd', 'template_o37ufvd', {
        fromName: `${formData.firstName} ${formData.lastName}`,
        user_email: formData.email,
        user_phone: formData.phone,
        user_beneficiary: formData.hasBeneficiary,
        formType: formData.formType,
        user_comments: formData.comments
      }, 'rH43x0yeLSByYteCS');
      toast.success('Thank you! Our team will reach out to finalize your will.');
      onClose();
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[hsl(var(--primary))]">
            Start Your Will / Trust
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close form">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
                First Name *
              </label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="First name" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
                Last Name *
              </label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Last name" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
              Email Address *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Your phone number" />
          </div>

          <div>
            <label htmlFor="formType" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
              Are you interested in a Trust or a Will? *
            </label>
            <select
              id="formType"
              name="formType"
              value={formData.formType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            >
              <option value="">Select an option</option>
              <option value="Trust">Trust</option>
              <option value="Will">Will</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="hasBeneficiary" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
              Have a Beneficiary in Mind?
            </label>
            <select id="hasBeneficiary" name="hasBeneficiary" value={formData.hasBeneficiary} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]">
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-[hsl(var(--muted-foreground))] mb-1">
              Comments/Additional Info
            </label>
            <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]" placeholder="Any additional information or questions"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className={`w-full bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand-hover))] text-[hsl(var(--brand-foreground))] font-bold py-3 px-4 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isSubmitting ? 'Submitting...' : 'Get Started'}
          </button>
        </form>
      </div>
    </div>
  </div>;
};