import { useState, useRef, useEffect } from "react";
import { light_mode, dark_mode, close, open, plus, close_circle } from "../assets";
import { navLinks } from "../constants";
import { NavbarDropdown, Logo } from "../components";

// GSAP
import { gsap, Power4, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// {Creating dynamic navigation menus that returns different jsx depending on which has a dropdown in its data. Passing the dropdown toggle function as a prop ==> setMobileDropdown}
function NavLink({ name, link, img, active, setMobileDropdown }) {
  if (img) {
    return (
      <li
        className={`uppercase text-base text-brand-gray font-medium hover:text-brand-black dark:hover:text-white transition duration-500 font-manrope ${
          active ? "text-brand-black dark:text-white" : "text-brand-gray"
        }`}
        onClick={() => setMobileDropdown((prev) => !prev)}
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

//mobile navbar component
function MbNavLink({ name, link }) {
  return (
    <li
      data-mb-navlink
      className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6"
    >
      <a href={link}>{name}</a>
    </li>
  );
}

// {Dropdown menu component for the mobile navbar}
function MobileDropDown() {
  return (
    <div>
      <ul className="text-brand-black dark:text-white">
        <li data-mb-dropdown className="uppercase font-normal py-3">
          <a href="/">Case Studies</a>
        </li>
        <li data-mb-dropdown className="uppercase font-normal py-3">
          <a href="/">Dribble Shots</a>
        </li>
        <li data-mb-dropdown className="uppercase font-normal py-3">
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

  // ==== GSAP animations ====

  const el = useRef(null);
  useEffect(() => {
    gsap.set("[data-mb-navlink]", {
      x: "-50%",
      opacity: 0,
    });
    gsap.set("[data-mb-navbar]", {
      y: "-110%",
    });

    let ctx = gsap.context(() => {
      if (navbar) {
        gsap
          .timeline()
          .to("[data-mb-navbar]", {
            y: 0,
            duration: 0.4,
            ease: Power4.easeInOut,
            immediateRender: false,
          })
          .to(
            "[data-mb-navlink]",
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: Power4.easeInOut,
              immediateRender: false,
            },
            1
          );
      }

      if (!navbar) {
        gsap
          .timeline()
          .to("[data-mb-navlink]", {
            x: "-50%",
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: Power4.easeInOut,
            immediateRender: false,
          })
          .to(
            "[data-mb-navbar]",
            {
              y: "-110%",
              duration: 0.5,
              ease: Power4.easeInOut,
              immediateRender: false,
            },
            0.5
          );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [navbar]);

  useEffect(() => {
    gsap.set("[data-mb-dropdown]", {
      y: "-50%",
      opacity: 0,
    });
    gsap.set("[data-mb-dropdown-cont]", {
      maxHeight: 0,
    });

    let ctx = gsap.context(() => {
      if (mobileDropdown) {
        gsap
          .timeline()
          .to("[data-mb-dropdown-cont]", {
            maxHeight: 200,
            duration: 0.4,
            immediateRender: false,
          })
          .to(
            "[data-mb-dropdown]",
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.2,
              ease: Power4.easeInOut,
              immediateRender: false,
            },
            0.5
          );
      }

      if (!mobileDropdown) {
        gsap
          .timeline()
          .to("[data-mb-dropdown]", {
            y: "-50%",
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: Power4.easeInOut,
            immediateRender: false,
          })
          .to("[data-mb-dropdown-cont]", {
            maxHeight: 0,
            duration: 0.4,
            immediateRender: false,
          });
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [mobileDropdown]);

  return (
    <header ref={el} className="fixed top-0 z-[100] w-full">
      <div className="flex justify-between items-center w-full py-6 px-[16px] md:px-[4%] lg:px-[16%] dark:bg-bg_dark transition bg-white duration-500 ease-linear relative z-[11]">
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
      {/* {className={`block lg:hidden bg-white dark:bg-bg_dark w-full transition-[transform_color_background-color] duration-500 ease-linear h-screen fixed top-[64px] left-0 px-[24px] py-[20px] z-[90] ${
          navbar ? "translate-y-0" : "-translate-y-[110%]"
        }`}} */}
      <div
        data-mb-navbar
        className={`block lg:hidden bg-white dark:bg-bg_dark w-full transition-[transform_color_background-color] duration-500 ease-linear h-screen fixed top-[64px] left-0 px-[24px] py-[20px] z-[90] -translate-y-[110%]
        }`}
      >
        <ul className="text-brand-black dark:text-white">
          <MbNavLink link="/" name="Home" />
          <li
            data-mb-navlink
            className="border-b border-brand-gray-200 dark:border-brand-gray-300 uppercase font-semibold py-6 flex flex-col"
          >
            <div className="w-full flex justify-between items-center">
              <a href="/">Projects</a>
              <img
                src={mobileDropdown ? close_circle : plus}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                onClick={() => toggleDropdown()}
                alt="Dropdown toggler"
              />
            </div>

            {/* {Projects/case study dropdown on mobile} */}
            <div data-mb-dropdown-cont className={`transition-[max-height] overflow-hidden`}>
              <MobileDropDown />
            </div>
          </li>
          <MbNavLink link="/" name="About" />
          <MbNavLink link="/" name="My Resume" />
        </ul>
      </div>

      {/* {Show dropdown on desktop} */}
      <NavbarDropdown toggle={mobileDropdown} setToggle={setMobileDropdown} />
    </header>
  );
};

export default Header;
