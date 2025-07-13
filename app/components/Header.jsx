"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowRight, IconMenu } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import ModeToggle from "./ModeToggle";
import { navItems, otherNavItems } from "@/public/data";

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a href="/#"
            className="text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-mono"
          >
            tech<span className="text-sky-500">with</span>innovation
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <IconMenu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 px-4 py-4 sm:px-6 lg:px-8">
                <SheetTitle className="font-mono text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent ">
                  tech<span className="text-sky-500">with</span>innovation
                </SheetTitle>
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  {otherNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button className="w-full mt-8 inline-flex items-center justify-center bg-sky-500 text-primary-foreground hover:bg-sky-600/90 hover:ring-4 hover:ring-primary/10 active:scale-[0.98] ">
                    Get in touch<IconArrowRight />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex flex gap-4">
            <ModeToggle />

            <Button className="inline-flex items-center justify-center bg-sky-500 text-primary-foreground hover:bg-sky-600/90 hover:ring-4 hover:ring-primary/10 active:scale-[0.98]">
              Get in touch <IconArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
