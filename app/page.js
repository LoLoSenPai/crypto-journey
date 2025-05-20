import Image from "next/image";
import { BentoGridMain } from "@/components/BentoMainPage";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BentoGridMain />
      </main>
      <footer className="row-start-3 text-secondary text-lg flex gap-[24px] flex-wrap items-center justify-center">
        {/* Made with Love by LoLoSenPai href */}
        <a
          href="https://portfolio.lololabs.xyz/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by LoLoSenPai
        </a>
      </footer>
    </div>
  );
}
