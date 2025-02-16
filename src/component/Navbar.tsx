const Navbar = (props: {
  lang: string;
  changeLang: (value: string) => void;
}) => {
  return (
    <nav className="flex">
      <span>icon</span>
      <select name="lang" id="lang">
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};

export default Navbar;
