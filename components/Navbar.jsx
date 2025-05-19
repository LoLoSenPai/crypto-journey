import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex mx-auto max-w-7xl items-center justify-between p-8 m-8 h-16 text-primary-foreground">
      <div className="flex items-center">
        <Link href="/"><img src="/logo.png" alt="Logo" className="h-32" /></Link>
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <Link
            href="/blockchain-basics"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Blockchain Basics
          </Link>
        </li>
        <li>
          <Link
            href="/get-started"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Get Started
          </Link>
        </li>
        <li>
          <Link
            href="/security"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Security
          </Link>
        </li>
        <li>
          <Link
            href="/degens"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Degens
          </Link>
        </li>
        <li>
          <Link
            href="/tricks-and-tips"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Tricks & Tips
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
