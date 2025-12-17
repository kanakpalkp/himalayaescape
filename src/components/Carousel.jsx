import React, { useEffect, useRef } from 'react';
import { assets } from '../assets/assets.js';

function Carousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="inline-flex">
        <img src={assets.Img} alt="Slide 1" className="w-full object-cover flex-shrink-0" />
        <img src={assets.Img} alt="Slide 2" className="w-full object-cover flex-shrink-0" />
        <img src={assets.Img} alt="Slide 3" className="w-full object-cover flex-shrink-0" />
        
        <img src={assets.Img} alt="Slide 1 copy" className="w-full object-cover flex-shrink-0" />
        <img src={assets.Img} alt="Slide 2 copy" className="w-full object-cover flex-shrink-0" />
        <img src={assets.Img} alt="Slide 3 copy" className="w-full object-cover flex-shrink-0" />
      </div>
    </div>
  );
}

export default Carousel;