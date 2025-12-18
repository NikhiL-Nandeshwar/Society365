import { useCallback, useMemo, useState } from "react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { FloatingLabelInput } from "../ui/floating-input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { validatePassword, validationMessages } from "@/config/validation";
import { IPasswordControllerProps } from "@/interface/auth/IPassword";

export const PasswordController = <T extends FieldValues>({
    name,
    label,
    showValidation = false,
    ...rest
}: IPasswordControllerProps<T>) => {
    const form = useFormContext();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const validationStatus = useMemo(() => validatePassword(password), [password]);
    const isValid = Object.values(validationStatus).every(Boolean);

    // useCallback to prevent re-creation of the function on each render
    const togglePasswordVisibility = useCallback(() => {
        setPasswordVisible((prev) => !prev);
    }, []);

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    <div className="relative">
                        <TooltipProvider>
                            <Tooltip open={!!(showValidation && password && !isValid)}>
                                <TooltipTrigger asChild>
                                    <FloatingLabelInput
                                        {...field}
                                        id={label}
                                        label={label}
                                        className={cn(rest?.className, "hide-password-toggle")}
                                        type={passwordVisible ? "text" : "password"}
                                        disabled={rest?.disabled}
                                        readOnly={rest?.readOnly}
                                        minLength={rest?.minLength}
                                        maxLength={rest?.maxLength}
                                        autoComplete={rest?.autoComplete}
                                        value={password}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setPassword(value);
                                            field.onChange(value);
                                        }}
                                        onCopy={(e) => e.preventDefault()}
                                        onPaste={(e) => e.preventDefault()}
                                        onCut={(e) => e.preventDefault()}
                                    />
                                </TooltipTrigger>

                                <TooltipContent
                                    side="left"
                                    align="center"
                                    className="w-64 p-2 bg-background text-foreground text-xs rounded-md shadow-md dark:text-muted-foreground"
                                >
                                    <p className="font-medium">Password must contain:</p>
                                    <ul className="mt-1 space-y-1">
                                        {validationMessages.map(({ key, label }) => (
                                            <li
                                                key={key}
                                                className={
                                                    validationStatus[key as keyof typeof validationStatus]
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }
                                            >
                                                {validationStatus[key as keyof typeof validationStatus] ? "✔" : "✘"} {label}
                                            </li>
                                        ))}
                                    </ul>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>


                        <Button
                            onClick={togglePasswordVisibility}
                            asChild
                            size="icon"
                            variant="ghost"
                            className="!mt-0 size-8 absolute top-1/2 right-1 -translate-y-1/2 px-1.5 font-normal cursor-pointer text-muted-foreground"
                        >
                            {passwordVisible ? <EyeIcon /> : <EyeOffIcon />}
                        </Button>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};