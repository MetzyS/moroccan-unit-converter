import MetzysIcon from "../ui/MetzysIcon";
import SelectLang from "../ui/SelectLang";

const Navbar = (props: {
  lang: string;
  changeLang: (value: string) => void;
}) => {
  return (
    <nav className="flex justify-between p-2 bg-black/30">
      <a href="https://www.metzys.net" className="hover:brightness-125">
        <MetzysIcon className="size-8" />
      </a>
      <SelectLang lang={props.lang} changeLang={props.changeLang} />
    </nav>
  );
};

export default Navbar;
