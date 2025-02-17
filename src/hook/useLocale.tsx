import { useEffect, useState } from "react";

export const useLocale = (
  route: string,
  lang: string,
  component?: boolean
): {
  content: any;
  isLoading: boolean;
} => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //useEffect dependencies: component (boolan), lang (string)
  useEffect(() => {
    let isMounted = true;
    //loading state
    setIsLoading(true);

    if (!component) {
      //dynamic json import
      const modules = import.meta.glob(["../route/**/locales/*.json"], {
        eager: true,
      });

      //fetch route's json
      const exportedJson: any =
        modules[`../route/${route}/locales/${lang}.json`];

      //json content => state
      setContent(exportedJson!.default);
    } else {
      const modules = import.meta.glob(["../component/**/locales/*json"], {
        eager: true,
      });

      const exportedJson: any =
        modules[`../component/${route}/locales/${lang}.json`];
      setContent(exportedJson!.default);
    }

    // setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [route, lang]);

  return { content, isLoading };
};
