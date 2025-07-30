import React from 'react'

function HomeName() {
    return (
        <div className="bg-black text-white py-20 pt-0 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="relative z-10">
                    <p 
                        data-aos="fade-up" 
                        className="md:columns-3 font-light text-lg md:text-xl text-center md:text-left leading-relaxed tracking-wide"
                    >
                        As a passionate photographer, I have spent years capturing moments that tell unique stories. 
                        From portraits and events to landscapes and street photography, I've developed a keen eye for detail, 
                        light, and emotion. My experience includes working with clients to create memorable visuals that reflect 
                        their personalities or brand essence. I am proficient in post-processing tools like Adobe Lightroom and 
                        Photoshop, allowing me to bring each image to life. Whether it's a wedding, fashion shoot, or candid moment, 
                        I aim to deliver timeless visuals. Photography is more than a profession—it's how I connect with the world 
                        and express creativity.
                    </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full blur-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeName