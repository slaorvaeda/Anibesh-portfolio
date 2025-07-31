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
    { number: "50+", label: "Events" },
    { number: "7+", label: "Years Experience" }
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
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light mb-4">My Journey</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From capturing my first photograph to building a career in visual storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="about-card"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light mb-6 text-yellow-400">The Beginning</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                My love for photography began at the age of 15 when I discovered my father's old film camera 
                in the attic. That moment changed everything. I spent countless hours experimenting with 
                light, composition, and the magic of capturing fleeting moments on film.
              </p>
              <p>
                Growing up in a small town, I found beauty in the ordinary - the way morning light filtered 
                through my grandmother's kitchen window, the laughter of children playing in the streets, 
                and the quiet moments of daily life that often go unnoticed.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-card relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="./image/img1.jpg" 
                alt="Early photography days"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-black">
              <div className="text-2xl font-bold">2008</div>
              <div className="text-sm">First Camera</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="about-card relative order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="./image/img3.jpg" 
                alt="Professional development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-black">
              <div className="text-2xl font-bold">2015</div>
              <div className="text-sm">First Wedding</div>
            </div>
          </motion.div>

          <motion.div
            className="about-card order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light mb-6 text-yellow-400">Finding My Path</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                After studying fine arts and photography, I began my professional journey working alongside 
                established photographers. These mentors taught me not just technical skills, but the art 
                of connecting with people and capturing their authentic moments.
              </p>
              <p>
                My first wedding shoot was a turning point. The raw emotions, the nervous excitement, 
                and the pure joy of the couple made me realize that photography wasn't just about taking 
                pictures - it was about preserving memories that would last a lifetime.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="about-card"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light mb-6 text-yellow-400">Today & Beyond</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Today, I've had the privilege of capturing over 500 weddings, countless portraits, and 
                numerous events. Each project brings new challenges and opportunities to grow as both 
                an artist and a storyteller.
              </p>
              <p>
                My approach has evolved to focus on creating authentic, emotion-driven images that tell 
                the real story of each moment. Whether it's a bride's nervous smile before walking down 
                the aisle or a family's genuine laughter during a portrait session, I strive to capture 
                the essence of what makes each person and moment unique.
              </p>
              <p>
                Photography has taught me that beauty exists in every moment, and my mission is to help 
                others see and preserve that beauty in their own lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-card relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="./image/img6.jpg" 
                alt="Current work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-black">
              <div className="text-2xl font-bold">2024</div>
              <div className="text-sm">Still Growing</div>
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
