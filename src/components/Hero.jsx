import { useRef, useLayoutEffect } from "react";

// GSAP
import { gsap, Power4, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  emmah,
  arrow_light,
  arrow_dark,
  hero_text_dark,
  hero_text_light,
  outline_dark,
  outline_light,
} from "../assets";
import { styles } from "../constants";

const Hero = ({ theme }) => {
  // ==== GSAP animations ====

  const el = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top top",
        pin: "#hero",
        pinSpacing: false,
      });

      gsap
        .timeline()
        .set(".hero-img", {
          "clip-path": "polygon(0% 0%, 48% 15%, 100% 0%, 0% 0%)",
        })
        .set("h1", {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        })
        .set("[data-hero-text]", { opacity: 0, y: 30 })
        .to(".hero-img", {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: Power4.easeInOut,
        })
        .to(
          "h1",
          {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 2,
            ease: Power4.easeInOut,
          },
          "-=1"
        )
        .to("[data-hero-text]", { opacity: 1, y: 0, duration: 0.5, ease: Power3.out }, "-=1");
    }, el);

    return () => {
      ctx.revert();
    };
  }, [theme]);

  return (
    <div ref={el} className="relative h-[70vh] lg:h-[100vh]">
      <section id="hero" className={`${styles.sectionDefault} relative mt-[130px] top-0`}>
        <div className="w-full overflow-hidden">
          <img className="block w-[220px] mx-auto hero-img" src={emmah} alt="Emmanuel Adeleye" />
          <h1 className="text-center font-mangolaine text-[20px] sm:text-[40px] uppercase">
            Hey, I'm Emmanuel
          </h1>
          <h1 className="text-center font-mangolaine text-[20px] sm:text-[40px] uppercase flex items-center justify-center gap-3">
            <span>A Product</span>
            <span className="sm:w-[21px] sm:h-[21px] w-[10px] h-[10px] inline-block rounded-full bg-brand-primary" />{" "}
            <span>Designer (UI/UX)</span>
          </h1>
          <p
            className="font-normal font-manrope text-[14px] sm:text-[16px] text-center text-brand-gray"
            data-hero-text
          >
            I love creating user-friendly products for ambitious businesses. <br />
            Currently working remotely from Nigeria.
          </p>
        </div>
        <a className="block w-[139px] h-[139px] mx-auto mt-[64px] relative" href="/#projects">
          <img
            src={theme ? outline_dark : outline_light}
            alt="outline"
            className="absolute top-[50%] left-[50%] w-full h-full block -translate-x-[50%] -translate-y-[50%]"
          />
          <img
            src={theme ? hero_text_dark : hero_text_light}
            alt="Emmanuel Adeleye"
            className="absolute top-[50%] left-[50%] w-[120px] h-[118px] block rotator"
          />
          <img
            src={theme ? arrow_dark : arrow_light}
            alt="arrow"
            className="absolute top-[50%] left-[50%] w-[48px] h-[42px] block -translate-x-[50%] -translate-y-[50%]"
          />
        </a>
      </section>
    </div>
  );
};

export default Hero;
