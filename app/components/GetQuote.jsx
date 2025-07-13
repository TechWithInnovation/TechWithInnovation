"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

const GetQuoteSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-mono mb-4">Get a Quote</h2>
                        <p className="text-xl text-muted-foreground">
                            Ready to start your project? Let's discuss your requirements and create something amazing together.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name *
                                        </label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                                        Budget (Optional)
                                    </label>
                                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your budget range" />
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
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Project Description *
                                    </label>
                                    <Textarea
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                        required
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button type="submit" size="lg" className="w-full group bg-sky-500 hover:bg-sky-600/90">
                                        Send Quote Request
                                        <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                            <IconArrowRight className="h-5 w-5" />
                                        </motion.div>
                                    </Button>
                                </motion.div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
export default GetQuoteSection
