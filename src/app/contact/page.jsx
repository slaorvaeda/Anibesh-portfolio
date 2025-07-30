'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState('')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission with better UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', service: '', message: '' })
      }, 3000)
    }, 2000)
  }

  const handleFieldFocus = (fieldName) => {
    setActiveField(fieldName)
  }

  const handleFieldBlur = () => {
    setActiveField('')
  }

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })

    tl.fromTo(".contact-card", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        style={{ y, opacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
          style={{ backgroundImage: "url('./image/img6.jpg')" }}
        ></div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light mb-4 tracking-wider">
              Let&apos;s Connect
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Ready to bring your vision to life? Let&apos;s create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Content */}
      <div className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="contact-card"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Send a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <FaCheck className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Message Sent!</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative"
                    >
                      <label className={`block text-sm font-medium mb-2 transition-colors ${activeField === 'name' ? 'text-yellow-400' : 'text-gray-300'}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Your beautiful name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <label className={`block text-sm font-medium mb-2 transition-colors ${activeField === 'email' ? 'text-yellow-400' : 'text-gray-300'}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('email')}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <label className={`block text-sm font-medium mb-2 transition-colors ${activeField === 'service' ? 'text-yellow-400' : 'text-gray-300'}`}>
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => handleFieldFocus('service')}
                      onBlur={handleFieldBlur}
                      required
                      className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">What can I help you with?</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="commercial">Commercial Photography</option>
                      <option value="other">Something else</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <label className={`block text-sm font-medium mb-2 transition-colors ${activeField === 'message' ? 'text-yellow-400' : 'text-gray-300'}`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFieldFocus('message')}
                      onBlur={handleFieldBlur}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 resize-none placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Tell me about your vision..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-card"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">Email</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">hello@anibesh.com</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">info@anibesh.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">Phone</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">+91 98765 43210</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">+91 87654 32109</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 group-hover:text-yellow-400 transition-colors">Studio</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">Mumbai, Maharashtra</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-8 sm:mt-12"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Follow My Work</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  {[
                    { name: 'Instagram', icon: FaInstagram, color: 'hover:text-pink-500', href: 'https://instagram.com' },
                    { name: 'Facebook', icon: FaFacebookF, color: 'hover:text-blue-500', href: 'https://facebook.com' },
                    { name: 'Twitter', icon: FaTwitter, color: 'hover:text-sky-400', href: 'https://twitter.com' },
                    { name: 'LinkedIn', icon: FaLinkedinIn, color: 'hover:text-blue-400', href: 'https://linkedin.com' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="text-lg sm:text-xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Visit the Studio
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Come by for a consultation or just to say hello. Coffee&apos;s always on.
            </p>
          </motion.div>

          <motion.div
            className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 z-10 group-hover:from-yellow-400/30 group-hover:to-orange-500/30 transition-all duration-300"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('./image/img7.jpg')" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 p-4">
              <div className="bg-black/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center group-hover:bg-black/90 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Studio Hours</h3>
                <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact 