export type IndexContent = {
  title: string;
  subtitle: string;
  currencies: Currencies[];
  currenciesDef: CurrenciesDef[];
  mainCurrency: MainCurrency;
  converterTitle: string;
  converterText: string;
  detailTitle: string;
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

export type MainCurrency = {
  name: string;
  short: string;
};
