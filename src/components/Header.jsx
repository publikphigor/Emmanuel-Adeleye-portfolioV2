import { useState } from "react";
import { light_mode, dark_mode, close, open, plus, close_circle } from "../assets";
import { navLinks } from "../constants";
import { NavbarDropdown } from "../components";

const Header = ({ theme, toggleTheme }) => {
  function NavLink({ name, link, img, active }) {
    if (img) {
      return (
        <li
          className={`uppercase text-base text-brand-gray font-medium hover:text-black dark:hover:text-white transition duration-500 font-manrope ${
            active ? "text-black dark:text-white" : "text-brand-gray"
          }`}
          onMouseEnter={() => setMobileDropdown(true)}
        >
          <p href={link} className="flex items-center cursor-pointer">
            {name} <img className="inline-block w-[20px]" src={img} alt={name} />
          </p>
        </li>
      );
    } else {
      return (
        <li
          className={`uppercase text-base font-medium hover:text-black dark:hover:text-white transition duration-500 font-manrope ${
            active ? "text-black dark:text-white" : "text-brand-gray"
          }`}
        >
          <a href={link}>{name}</a>
        </li>
      );
    }
  }

  function MobileDropDown() {
    return (
      <div>
        <ul className="text-black dark:text-white">
          <li className="uppercase font-normal py-3">
            <a href="/">Case Studies</a>
          </li>
          <li className="uppercase font-normal py-3">
            <a href="/">Dribble Shots</a>
          </li>
          <li className="uppercase font-normal py-3">
            <a href="/">3D & Illustration</a>
          </li>
        </ul>
      </div>
    );
  }

  const [mobileNav, setMobileNav] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  function toggleNav() {
    setMobileNav((prev) => !prev);
  }

  function toggleDropdown() {
    setMobileDropdown((prev) => !prev);
  }

  return (
    <header>
      <div className="flex justify-between items-center w-full py-6 px-[24px] sm:px-[2.5%] md:px-[5%] lg:px-[10%] dark:bg-bg_dark transition bg-white duration-500 ease-linear fixed top-0 z-[99]">
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
            onClick={() => toggleTheme()}
            src={theme ? light_mode : dark_mode}
          />
        </div>
        <div className="w-[25%] flex items-center justify-end lg:hidden order-3">
          <img
            className="w-[17px] cursor-pointer"
            onClick={() => toggleNav()}
            src={mobileNav ? close : open}
          />
        </div>
      </div>

      {/* {Mobile Navbar} */}
      <div
        className={`block lg:hidden bg-white dark:bg-bg_dark w-full transition-transform duration-[500ms] h-screen absolute top-[64px] left-0 px-[24px] py-[20px] z-[90] ${
          mobileNav ? "translate-y-0" : "-translate-y-[300%]"
        }`}
      >
        <ul className="text-black dark:text-white">
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6 flex flex-col">
            <div className="w-full flex justify-between items-center">
              <a href="/">Projects</a>
              <img
                src={mobileDropdown ? close_circle : plus}
                alt="Mobile dropdown"
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                onClick={() => toggleDropdown()}
              />
            </div>
            <div
              className={`transition-[max-height] overflow-hidden ${
                mobileDropdown ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <MobileDropDown />
            </div>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">About</a>
          </li>
          <li className="border-b border-brand-gray-200 uppercase font-semibold py-6">
            <a href="/">My Resume</a>
          </li>
        </ul>
      </div>

      {/* {Show dropdown on desktop} */}
      <div>
        <NavbarDropdown toggle={mobileDropdown} setToggle={setMobileDropdown} />
      </div>
    </header>
  );
};

export default Header;
