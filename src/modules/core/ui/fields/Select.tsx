import {
  Select as SelectHeadless,
  SelectProps as SelectHeadlessProps,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface SelectProps extends SelectHeadlessProps {
  options: {
    value: string;
    text: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <div className="relative">
      <SelectHeadless
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      >
        {options.map(({ text, value }, index) => (
          <option value={value} key={index}>
            {text}
          </option>
        ))}
      </SelectHeadless>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
        aria-hidden="true"
      />
    </div>
  );
};

export default Select;
