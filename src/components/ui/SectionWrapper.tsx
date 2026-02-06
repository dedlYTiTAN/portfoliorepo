import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    id: string; // ID is required for navigation
    containerClassName?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
    ({ className, containerClassName, children, id, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn("py-20 md:py-32 relative", className)}
                {...props}
            >
                <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
                    {children}
                </div>
            </section>
        );
    }
);

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
