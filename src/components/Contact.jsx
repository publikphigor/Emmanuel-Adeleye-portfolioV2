import { useRef, useLayoutEffect } from "react";
import { email, namaste } from "../assets";
import { styles } from "../constants";

// GSAP
import { gsap, Power4, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ theme }) => {
  // ==== GSAP animations ====

  const el = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().set(el.current, {
        "clip-path": " polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0.2,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "top 60%",
            toggleActions: "play none restart reverse",
          },
        })
        .to(el.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          duration: 1,
          ease: Power4.easeInOut,
        });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [theme]);
  return (
    <section ref={el} className={`${styles.sectionDefault}`} id="contact">
      <div className="border w-full sm:max-w-[470px] mx-auto border-brand-gray-200 dark:border-brand-gray-300 rounded-2xl mb-[40px] md:mb-[64px] py-[18px] px-[64px] md:py-[24px] text-center">
        <h3 className="uppercase font-medium text-brand-gray-300 mb-[16px]">
          Available for freelance gig
        </h3>
        <h1 className="font-normal font-mangolaine leading-[1.3] md:leading-[1] text-[20px] md:text-[40px] mb-[16px] md:mb-[24px]">
          Got An Idea? Let's Discuss Now!
        </h1>
        <a href="/" className="block w-[32px] md:w-[40px] mx-auto">
          <img src={email} alt="Contact Emmanuel Adeleye" className="w-full object-contain" />
        </a>
      </div>
      <div>
        <div className="w-[100px] md:w-[150px] mx-auto">
          <img
            src={namaste}
            alt="Emmanuel Adeleye saying Namaste"
            className="block w-full h-full object-contain"
          />
        </div>
        <h1 className="text-center font-mangolaine font-normal text-[20px] md:text-[40px] uppercase mx-auto">
          Thanks for exploring!
        </h1>
      </div>
    </section>
  );
};

export default Contact;
