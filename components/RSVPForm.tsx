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

      // Send email notification to Erin (don't wait for it to complete)
      try {
        await fetch('/api/notify-rsvp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim() || null,
          }),
        });
      } catch (notificationError) {
        // Log but don't fail the RSVP submission if notification fails
        console.error('Failed to send notification email:', notificationError);
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
      <div className="bg-gradient-to-br from-emerald-50/70 via-rose-50/40 to-emerald-50/70 rounded-3xl p-12 border-2 border-emerald-100/50 text-center shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mb-6 shadow-lg animate-float">
            <span className="text-5xl">✓</span>
          </div>
          <h3 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-700 to-rose-600 bg-clip-text text-transparent">
              Thank You!
            </span>
          </h3>
          <p className="font-dancing text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500 mb-2">
            We&apos;ve received your RSVP
          </p>
          <p className="font-poppins text-lg text-emerald-800 mb-8">
            We can&apos;t wait to celebrate with you! 💕
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="group inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-poppins font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl btn-romantic"
          >
            <span className="flex items-center gap-2">
              Submit Another RSVP
              <span className="group-hover:rotate-12 transition-transform">💌</span>
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50/70 via-rose-50/40 to-emerald-50/70 rounded-3xl p-8 lg:p-12 border-2 border-emerald-100/50 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-rose-100 rounded-full mb-6 mx-auto shadow-lg animate-float">
          <span className="text-3xl">💌</span>
        </div>
        <h3 className="font-playfair text-4xl lg:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-emerald-700 to-rose-600 bg-clip-text text-transparent">
            Ready to Celebrate?
          </span>
        </h3>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-400"></div>
          <span className="text-emerald-400">❦</span>
          <div className="w-16 h-px bg-gradient-to-r from-emerald-400 via-rose-400 to-transparent"></div>
        </div>
        <p className="font-dancing text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500 mb-2 text-center">
          We can&apos;t wait to celebrate with you!
        </p>
        <p className="font-poppins text-lg text-emerald-800 mb-8 text-center flex items-center justify-center gap-2">
          <span>📅</span>
          Please RSVP by December 19th
        </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-poppins font-semibold text-emerald-900 mb-2 flex items-center gap-2">
            <span>👤</span>
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3.5 rounded-xl border-2 border-emerald-200/50 bg-white/80 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 outline-none font-poppins text-emerald-900 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-poppins font-semibold text-emerald-900 mb-2 flex items-center gap-2">
            <span>📧</span>
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3.5 rounded-xl border-2 border-emerald-200/50 bg-white/80 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 outline-none font-poppins text-emerald-900 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-poppins font-semibold text-emerald-900 mb-2 flex items-center gap-2">
            <span>💬</span>
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-5 py-3.5 rounded-xl border-2 border-emerald-200/50 bg-white/80 backdrop-blur-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 outline-none font-poppins text-emerald-900 resize-none transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
            placeholder="Leave us a message..."
          />
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-4 shadow-md">
            <p className="font-poppins text-sm text-red-800 flex items-center gap-2">
              <span>⚠️</span>
              {errorMessage}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-700 disabled:from-emerald-300 disabled:via-emerald-300 disabled:to-emerald-300 disabled:cursor-not-allowed text-white font-poppins font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl btn-romantic disabled:shadow-none"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit RSVP
                  <span className="group-hover:translate-x-1 transition-transform">✨</span>
                </>
              )}
            </span>
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

