"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/public/data";
import { Card, CardContent } from "@/components/ui/card";

const scrollSpeed = 1;

const Testimonial = () => {
  const scrollRef = useRef(null);
  const frameRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const infiniteTestimonials = [...testimonials, ...testimonials];

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

  const pauseScroll = () => setIsUserInteracting(true);
  const resumeScroll = () => setIsUserInteracting(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-mono mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
            onTouchStart={pauseScroll}
            onTouchEnd={resumeScroll}
          >
            <div className="flex gap-6 pb-4 w-max">
              {infiniteTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw]"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
