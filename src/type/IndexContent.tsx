export type IndexContent = {
  title: string;
  subtitle: string;
  currencies: Currencies[];
  currenciesDef: CurrenciesDef[];
};

export type Currencies = {
  name: string;
  desc: string;
  color: string;
};

export type CurrenciesDef = {
  name: string;
  short: string;
  calc: string;
};
