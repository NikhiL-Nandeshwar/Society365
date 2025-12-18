import { HTMLAttributes } from "react";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";

export interface IInputControllerProps<T extends FieldValues>
    extends HTMLAttributes<HTMLInputElement> {
    control?: Control<T>;
    name: Path<T>;
    label: string;
    description?: string;
    className?: string;
    placeholder?: string;
    defaultValue?: PathValue<T, Path<T>> | undefined;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    toolTipContent?: string;
    readOnly?: boolean;
    reset?: boolean;
    required?: boolean;
    autoComplete?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: "alphaNum" | "email" | "number" | "text" | "float";
    resetClick?: () => void;
}
