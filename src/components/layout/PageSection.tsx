import React from "react";
import { cn } from "@/lib/utils";

type BackgroundVariant = "default" | "muted" | "dark";

interface PageSectionProps {
  children: React.ReactNode;
  id?: string;
  background?: BackgroundVariant;
  className?: string;
}

export function PageSection({
  children,
  id,
  background = "default",
  className,
}: PageSectionProps) {
  const bgStyles = {
    default: "bg-white text-gray-900",
    muted: "bg-gray-50 text-gray-900",
    dark: "bg-slate-950 text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", bgStyles[background], className)}
    >
      {children}
    </section>
  );
}
