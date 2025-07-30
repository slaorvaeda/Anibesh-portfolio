import React from 'react'

function Homeslider() {
  const images = [
    './image/img1.jpg',
    './image/img2.jpg',
    './image/img3.jpg',
    './image/img4.jpg',
    './image/img5.jpg',
    './image/img6.jpg',
    './image/img7.jpg',
    './image/img8.jpg'
  ]

  return (
    <div className="collage-container bg-black">
      <div className="home border-y-2 border-yellow-500">
        <div className="film-strip">
          <div className="film-strip-track">
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Portfolio image ${index + 1}`}
                className="film-strip-image"
              />
            ))}
            {/* Duplicate images for seamless loop */}
            {images.map((image, index) => (
              <img 
                key={`duplicate-${index}`}
                src={image} 
                alt={`Portfolio image ${index + 1}`}
                className="film-strip-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homeslider