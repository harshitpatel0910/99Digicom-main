import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Laptop, DollarSign, Heart, Users, Briefcase } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: ShoppingCart,
      title: 'Digital Commerce Services',
      domain: '99digicom.com',
      services: [
        'ONDC integration and marketplace setup',
        'Co-branding for e-commerce products',
        'E-commerce platform development',
        'Digital product catalog management',
        'Online payment gateway integration',
      ],
      partners: ['99bowls', 'Nutraio', 'GudGoodlife', 'Perlmillet', 'CHAAH Tea'],
      color: 'blue',
    },
    {
      icon: Laptop,
      title: 'IT & Marketing Services',
      domain: '99infosource.com',
      services: [
        'Knowledge Process Outsourcing (KPO)',
        'Business Process Outsourcing (BPO)',
        'Legal Process Outsourcing (LPO)',
        'Digital strategy & IT infrastructure',
        'Digital marketing and branding',
      ],
      partners: ['eBranding Studio', 'Biztech.one', 'Doctor Dairy', 'ARKinfoserv'],
      color: 'purple',
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      domain: '99finserv.com',
      services: [
        'SME loan facilitation',
        'Customized funding support',
        'Financial planning and advisory',
        'Business credit solutions',
        'Investment guidance',
      ],
      partners: ['ICICI Bank', 'Bank of Baroda', 'Kotak Bank', 'Tata Capital'],
      color: 'green',
    },
    {
      icon: Heart,
      title: 'Spiritual Ecosystem',
      domain: 'harmonyhights.com',
      services: [
        'Yoga & meditation programs',
        'Panchkarma & Ayurveda treatments',
        'Astrology and spiritual guidance',
        'Rituals (Karmkand) ceremonies',
        'Star gazing and cosmic awareness',
      ],
      partners: ['Joshidada.com', 'BigBirthday.in', 'Lilvan.com', 'Yoga Studio'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-700 border-blue-900 text-white',
      green: 'bg-green-700 border-green-900 text-white',
      purple: 'bg-purple-700 border-purple-900 text-white',
      orange: 'bg-orange-600 border-orange-800 text-white',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-background to-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions across four key business domains to accelerate your growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                const colorClasses = getColorClasses(category.color);
                return (
                  <div key={index} className="max-w-6xl mx-auto">
                    <div className={`
                      rounded-2xl p-8 border 
                      ${colorClasses}
                      dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-md
                    `}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10 dark:bg-white/10">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">
                            {category.title}
                          </h2>
                          <p className="font-medium opacity-80">
                            {category.domain}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Our Services
                          </h3>
                          <ul className="space-y-3">
                            {category.services.map((service, serviceIndex) => (
                              <li key={serviceIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                <span className="opacity-90">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Key Partners
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {category.partners.map((partner, partnerIndex) => (
                              <div
                                key={partnerIndex}
                                className="bg-white/10 dark:bg-white/10 rounded-lg p-3 text-center"
                              >
                                <span className="text-sm font-medium">{partner}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose 99 Partners?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Diverse Network</h3>
                  <p className="text-muted-foreground">
                    Access to partners across multiple industries and business domains
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Proven Experience</h3>
                  <p className="text-muted-foreground">
                    Years of experience in facilitating successful business partnerships
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Holistic Approach</h3>
                  <p className="text-muted-foreground">
                    Complete ecosystem support from technology to wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Let's discuss how our services can help accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="/join"
                  className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Become a Partner
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

export default Services;
