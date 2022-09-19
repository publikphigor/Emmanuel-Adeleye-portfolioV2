import { useRef, useEffect } from "react";
import { SectionHeading } from "../components";
import { styles, contributionsInfo } from "../constants";
import { star_left, idea } from "../assets";

// GSAP
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// {Dynamic component to render each contribution from contributionsInfo data.}
function Contribution({ name, description, link, img }) {
  return (
    <div
      data-contribution
      className="relative flex-shrink-0 w-full md:w-[47.5%] rounded-2xl border border-brand-gray-200 dark:border-brand-gray-300 py-[24px] px-[16px] md:px-[24px] bg-white dark:bg-bg_dark transition-colors duration-500 ease-linear"
    >
      <div>
        <h2 className="font-normal font-mangolaine text-[20px] md:text-[40px]">{name}</h2>
        <p className="text-[14px] md:text-[16px] text-brand-gray font-manrope leading-[1.4] mt-[16px] font-normal">
          {description}
        </p>
      </div>
      <a
        href={link}
        className="block absolute w-[32px] h-[32px] md:w-[40px] md:h-[40px] right-[24px] top-[24px] z-10"
      >
        <img src={img} alt="Link Out" className="block w-full h-full object-contain" />
      </a>
    </div>
  );
}

const Contributions = () => {
  const c_cont = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("[data-section-heading]", {
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        opacity: 0,
      });
      gsap.set("[data-contribution]", {
        opacity: 0,
        y: 100,
        immediateRender: false,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: c_cont.current,
            start: "top 70%",
            toggleActions: "play none restart reverse",
          },
        })
        .to("[data-section-heading]", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: Power3.easeOut,
        })
        .to("[data-contribution]", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: Power3.out,
          immediateRender: false,
        });
    }, c_cont);

    return () => ctx.revert();
  }, []);
  return (
    <section className="w-full relative" id="contributions">
      <img
        className="absolute -top-[20px] md:top-0 right-0 block w-[50px] md:w-[100px]"
        src={idea}
        alt="Emmanuel Adeleye Portfolio"
      />
      <img
        className="absolute top-[48.5%] md:top-1/2 left-0 md:-translate-y-1/2 block w-[50px] md:w-[100px]"
        src={star_left}
        alt="Emmanuel Adeleye Portfolio"
      />
      <div className={`${styles.sectionDefault}`}>
        <div ref={c_cont}>
          <SectionHeading h1="Contributions" h2="Contributions" />
          <div className="flex flex-wrap gap-[24px] md:gap-[32px] justify-between mt-[40px]">
            {contributionsInfo.map((item) => (
              <Contribution key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
