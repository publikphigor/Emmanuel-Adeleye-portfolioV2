import { useRef, useEffect } from "react";
import { Logo } from "../components";
import { footerLinks } from "../constants";

// GSAP
import { gsap, Power4, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Footer links component
function FooterLink({ name, link }) {
  return (
    <li
      data-footer-link
      className="uppercase font-medium font-manrope text-[14px] md:text-[16px] text-brand-gray"
    >
      <a href={link}>{name}</a>
    </li>
  );
}

const Footer = ({ theme }) => {
  // ==== GSAP animations ====

  const el = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "top 95%",
            toggleActions: "play none restart reverse",
          },
        })
        .from("[data-footer-link]", {
          x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.5,
          ease: Power4.easeInOut,
        });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [theme]);

  return (
    <footer ref={el} className="w-full mt-[24px] px-[16px] md:px-[4%] lg:px-[16%] ">
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
