import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center fade-in-up">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6 fade-in-up">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
        <p className="text-muted-foreground">
          Ready to explore partnership opportunities? Let's start a conversation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="floating-label">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label htmlFor="name">Your Name *</label>
        </div>

        <div className="floating-label">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@company.com"
            required
          />
          <label htmlFor="email">Email Address *</label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="floating-label">
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
          />
          <label htmlFor="company">Company Name</label>
        </div>

        <div className="floating-label">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 pt-6 pb-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            required
          >
            <option value="">Select a subject</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="digital-commerce">Digital Commerce</option>
            <option value="it-marketing">IT & Marketing</option>
            <option value="financial-services">Financial Services</option>
            <option value="spiritual-wellness">Spiritual Wellness</option>
            <option value="general">General Inquiry</option>
          </select>
          <label htmlFor="subject">Subject *</label>
        </div>
      </div>

      <div className="floating-label">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business and partnership goals..."
          rows={6}
          required
        ></textarea>
        <label htmlFor="message">Message *</label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-modern hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-sm text-muted-foreground text-center">
        By submitting this form, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{' '}
        <a href="#" className="text-primary hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
};

export default ContactForm;
