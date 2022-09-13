import { useState } from "react";
import { light_mode, dark_mode, close, open, plus, close_circle } from "../assets";
import { navLinks } from "../constants";
import { NavbarDropdown, Logo } from "../components";

// {Creating dynamic navigation menus that returns different jsx depending on which has a dropdown in its data. Passing the dropdown toggle function as a prop ==> setMobileDropdown}
function NavLink({ name, link, img, active, setMobileDropdown }) {
  if (img) {
    return (
      <li
        className={`uppercase text-base text-brand-gray font-medium hover:text-brand-black dark:hover:text-white transition duration-500 font-manrope ${
          active ? "text-brand-black dark:text-white" : "text-brand-gray"
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
        className={`uppercase text-base font-medium hover:text-brand-black dark:hover:text-white transition duration-500 font-manrope ${
          active ? "text-brand-black dark:text-white" : "text-brand-gray"
        }`}
      >
        <a href={link}>{name}</a>
      </li>
    );
  }
}

// {Dropdown menu component for the mobile navbar}
function MobileDropDown() {
  return (
    <div>
      <ul className="text-brand-black dark:text-white">
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

const Header = ({ theme, toggleTheme }) => {
  // {Initialized state for the main navbar (desktop and mobile) and the mobile dropdown (submenu)}
  const [navbar, setNavbar] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  function toggleNav() {
    setNavbar((prev) => !prev);
  }

  function toggleDropdown() {
    setMobileDropdown((prev) => !prev);
  }

  return (
    <header>
      <div className="flex justify-between items-center w-full py-6 px-[16px] md:px-[4%] lg:px-[16%] dark:bg-bg_dark transition bg-white duration-500 ease-linear fixed top-0 z-[99]">
        <div className="w-auto order-2 lg:order-1 justify-center lg:justify-start">
          <Logo theme={theme} />
        </div>
        <nav className="lg:w-[60%] xl:w-[50%] max-w-[447px] hidden lg:block order-2">
          <ul className="flex items-center justify-between w-full font-manrope">
            {navLinks.map((link) => {
              return (
                <NavLink
                  name={link.name}
                  key={link.id}
                  link={link.link}
                  img={link.img}
                  active={link.active}
                  setMobileDropdown={setMobileDropdown}
                />
              );
            })}
          </ul>
        </nav>

        {/* {Dark mode toggler} */}
        <div className="w-auto flex items-center lg:justify-end justify-start order-1 lg:order-3">
          <img
            className="w-[32px] cursor-pointer"
            onClick={() => toggleTheme()}
            src={theme ? light_mode : dark_mode}
            alt="Dark mode toggler"
          />
        </div>

        {/* {Mobile navbar toggler} */}
        <div className="w-auto flex items-center justify-end lg:hidden order-3">
          <img
            className="w-[32px] cursor-pointer"
            onClick={() => toggleNav()}
            src={navbar ? close : open}
            alt="Navbar toggler"
          />
        </div>
      </div>

      {/* {Mobile Navbar} */}
      <div
        className={`block lg:hidden bg-white dark:bg-bg_dark w-full transition-[transform_color_background-color] duration-500 ease-linear h-screen fixed top-[64px] left-0 px-[24px] py-[20px] z-[90] ${
          navbar ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <ul className="text-brand-black dark:text-white">
          <li className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6 flex flex-col">
            <div className="w-full flex justify-between items-center">
              <a href="/">Projects</a>
              <img
                src={mobileDropdown ? close_circle : plus}
                alt="Mobile dropdown"
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                onClick={() => toggleDropdown()}
                alt="Dropdown toggler"
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
          <li className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6">
            <a href="/">About</a>
          </li>
          <li className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6">
            <a href="/">My Resume</a>
          </li>
        </ul>
      </div>

      {/* {Show dropdown on desktop} */}
      <>
        <NavbarDropdown toggle={mobileDropdown} setToggle={setMobileDropdown} />
      </>
    </header>
  );
};

export default Header;
