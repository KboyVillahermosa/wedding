'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('Please enter your name');
      }
      if (!formData.email.trim()) {
        throw new Error('Please enter your email');
      }

      // Insert RSVP into Supabase
      const { error } = await supabase
        .from('rsvps')
        .insert({
          primary_name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim() || null,
          submitted_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        });
        throw new Error(error.message || error.details || 'Failed to submit RSVP. Please check your connection and try again.');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error: unknown) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
      let message = 'Failed to submit RSVP. Please try again.';
      
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'object' && error !== null) {
        // Handle Supabase error objects
        const supabaseError = error as { message?: string; details?: string; hint?: string };
        message = supabaseError.message || supabaseError.details || supabaseError.hint || message;
      }
      
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-emerald-50/50 rounded-2xl p-12 border border-emerald-100 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="font-playfair text-4xl font-bold mb-4 text-emerald-900">
          Thank You!
        </h3>
        <p className="font-dancing text-xl text-emerald-700 mb-2">
          We&apos;ve received your RSVP
        </p>
        <p className="font-poppins text-lg text-emerald-800 mb-8">
          We can&apos;t wait to celebrate with you!
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-poppins font-semibold text-lg px-12 py-4 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Submit Another RSVP
        </button>
      </div>
    );
  }

  return (
    <div className="bg-emerald-50/50 rounded-2xl p-8 lg:p-12 border border-emerald-100">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-6 mx-auto">
        <span className="text-2xl">💌</span>
      </div>
      <h3 className="font-playfair text-4xl font-bold mb-4 text-center text-emerald-900">
        Ready to Celebrate?
      </h3>
      <p className="font-dancing text-xl text-emerald-700 mb-2 text-center">
        We can&apos;t wait to celebrate with you!
      </p>
      <p className="font-poppins text-lg text-emerald-800 mb-8 text-center">
        Please RSVP by December 19th
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-poppins font-medium text-emerald-900 mb-2">
            Your Name <span className="text-emerald-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none font-poppins text-emerald-900"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-poppins font-medium text-emerald-900 mb-2">
            Email <span className="text-emerald-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none font-poppins text-emerald-900"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-poppins font-medium text-emerald-900 mb-2">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none font-poppins text-emerald-900 resize-none"
            placeholder="Leave us a message..."
          />
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="font-poppins text-sm text-red-800">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-poppins font-semibold text-lg px-12 py-4 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
}

