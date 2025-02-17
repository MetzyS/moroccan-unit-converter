import MetzysIcon from "../ui/MetzysIcon";

const Navbar = (props: {
  lang: string;
  changeLang: (value: string) => void;
}) => {
  return (
    <nav className="flex justify-between p-2 bg-black/30">
      <span>
        <MetzysIcon className="size-8" />
      </span>
      <select
        name="lang"
        id="lang"
        onChange={(e) => props.changeLang(e.target.value)}
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};

export default Navbar;
