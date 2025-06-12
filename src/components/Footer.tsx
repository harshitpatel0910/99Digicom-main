import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Domains', path: '/domains' },
    { name: 'Partners', path: '/partners' },
  ];

  const domains = [
    { name: '99digicom.com', url: 'https://99digicom.com' },
    { name: '99infosource.com', url: 'https://99infosource.com' },
    { name: '99finserv.com', url: 'https://99finserv.com' },
    { name: 'harmonyhights.com', url: 'https://harmonyhights.com' },
  ];

  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6 fade-in-left">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">99</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">Partners</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering businesses through strategic partnerships across digital commerce, IT & marketing, financial services, and spiritual wellness.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>hello@99partners.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 fade-in-up stagger-1">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Domains */}
          <div className="space-y-6 fade-in-up stagger-2">
            <h3 className="text-xl font-bold">Our Domains</h3>
            <ul className="space-y-3">
              {domains.map((domain, index) => (
                <li key={index}>
                  <a
                    href={domain.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {domain.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6 fade-in-right">
            <h3 className="text-xl font-bold">Stay Connected</h3>

            <div className="space-y-4">
              <p className="text-gray-300">
                Subscribe to our newsletter for updates on new partnerships and opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  className="px-5 py-3 btn-modern text-sm whitespace-nowrap flex items-center justify-center"

                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 fade-in-up stagger-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} 99 Partners. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
