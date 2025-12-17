

import React from "react";
import { Star, MessageSquare, Globe, CheckCircle } from "lucide-react";

export default function TrustedSection() {
  return (
    <section className="w-full bg-white py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Trusted by all the largest travel brands
        </h2>

        {/* Auto-scrolling logos */}
        <div className="relative w-full overflow-hidden mb-12">
          <div className="flex items-center gap-12 animate-scroll">
            <img src="/logos/travel.png" alt="Travel" className="h-12 object-contain" />
            <img src="/logos/worldfly.png" alt="Worldfly" className="h-12 object-contain" />
            <img src="/logos/summer.png" alt="Summer" className="h-12 object-contain" />
            <img src="/logos/logistics.png" alt="Logistics" className="h-12 object-contain" />
            <img src="/logos/tourism.png" alt="Tourism" className="h-12 object-contain" />
            <img src="/logos/mountain.png" alt="Mountain" className="h-12 object-contain" />

            {/* Repeat for smooth scrolling */}
            <img src="/logos/travel.png" alt="Travel" className="h-12 object-contain" />
            <img src="/logos/worldfly.png" alt="Worldfly" className="h-12 object-contain" />
            <img src="/logos/summer.png" alt="Summer" className="h-12 object-contain" />
            <img src="/logos/logistics.png" alt="Logistics" className="h-12 object-contain" />
            <img src="/logos/tourism.png" alt="Tourism" className="h-12 object-contain" />
            <img src="/logos/mountain.png" alt="Mountain" className="h-12 object-contain" />
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-left">
          <div className="flex flex-col items-start">
            <Star className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg text-gray-900">25 Years of Excellence</h3>
            <p className="text-gray-600 text-sm">
              Deliver the most convenient and efficient travel services.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <MessageSquare className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg text-gray-900">24/7 Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Our skilled travel agents are ready to assist you any time of the day.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <Globe className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg text-gray-900">117+ Locations</h3>
            <p className="text-gray-600 text-sm">
              Providing you the most efficient and reliable services.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <CheckCircle className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg text-gray-900">Exclusive Promo Deals</h3>
            <p className="text-gray-600 text-sm">
              Best deals on tour packages and other travel services.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}