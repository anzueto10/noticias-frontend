import { Input as InputHeadless, InputProps } from "@headlessui/react";

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputHeadless
      {...props}
      className={`flex h-10 w-full rounded-md border border-blue-300 bg-transparent px-3 py-2 text-sm placeholder:text-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-blue-300 dark:text-blue-50 dark:focus:ring-blue-300 dark:focus:ring-offset-blue-900 ${
        props.className || ""
      }`}
    />
  );
};

export default Input;
