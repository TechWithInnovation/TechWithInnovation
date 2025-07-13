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

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-32 md:pt-40">
      <div className="container mx-auto flex max-w-6xl flex-col pt-8 md:pt-0">
        <h1 className="max-w-4xl text-balance font-mono text-3xl font-medium leading-snug md:text-4xl md:leading-tight xl:text-6xl xl:leading-tight">
          Create a <span className="spinner text-sky-500">website</span> today—But without the hassle.
        </h1>
        <div className="mt-6 flex flex-col">
          <h2 className="w-full max-w-2xl text-balance text-base font-normal text-primary/70 md:text-[18px] md:leading-[30px]">
            We craft exceptional digital experiences that drive growth, engage users, and transform businesses through cutting-edge technology and innovative design.
          </h2>

          <div className="mb-6 mt-10 flex gap-2">
            <Button
              asChild
              className="inline-flex border items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-os-background-300/60 hover:text-primary border-transparent text-primary/80 h-11 px-6 group gap-2 bg-os-background-200"
            >
              <Link href="#projects">View our projects</Link>
            </Button>
            <div className="flex flex-col items-center">
              <Button
                asChild
                className="inline-flex border border-transparent items-center justify-center bg-sky-500 text-primary-foreground hover:bg-sky-600/90 hover:ring-4 hover:ring-primary/10 active:scale-[0.98] h-11 px-6"
              >
                <Link href="#">
                  Get a quote <IconArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Button variant="outline" size="icon">
                <IconBrandFacebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon">
                <IconBrandLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Button variant="outline" size="icon">
                <IconBrandTwitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button variant="outline" size="icon">
                <IconMail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
