const InputCurrency = (props: {
  label: string;
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
      className={`flex items-center ${props.className && props.className}`}
    >
      {props.labelFirst && (
        <span className="capitalize mr-2">{props.label}</span>
      )}
      <input
        type="number"
        id={props.currency}
        className="w-30 input-nb border border-white/70 mr-2"
        onChange={(e) => props.onChangeValue(e, props.index)}
        value={props.value}
      />
      {!props.labelFirst && <span className="capitalize">{props.label}</span>}
    </label>
  );
};

export default InputCurrency;
