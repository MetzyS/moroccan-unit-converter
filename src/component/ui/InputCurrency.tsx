const InputCurrency = (props: { label: string; currency: string }) => {
  return (
    <div>
      <label htmlFor={props.label}>
        <input type="number" id={props.label} />
      </label>
    </div>
  );
};

export default InputCurrency;
