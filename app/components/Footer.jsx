import React from 'react'
import Link from 'next/link'
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react"
import { navItems, otherNavItems } from '@/public/data'
import Logo from '@/components/logo'

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
                      <Logo/>

          <p className="text-sm">Crafting stunning digital experiences that drive results.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <IconBrandFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <IconBrandInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <IconBrandTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <IconBrandLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
            {otherNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Design & Development</li>
            <li>UI/UX Design</li>
            <li>E-commerce Solutions</li>
            <li>Virtual Coaching</li>
            <li>Bulk SMS Integration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>123 Design Street, Creative City, CA 90210</p>
            <p>
              Email:{" "}
              <Link href="mailto:info@designflow.com" className="hover:text-primary transition-colors">
                info@techwithinnovaton.com
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1 (234) 567-890
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-mono">
            tech<span className="text-sky-500">with</span>Innovation
          </span>
          . All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
