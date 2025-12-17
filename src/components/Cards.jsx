import React from 'react'

export default function Cards() {
  const cardData = [
    
    { img: 'treks.webp', text: 'treks' },
    { img: 'trek.webp', text: 'tour' },
    { img: 'home.webp', text: 'PLACES' },
    { img: 'hotel.webp', text: 'HOTELS' },
  ];
  return (
    <div className="flex  justify-center gap-6 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative w-[297.5px] h-[205.04px] bg-white shadow-md rounded-lg border border-gray-300 overflow-hidden"
        >
          <img src={card.img} alt={card.text} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full text-center p-2">
            <span className="text-white text-[17px] font-medium uppercase font-[Poppins]">
              {card.text}
            </span>
          </div>
        </div>
      ))}
     
    </div>
  );
}
