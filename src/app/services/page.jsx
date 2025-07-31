'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Fixed opacity transform with proper progression values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const services = [
    {
      title: "Portrait Photography",
      subtitle: "Capture Your Essence",
      description: "Professional portraits that tell your story with artistic vision and technical excellence.",
      image: "./image/img2.jpg",
      features: ["Studio & Outdoor Sessions", "Professional Retouching", "High-Resolution Files", "Print-Ready Images"],
      price: "From $299"
    },
    {
      title: "Wedding Photography",
      subtitle: "Your Love Story",
      description: "Comprehensive wedding coverage that captures every precious moment of your special day.",
      image: "./image/img3.jpg",
      features: ["Full Day Coverage", "Engagement Sessions", "Wedding Albums", "Online Gallery"],
      price: "From $1,299"
    },
    {
      title: "Event Photography",
      subtitle: "Memories That Last",
      description: "Corporate events, parties, and celebrations documented with professional expertise.",
      image: "./image/img4.jpg",
      features: ["Corporate Events", "Birthday Parties", "Anniversaries", "Social Gatherings"],
      price: "From $399"
    },
    {
      title: "Commercial Photography",
      subtitle: "Brand Excellence",
      description: "Product and commercial photography that elevates your brand and marketing materials.",
      image: "./image/img5.jpg",
      features: ["Product Photography", "Real Estate", "Food & Beverage", "Fashion & Lifestyle"],
      price: "From $599"
    }
  ]

  useEffect(() => {
    // Only run GSAP animations if container exists
    if (containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false // Set to true for debugging
        }
      })

      // Check if elements exist before animating
      const serviceCards = document.querySelectorAll(".service-card")
      if (serviceCards.length > 0) {
        tl.fromTo(".service-card", 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
        )
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
          style={{ backgroundImage: "url('./image/img1.jpg')" }}
        ></div>
        <div className="relative z-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-light mb-4 tracking-wider">
              Services
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Professional photography services that transform moments into timeless art
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group relative overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="text-sm font-light tracking-widest uppercase mb-2 opacity-80">
                    {service.subtitle}
                  </div>
                  <h3 className="text-4xl font-light mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold text-yellow-400 mb-4">{service.price}</div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center text-sm"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-light mb-8">How We Work</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A seamless process from concept to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision and requirements" },
              { step: "02", title: "Planning", desc: "Location scouting and session planning" },
              { step: "03", title: "Shoot", desc: "Professional photography session" },
              { step: "04", title: "Delivery", desc: "Edited photos and final delivery" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-black">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-light mb-3">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-light mb-8">Ready to Create Magic?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss your photography needs and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="bg-white text-black px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services 