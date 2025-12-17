import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

// Heroicons chevron left/right
function ChevronLeftIcon({ className }) {
       return (
              <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
       );
}
function ChevronRightIcon({ className }) {
       return (
              <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
       );
}

export default function Destination() {
       const scrollRef = useRef(null);

       // Scroll amount: width of a card + gap (estimate)
       const scrollAmount = 320; // px, adjust as needed for card width + gap

       const handleScroll = (dir) => {
              if (scrollRef.current) {
                     const container = scrollRef.current;
                     const amount = dir === 'left' ? -scrollAmount : scrollAmount;
                     container.scrollBy({ left: amount, behavior: 'smooth' });
              }
       };

       // Cards array - each card is unique and editable
       const cards = [
         {
           to: "/kedarnath",
           img: "kedarnath.webp",
           emoji: "🕉️",
           title: "Kedarnath",
         },
         {
           to: "/Dayara Bugyal",
           img: "dayara.webp",
           emoji: "⛰️",
           title: "Dayara Bugyal",
         },
         {
           to: "/gangotri",
           img: "gomukh.jpg",
           emoji: "🌊",
           title: "Gomukh Tapovan",
         },
         {
           to: "/yamunotri",
           img: "kedartal.jpeg",
           emoji: "🌸",
           title: "Kedartal Trek",
         },
         {
           to: "/auli",
           img: "dodital.jpeg",
           emoji: "🎿",
           title: "Dodital",
         },
         {
           to: "/nainital",
           img: "chan.webp",
           emoji: "🏞️",
           title: "Chopta Chandrashila",
         },
       ];


       return (
              <div className="relative">
                     <div className="p-10 pt-5 pb-5 relative">
                            <div className="flex items-center justify-between">
                                   <h1 className="font-popins-HelveticaNeue-Light text-4xl font-bold text-black-00">
                                          Top.<span className="font-popins-HelveticaNeue-Light gap-5 text-4xl font-bold text-center text-green-600">.Destination</span>
                                   </h1>
                                   <div className="flex bg-cover items-center gap-2 absolute right-10 top-5 z-20">
                                          <button
                                                 type="button"
                                                 aria-label="Scroll left"
                                                 onClick={() => handleScroll('left')}
                                                 className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 active:bg-green-200 transition duration-150 border border-gray-200 mr-1 group"
                                          >
                                                 <ChevronLeftIcon className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
                                          </button>
                                          <button
                                                 type="button"
                                                 aria-label="Scroll right"
                                                 onClick={() => handleScroll('right')}
                                                 className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 active:bg-green-200 transition duration-150 border border-gray-200 group"
                                          >
                                                 <ChevronRightIcon className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
                                          </button>
                                   </div>
                            </div>
                            <p>
                                   <strong>Our top destinations. See them by continent.</strong>
                            </p>
                     </div>
                     <div
                            className="flex gap-6 p-10 pt-4 m-0 overflow-x-auto scrollbar-hide"
                            ref={scrollRef}
                            style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}>
                            {cards.map((card, i) => (
                                   <div key={i} className="flex-shrink-0">
                                          <Link to={card.to} className="inline-block rounded-xl group">
                                                 <div className="relative inline-block rounded-xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-xl">
                                                       <img src={card.img} className="rounded-xl w-[300px] h-[400px] object-cover" />
                                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center gap-2 transition-colors duration-300 group-hover:from-black/80">
                                                               <span>{card.emoji}</span>
                                                               <h2 className="text-white text-xl font-popins-HelveticaNeue-Light font-bold">{card.title}</h2>
                                                        </div>
                                                 </div>
                                          </Link>
                                   </div>

                            ))}
                     </div>
                     
                     <style>
                            {`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
                     </style>
                     <section className=" px-6 py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mb-4">
          Uttarakhand Tour Packages
        </h2>

      </div>
      </section>
              </div>

       );
}
