import CurrencyTable from "../../component/currencyTable/CurrencyTable";
import InputTable from "../../component/inputTable/InputTable";
import LoadingSpinner from "../../component/ui/LoadingSpinner";
import Tag from "../../component/ui/Tag";
import { useLayoutContext } from "../../context/Layout";
import { useLocale } from "../../hook/useLocale";
import { IndexContent } from "../../type/IndexContent";

const Index = () => {
  const { lang } = useLayoutContext();
  const { isLoading, content } = useLocale("index", lang, false) as {
    isLoading: boolean;
    content: IndexContent;
  };
  console.log(content);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingSpinner lang={lang} />
        </>
      ) : (
        <>
          <section className="my-12">
            <h1 className="capitalize">{content.title}</h1>
            <p className="first-letter:capitalize text-pretty">
              {content.subtitle}
            </p>
            <ul className="flex gap-2 mt-2 relative">
              {content.currencies.map((item, index) => {
                return (
                  <Tag
                    color={item.color}
                    name={item.name}
                    tooltipText={item.desc}
                    key={`tag-${index}`}
                    className="w-18"
                  />
                );
              })}
            </ul>
          </section>
          <section className="my-12">
            <h2 className="first-letter:capitalize">
              {content.converterTitle}
            </h2>
            <p className="first-letter:capitalize mb-4">
              {content.converterText}
            </p>
            <InputTable
              currencies={content.currencies}
              currenciesDef={content.currenciesDef}
              mainCurrency={content.mainCurrency}
            />
          </section>
          <section className="my-12">
            <h2 className="mb-6 first-letter:capitalize">
              {content.detailTitle}
            </h2>
            <CurrencyTable
              currencies={content.currencies}
              currenciesDef={content.currenciesDef}
            />
          </section>
        </>
      )}
    </>
  );
};

export default Index;
