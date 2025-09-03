import React from 'react';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-background mt-6 border-b-2 relative" style={{ borderColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l-2 border-r-2" style={{ borderColor: '#000000' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Engineering a <br />new economic <br />paradigm
            </h1>
            <p className="text-lg text-foreground mb-8">
              We are a digital asset and blockchain leader helping institutions, startups, and qualified individuals shape a
              changing economy. We provide platform solutions custom-made for a digitally native ecosystem
            </p>
            {/* CTA Button */}
            <div className="relative inline-block">
              <button className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-200 relative z-10">
                GET STARTED
              </button>
              <div className="absolute inset-0 border-2 border-black rounded-full" style={{ transform: 'translate(4px, 4px)' }}></div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[300px] bg-gray-200 rounded-lg overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}>
              <Image
                src="/vercel.svg" // Placeholder image
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 