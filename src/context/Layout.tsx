import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../component/nav/Navbar";
import { LayoutContext } from "../type/LayoutContext";
import { useState } from "react";
import Footer from "../component/footer/Footer";
// import Footer from "../component/footer/Footer";

const Layout = () => {
  //lang state
  const [lang, setLang] = useState<string>("fr");

  const handleChangeLang = (value: string) => {
    setLang(value);
  };

  return (
    <>
      <Navbar lang={lang} changeLang={handleChangeLang} />
      <div className="mx-4 grow">
        <Outlet context={{ lang } satisfies LayoutContext} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}
