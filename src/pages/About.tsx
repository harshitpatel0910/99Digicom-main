
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      title: 'Collaboration',
      description: 'Building strong partnerships through mutual trust and shared goals',
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge solutions to drive business transformation',
    },
    {
      title: 'Inclusivity',
      description: 'Creating opportunities for businesses of all sizes to thrive',
    },
    {
      title: 'Impact',
      description: 'Delivering measurable results that accelerate growth and success',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                About 99 Partners
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering businesses and individuals with robust partnerships and cutting-edge solutions
              </p>
            </div>
          </div>
        </section>

        {/* Our Domains */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Domain Portfolio</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">99digicom.com</h3>
                  <p className="text-muted-foreground">
                    <strong>Digital Commerce:</strong> Comprehensive e-commerce solutions, ONDC integration, 
                    and co-branding opportunities for businesses looking to establish their online presence.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">99infosource.com</h3>
                  <p className="text-muted-foreground">
                    <strong>IT & Marketing:</strong> Complete KPO, BPO, and LPO services along with 
                    digital strategy development and IT infrastructure solutions.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">99finserv.com</h3>
                  <p className="text-muted-foreground">
                    <strong>Financial Services:</strong> SME loan facilitation and customized funding 
                    support to help businesses access the capital they need to grow.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">harmonyhights.com</h3>
                  <p className="text-muted-foreground">
                    <strong>Spiritual Ecosystem:</strong> Holistic wellness solutions including yoga, 
                    meditation, Panchkarma, Ayurveda, astrology, and spiritual guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a dynamic ecosystem that connects businesses across diverse industries, 
                fostering meaningful partnerships that drive innovation, growth, and sustainable success. 
                We believe in the power of collaboration to transform ideas into impactful solutions 
                that benefit businesses, communities, and individuals alike.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary-foreground">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join our ecosystem and discover new opportunities for growth and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join"
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  Become a Partner
                </a>
                <a
                  href="/contact"
                  className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Contact Us
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

export default About;
