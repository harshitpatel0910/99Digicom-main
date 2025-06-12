
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ShoppingCart, Laptop, DollarSign, Heart } from 'lucide-react';

const Domains = () => {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      id: 'digital-commerce',
      icon: ShoppingCart,
      title: 'Digital Commerce',
      domain: '99digicom.com',
      color: 'blue',
      overview: 'Comprehensive e-commerce solutions helping businesses establish and grow their online presence through ONDC integration and co-branding opportunities.',
      services: [
        'ONDC marketplace integration',
        'E-commerce platform development',
        'Co-branding for product lines',
        'Digital catalog management',
        'Payment gateway integration',
        'Inventory management systems',
        'Customer relationship management',
        'Analytics and reporting tools',
      ],
      partners: [
        { name: '99bowls', description: 'Healthy food delivery and meal solutions' },
        { name: 'Nutraio', description: 'Nutritional supplements and wellness products' },
        { name: 'GudGoodlife', description: 'Lifestyle and wellness e-commerce platform' },
        { name: 'Perlmillet', description: 'Organic and sustainable food products' },
        { name: 'CHAAH Tea', description: 'Premium tea blends and accessories' },
      ],
    },
    {
      id: 'it-marketing',
      icon: Laptop,
      title: 'IT & Marketing',
      domain: '99infosource.com',
      color: 'green',
      overview: 'Complete outsourcing solutions and digital strategy services to help businesses optimize operations and enhance their market presence.',
      services: [
        'Knowledge Process Outsourcing (KPO)',
        'Business Process Outsourcing (BPO)',
        'Legal Process Outsourcing (LPO)',
        'Digital marketing strategy',
        'IT infrastructure development',
        'Software development services',
        'Content creation and management',
        'SEO and digital advertising',
      ],
      partners: [
        { name: 'eBranding Studio', description: 'Digital branding and creative solutions' },
        { name: 'Biztech.one', description: 'Technology consulting and development' },
        { name: 'Doctor Dairy', description: 'Healthcare and dairy industry solutions' },
        { name: 'ARKinfoserv', description: 'Information technology services and consulting' },
      ],
    },
    {
      id: 'financial-services',
      icon: DollarSign,
      title: 'Financial Services',
      domain: '99finserv.com',
      color: 'purple',
      overview: 'Comprehensive financial solutions including SME loan facilitation and customized funding support to help businesses access the capital they need.',
      services: [
        'SME loan facilitation',
        'Working capital financing',
        'Equipment financing',
        'Business credit solutions',
        'Financial planning and advisory',
        'Investment guidance',
        'Insurance solutions',
        'Tax planning and compliance',
      ],
      partners: [
        { name: 'ICICI Bank', description: 'Leading private sector bank with comprehensive banking services' },
        { name: 'Bank of Baroda', description: 'Public sector bank with extensive branch network' },
        { name: 'Kotak Bank', description: 'Full-service commercial bank offering various financial products' },
        { name: 'Tata Capital', description: 'Financial services company providing diverse funding solutions' },
      ],
    },
    {
      id: 'spiritual-ecosystem',
      icon: Heart,
      title: 'Spiritual Ecosystem',
      domain: 'harmonyhights.com',
      color: 'orange',
      overview: 'Holistic wellness solutions encompassing ancient wisdom and modern practices to promote physical, mental, and spiritual well-being.',
      services: [
        'Yoga and meditation programs',
        'Panchkarma treatments',
        'Ayurvedic consultations',
        'Astrology and horoscope services',
        'Ritual ceremonies (Karmkand)',
        'Star gazing and cosmic awareness',
        'Spiritual counseling',
        'Wellness retreats and workshops',
      ],
      partners: [
        { name: 'Joshidada.com', description: 'Astrology and spiritual guidance platform' },
        { name: 'BigBirthday.in', description: 'Event planning with spiritual and cultural elements' },
        { name: 'Lilvan.com', description: 'Ayurvedic products and wellness solutions' },
        { name: 'Yoga Studio', description: 'Professional yoga instruction and wellness programs' },
      ],
    },
  ];

  const getColorClasses = (color: string, variant: 'primary' | 'secondary' | 'accent' = 'primary') => {
    const colors = {
      blue: {
        primary: 'text-blue-600 bg-blue-50 border-blue-200',
        secondary: 'bg-blue-500 text-white',
        accent: 'text-blue-600',
      },
      green: {
        primary: 'text-green-600 bg-green-50 border-green-200',
        secondary: 'bg-green-500 text-white',
        accent: 'text-green-600',
      },
      purple: {
        primary: 'text-purple-600 bg-purple-50 border-purple-200',
        secondary: 'bg-purple-500 text-white',
        accent: 'text-purple-600',
      },
      orange: {
        primary: 'text-orange-600 bg-orange-50 border-orange-200',
        secondary: 'bg-orange-500 text-white',
        accent: 'text-orange-600',
      },
    };
    return colors[color as keyof typeof colors][variant];
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
                Business Domains
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our comprehensive portfolio across four strategic business verticals
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === index
                        ? getColorClasses(domain.color, 'secondary')
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{domain.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Content */}
            <div className="max-w-6xl mx-auto">
              {domains.map((domain, index) => {
                if (activeTab !== index) return null;
                
                const Icon = domain.icon;
                return (
                  <div key={index} className="space-y-8">
                    {/* Domain Header */}
                    <div className={`bg-card border rounded-2xl p-8 ${getColorClasses(domain.color)}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(domain.color)}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-card-foreground">
                            {domain.title}
                          </h2>
                          <p className="text-muted-foreground font-medium text-lg">
                            {domain.domain}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {domain.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Services */}
                      <div className="bg-card border rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                          Services Offered
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {domain.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(domain.color, 'secondary')}`}></div>
                              <span className="text-muted-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Partners */}
                      <div className="bg-card border rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                          Key Partners
                        </h3>
                        <div className="space-y-4">
                          {domain.partners.map((partner, partnerIndex) => (
                            <div key={partnerIndex} className="bg-muted/50 rounded-lg p-4">
                              <h4 className={`font-semibold mb-2 ${getColorClasses(domain.color, 'accent')}`}>
                                {partner.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {partner.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary-foreground">
                Interested in Partnering with Us?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join our ecosystem and discover new opportunities across our business domains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join"
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  Apply for Partnership
                </a>
                <a
                  href="/contact"
                  className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Domains;
