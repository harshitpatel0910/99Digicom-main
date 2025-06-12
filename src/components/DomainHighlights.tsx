
import { Link } from 'react-router-dom';
import { ShoppingCart, Laptop, DollarSign, Heart, ArrowRight, Users } from 'lucide-react';

const DomainHighlights = () => {
  const domains = [
    {
      icon: ShoppingCart,
      title: 'Digital Commerce',
      description: 'ONDC integration, e-commerce solutions, and co-branding opportunities for modern businesses.',
      color: 'from-blue-500 to-cyan-500',
      darkColor: 'dark:from-cyan-400 dark:to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-cyan-900/20',
      partners: '5+ Partners',
      delay: '0.1s'
    },
    {
      icon: Laptop,
      title: 'IT & Marketing',
      description: 'Complete KPO, BPO, LPO services with cutting-edge digital strategy development.',
      color: 'from-green-500 to-emerald-500',
      darkColor: 'dark:from-emerald-400 dark:to-green-500',
      bgColor: 'bg-green-50 dark:bg-emerald-900/20',
      partners: '4+ Partners',
      delay: '0.2s'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'SME loan facilitation and customized funding support for business growth.',
      color: 'from-purple-500 to-violet-500',
      darkColor: 'dark:from-purple-400 dark:to-violet-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      partners: '4+ Partners',
      delay: '0.3s'
    },
    {
      icon: Heart,
      title: 'Spiritual Ecosystem',
      description: 'Holistic wellness through yoga, Ayurveda, astrology, and spiritual guidance.',
      color: 'from-orange-500 to-pink-500',
      darkColor: 'dark:from-pink-400 dark:to-orange-500',
      bgColor: 'bg-orange-50 dark:bg-pink-900/20',
      partners: '4+ Partners',
      delay: '0.4s'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 cyber-grid">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in-up">
            Explore Our <span className="gradient-text">Business Domains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-1">
            Discover comprehensive solutions across four strategic verticals designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="group hover-lift glass rounded-2xl p-8 text-center hover-glow fade-in-up neon-border"
                style={{ animationDelay: domain.delay }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${domain.color} ${domain.darkColor} p-4 shadow-lg group-hover:shadow-xl transition-all duration-400 pulse-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {domain.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                  <Users className="w-4 h-4" />
                  <span>{domain.partners}</span>
                </div>

                <Link
                  to="/domains"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-all duration-400 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center fade-in-up stagger-4">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto hover-lift neon-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Find Your Perfect Partner?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join our ecosystem of innovative partners and unlock new opportunities for growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partners"
                className="btn-modern hover-glow"
              >
                View All Partners
              </Link>
              <Link
                to="/join"
                className="glass border border-white/20 dark:border-cyan-400/30 text-foreground px-8 py-3 rounded-full font-medium hover-lift transition-all duration-400 neon-border"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainHighlights;
