import { Input as InputHeadless } from "@headlessui/react";
import type { InputProps } from "@/modules/core/types";

const Input: React.FC<InputProps> = ({
  size,
  color,
  variant = "primary",
  ...props
}) => {
  const defaultClasses =
    "flex h-10 w-full rounded-md px-3 py-2 text-sm transition-all";
  const variantClasses = {
    primary:
      "border placeholder:text-muted-foreground-light dark:placeholder:text-muted-foreground-light sm:text-sm sm:leading-6",
    secondary:
      "border border-blue-300 bg-transparent placeholder:text-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-blue-300 dark:text-blue-50 dark:focus:ring-blue-300 dark:focus:ring-offset-blue-900",
    outline: "",
  };

  const combinedClasses = `
  ${defaultClasses} 
  ${variantClasses[variant]} 
  ${props.className || ""}
`.trim();
  return <InputHeadless {...props} className={combinedClasses} />;
};

export default Input;
