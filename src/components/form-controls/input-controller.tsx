import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { FieldValues, useFormContext } from "react-hook-form";
import { FloatingLabelInput } from "../ui/floating-input";
import { IInputControllerProps } from "@/interface/form-controller/IInputProps";
import { filterInputValue } from "@/lib/input-filter";

export const InputController = <T extends FieldValues>({ name, label, reset, ...rest }: IInputControllerProps<T>) => {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={name}
            defaultValue={rest.defaultValue}
            rules={{ required: rest?.required ? `${label} is required` : undefined }}
            render={({ field }) => (
                <FormItem className="w-full">
                    <div className="relative">
                        <FloatingLabelInput
                            {...field}
                            id={name}
                            error={!!form?.formState?.errors?.[name]}
                            label={label}
                            className={rest?.className}
                            type={rest.type === "number" ? "text" : rest?.type ?? "text"}
                            disabled={rest?.disabled}
                            readOnly={rest?.readOnly}
                            onChange={(e) => {
                                const filteredValue = filterInputValue(rest.type, e.target.value);
                                field.onChange({
                                    ...e,
                                    target: {
                                        ...e.target,
                                        value: filteredValue
                                    }
                                });
                                rest.onChange?.(e);
                            }}
                            onBlur={(e) => {
                                field.onBlur();
                                rest.onBlur?.(e);
                            }}
                            minLength={rest?.minLength}
                            maxLength={rest?.maxLength}
                            autoComplete={rest?.autoComplete}
                            tooltipContent={rest.toolTipContent ?? label}
                            required={rest?.required}
                        />
                        {reset && field.value && (
                            <X onClick={() => form.resetField(name)}
                                className={cn(
                                    "opacity-50 hover:opacity-100 size-7 absolute right-1 top-1/2 -translate-y-1/2 px-1.5 font-normal cursor-pointer"
                                )}
                            />
                        )}
                    </div>
                    {rest?.description && <FormDescription>{rest?.description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
