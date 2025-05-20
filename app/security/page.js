'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const securityTips = [
    {
        id: 1,
        title: "Secure Your Keys",
        description: "Never share your private keys or seed phrases. Store them offline in a secure location.",
        icon: "/images/security.png",
        color: "bg-[#FF6B6B]",
    },
    {
        id: 2,
        title: "Use Hardware Wallets",
        description: "For large amounts, use hardware wallets like Ledger or Trezor for cold storage.",
        icon: "/images/security2.png",
        color: "bg-[#4ECDC4]",
    },
    {
        id: 3,
        title: "Enable 2FA",
        description: "Always use two-factor authentication for exchange accounts and wallets when available.",
        icon: "/images/security.png",
        color: "bg-[#45B7D1]",
    },
    {
        id: 4,
        title: "Verify Transactions",
        description: "Double-check addresses and amounts before sending. Transactions cannot be reversed.",
        icon: "/images/security2.png",
        color: "bg-[#96CEB4]",
    }
];

const commonScams = [
    "Fake wallet websites",
    "Phishing emails",
    "Impersonation scams",
    "Fake airdrops",
    "Pump and dump schemes",
    "Fake support staff"
];

export default function SecurityPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl text-center font-bold text-primary mb-4"
            >
                Security First
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-center text-secondary mb-12"
            >
                Your guide to staying safe in the crypto world
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
                {securityTips.map((tip, index) => (
                    <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative overflow-hidden bg-card rounded-xl p-6 border-2 border-border hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="relative z-10">
                            <div className={`w-12 h-12 ${tip.color} rounded-full mb-4 flex items-center justify-center`}>
                                <Image
                                    src={tip.icon}
                                    alt={tip.title}
                                    width={32}
                                    height={32}
                                    className="opacity-80"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-3">
                                {tip.title}
                            </h2>
                            <p className="text-secondary text-lg">
                                {tip.description}
                            </p>
                        </div>
                        
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                            <Image
                                src={tip.icon}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-card rounded-xl p-8 border-2 border-border relative overflow-hidden"
            >
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Common Scams to Avoid
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {commonScams.map((scam, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="flex items-center gap-3 text-lg text-secondary"
                            >
                                <span className="w-2 h-2 bg-destructive rounded-full" />
                                {scam}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <img
                    src="/images/card-bg2.png"
                    alt="Background pattern"
                    className="absolute -bottom-10 right-0 w-64 opacity-20"
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center text-secondary"
            >
                <p className="text-lg">
                    Remember: If something seems too good to be true, it probably is.
                </p>
            </motion.div>
        </div>
    );
}