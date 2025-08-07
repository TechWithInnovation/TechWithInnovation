"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  IconArrowRight,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconBrandFacebook
} from "@tabler/icons-react"
import { motion } from 'framer-motion' 

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-32 md:pt-40 bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/hero.jpg')]"
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto flex max-w-6xl flex-col pt-8 md:pt-0 relative z-10"
      >
        <motion.h1
          className="max-w-4xl text-balance font-mono text-3xl font-medium leading-snug md:text-4xl md:leading-tight xl:text-6xl xl:leading-tight text-white dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Create a <span className="spinner text-sky-500">website</span> today — But without the hassle.
        </motion.h1>

        <motion.h2
          className="w-full max-w-2xl text-balance text-base font-normal text-white/70 dark:text-white/70 mt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We craft exceptional digital experiences that drive growth, engage users, and transform businesses through cutting-edge technology and innovative design.
        </motion.h2>

        <motion.div
          className="mb-6 mt-10 flex gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            asChild
            className="inline-flex border border-transparent items-center justify-center h-11 px-6 text-white/80 bg-os-background-200 hover:bg-os-background-300/60 hover:text-primary"
          >
            <Link href="#projects">View our projects</Link>
          </Button>

          <Button
            asChild
            className="inline-flex items-center justify-center bg-sky-500 text-black hover:bg-sky-600/90 hover:ring-4 hover:ring-primary/10 active:scale-[0.98] h-11 px-6"
          >
            <Link href="#contact">
              Get a quote <IconArrowRight />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[
            { icon: IconBrandFacebook, href: "https://facebook.com", label: "Facebook" },
            { icon: IconBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: IconBrandTwitter, href: "https://twitter.com", label: "Twitter" },
            { icon: IconMail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <Link href={href} key={label} target="_blank">
              <Button
                size="icon"
                className="bg-transparent border border-white/30 text-white hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </Button>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
