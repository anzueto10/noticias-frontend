import { ButtonProps as HeadlessButtonProps } from "@headlessui/react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonColor = "default" | "danger" | "success" | "highlight";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HeadlessButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}
