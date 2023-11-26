// Carousel.tsx

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div ref={containerRef} className="flex transition-transform ease-in-out duration-300">
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
