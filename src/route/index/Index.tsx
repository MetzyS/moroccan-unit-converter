import LoadingSpinner from "../../component/ui/LoadingSpinner";
import { useLayoutContext } from "../../context/Layout";
import { useLocale } from "../../hook/useLocale";

const Index = () => {
  const { lang } = useLayoutContext();
  const { isLoading, content } = useLocale("index", lang, false);
  console.log(content);

  return (
    <div className="mt-8">
      {isLoading ? (
        <>
          <LoadingSpinner lang={lang} />
        </>
      ) : (
        <div>test</div>
      )}
    </div>
  );
};

export default Index;
