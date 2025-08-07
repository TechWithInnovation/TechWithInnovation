"use client"
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; 
import { faqs } from "@/public/data"

const FAQSection = () => {
    return (
        <section id="faq" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-mono mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about our services and process
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                                <AccordionTrigger className="text-left hover:no-underline py-6">
                                    <span className="font-semibold">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
export default FAQSection