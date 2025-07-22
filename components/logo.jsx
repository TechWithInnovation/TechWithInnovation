'use client';
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from "framer-motion";

const Logo = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { theme, setTheme } = useTheme();
    
  if (!mounted) return null; 
    return (
        <motion.a
            href="/"
        >
            <Image
                src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'}
                alt="Tech With Innovation Logo"
                priority
                width={200}
                height={60}
                sizes="100vw"
                style={{ objectFit: 'contain' }}
            />
        </motion.a>
    )
}

export default Logo