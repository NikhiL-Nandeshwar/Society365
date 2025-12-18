import { Control, FieldValues, Path, PathValue } from "react-hook-form";

export interface IPasswordControllerProps<T extends FieldValues> {
    control?: Control<T>;
    name: Path<T>;
    label: string;
    description?: string;
    autoComplete?: string;
    className?: string;
    defaultValue?: PathValue<T, Path<T>> | undefined;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    readOnly?: boolean;
    showValidation?: boolean;
    onClick?: () => void;
}
