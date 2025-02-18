import { BsGithub, BsLinkedin } from "react-icons/bs";
import MetzysIcon from "../ui/MetzysIcon";

const Footer = () => {
  return (
    <footer className="flex justify-center p-2 bg-black/30">
      <ul className="flex gap-4 items-center">
        <li>
          <a href="https://www.github.com/metzys" aria-label="github link">
            <BsGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.metzys.net" aria-label="portfolio link">
            <MetzysIcon className="size-5" color="fill-white/60" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adnene-hamzaoui">
            <BsLinkedin size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
