'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Photos Captured" },
    { number: "50+", label: "Weddings" },
    { number: "5+", label: "Years Experience" }
  ]

  const skills = [
    { name: "Portrait Photography", level: 95 },
    { name: "Wedding Photography", level: 90 },
    { name: "Event Photography", level: 85 },
    { name: "Photo Editing", level: 92 },
    { name: "Lighting", level: 88 },
    { name: "Composition", level: 95 }
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })

    tl.fromTo(".about-card", 
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
          style={{ backgroundImage: "url('./image/img8.jpg')" }}
        ></div>
        <div className="relative z-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-light mb-4 tracking-wider">
              About
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Passionate photographer capturing life's most precious moments with artistic vision
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section */}
      <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="about-card"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-light mb-8">My Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Photography has been my passion since I first picked up a camera at the age of 15. 
                What started as a hobby capturing street scenes in my hometown has evolved into a 
                lifelong journey of artistic expression and storytelling.
              </p>
              <p>
                After studying fine arts and photography at the prestigious School of Visual Arts, 
                I began my professional career working with some of the most talented photographers 
                in the industry. This experience shaped my unique approach to capturing moments that 
                are both visually stunning and emotionally resonant.
              </p>
              <p>
                Today, I specialize in portrait, wedding, and event photography, bringing a blend 
                of technical expertise and artistic vision to every project. My goal is to create 
                images that not only document moments but tell stories that will be cherished for 
                generations to come.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-card relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="./image/img2.jpg" 
                alt="Anibesh at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-black">
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-sm">of Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-light mb-8">By the Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A glimpse into the impact and reach of my photography journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">{stat.number}</div>
                  </div>
                </div>
                <h3 className="text-xl font-light">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light mb-8">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastery in various aspects of photography and post-production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-medium">{skill.name}</h3>
                <span className="text-yellow-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-light mb-8">My Philosophy</h2>
            <div className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-12">
              "Every photograph is a moment frozen in time, a story waiting to be told. 
              I believe in capturing not just what the eye sees, but what the heart feels."
            </div>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light mb-8">Equipment</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional gear that ensures the highest quality results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: "Cameras",
              items: ["Canon EOS R5", "Canon EOS R6", "Sony A7R IV"]
            },
            {
              category: "Lenses",
              items: ["Canon RF 24-70mm f/2.8", "Canon RF 70-200mm f/2.8", "Canon RF 50mm f/1.2"]
            },
            {
              category: "Lighting",
              items: ["Profoto B10X", "Godox AD600 Pro", "Elinchrom ELB 500"]
            }
          ].map((equipment, index) => (
            <motion.div
              key={index}
              className="about-card bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-light mb-6 text-yellow-400">{equipment.category}</h3>
              <ul className="space-y-3">
                {equipment.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
