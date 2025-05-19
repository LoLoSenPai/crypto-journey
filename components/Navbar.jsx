import React from "react";

const Navbar = () => {
  return (
    <nav className="flex mx-auto items-center justify-between p-8 m-8 h-16 text-primary-foreground">
      <div className="flex items-center">
        <a href="/"><img src="/logo.png" alt="Logo" className="h-32" /></a>
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <a
            href="/blockchain-basics"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Blockchain Basics
          </a>
        </li>
        <li>
          <a
            href="/get-started"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Get Started
          </a>
        </li>
        <li>
          <a
            href="/security"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Security
          </a>
        </li>
        <li>
          <a
            href="/degens"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Degens
          </a>
        </li>
        <li>
          <a
            href="/tricks-and-tips"
            className="font-medium text-base px-3 py-1 rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Tricks & Tips
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
