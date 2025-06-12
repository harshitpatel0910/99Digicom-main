
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden cyber-grid particle-effect">
      {/* Enhanced animated background elements for dark theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 dark:bg-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Additional cyber elements for dark theme */}
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-cyan-400/30 rounded-full dark:block hidden animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-48 h-48 border border-purple-400/20 rounded-full dark:block hidden animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Enhanced floating icon with neon effects */}
          <div className="flex justify-center mb-8 fade-in-up">
            <div className="glass rounded-full p-4 float-animation hover-glow neon-border">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight fade-in-up stagger-1">
            Empowering Businesses with{' '}
            <span className="gradient-text">Strategic Partnerships</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-2">
            Connecting you with the right partners to accelerate your growth through innovation and collaboration.
          </p>

          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto fade-in-up stagger-3 hover-lift">
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
              99 Partners is a dynamic ecosystem connecting businesses across{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">Digital Commerce</span>,{' '}
              <span className="font-semibold text-green-600 dark:text-emerald-400">IT & Marketing</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Financial Services</span>, and the{' '}
              <span className="font-semibold text-orange-600 dark:text-pink-400">Spiritual Wellness</span> domain.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-4">
            <Link
              to="/partners"
              className="btn-modern group inline-flex items-center gap-3 hover-glow"
            >
              Find Your Perfect Partner
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/join"
              className="glass border border-white/20 dark:border-cyan-400/30 text-foreground px-8 py-3 rounded-full font-medium hover-lift transition-all duration-400 neon-border"
            >
              Become a Partner
            </Link>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-4">
            <div className="w-6 h-10 border-2 border-muted-foreground dark:border-cyan-400 rounded-full flex justify-center pulse-glow">
              <div className="w-1 h-3 bg-muted-foreground dark:bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
