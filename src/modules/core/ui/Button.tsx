import {
  Button as ButtonHeadless,
  ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";

type Variant = "primary" | "secondary" | "outline";
type Color = "default" | "danger" | "success" | "highlight";

interface ButtonProps extends HeadlessButtonProps {
  variant?: Variant;
  color?: Color;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  color = "default",
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold focus:outline-none";

  const variantClasses = {
    primary: "shadow-inner",
    secondary: "shadow-inner",
    outline: "border bg-transparent",
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

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${colorClasses[color]} 
    ${className || ""}
  `.trim();
  return (
    <ButtonHeadless {...props} className={combinedClasses}>
      {children}
    </ButtonHeadless>
  );
};

export default Button;
