"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { whyChooseUs } from "@/public/data";

const cardWidth = 320;
const gap = 24;

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (indexOrUpdater) => {
    if (!scrollRef.current) return;

    const maxIndex = whyChooseUs.length - 1;
    const newIndex =
      typeof indexOrUpdater === "function"
        ? indexOrUpdater(currentIndex)
        : indexOrUpdater;

    const boundedIndex = Math.min(Math.max(newIndex, 0), maxIndex);
    const scrollLeft = boundedIndex * (cardWidth + gap);

    scrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setCurrentIndex(boundedIndex);
  };

  const handlePrevious = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);
  const handleDotClick = (index) => scrollToIndex(index);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((prev) =>
        currentIndex >= whyChooseUs.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, whyChooseUs.length]);

  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-mono mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional results through our expertise, dedication, and innovative approach
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft;
              const index = Math.round(scrollLeft / (cardWidth + gap));
              if (index !== currentIndex) setCurrentIndex(index);
            }}
          >
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: cardWidth, scrollSnapAlign: "start" }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-mono mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              disabled={currentIndex === 0}
            >
              <IconChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {whyChooseUs.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              disabled={currentIndex === whyChooseUs.length - 1}
            >
              <IconChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
