import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <Head>
        <title>Gainesville Prosthetics | Expert Prosthetic Fitting & Education</title>
        <meta name="description" content="Leading prosthetics facility in Gainesville offering expert fitting, innovative solutions, and patient-centered care." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 shadow-soft backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo-gp-new.avif"
                alt="Gainesville Prosthetics Logo"
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-gp-text hover:text-gp-teal transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gp-text hover:bg-gp-light"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gp-text hover:bg-gp-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 sm:py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gp-text mb-6 leading-tight">
            Expert Prosthetic Care for Your Active Life
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gp-text mb-8 max-w-3xl mx-auto opacity-90">
            Combining innovation, compassion, and education to help you move forward with confidence.
          </p>
          <button className="bg-gp-teal hover:bg-opacity-90 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-soft-lg transition-all">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* About Overview */}
      <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12 sm:mb-16 lg:mb-20">
            Why Gainesville Prosthetics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="glassmorphic rounded-xl p-8 sm:p-10 text-center shadow-soft">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Personalized Care</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85">
                Every patient is unique. We tailor solutions to your lifestyle, goals, and needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glassmorphic rounded-xl p-8 sm:p-10 text-center shadow-soft">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Educational Facility</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85">
                We invest in education, training the next generation of prosthetics professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glassmorphic rounded-xl p-8 sm:p-10 text-center shadow-soft">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Continuous Improvement</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85">
                Latest technology, proven techniques, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section id="services" className="py-16 sm:py-20 lg:py-28 bg-gp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12 sm:mb-16 lg:mb-20">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="text-5xl mb-4">🦵</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Prosthetic Fitting</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85 mb-4">
                Precise, custom-fitted prosthetics designed for comfort, mobility, and confidence.
              </p>
              <a href="#contact" className="inline-block text-gp-teal font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Prosthetics Galileo Innovation</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85 mb-4">
                Advanced biomechanical analysis using cutting-edge Galileo technology.
              </p>
              <a href="#contact" className="inline-block text-gp-teal font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gp-text mb-4">Patient Consultation</h3>
              <p className="text-base sm:text-lg text-gp-text opacity-85 mb-4">
                Comprehensive evaluations and personalized treatment planning for your unique needs.
              </p>
              <a href="#contact" className="inline-block text-gp-teal font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12 sm:mb-16 lg:mb-20">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="glassmorphic rounded-xl p-8 text-center shadow-soft">
              <p className="text-4xl font-bold text-gp-gold mb-2">1</p>
              <h3 className="text-xl font-bold text-gp-text mb-3">Expert Team</h3>
              <p className="text-gp-text opacity-85">Certified professionals with decades of combined experience.</p>
            </div>

            <div className="glassmorphic rounded-xl p-8 text-center shadow-soft">
              <p className="text-4xl font-bold text-gp-gold mb-2">2</p>
              <h3 className="text-xl font-bold text-gp-text mb-3">Advanced Tech</h3>
              <p className="text-gp-text opacity-85">State-of-the-art equipment and proven methodologies.</p>
            </div>

            <div className="glassmorphic rounded-xl p-8 text-center shadow-soft">
              <p className="text-4xl font-bold text-gp-gold mb-2">3</p>
              <h3 className="text-xl font-bold text-gp-text mb-3">Patient-Centric</h3>
              <p className="text-gp-text opacity-85">Your comfort and satisfaction are our top priority.</p>
            </div>

            <div className="glassmorphic rounded-xl p-8 text-center shadow-soft">
              <p className="text-4xl font-bold text-gp-gold mb-2">4</p>
              <h3 className="text-xl font-bold text-gp-text mb-3">Educational Excellence</h3>
              <p className="text-gp-text opacity-85">Investing in training the next generation of professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12 sm:mb-16 lg:mb-20">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft">
              <div className="mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gp-text mb-6 leading-relaxed italic">
                &quot;I highly recommend Gainesville Prosthetics. We are from Orlando, but we preferred to make the commute to use their services due to exceptional patient care. They are extremely knowledgeable and helpful!&quot;
              </p>
              <p className="font-bold text-gp-text">Elaine Liu</p>
              <p className="text-sm text-gp-text opacity-75">Patient</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft">
              <div className="mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gp-text mb-6 leading-relaxed italic">
                &quot;The best around!&quot;
              </p>
              <p className="font-bold text-gp-text">Daniel Wing</p>
              <p className="text-sm text-gp-text opacity-75">Patient</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-soft">
              <div className="mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gp-text mb-6 leading-relaxed italic">
                &quot;Staff were so nice and kind. Office is very nice and clean! Definitely recommend going here.&quot;
              </p>
              <p className="font-bold text-gp-text">Dannielle Cruise</p>
              <p className="text-sm text-gp-text opacity-75">Patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-8">
              Innovation Spotlight: Prosthetics Galileo
            </h2>
            
            <div className="bg-gradient-to-br from-gp-cream to-gp-light rounded-2xl p-8 sm:p-12 lg:p-16 shadow-soft">
              <p className="text-lg sm:text-xl text-gp-text leading-relaxed mb-6">
                Prosthetics Galileo represents the future of prosthetic care. Using advanced biomechanical analysis and real-time feedback systems, we can optimize every aspect of your prosthetic fitting.
              </p>
              <p className="text-lg sm:text-xl text-gp-text leading-relaxed mb-6">
                This innovative technology allows us to measure gait dynamics, balance, and pressure distribution with unprecedented precision, ensuring your prosthetic delivers maximum comfort and functionality.
              </p>
              <p className="text-lg sm:text-xl text-gp-text leading-relaxed">
                Whether you&apos;re recovering from amputation or seeking to optimize your existing prosthetic, Prosthetics Galileo puts you at the forefront of prosthetic innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Callout */}
      <section id="team" className="py-16 sm:py-20 lg:py-28 bg-gp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gp-text mb-8">
              Meet Cara Negri, Clinical Director
            </h2>
            
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-soft mb-8">
              <div className="text-6xl mb-6">👩‍⚕️</div>
              <p className="text-lg sm:text-xl text-gp-text leading-relaxed mb-6">
                Cara Negri brings over two decades of clinical expertise and passion for patient outcomes to her role as Clinical Director at Gainesville Prosthetics. Her commitment to personalized care and continuous education has shaped our facility into a leading center for prosthetic excellence.
              </p>
              <p className="text-lg sm:text-xl text-gp-text leading-relaxed">
                Cara is dedicated to training the next generation of prosthetics professionals and staying at the forefront of biomechanical innovation. Her vision guides every decision we make.
              </p>
            </div>

            <button className="bg-gp-gold hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold shadow-soft-lg transition-all">
              Meet Our Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Latest Education Posts */}
      <section id="education" className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12 sm:mb-16 lg:mb-20">
            Latest Education Posts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Post 1 */}
            <div className="bg-gp-light rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-gp-teal to-gp-gold opacity-20"></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gp-text mb-3 leading-tight">
                  Accessibility Matters: What the ADA&apos;s Latest Conversations Mean for Prosthetic Users
                </h3>
                <p className="text-sm sm:text-base text-gp-text opacity-75 mb-4">
                  Explore how recent ADA updates impact prosthetic design and accessibility standards.
                </p>
                <a href="#" className="inline-block text-gp-teal font-semibold hover:underline">
                  Read Article →
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gp-light rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-gp-gold to-gp-teal opacity-20"></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gp-text mb-3 leading-tight">
                  Restoring Leg Strength in Seniors Through Chair-Supported Exercise
                </h3>
                <p className="text-sm sm:text-base text-gp-text opacity-75 mb-4">
                  Practical exercises to build confidence and strength during prosthetic adjustment.
                </p>
                <a href="#" className="inline-block text-gp-teal font-semibold hover:underline">
                  Read Article →
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-gp-light rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-gp-cream to-gp-teal opacity-40"></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gp-text mb-3 leading-tight">
                  Holiday Ready: Staying Active and Comfortable With Your Prosthesis This Season
                </h3>
                <p className="text-sm sm:text-base text-gp-text opacity-75 mb-4">
                  Tips and tricks for enjoying holidays while maintaining optimal prosthetic comfort.
                </p>
                <a href="#" className="inline-block text-gp-teal font-semibold hover:underline">
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-gp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gp-text mb-12">
              Ready to Get Started?
            </h2>

            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-soft-lg mb-12">
              <button className="w-full bg-gp-teal hover:bg-opacity-90 text-white py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold shadow-soft-lg transition-all mb-8">
                Schedule Your Consultation
              </button>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl">📞</div>
                  <div>
                    <h4 className="font-bold text-gp-text mb-1">Phone</h4>
                    <a href="tel:+13523314221" className="text-gp-teal hover:underline">
                      (352) 331-4221
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl">📧</div>
                  <div>
                    <h4 className="font-bold text-gp-text mb-1">Email</h4>
                    <a href="mailto:[email protected]" className="text-gp-teal hover:underline">
                      [email protected]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gp-text mb-1">Address</h4>
                    <p className="text-gp-text">
                      4650 NW 39th Avenue Unit G<br />
                      Gainesville, FL 32606
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl">🌐</div>
                  <div>
                    <h4 className="font-bold text-gp-text mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gp-teal hover:text-gp-gold transition-colors">
                        Facebook
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gp-teal hover:text-gp-gold transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gp-text border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h5 className="font-bold text-lg mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-gp-teal transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-gp-teal transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-gp-teal transition-colors">Team</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h5 className="font-bold text-lg mb-4">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#education" className="hover:text-gp-teal transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-gp-teal transition-colors">Patient Guide</a></li>
                <li><a href="#" className="hover:text-gp-teal transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h5 className="font-bold text-lg mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gp-teal transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gp-teal transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gp-teal transition-colors">HIPAA</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h5 className="font-bold text-lg mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+13523314221" className="hover:text-gp-teal transition-colors">(352) 331-4221</a></li>
                <li><a href="mailto:[email protected]" className="hover:text-gp-teal transition-colors">[email protected]</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} Gainesville Prosthetics. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gp-teal transition-colors">Privacy</a>
                <a href="#" className="hover:text-gp-teal transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
