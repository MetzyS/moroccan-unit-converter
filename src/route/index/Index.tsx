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
          <ul className="flex gap-2 mt-2 relative">
            {content.currencies.map((item, index) => {
              return (
                <Tag
                  color={item.color}
                  name={item.name}
                  tooltipText={item.desc}
                  key={`tag-${index}`}
                />
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
