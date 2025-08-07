"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "framer-motion";
import ThemeProvider from "./ThemeProvider"; 

const ClientLayout = ({ children }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);
 
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AnimatePresence>
                {!loadingComplete && (
                    <SplashScreen
                        onLoadingComplete={() => setLoadingComplete(true)}
                    />
                )}
            </AnimatePresence>

            {loadingComplete && children}

            <Toaster position="top-center" richColors />
        </ThemeProvider>
    );
};

export default ClientLayout;
