'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Portfolio = () => {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // More subtle scroll effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.6])

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'event', name: 'Events' },
    { id: 'commercial', name: 'Commercial' }
  ]

  const portfolioItems = [
    { id: 1, category: 'portrait', image: './image/img1.jpg', title: 'Elegant Portrait', client: 'Sarah Johnson' },
    { id: 2, category: 'wedding', image: './image/img2.jpg', title: 'Wedding Ceremony', client: 'Mike & Emma' },
    { id: 3, category: 'event', image: './image/img3.jpg', title: 'Corporate Event', client: 'TechCorp Inc.' },
    { id: 4, category: 'commercial', image: './image/img4.jpg', title: 'Product Photography', client: 'Luxury Brands' },
    { id: 5, category: 'portrait', image: './image/img5.jpg', title: 'Family Portrait', client: 'The Smiths' },
    { id: 6, category: 'wedding', image: './image/img6.jpg', title: 'Reception', client: 'David & Lisa' },
    { id: 7, category: 'event', image: './image/img7.jpg', title: 'Birthday Party', client: 'Private Event' },
    { id: 8, category: 'commercial', image: './image/img8.jpg', title: 'Fashion Shoot', client: 'Style Magazine' },
    { id: 9, category: 'portrait', image: './image/img1.jpg', title: 'Professional Headshot', client: 'John Davis' },
    { id: 10, category: 'wedding', image: './image/img2.jpg', title: 'Engagement Session', client: 'Alex & Maria' },
    { id: 11, category: 'event', image: './image/img3.jpg', title: 'Anniversary Party', client: 'Private Event' },
    { id: 12, category: 'commercial', image: './image/img4.jpg', title: 'Real Estate', client: 'Prime Properties' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  useEffect(() => {
    // Only run GSAP animations if container exists
    if (containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false
        }
      })

      // Check if elements exist before animating
      const portfolioItems = document.querySelectorAll(".portfolio-item")
      if (portfolioItems.length > 0) {
        tl.fromTo(".portfolio-item", 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }
        )
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [selectedCategory])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
        <motion.div 
          style={{ y: backgroundY, backgroundImage: "url('./image/img5.jpg')" }}
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        ></motion.div>
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-20 text-center"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-light mb-4 tracking-wider">
              Portfolio
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 font-light leading-relaxed">
              A collection of moments captured with passion and artistic vision
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Story Section */}
      <div className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Story Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
                  Every Photo Tells a Story
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              </motion.div>
              
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Behind every image lies a moment of connection, emotion, and authenticity. 
                  My journey in photography began with a simple desire to capture the beauty 
                  of human stories and the magic of fleeting moments.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  From intimate portraits to grand celebrations, each project is approached 
                  with the same dedication to craft and attention to detail that transforms 
                  ordinary moments into extraordinary memories.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                  <div className="text-sm text-gray-400">Photos Delivered</div>
                </div>
              </motion.div>
            </div>

            {/* Story Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="./image/img2.jpg" 
                  alt="Photography Story"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <h3 className="text-2xl font-light mb-2 text-white">Capturing Life's Beautiful Moments</h3>
                    <p className="text-gray-300 text-sm">
                      Every click of the shutter is a step in the journey of storytelling through imagery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">Explore My Work</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through different categories and discover the stories behind each photograph
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 z-10 cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="portfolio-item group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.client}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-3xl font-light mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-2">Client: {selectedImage.client}</p>
              <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm rounded-full">
                {categories.find(cat => cat.id === selectedImage.category)?.name}
              </span>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-light mb-8">Ready to Create Together?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary that captures your vision
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-full text-lg font-medium hover:from-yellow-500 hover:to-orange-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio 