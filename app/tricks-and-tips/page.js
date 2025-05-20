'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TricksAndTipsPage() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl text-center font-bold text-primary mb-8"
            >
                Tricks and Tips
            </motion.h1>
            <p className="text-lg text-center text-secondary">Discover the best practices and tips for navigating the crypto world.</p>
            <div className="mt-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Best Practices</h2>
                <ul className="list-disc list-inside text-lg text-secondary">
                    <li>Always use two-factor authentication.</li>
                    <li>Keep your private keys secure.</li>
                    <li>Be cautious of phishing scams.</li>
                    <li>Regularly update your software.</li>
                </ul>
            </div>
        </main>
    );
}