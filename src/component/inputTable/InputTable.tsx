import { useState } from "react";
import {
  Currencies,
  CurrenciesDef,
  MainCurrency,
} from "../../type/IndexContent";
import InputCurrency from "../ui/InputCurrency";
import unitConverter from "../../helper/unitConverter";

const InputTable = (props: {
  currencies: Currencies[];
  currenciesDef: CurrenciesDef[];
  mainCurrency: MainCurrency;
}) => {
  const [test, setTest] = useState<number[] | string[]>(["", "", "", "", ""]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setTest(unitConverter(e.currentTarget.value, index));
  };
  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <div>
          <InputCurrency
            label={props.mainCurrency.name}
            color={props.currencies[0].color}
            currency={props.mainCurrency.short}
            labelFirst={true}
            index={0}
            onChangeValue={handleChange}
            value={test[0]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {props.currenciesDef.map((item, index) => (
          <InputCurrency
            label={item.name}
            color={props.currencies[index + 1].color}
            currency={item.short}
            key={`inputCurr-${index + 1}`}
            index={index + 1}
            onChangeValue={handleChange}
            value={test[index + 1]}
          />
        ))}
      </div>
    </div>
  );
};
export default InputTable;
