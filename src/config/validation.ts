export const validatePassword = (password: string) => ({
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    hasMinLength: password.length >= 8,
});

export const validationMessages = [
    { key: "hasUpperCase", label: "At least one capital letter" },
    { key: "hasLowerCase", label: "At least one lowercase letter" },
    { key: "hasNumber", label: "At least one number (0-9)" },
    { key: "hasMinLength", label: "Minimum 8 characters" },
    { key: "hasSymbol", label: "At least one symbol (!@#$%^&*)" },
];