
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

export default function GetStartedPage() {
    return (
        <main className="max-w-2xl mx-auto mt-12 px-4">
            <h1 className="text-5xl font-bold text-center text-primary mb-2">Wallet Setup</h1>
            <p className="text-lg text-center text-secondary mb-8">
                Set up your first cryptocurrency wallet and purchase your first crypto.
            </p>

            <ol className="space-y-4">
                {steps.map((step) => (
                    <li
                        key={step.id}
                        className="relative overflow-hidden flex items-center gap-4 bg-card rounded-xl px-4 py-3 shadow-sm border-2 border-border hover:shadow-md transition-all"
                    >
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold z-10">
                            {step.id}
                        </div>

                        <Image
                            src={step.icon}
                            alt={step.title}
                            width={80}
                            height={80}
                            className="rounded-md z-10"
                        />

                        <Link
                            href={step.href}
                            className="text-2xl font-bold text-foreground hover:text-secondary-foreground transition-colors z-10"
                        >
                            {step.title}
                        </Link>

                        <img
                            src="/images/card-bg1.png"
                            alt="Grass background"
                            className="absolute -bottom-14 left-0 w-full scale-107 object-bottom object-cover z-0 pointer-events-none opacity-70"
                        />
                    </li>
                ))}
            </ol>
        </main>
    );
}
