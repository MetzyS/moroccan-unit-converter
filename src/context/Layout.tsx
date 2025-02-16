import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../component/Navbar";
import { LayoutContext } from "../type/LayoutContext";
import { useState } from "react";
import Footer from "../component/Footer";

const Layout = () => {
  //lang state
  const [lang, setLang] = useState<string>("fr");

  const handleChangeLang = (value: string) => {
    setLang(value);
  };

  return (
    <>
      <Navbar lang={lang} changeLang={handleChangeLang} />
      <Outlet context={{ lang } satisfies LayoutContext} />
      <Footer lang={lang} changeLang={handleChangeLang} />
    </>
  );
};

export default Layout;
export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}
