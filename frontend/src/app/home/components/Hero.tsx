// src/components/HeroSection.tsx

"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the pink circle
    tl.fromTo(
      circleRef.current,
      { opacity: 0, scale: 0.5, x: 100, y: -100 },
      { opacity: 1, scale: 1, x: 0, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Animate the text
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
      '-=1'
    );
  }, []);

  return (
    <section className="relative flex items-center justify-start min-h-screen bg-yellow-100 overflow-hidden">
      {/* Pink circle at the top right */}
      <div
        ref={circleRef}
        className="absolute top-0 right-0 w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-pink-300 rounded-full"
      ></div>

      {/* Text content on the left */}
      <div ref={textRef} className="relative p-4 sm:p-8">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-gray-800 mb-2 sm:mb-4 font-sans">
          Fiore
        </h1>
        <p className="text-[5vw] sm:text-[4vw] md:text-[3vw] text-gray-600 font-sans">
          Your moments, our flowers
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
