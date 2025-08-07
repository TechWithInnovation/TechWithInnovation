"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { NGN_BUDGETS } from '@/public/data'
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { useDetectedCurrency } from "@/hooks/useDetectedCurrency";
import { currencyOptions } from "@/hooks/currencyMap";

const GetQuoteSection = () => {
    const [currency, setCurrency] = useState("NGN");

    const detectedCurrency = useDetectedCurrency();

    useEffect(() => {
      if (detectedCurrency && detectedCurrency !== currency) {
        setCurrency(detectedCurrency);
      }
    }, [detectedCurrency]);

    const { rates: exchangeRates, loading, error } = useExchangeRates("NGN");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: "",
    });

    const [state, handleSubmit] = useForm("xblklgzk");

    React.useEffect(() => {
        if (state.succeeded) {
            toast.success("Your quote request has been sent successfully!");
            setFormData({
                name: "",
                email: "",
                budget: "",
                message: "",
            });
        }
    }, [state.succeeded]);

    const roundToNearest = (num) => {
        if (num < 100) return Math.round(num / 10) * 10;
        if (num < 1000) return Math.round(num / 100) * 100;
        return Math.round(num / 1000) * 1000;
    };

    const convertedBudgets =
        !loading && exchangeRates && exchangeRates[currency]
            ? NGN_BUDGETS.map(({ min, max }) => {
                const rate = exchangeRates[currency];
                const formatAmount = (n) =>
                    new Intl.NumberFormat("en", {
                        style: "currency",
                        currency,
                        maximumFractionDigits: 0,
                    }).format(roundToNearest(n * rate));

                return {
                    label: max
                        ? `${formatAmount(min)} - ${formatAmount(max)}`
                        : `${formatAmount(min)}+`,
                    value: `${min}-${max ?? "plus"}`,
                };
            })
            : [];

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
                            Ready to start your project? Let's discuss your requirements and
                            create something amazing together.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-cols-1 md:flex-cols-2 gap-6">
                                    <div className=" w-full">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="transition-all w-full duration-200 focus:ring-2 focus:ring-primary"
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>

                                    <div className=" w-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="budget"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Budget
                                    </label>
                                    <div className="flex flex-cols-1 md:flex-cols-2 gap-6">
                                        <div>
                                            <Select
                                                onValueChange={(value) => setCurrency(value)}
                                                value={currency}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(currencyOptions).map(
                                                        ([countryCode, currencyCode]) => {
                                                            return (
                                                                <SelectItem
                                                                    value={currencyCode}
                                                                    key={currencyCode}
                                                                >
                                                                    {currencyCode}
                                                                </SelectItem>
                                                            );
                                                        }
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="w-full">
                                            <Select
                                                onValueChange={(value) =>
                                                    setFormData({ ...formData, budget: value })
                                                }
                                                className="w-full"
                                                disabled={loading || error}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select your budget range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {convertedBudgets.length
                                                        ? convertedBudgets.map((range) => (
                                                            <SelectItem
                                                                key={range.value}
                                                                value={range.value}
                                                            >
                                                                {range.label}
                                                            </SelectItem>
                                                        ))
                                                        : !loading &&
                                                        !error && (
                                                            <SelectItem disabled>
                                                                No budget options available
                                                            </SelectItem>
                                                        )}
                                                    {loading && (
                                                        <SelectItem disabled>Loading budgets...</SelectItem>
                                                    )}
                                                    {error && (
                                                        <SelectItem disabled>
                                                            Error loading exchange rates
                                                        </SelectItem>
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Project Description *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                        required
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={state.submitting}
                                        className="w-full group bg-sky-500 hover:bg-sky-600/90"
                                    >
                                        Send Quote Request
                                        <motion.div
                                            className="ml-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
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
    );
};

export default GetQuoteSection;
