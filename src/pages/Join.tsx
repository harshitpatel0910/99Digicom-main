
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    website: '',
    businessType: [],
    businessDescription: '',
    partnershipGoals: '',
    targetAudience: '',
    consent: false,
  });

  const businessTypes = [
    'Digital Commerce',
    'IT & Marketing',
    'Financial Services',
    'Spiritual Wellness',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Consulting',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, consent: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          businessType: checked 
            ? [...prev.businessType, value]
            : prev.businessType.filter(type => type !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership application submitted:', formData);
    alert('Thank you for your partnership application! We will review your submission and get back to you within 3-5 business days.');
    // Reset form
    setFormData({
      fullName: '',
      company: '',
      designation: '',
      email: '',
      phone: '',
      website: '',
      businessType: [],
      businessDescription: '',
      partnershipGoals: '',
      targetAudience: '',
      consent: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Join Our Partnership Network
              </h1>
              <p className="text-xl text-muted-foreground">
                Become part of our thriving ecosystem and unlock new opportunities for growth and collaboration
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border rounded-2xl p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                    Partnership Application Form
                  </h2>
                  <p className="text-muted-foreground">
                    Please fill out the form below to apply for partnership opportunities with 99 Partners. 
                    All fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-card-foreground border-b pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-card-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="designation" className="block text-sm font-medium mb-2 text-card-foreground">
                          Designation *
                        </label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Your role/position"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-card-foreground">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-card-foreground border-b pb-2">
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-2 text-card-foreground">
                        Website (Optional)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-card-foreground border-b pb-2">
                      Business Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-card-foreground">
                        Type of Business * (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {businessTypes.map((type) => (
                          <label key={type} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="businessType"
                              value={type}
                              checked={formData.businessType.includes(type)}
                              onChange={handleInputChange}
                              className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-card-foreground">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessDescription" className="block text-sm font-medium mb-2 text-card-foreground">
                        Describe Your Business *
                      </label>
                      <textarea
                        id="businessDescription"
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-vertical"
                        placeholder="Tell us about your business, products/services, and what makes you unique..."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="partnershipGoals" className="block text-sm font-medium mb-2 text-card-foreground">
                        Partnership Goals *
                      </label>
                      <textarea
                        id="partnershipGoals"
                        name="partnershipGoals"
                        value={formData.partnershipGoals}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-vertical"
                        placeholder="What do you hope to achieve through this partnership? What are your goals and expectations?"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="targetAudience" className="block text-sm font-medium mb-2 text-card-foreground">
                        Target Audience *
                      </label>
                      <textarea
                        id="targetAudience"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-vertical"
                        placeholder="Describe your target market and customer demographics..."
                      ></textarea>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-card-foreground border-b pb-2">
                      Additional Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-card-foreground">
                        Upload Pitch Deck (Optional)
                      </label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          Click to upload or drag and drop your pitch deck
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, PPT, or PPTX (Max 10MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mt-1 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-card-foreground">
                        I consent to 99 Partners collecting and processing my personal information for 
                        the purpose of evaluating partnership opportunities. I understand that my 
                        information will be handled in accordance with the privacy policy. *
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={!formData.consent}
                      className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Submit Partnership Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Happens Next?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Application Review</h3>
                  <p className="text-muted-foreground">
                    Our team will review your application within 3-5 business days
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Initial Discussion</h3>
                  <p className="text-muted-foreground">
                    We'll schedule a call to discuss potential partnership opportunities
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Partnership Agreement</h3>
                  <p className="text-muted-foreground">
                    Finalize partnership terms and begin our collaboration journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Join;
