'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DegensPage() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl text-center font-bold text-primary mb-8"
            >
                Degens
            </motion.h1>
            <p className="text-lg text-center text-secondary">Welcome to the world of NFTs, Memecoins, and Play2Earn.</p>
        </main>
    );
}