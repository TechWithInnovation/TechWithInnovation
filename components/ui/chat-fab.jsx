"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Send, X } from "lucide-react"
import { IconBrandWhatsapp, IconBrandWhatsappFilled } from "@tabler/icons-react"
import { motion } from "framer-motion"


const popoverVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: "easeInOut" },
}

const ChatFab = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description: "",
  })

  const whatsappNumber = "+2348027618122"

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, budget: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, budget, description } = formData

    const templateString = `*--- PROJECT REQUEST ---*\n\nHello, I'm ${name}.\n*Email*: ${email}\n*Budget*: ${budget || "Not specified"}\n\n*--- PROJECT DESCRIPTION ---*\n ${description}`
    const encodedTemplate = encodeURIComponent(templateString)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedTemplate}`

    window.open(whatsappUrl, "_blank")
    setFormData({ name: "", email: "", budget: "", description: "" })
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full h-10 w-10 shadow-lg z-50 animate-bounce-slow bg-green-500 hover:scale-105 transition-transform duration-200 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Open chat support"
        >
          <IconBrandWhatsapp className="h-14 w-14" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 mr-6 mb-2 bg-background shadow-lg rounded-lg">
        <motion.div 
         initial="initial"
         animate="animate" 
         exit="exit" 
         variants={popoverVariants}
         className="flex items-center justify-between mb-4">
          <h3 className="text-md font-mono">Send a text on Whatsapp!</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <X className="h-4 w-4" />
          </Button>
        </motion.div>
        <p className="text-sm text-muted-foreground mb-4">Tell us about your project and we'll get back to you.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="budget" className="sr-only">
              Budget
            </label>
            <Select onValueChange={handleSelectChange} value={formData.budget}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range (Optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k+">$50,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="description" className="sr-only">
              Project Description
            </label>
            <Textarea
              id="description"
              placeholder="Tell us about your project..."
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
            Send Message <Send className="h-4 w-4" />
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default ChatFab