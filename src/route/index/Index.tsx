import LoadingSpinner from "../../component/ui/LoadingSpinner";
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
    <div className="mt-8">
      {isLoading ? (
        <>
          <LoadingSpinner lang={lang} />
        </>
      ) : (
        <>
          <h1 className="capitalize">{content.title}</h1>
          <p className="first-letter:capitalize text-pretty">
            {content.subtitle}
          </p>
          <ul className="flex gap-2 mt-2">
            {content.currencies.map((item, index) => {
              return (
                <li
                  key={`currency-${index}`}
                  className={`border border-black/30 shadow p-1 rounded-md capitalize cursor-pointer relative ${item.color} has-tooltip`}
                >
                  <span className="tooltip p-1">{item.desc}</span>
                  <span className="text-white">{item.name}</span>
                </li>
              );
            })}
          </ul>
          <ul className="mt-6">
            {content.currenciesDef.map((item, index) => (
              <li
                key={`currencyDef-${index}`}
                className="list-disc list-inside"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Index;
