import React, { useState, useRef, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === images.length) {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(0);
        carouselRef.current.style.transform = 'translateX(0)';
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.7s ease-in-out';
        }, 20);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const lastIndex = images.length;
    const shouldResetIndex = currentIndex === lastIndex - 1;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.style.transition = 'transform 0.7s ease-in-out';
      carouselRef.current.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative w-4/5 overflow-hidden rounded-box">
      <div
        className="flex transition-transform"
        ref={carouselRef}
      >
        {[...images, ...images, ...images].map((image, index) => (
          <div className="carousel-item" key={`${image}-${index}`}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-72 h-72"
            />
          </div>
        ))}
      </div>
      <button className="btn btn-circle btn-white absolute top-28 left-0 opacity-70 hover:opacity-100" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button className="btn btn-circle btn-white absolute top-28 right-0 opacity-70 hover:opacity-100" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
