import {
  ButtonProps as HeadlessButtonProps,
  InputProps as HeadlessInputProps,
} from "@headlessui/react";

type Variant = "primary" | "secondary" | "outline";
type Color = "default" | "danger" | "success" | "highlight";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends HeadlessButtonProps {
  variant?: Variant;
  color?: Color;
  size?: Size;
}

interface InputProps extends HeadlessInputProps {
  variant?: Variant;
  color?: Color;
  size?: Size;
}
interface ModalProps {
  isOpen: boolean;
  close: () => void;
  dialogTitle?: string;
  dialogDescription?: string;
}

export interface User {
  id_usuario: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
}
