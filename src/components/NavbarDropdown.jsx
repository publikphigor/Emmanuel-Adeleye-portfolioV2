import { useState, useLayoutEffect, useRef } from "react";
import { link_out } from "../assets";
import { projectsDropdown } from "../constants";

// GSAP
import { gsap, Power3 } from "gsap";

// Component for each project in the projects dropdown
function SingleProject({ name, img, link }) {
  // Initialize state to show the explore div onMouseEnter
  const [hovered, setHovered] = useState(false);

  // Switch between hover and !hovered
  function handleClick() {
    setHovered((prev) => !prev);
  }

  return (
    <div
      data-nav-drop
      className="border-[0.5px] border-brand-gray-200 dark:border-brand-gray-300 rounded-[16px] py-[16px] max-h-[270px] max-w-[30%] relative overflow-hidden -translate-y-[100%] opacity-[0.5]"
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
    >
      <div
        className={`absolute w-full h-full top-0 left-0 flex items-end justify-center brand_gradient z-[5] transition-transform duration-300 ${
          hovered ? "translate-y-0" : "translate-y-[100%]"
        }`}
      >
        <a
          href={link}
          className="text-[14px] uppercase flex gap-[16px] items-center mb-[32px] text-white"
        >
          Explore <img src={link_out} alt="Link Out" className="w-[32px]" />
        </a>
      </div>
      <h1 className="text-center font-manrope font-normal uppercase text-[24px] mb-[36px] leading-[1]">
        {name}
      </h1>
      <div className="w-5/6 mx-auto">
        <img src={img} alt={name} className="object-contain" />
      </div>
    </div>
  );
}

const NavbarDropdown = ({ toggle, setToggle }) => {
  const navContainer = useRef(null);

  useLayoutEffect(() => {
    let navTl;
    let ctx = gsap.context(() => {
      navTl = gsap.timeline();
      if (toggle) {
        navTl
          .to(navContainer.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: Power3.easeOut,
            immediateRender: false,
          })
          .to(
            "[data-nav-drop]",
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: Power3.easeOut,
              immediateRender: false,
            },
            "-=.5"
          );
      }
      if (!toggle) {
        gsap
          .timeline()
          .to("[data-nav-drop]", {
            opacity: 0,
            y: "-100%",
            duration: 1,
            stagger: 0.2,
            ease: Power3.easeOut,
            immediateRender: false,
          })
          .to(
            navContainer.current,
            {
              opacity: 0,
              y: "-100%",
              duration: 0.5,
              ease: Power3.easeOut,
              immediateRender: false,
            },
            "-=.5"
          );
      }
    }, navContainer);

    return () => {
      gsap
        .timeline()
        .to("[data-nav-drop]", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: Power3.easeOut,
        })
        .to(
          navContainer.current,
          {
            opacity: 1,
            y: 0,
            x: "-50%",
            duration: 0.5,
            ease: Power3.easeOut,
          },
          "-=0.5"
        );
    };
  }, [toggle]);

  // {className={`hidden  justify-between items-center w-[68%] mx-auto fixed z-[10] left-[50%] -translate-x-[50%] top-[90px] p-[32px] bg-white transition-all duration-500 dark:bg-bg_dark text-black dark:text-white ${
  //   toggle ? "opacity-100 lg:flex" : "opacity-0"
  // }`}}

  return (
    <div
      ref={navContainer}
      className={`hidden lg:flex justify-between items-center w-[68%] mx-auto fixed z-[10] left-[50%] -translate-x-[50%] -translate-y-[100%] top-[90px] p-[32px] bg-white transition-colors duration-500 dark:bg-bg_dark text-black dark:text-white`}
      onMouseLeave={() => setToggle(false)}
    >
      {projectsDropdown.map((project) => (
        <SingleProject key={project.id} {...project} />
      ))}
    </div>
  );
};

export default NavbarDropdown;
