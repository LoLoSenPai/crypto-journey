'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        title: 'Phantom Wallet',
        icon: '/icons/phantom.png',
        content: `
            1. Visit phantom.app
            2. Install the browser extension
            3. Create a new wallet
            4. Save your recovery phrase securely
            5. Start exploring Solana!
        `,
    },
    {
        id: 2,
        title: 'MetaMask',
        icon: '/icons/metamask.png',
        content: `
            1. Go to metamask.io
            2. Add to your browser
            3. Create a wallet
            4. Secure your seed phrase
            5. You're ready for Ethereum!
        `,
    },
    {
        id: 3,
        title: 'Coinbase',
        icon: '/icons/coinbase.png',
        content: `
            1. Create a Coinbase account
            2. Verify your identity
            3. Add a payment method
            4. Buy your first crypto
            5. Transfer to your wallet
        `,
    },
    {
        id: 4,
        title: 'Binance',
        icon: '/icons/binance.png',
        content: `
            1. Sign up on Binance
            2. Complete verification
            3. Deposit funds
            4. Start trading
            5. Explore other features
        `,
    },
];

export default function GetStartedPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsDialogOpen(false);
            setCurrentStep(0);
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <main className="max-w-2xl mx-auto px-4 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl text-center font-bold text-primary mb-8"
            >
                Wallet Setup
            </motion.h1>
            <p className="text-lg text-center text-secondary mb-8">
                Set up your first cryptocurrency wallet and purchase your first crypto.
            </p>

            <ol className="space-y-4">
                {steps.map((step, index) => (
                    <motion.li
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative overflow-hidden flex items-center gap-8 bg-card rounded-xl px-6 py-4 shadow-sm border-2 border-border hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => {
                            setCurrentStep(index);
                            setIsDialogOpen(true);
                        }}
                    >
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            {step.id}
                        </div>

                        <Image
                            src={step.icon}
                            alt={step.title}
                            width={100}
                            height={100}
                            className="rounded-md transition-transform duration-300 z-1 group-hover:scale-110"
                        />

                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>

                        <img
                            src="/images/card-bg1.png"
                            alt="Background"
                            className="absolute -bottom-14 left-0 w-full scale-107 object-bottom object-cover z-0 pointer-events-none opacity-50"
                        />
                    </motion.li>
                ))}
            </ol>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl mb-2">{steps[currentStep]?.title}</DialogTitle>
                    </DialogHeader>

                    <div className="mt-4">
                        <div className="flex items-center justify-center mb-6">
                            <Image
                                src={steps[currentStep]?.icon}
                                alt={steps[currentStep]?.title}
                                width={120}
                                height={120}
                                className="rounded-xl"
                            />
                        </div>

                        <div className="whitespace-pre-line text-foreground">
                            {steps[currentStep]?.content}
                        </div>
                    </div>

                    <div className="flex justify-between mt-6">
                        <Button
                            variant="outline"
                            onClick={previousStep}
                            disabled={currentStep === 0}
                        >
                            Previous
                        </Button>
                        <Button onClick={nextStep}>
                            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
}