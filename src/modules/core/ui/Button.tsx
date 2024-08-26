import { Button as ButtonHeadless } from "@headlessui/react";
import { ButtonProps } from "@/modules/core/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  color = "default",
  className,
  size = "md",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold focus:outline-none transition-colors";

  const variantClasses = {
    primary: "shadow-inner",
    secondary: "shadow-inner",
    outline:
      "border bg-transparent hover:bg-accent-light dark:hover:bg-accent-dark",
  };

  const colorClasses = {
    default:
      variant === "primary"
        ? "bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark"
        : variant === "secondary" &&
          "bg-secondary-light dark:bg-secondary-dark text-primary-light dark:text-primary-dark",
    danger: "bg-red-600 text-white hover:bg-red-500",
    success: "bg-green-600 text-white hover:bg-green-500",
    highlight:
      variant === "primary"
        ? "bg-white text-highlight"
        : variant === "secondary" && "bg-highlight text-white",
  };

  const sizeClasses = {
    sm: "py-1 px-2 text-xs",
    md: "py-1.5 px-3 text-sm",
    lg: "py-2 px-4 text-base",
  };

  const combinedClasses = `
  ${baseClasses} 
  ${variantClasses[variant]} 
  ${colorClasses[color]} 
  ${sizeClasses[size]} 
  ${className || ""}
`.trim();
  return (
    <ButtonHeadless {...props} className={combinedClasses}>
      {children}
    </ButtonHeadless>
  );
};

export default Button;
