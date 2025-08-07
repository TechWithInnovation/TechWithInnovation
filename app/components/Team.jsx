"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconBrandLinkedin, 
  IconBrandGithub,
  IconExternalLink,
  IconBrandTwitter,
  IconBrandInstagram
} from "@tabler/icons-react";
import { teamMembers } from "@/public/data";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const Team = () => {
  const getSocialIcon = platform => {
    switch (platform) {
      case "linkedin":
        return <IconBrandLinkedin className="h-4 w-4" />;
      case "twitter":
        return <IconBrandTwitter className="h-4 w-4" />;
      case "github":
        return <IconBrandGithub className="h-4 w-4" />;
      case "dribbble":
        return <IconExternalLink className="h-4 w-4" />;
      default:
        return <IconExternalLink className="h-4 w-4" />;
    }
  };
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-mono mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind our innovative solutions. Each
            bringing unique expertise and passion to every project.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={member.id} variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2">
                <div className="aspect-square overflow-hidden justify-center items-center flex">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-4/5 h-4/5 object-cover group-hover:scale-105 transition-transform duration-300 rounded-full"
                  />
                </div>
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-mono mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-bold">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-xs md:text-sm mb-4">
                    {member.experience} years experience
                  </p>
                       <p className="text-muted-foreground text-xs md:text-sm mb-4">
                    {member.bio}
                  </p>
 
                  <div className="flex justify-center space-x-2">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <Button
                        key={platform}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 transition-colors hover:text-primary"
                        asChild
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${platform}`}
                        >
                          {getSocialIcon(platform)}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
