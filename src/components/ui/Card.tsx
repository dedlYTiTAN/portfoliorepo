import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "gradient";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border border-white/10 transition-all duration-300",
                    {
                        "bg-zinc-900/50 hover:bg-zinc-900/80": variant === "default",
                        "bg-white/5 backdrop-blur-md hover:bg-white/10 border-white/10":
                            variant === "glass",
                        "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20":
                            variant === "gradient",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = "Card";

export { Card };
