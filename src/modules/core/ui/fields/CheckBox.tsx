import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
}

const CheckInput: React.FC<Props> = ({ onChange, isChecked, ...props }) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="w-4 h-4"
      onChange={onChange}
      defaultChecked={isChecked}
    />
  );
};

export default CheckInput;
