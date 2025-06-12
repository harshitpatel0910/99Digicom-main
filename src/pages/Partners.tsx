
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Laptop, DollarSign, Heart, Plus } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'E-Commerce Partners',
      icon: ShoppingCart,
      color: 'blue',
      partners: [
        { name: '99bowls', description: 'Healthy food delivery and meal solutions for urban lifestyle' },
        { name: 'Nutraio', description: 'Premium nutritional supplements and wellness products' },
        { name: 'GudGoodlife', description: 'Lifestyle and wellness e-commerce platform' },
        { name: 'Perlmillet', description: 'Organic and sustainable food products' },
        { name: 'CHAAH Tea', description: 'Premium tea blends and accessories' },
      ],
    },
    {
      title: 'IT & Marketing Partners',
      icon: Laptop,
      color: 'green',
      partners: [
        { name: 'eBranding Studio', description: 'Digital branding and creative solutions' },
        { name: 'Biztech.one', description: 'Technology consulting and development services' },
        { name: 'Doctor Dairy', description: 'Healthcare and dairy industry technology solutions' },
        { name: 'ARKinfoserv', description: 'Information technology services and consulting' },
      ],
    },
    {
      title: 'Financial Partners',
      icon: DollarSign,
      color: 'purple',
      partners: [
        { name: 'ICICI Bank', description: 'Leading private sector bank with comprehensive banking services' },
        { name: 'Bank of Baroda', description: 'Public sector bank with extensive branch network' },
        { name: 'Kotak Bank', description: 'Full-service commercial bank offering various financial products' },
        { name: 'Tata Capital', description: 'Financial services company providing diverse funding solutions' },
      ],
    },
    {
      title: 'Wellness Partners',
      icon: Heart,
      color: 'orange',
      partners: [
        { name: 'Joshidada.com', description: 'Astrology and spiritual guidance platform' },
        { name: 'BigBirthday.in', description: 'Event planning with spiritual and cultural elements' },
        { name: 'Lilvan.com', description: 'Ayurvedic products and wellness solutions' },
        { name: 'Yoga Studio', description: 'Professional yoga instruction and wellness programs' },
        { name: 'Panchkarma Kutir', description: 'Traditional Ayurvedic treatments and therapies' },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
    };
    return colors[color as keyof typeof colors];
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
                Our Partners
              </h1>
              <p className="text-xl text-muted-foreground">
                Meet the innovative companies and organizations that make up our dynamic ecosystem
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {partnerCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex} className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.partners.map((partner, partnerIndex) => (
                        <div
                          key={partnerIndex}
                          className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-card-foreground">
                              {partner.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {partner.description}
                            </p>
                            <div className="pt-2">
                              <button className={`text-sm font-medium hover:underline ${getColorClasses(category.color).split(' ')[0]}`}>
                                Learn More →
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Market Access</h3>
                  <p className="text-muted-foreground">
                    Gain access to new markets and customer segments through our network
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Laptop className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Technology Integration</h3>
                  <p className="text-muted-foreground">
                    Leverage cutting-edge technology solutions and digital platforms
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Financial Support</h3>
                  <p className="text-muted-foreground">
                    Access funding opportunities and financial services tailored to your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Plus className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl font-bold text-primary-foreground">
                Ready to Join Our Partnership Network?
              </h2>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Become part of our thriving ecosystem and unlock new opportunities for growth, 
                collaboration, and innovation across multiple business domains.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join"
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Become a Partner
                </a>
                <a
                  href="/contact"
                  className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Digital Transformation Success
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    "Through 99 Partners, we successfully integrated ONDC platform and increased 
                    our online sales by 300% within six months."
                  </p>
                  <p className="text-sm font-medium">- E-commerce Partner</p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Funding Success Story
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    "The financial partnership helped us secure ₹50L funding for expansion, 
                    enabling us to scale our operations nationwide."
                  </p>
                  <p className="text-sm font-medium">- SME Partner</p>
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

export default Partners;
