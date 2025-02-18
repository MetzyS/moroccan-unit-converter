import { useState } from "react";
import { CurrenciesDef, MainCurrency } from "../../type/IndexContent";
import InputCurrency from "../ui/InputCurrency";

const InputTable = (props: {
  currenciesDef: CurrenciesDef[];
  mainCurrency: MainCurrency;
}) => {
  const [test, setTest] = useState<number[] | string[]>(["", "", "", "", ""]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (Number(e.currentTarget.value) === 0 || e.currentTarget.value === "") {
      setTest(["", "", "", "", ""]);
      return;
    }
    let dh;
    let f;
    let s;
    let r;
    let doro;
    switch (index) {
      case 0:
        dh = Number(e.currentTarget.value);
        f = dh * 100;
        s = f;
        r = dh * 20;
        doro = dh * 2;
        setTest([dh, f, s, r, doro]);
        break;
      case 1:
        f = Number(e.currentTarget.value);
        dh = f / 100;
        s = f;
        r = dh * 20;
        doro = dh * 2;
        setTest([dh, f, s, r, doro]);
        break;
      case 2:
        s = Number(e.currentTarget.value);
        dh = s / 100;
        f = s;
        r = dh * 20;
        doro = dh * 2;
        setTest([dh, f, s, r, doro]);
        break;
      case 3:
        r = Number(e.currentTarget.value);
        dh = r / 20;
        f = dh * 100;
        s = f;
        doro = dh * 2;
        setTest([dh, f, s, r, doro]);
        break;
      case 4:
        doro = Number(e.currentTarget.value);
        dh = doro / 2;
        f = dh * 100;
        s = f;
        r = dh * 20;
        setTest([dh, f, s, r, doro]);
        break;
      default:
        dh = "";
        f = dh;
        s = dh;
        r = dh;
        doro = dh;
        setTest(["", "", "", "", ""]);
        break;
    }
    console.log("trigg");
    // setTest(Number(e.currentTarget.value));
    console.log(Number(e.currentTarget.value));
    console.log(test);
  };
  return (
    <div className="input-table">
      <div className="flex items-center">
        <div>
          <InputCurrency
            label={props.mainCurrency.name}
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
