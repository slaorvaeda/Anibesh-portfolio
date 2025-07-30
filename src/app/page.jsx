'use client'
import Hero from '@/components/Hero'
import Homeslider from '@/components/HomeSlider'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../public/css/home.css'
import HomeName from '@/components/HomeName'

gsap.registerPlugin(ScrollTrigger)

function page() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

    useEffect(() => {
        // Only run GSAP animations if container exists
        if (containerRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                }
            })

            // Check if elements exist before animating
            const homeSections = document.querySelectorAll(".home-section")
            if (homeSections.length > 0) {
                tl.fromTo(".home-section", 
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
        <div ref={containerRef} className="home-page overflow-hidden">
            <Hero />
            
            {/* Anibesh Title Section */}
            <div className="relative  text-white py-20 pb-0 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 
                        data-aos="fade-up" 
                        data-aos-delay="300" 
                        className="text-6xl md:text-9xl lg:text-[18vw] text-center font-bold bg-gradient-to-r from-gray-600 via-gray-100 to-gray-500 bg-clip-text text-transparent font-sans tracking-widest uppercase lg:h-[20vh] h-[6vh]"
                    >
                        Anibesh
                    </h1>
                </div>
            </div>

            <HomeName />
            <Homeslider />

            {/* Featured Work Section */}
            <div className="py-32 bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white">Featured Work</h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            A glimpse into my latest photography projects and creative vision
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { image: './image/img1.jpg', title: 'Portrait Series', category: 'Portraits' },
                            { image: './image/img2.jpg', title: 'Wedding Collection', category: 'Weddings' },
                            { image: './image/img3.jpg', title: 'Event Coverage', category: 'Events' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-gray-900"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="relative h-64 md:h-80 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg md:text-2xl font-light mb-2 text-white">{item.title}</h3>
                                        <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-yellow-400 text-black text-xs md:text-sm rounded-full font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 text-white">What Clients Say</h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Testimonials from happy clients who trusted me with their special moments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            {
                                text: "Anibesh captured our wedding day perfectly. Every photo tells a story and brings back the emotions of that magical day.",
                                author: "Sarah & Mike",
                                type: "Wedding Clients"
                            },
                            {
                                text: "Professional, creative, and incredibly talented. The portraits he took of our family are absolutely stunning.",
                                author: "The Johnson Family",
                                type: "Portrait Clients"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="text-lg md:text-2xl mb-4 md:mb-6 text-gray-300 leading-relaxed">
                                    &ldquo;{testimonial.text}&rdquo;
                                </div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                                        <span className="text-black font-bold text-sm md:text-lg">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm md:text-base text-white">{testimonial.author}</div>
                                        <div className="text-xs md:text-sm text-gray-400">{testimonial.type}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 text-white">Ready to Create Magic?</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your photography needs and create something extraordinary together
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                            <motion.button 
                                className="bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book a Session
                            </motion.button>
                            <motion.button 
                                className="border-2 border-white text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-black transition-all"
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

export default page