import { Logo } from "../components";
import { footerLinks } from "../constants";

// Footer links component
function FooterLink({ name, link }) {
  return (
    <li className="uppercase font-medium font-manrope text-[14px] md:text-[16px] text-brand-gray">
      <a href={link}>{name}</a>
    </li>
  );
}

const Footer = ({ theme }) => {
  return (
    <footer className="w-full mt-[24px] px-[16px] md:px-[4%] lg:px-[16%] ">
      <div className="flex flex-col items-center md:flex-row justify-between border-t border-brand-gray-200 dark:border-brand-gray-300 py-6">
        <Logo theme={theme} />
        <nav className="w-full mt-[24px] md:w-[60%] lg:w-[50%] md:mt-0">
          <ul className="w-full flex item-center gap-[24px] md:gap-[40px] justify-center md:justify-end">
            {footerLinks.map((link) => (
              <FooterLink key={link.id} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
