import { useState } from "react";
import { light_mode, dark_mode, close, open } from "../assets";
import { navLinks } from "../constants/navlinks";

function NavLink({ name, link, img, active }) {
  if (img) {
    return (
      <li
        className={`uppercase text-base text-brand-gray font-medium hover:text-black dark:hover:text-white transition duration-300 font-manrope ${
          active ? "text-black dark:text-white" : "text-brand-gray"
        }`}
      >
        <a href={link} className="flex items-center">
          {name} <img className="inline-block w-[20px]" src={img} alt={name} />
        </a>
      </li>
    );
  } else {
    return (
      <li
        className={`uppercase text-base font-medium hover:text-black dark:hover:text-white transition duration-300 font-manrope ${
          active ? "text-black dark:text-white" : "text-brand-gray"
        }`}
      >
        <a href={link}>{name}</a>
      </li>
    );
  }
}

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }

  function toggleNav() {
    setMobileNav((prev) => !prev);
  }

  return (
    <header className="flex justify-between items-center w-full py-6 px-[24px] sm:px-[2.5%] md:px-[5%] lg:px-[10%] dark:bg-bg_dark transition bg-white duration-500 ease-linear">
      <div className="w-[50%] lg:w-[20%] order-2 lg:order-1 justify-center lg:justify-start">
        <h1 className="font-mangolaine text-3xl font-normal text-black dark:text-white text-center lg:text-left">
          Emmah
          <span className="w-[10px] h-[10px] inline-block rounded-full bg-brand-primary" />
        </h1>
      </div>
      <nav className="lg:w-[40%] hidden lg:block order-2">
        <ul className="flex items-center justify-between w-full font-manrope">
          {navLinks.map((link) => {
            return (
              <NavLink
                name={link.name}
                key={link.id}
                link={link.link}
                img={link.img}
                active={link.active}
              />
            );
          })}
        </ul>
      </nav>
      <div className="w-[25%] lg:w-[20%] flex items-center lg:justify-end justify-start order-1 lg:order-3">
        <img
          className="w-[17px] cursor-pointer"
          onClick={() => toggleDarkMode()}
          src={darkMode ? dark_mode : light_mode}
        />
      </div>
      <div className="w-[25%] flex items-center justify-end lg:hidden order-3">
        <img
          className="w-[17px] cursor-pointer"
          onClick={() => toggleNav()}
          src={mobileNav ? close : open}
        />
      </div>
      <div className="block lg:hidden bg-white dark:bg_dark w-full transition-transform duration-300 h-screen absolute top-0 left-0 px-[24px]">
        <ul>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/" className="py-6">
              Projects
            </a>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">About</a>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">My Resume</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
