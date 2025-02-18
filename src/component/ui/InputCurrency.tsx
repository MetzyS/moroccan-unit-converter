import Tag from "./Tag";

const InputCurrency = (props: {
  label: string;
  color: string;
  currency: string;
  labelFirst?: boolean;
  className?: string;
  index: number;
  onChangeValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  value: string | number;
}) => {
  return (
    <label
      htmlFor={props.currency}
      className={`border border-gray-400 rounded-md flex items-center min-w-full w-1/2 ${
        props.className && props.className
      }`}
    >
      {props.labelFirst && (
        <Tag
          name={props.label}
          color={props.color}
          text="text-xs"
          className="w-18"
        />
      )}
      <input
        type="number"
        id={props.currency}
        className="w-full input-nb"
        onChange={(e) => props.onChangeValue(e, props.index)}
        value={props.value}
        aria-label={`input for the ${props.label} unit`}
      />
      {!props.labelFirst && (
        <Tag
          name={props.label}
          color={props.color}
          className="w-18"
          text="text-xs"
        />
      )}
    </label>
  );
};

export default InputCurrency;
