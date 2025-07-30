import { FaInstagram, FaFacebookF, FaTwitter, FaArrowUp, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-widest mb-4">Anibesh</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Capturing stories through my lens. Specializing in portraits, weddings, events, and creative photography that tells your unique story.
            </p>
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-gray-300">hello@anibesh.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Portraits</h4>
              <p className="text-sm text-gray-400">Professional & Creative</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Weddings</h4>
              <p className="text-sm text-gray-400">Capture Your Special Day</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Events</h4>
              <p className="text-sm text-gray-400">Corporate & Social</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Commercial</h4>
              <p className="text-sm text-gray-400">Product & Brand</p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anibesh Photography. All rights reserved to Durga - Slaorvaeda.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with passion for capturing life's beautiful moments
          </p>
        </div>
      </div>
    </footer>
  );
}
