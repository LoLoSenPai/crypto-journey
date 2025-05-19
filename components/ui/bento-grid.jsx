import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  descriptionMaxWidth,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card border-3 border-border",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex  flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p
        className={cn(
          "text-muted-foreground leading-snug",
          descriptionMaxWidth
        )}
      >
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10  flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0  transition-all duration-300 group-hover:bg-primary/20" />
  </div>
);

export { BentoCard, BentoGrid };
