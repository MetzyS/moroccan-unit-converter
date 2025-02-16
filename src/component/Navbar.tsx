const Navbar = (props: {
  lang: string;
  changeLang: (value: string) => void;
}) => {
  return (
    <nav className="flex justify-between p-2 bg-slate-500">
      <span>icon</span>
      <select name="lang" id="lang">
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};

export default Navbar;
