'use client';

import Image from 'next/image';
import Link from 'next/link';

const steps = [
    {
        id: 1,
        title: 'Create a Phantom wallet',
        icon: '/icons/phantom.png',
        href: '#phantom',
    },
    {
        id: 2,
        title: 'Create a MetaMask wallet',
        icon: '/icons/metamask.png',
        href: '#metamask',
    },
    {
        id: 3,
        title: 'Buy crypto on Coinbase',
        icon: '/icons/coinbase.png',
        href: '#coinbase',
    },
    {
        id: 4,
        title: 'Buy crypto on Binance',
        icon: '/icons/binance.png',
        href: '#binance',
    },
];

export default function WalletSetupPage() {
    return (
        <main className="max-w-2xl mx-auto mt-12 px-4">
            <h1 className="text-6xl font-serif text-center text-white mb-2">Wallet Setup</h1>
            <p className="text-center text-blue-500 mb-6">
                Set up your first cryptocurrency wallet and purchase your first crypto.
            </p>

            <ol className="space-y-4 w-[50px]">
                {steps.map((step) => (
                    <li
                        key={step.id}
                        className="flex items-center gap-4 bg-card rounded-xl px-4 py-3 shadow-sm border border-border hover:shadow-md transition-all"
                    >
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            {step.id}
                        </div>
                        <Image
                            src={step.icon}
                            alt={step.title}
                            width={32}
                            height={32}
                            className="rounded-md"
                        />
                        <Link
                            href={step.href}
                            className="text-base font-medium text-foreground hover:text-secondary-foreground transition-colors"
                        >
                            {step.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </main>
    );
}
