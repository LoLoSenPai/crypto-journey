'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sections = [
    {
        id: 1,
        title: "What is Blockchain?",
        description: "A decentralized digital ledger that records transactions across a network of computers.",
        image: "/images/blockchain-basics.png",
    },
    {
        id: 2,
        title: "How Does It Work?",
        description: "Transactions are grouped into blocks, verified by network participants, and linked together cryptographically.",
        image: "/images/card-bg1.png",
    },
    {
        id: 3,
        title: "Why is it Revolutionary?",
        description: "It enables trust without intermediaries, ensuring transparency and immutability of data.",
        image: "/images/card-bg2.png",
    }
];

export default function BlockchainBasicsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl text-center font-bold text-primary mb-8"
            >
                Blockchain Basics
            </motion.h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative overflow-hidden bg-card rounded-xl p-6 border-2 border-border group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                {section.title}
                            </h2>
                            <p className="text-foreground text-lg mb-6">
                                {section.description}
                            </p>
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-48 h-48 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 bg-card rounded-xl p-8 border-2 border-border relative overflow-hidden"
            >
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Beyond Cryptocurrency
                    </h2>
                    <p className="text-lg text-foreground mb-4">
                        While blockchain is famous for powering cryptocurrencies, its potential reaches far beyond:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-6 text-lg text-foreground">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Supply Chain Tracking
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Digital Identity
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Smart Contracts
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            Decentralized Finance
                        </li>
                    </ul>
                </div>

                <img
                    src="/images/card-bg1.png"
                    alt="Background pattern"
                    className="absolute -bottom-10 right-0 w-64 opacity-30"
                />
            </motion.div>
        </div>
    );
}