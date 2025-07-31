'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaCamera } from 'react-icons/fa'

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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.6])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
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

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <motion.div 
          style={{ y: backgroundY, backgroundImage: "url('./image/img6.jpg')" }}
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
        ></motion.div>
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-20 text-center px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-wider">
              Let's Create
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Contact Section */}
      <div className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to say hello, I'd love to hear from you
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCamera className="text-black text-xl" />
                  </motion.div>
                  <h3 className="text-3xl font-light bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Start Your Project
                  </h3>
                </motion.div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaCheck className="text-white text-3xl" />
                    </motion.div>
                    <h3 className="text-2xl font-light mb-4">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <label className={`block text-sm font-medium mb-3 transition-colors ${activeField === 'name' ? 'text-yellow-400' : 'text-gray-300'}`}>
                          Your Name
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus('name')}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                          placeholder="Enter your name"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <label className={`block text-sm font-medium mb-3 transition-colors ${activeField === 'email' ? 'text-yellow-400' : 'text-gray-300'}`}>
                          Email Address
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFieldFocus('email')}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                          placeholder="your@email.com"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className={`block text-sm font-medium mb-3 transition-colors ${activeField === 'service' ? 'text-yellow-400' : 'text-gray-300'}`}>
                        Service Type
                      </label>
                      <motion.select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('service')}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <option value="">Select a service</option>
                        <option value="portrait">Portrait Photography</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="event">Event Photography</option>
                        <option value="commercial">Commercial Photography</option>
                        <option value="other">Something else</option>
                      </motion.select>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className={`block text-sm font-medium mb-3 transition-colors ${activeField === 'message' ? 'text-yellow-400' : 'text-gray-300'}`}>
                        Project Details
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('message')}
                        onBlur={handleFieldBlur}
                        required
                        rows={5}
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 resize-none placeholder-gray-400"
                        placeholder="Tell me about your vision, timeline, and any specific requirements..."
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group text-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaEnvelope className="text-black text-xl" />
                  </motion.div>
                  <h3 className="text-3xl font-light bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Contact Info
                  </h3>
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    className="group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaEnvelope className="w-5 h-5 text-black" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-yellow-400 transition-colors">Email</h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors">hello@anibesh.com</p>
                        <p className="text-gray-300 group-hover:text-white transition-colors">info@anibesh.com</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaPhone className="w-5 h-5 text-black" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-yellow-400 transition-colors">Phone</h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</p>
                        <p className="text-gray-300 group-hover:text-white transition-colors">+91 87654 32109</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaMapMarkerAlt className="w-5 h-5 text-black" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-yellow-400 transition-colors">Studio</h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors">Mumbai, Maharashtra</p>
                        <p className="text-gray-300 group-hover:text-white transition-colors">India</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                  className="mt-8 pt-8 border-t border-white/10"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-light mb-4">Follow My Work</h4>
                  <div className="flex space-x-3">
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
                        className={`w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.2, rotate: 10, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <social.icon className="text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Studio Visit Section */}
      <div className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
              Visit the Studio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Come by for a consultation or just to say hello. Coffee's always on.
            </p>
          </motion.div>

          <motion.div
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 z-10 group-hover:from-yellow-400/30 group-hover:to-orange-500/30 transition-all duration-300"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('./image/img7.jpg')" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
              <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-8 text-center group-hover:bg-black/90 transition-all duration-300">
                <h3 className="text-2xl font-light mb-4">Studio Hours</h3>
                <div className="space-y-2 text-gray-300">
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