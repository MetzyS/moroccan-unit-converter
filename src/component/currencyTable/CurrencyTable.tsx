import { Currencies, CurrenciesDef } from "../../type/IndexContent";
import Tag from "../ui/Tag";

const CurrencyTable = (props: {
  currencies: Currencies[];
  currenciesDef: CurrenciesDef[];
}) => {
  return (
    <div className="currency-table">
      {/* <ul className="flex justify-between items-center self-center"> */}
      <ul className="flex items-center">
        <Tag
          color={props.currencies[0].color}
          name={props.currencies[0].name}
          className="max-w-fit"
        />
        {/* <span>=</span> */}
        <span className="w-full border-b"></span>
      </ul>
      <ul className="flex flex-col border-white/70">
        {props.currenciesDef.map((item, index) => (
          <div className="flex items-center" key={`currencyDef-${index}`}>
            <div className="flex">
              <span
                className={`border-l ${index === 0 && "self-end h-3.5"} ${
                  index === 3 && "self-start h-4"
                }`}
              ></span>
              <span className="border-b w-5 h-4"></span>
              <Tag
                name={item.name}
                className="max-w-fit"
                color={props.currencies[index + 1].color}
              />
            </div>
            <span>{item.calc}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyTable;
