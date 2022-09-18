import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../components";
import { styles, contributionsInfo } from "../constants";
import { star_left, idea } from "../assets";

// Register scrolltrigger
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
      gsap.from("[data-contribution]", {
        scrollTrigger: {
          trigger: c_cont.current,
          start: "top 80%",
          toggleActions: "play completed reverse reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5,
        ease: "Power3.out",
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
        <>
          <SectionHeading h1="Contributions" h2="Contributions" />
          <div
            className="flex flex-wrap gap-[24px] md:gap-[32px] justify-between mt-[40px]"
            ref={c_cont}
          >
            {contributionsInfo.map((item) => (
              <Contribution key={item.id} {...item} />
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default Contributions;
