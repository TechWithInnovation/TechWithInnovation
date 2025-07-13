"use client"
import React from 'react'

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const ProjectDetailDrawer = ({ project, isOpen, onClose }) => {
    if (!project) return null

    return (
        <Drawer open={isOpen} onOpenChange={onClose}>
            <DrawerContent className="h-[90vh] flex flex-col">
                <DrawerHeader className="flex flex-row items-center justify-between p-4 border-b">
                    <DrawerTitle className="text-2xl font-bold">{project.title}</DrawerTitle>
                    <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close project details">
                        <X className="h-6 w-6" />
                    </Button>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full max-w-md h-auto rounded-lg object-cover shadow-lg mb-6"
                    />
                    <DrawerDescription className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {project.metadesc}
                    </DrawerDescription>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Technologies Used:</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                                    {tech}
                                </Badge>
                            ))}

                        </div>
                    </div>
                    <DrawerDescription className="text-md text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                    </DrawerDescription>
                    <div className="mt-auto pt-6 border-t">
                        <Button className="w-full md:w-auto">Visit Live Project</Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProjectDetailDrawer