import { ChangeEvent } from "react";

interface Props {
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

const CheckInput: React.FC<Props> = ({ setValue, value }) => {
  return (
    <input
      id="checked-checkbox"
      type="checkbox"
      className="w-4 h-4"
      onChange={setValue}
      defaultChecked={value}
    />
  );
};

export default CheckInput;
