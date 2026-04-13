'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-stone-600 mt-6 font-light max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-stone-900 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:border-accent transition-colors bg-white"
                >
                  <option value="">Select a project type</option>
                  <option value="reels">Instagram Reels</option>
                  <option value="youtube">YouTube Edits</option>
                  <option value="short-form">Short-form Content</option>
                  <option value="photo">Photo Editing</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-2">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your vision..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-accent/10 border border-accent text-accent rounded-sm text-sm">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  Direct Contact
                </h3>

                {/* Email */}
                <div className="mb-8 p-6 bg-stone-50 rounded-lg border border-stone-200 hover:border-accent transition-colors">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-stone-600 mb-2 uppercase tracking-wide">Email</p>
                      <a
                        href="mailto:anyapathak01@gmail.com"
                        className="text-lg font-medium text-stone-900 hover:text-accent transition-colors"
                      >
                        anyapathak01@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8 p-6 bg-stone-50 rounded-lg border border-stone-200 hover:border-accent transition-colors">
                  <p className="text-sm font-semibold text-stone-600 mb-4 uppercase tracking-wide">Social Media</p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-stone-900 hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-stone-900 hover:text-accent transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-accent/5 border border-accent rounded-lg">
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  <span className="font-semibold text-stone-900">Quick Response:</span> I typically respond to inquiries within 24 hours. Let&apos;s discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
