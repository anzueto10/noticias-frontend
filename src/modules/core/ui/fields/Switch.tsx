import {
  Switch as SwitchHeadless,
  SwitchProps as SwitchPropsHeadless,
} from "@headlessui/react";

interface SwitchProps extends SwitchPropsHeadless {
  onChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onChange, ...props }) => {
  return (
    <SwitchHeadless
      {...props}
      onChange={onChange}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-highlight"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </SwitchHeadless>
  );
};

export default Switch;
