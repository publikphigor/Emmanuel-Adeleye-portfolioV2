import { useRef, useEffect } from "react";
import { projectsInfo } from "../constants";
import { styles } from "../constants";
import { link_right } from "../assets";
import { SectionHeading } from "../components";

// GSAP
import { gsap, Power4, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// {Dynamic component generated from projectsInfo data to render each project.}
function Project({ img, link, name, description }) {
  return (
    <div className="flex-shrink-0 w-auto text-center" data-project>
      <div className="h-[191px] w-[191px] sm:h-[300px] sm:w-[300px] border-[0.5px] rounded-2xl border-brand-gray-200 dark:border-brand-gray-300 mb-[24px] mx-auto overflow-hidden">
        <img className="block w-full h-full object-contain" src={img} alt={name} />
      </div>
      <div>
        <h3 className="uppercase font-manrope text-[12px] sm:text-xl text-brand-gray-200 dark:text-brand-gray-300">
          Case Study
        </h3>
        <h1 className="font-normal font-mangolaine text-[20px] sm:text-[40px] my-2 leading-[1]">
          {name}
        </h1>
        <p className="leading-[1.4] text-brand-gray text-center max-w-[191px] sm:max-w-[312px]">
          {description}
        </p>
        <a
          href={link}
          className="flex items-center text-brand-black dark:text-brand-gray uppercase justify-center my-[20px] text-[12px] sm:text-[16px]"
        >
          View Case Study
          <img src={link_right} className="w-[20px] object-contain ml-3" alt="link_right" />
        </a>
      </div>
    </div>
  );
}

// {Main Projects section}
const Projects = () => {
  // ==== GSAP animations ====
  const p_cont = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("[data-project]", {
        opacity: 0,
        x: -100,
        immediateRender: false,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: p_cont.current,
            start: "top 80%",
            toggleActions: "play none restart reverse",
          },
        })
        .from("[data-section-heading]", {
          opacity: 0,
          y: 50,
          duration: 1,
        })
        .to(
          "[data-project]",
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.4,
            ease: Power3.out,
            immediateRender: false,
          },
          "-=0.5"
        );

      // ScrollTrigger.create({
      //   trigger: "[data-project-trigger]",
      //   start: "top 20%",
      //   pin: "[data-project-pin]",
      //   pinSpacing: false,
      //   pinSpacer: "[data-project-trigger]",
      //   markers: true,
      //   scrub: true,
      // });
    }, p_cont);

    return () => ctx.revert();
  }, []);
  return (
    <section id="projects" className={`${styles.sectionDefault}`} ref={p_cont}>
      <div className="w-full">
        <div
          className="w-full border-[0.5px] rounded-2xl border-brand-gray-200 dark:border-brand-gray-300 py-[40px] px-[24px] relative z-10 bg-white dark:bg-brand-black"
          data-project-trigger
        >
          <SectionHeading h1="Featured projects" h2="Projects" />
          <div className="flex gap-[24px] sm:gap-[41px] mt-10 overflow-x-auto" data-project-pin>
            {projectsInfo.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
