import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps & { error?: boolean }>(
    ({ className, error, ...props }, ref) => {
        return (
            <Input
                placeholder=" "
                className={cn(
                    "peer",
                    className,
                    error && "focus:!border-destructive focus:!ring-destructive/50 focus-visible:!ring-destructive/50 focus-visible:!border-destructive hover:!border-destructive/50",
                )}
                ref={ref}
                {...props}
            />  
        );
    }
);

FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
    return (
        <Label className={cn(
            "peer-focus:secondary max-w-[200px] sm:max-w-[150px] md:max-w-[100px] lg:max-w-[200px] truncate peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-90 transform bg-background px-0.5 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-0.5 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
            className
        )}
            ref={ref}
            {...props}
        />
    );
});

FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = InputProps & { label?: string; className?: string; tooltipContent?: React.ReactNode; tooltipOpen?: boolean; };

const FloatingLabelInput = React.forwardRef<
    React.ElementRef<typeof FloatingInput>,
    React.PropsWithoutRef<FloatingLabelInputProps & { error?: boolean }>
>(({ id, label, className, tooltipContent, tooltipOpen = false, error = false, ...props }, ref) => {
    return (
        <div className="relative">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>
                            <FloatingInput ref={ref} id={id} {...props} className={className} error={error} />
                            <FloatingLabel htmlFor={id}>{label}{`${props.required ? ' *' : ''}`}</FloatingLabel>
                        </div>
                    </TooltipTrigger>
                    {tooltipContent && <TooltipContent side="left" align="center">{tooltipContent}</TooltipContent>}
                </Tooltip>
            </TooltipProvider>
        </div>
    );
});

FloatingLabelInput.displayName = "FloatingLabelInput";
export { FloatingInput, FloatingLabel, FloatingLabelInput };