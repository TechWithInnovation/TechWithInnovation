"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IconArrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { projects, technologies } from "@/public/data";
import Link from "next/link";
import ProjectDetailDrawer from "./ProjectDetailDrawer";

const Projects = () => {
  const [filter, setFilter] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const scrollRef = useRef(null);

  const filteredProjects = filter
    ? projects.filter((p) => p.tech.includes(filter))
    : projects;

  const cardWidth = 320;
  const gap = 24;

  const scrollToIndex = (indexOrUpdater) => {
    if (!scrollRef.current) return;

    const maxIndex = filteredProjects.length - 1;
    const newIndex = typeof indexOrUpdater === 'function'
      ? indexOrUpdater(currentIndex)
      : indexOrUpdater;

    const boundedIndex = Math.min(Math.max(newIndex, 0), maxIndex);
    const scrollLeft = boundedIndex * (cardWidth + gap);

    scrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setCurrentIndex(boundedIndex);
  };

  const handlePrevious = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  const handleDotClick = (index) => {
    scrollToIndex(index);
  };

  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProject(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((prev) =>
        currentIndex >= filteredProjects.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, filteredProjects.length]);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-mono mb-4">Our Latest Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise and creativity
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant={!filter ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className="transition-all duration-200"
          >
            All
          </Button>
          {technologies.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tech)}
              className="transition-all duration-200"
            >
              {tech}
            </Button>
          ))}
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
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{
                    width: cardWidth,
                    scrollSnapAlign: "start",
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-mono mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{project.metadesc}</p>
                      <Button
                        variant="outline"
                        className="group bg-transparent"
                        onClick={() => handleViewProject(project)}>
                        View Project
                        <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              aria-label="Previous projects"
              disabled={currentIndex === 0}
            >
              <IconChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              aria-label="Next projects"
              disabled={currentIndex === filteredProjects.length - 1}
            >
              <IconChevronRight className="h-4 w-4" />
            </Button></div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-sky-500 hover:bg-sky-500/90"
                onClick={() => handleViewProject(project)}>
                <Link href="/projects">
                  View All Projects
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <ProjectDetailDrawer project={selectedProject} isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

        </div>
      </div>
    </section>
  );
}
export default Projects
