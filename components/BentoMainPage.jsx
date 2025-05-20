import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileText, Search, Languages, Calendar, Bell } from "lucide-react";

const features = [
  {
    Icon: FileText,
    name: "Let's get started",
    description: "Onboard yourself to the world of blockchain.",
    href: "/get-started",
    cta: "Get started",
    background: (
      <img
        src="/images/girl-with-pc.png"
        alt=""
        className="absolute left-5 top-5 w-70 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Search,
    name: "Blockchain Basics",
    description: "Learn the fundamentals of blockchain technology.",
    href: "/blockchain-basics",
    cta: "Learn more",
    background: (
      <img
        src="/images/blockchain-basics.png"
        alt=""
        className="absolute left-5 bottom-5 w-70 pointer-events-none select-none"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Bell,
    name: "Degens",
    description:
      "Explore the world of degens and their impact on the blockchain.",
    href: "/degens",
    cta: "Learn more",
    background: (
      <img
        src="/images/degens.png"
        alt=""
        className="absolute -right-2 -bottom-5 w-48 pointer-events-none select-none"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    descriptionMaxWidth: "max-w-[190px]",
  },
  {
    Icon: Languages,
    name: "Tricks & Tips",
    description: "Discover tips and tricks for navigating the blockchain.",
    href: "/tricks-and-tips",
    cta: "Learn more",
    background: (
      <img
        src="/images/tricksandtips.png"
        alt=""
        className="absolute left-7 bottom-9 w-70 pointer-events-none select-none"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Calendar,
    name: "Security",
    description: "Learn about security best practices in blockchain.",
    href: "/security",
    cta: "Learn more",
    background: (
      <img
        src="/images/security.png"
        alt=""
        className="absolute -right-4 -bottom-3 w-40 pointer-events-none select-none"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    descriptionMaxWidth: "max-w-[220px]",
  },
];

function BentoGridMain() {
  return (
    <BentoGrid className="lg:grid-rows-3 p-8 border-3 border-border rounded-lg shadow-lg">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { BentoGridMain };
