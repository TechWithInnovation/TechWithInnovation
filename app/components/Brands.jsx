"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brands } from "@/public/data";

const scrollSpeed = 1;

const Brands = () => {
  const scrollRef = useRef(null);
  const frameRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const infiniteBrands = [...brands, ...brands];

  const autoScroll = () => {
    const el = scrollRef.current;
    if (!el || isUserInteracting) return;

    el.scrollLeft += scrollSpeed;

    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }

    frameRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isUserInteracting]);

  const pauseAutoScroll = () => setIsUserInteracting(true);
  const resumeAutoScroll = () => setIsUserInteracting(false);

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-mono mb-4">
            Trusted by forward-thinking brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of working with innovative companies across
            various industries
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScroll}
          >
            <div className="flex gap-8 md:gap-12 pb-4 whitespace-nowrap w-max">
              {infiniteBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-32 md:w-40"
                >
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
