"use client"
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { projects, technologies } from "@/public/data";
import ProjectDetailDrawer from '../components/ProjectDetailDrawer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IconArrowRight } from '@tabler/icons-react';
import ChatFab from '@/components/ui/chat-fab';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ProjectPage = () => {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.tech.includes(filter))

  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-mono mb-4">All Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete portfolio of innovative digital solutions.
            </p>
          </motion.div>

          {/* Technology Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp}>
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
                    <p className="text-muted-foreground mb-4 text-sm">{project.description.substring(0, 100)}...</p>
                    <Button
                      variant="outline"
                      className="group bg-transparent"
                      onClick={() => handleViewProject(project)}
                    >
                      View Project
                      <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <ProjectDetailDrawer project={selectedProject} isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      </main>
      <ChatFab/>
      <Footer />
    </div>
  )
}


export default ProjectPage