const SelectLang = (props: {
  lang: string;
  changeLang: (value: string) => void;
}) => {
  return (
    <>
      <select
        name="lang"
        id="lang"
        onChange={(e) => props.changeLang(e.target.value)}
        className="border rounded-md px-2 border-white/20"
      >
        <option value="fr">🇫🇷 FR</option>
        <option value="en">🇬🇧 EN</option>
      </select>
    </>
  );
};

export default SelectLang;
