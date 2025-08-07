"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader, 
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Badge
} from "@/components/ui/badge";
import {
  Button
} from "@/components/ui/button";
import {
  X
} from "lucide-react";

const ProjectDetailDrawer = ({
  project, isOpen, onClose
}) => {
  if (!project) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="h-[90vh] flex flex-col" side="bottom">
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
          <SheetTitle className="font-mono font-normal">
            {project.title}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full max-w-md h-auto rounded-lg object-cover shadow-lg mb-6"
          />
        <SheetDescription className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {project.metadesc}
        </SheetDescription>
        <div className="mb-6">
          <h3 className="text-sm font-mono mb-3">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 text-sm"
                >
                {tech}
              </Badge>
            ))} 
          </div>
        </div>
        <h3 className="text-sm font-mono mb-3">Project Description:</h3>
        <SheetDescription className="text-md text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </SheetDescription>
        <div className="mt-auto pt-6 border-t">
          {/*<Button className="w-full sm:w-auto">Visit Live Project</Button>*/}
        </div>
      </div>
    </SheetContent>
  </Sheet>
);
};

export default ProjectDetailDrawer;