import { CurrenciesDef, MainCurrency } from "../../type/IndexContent";
import InputCurrency from "../ui/InputCurrency";

const InputTable = (props: {
  currenciesDef: CurrenciesDef[];
  mainCurrency: MainCurrency;
}) => {
  return (
    <div className="input-table">
      <div className="flex items-center">
        <div>
          <InputCurrency
            label={props.mainCurrency.name}
            currency={props.mainCurrency.short}
            labelFirst={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {props.currenciesDef.map((item, index) => (
          <InputCurrency
            label={item.name}
            currency={item.short}
            key={`inputCurr-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default InputTable;
