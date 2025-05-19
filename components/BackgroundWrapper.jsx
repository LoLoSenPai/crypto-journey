"use client";

import Image from "next/image";
import { ReactNode } from "react";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/bg1.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="z-0 object-cover object-center pointer-events-none select-none"
      />

      {/* Page content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
