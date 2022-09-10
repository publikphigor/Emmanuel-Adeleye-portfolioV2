import { projectsInfo } from "../constants";
import { styles } from "../constants";
import { link_right } from "../assets";
import { SectionHeading } from "../components";

// {Dynamic component generated from projectsInfo data to render each project.}
function Project({ img, link, name, description }) {
  return (
    <div className="flex-shrink-0 w-auto text-center">
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
  return (
    <section id="projects" className={`${styles.sectionDefault}`}>
      <div className="border-[0.5px] rounded-2xl border-brand-gray-200 dark:border-brand-gray-300 py-[40px] px-[24px]">
        <SectionHeading h1="Featured projects" h2="Projects" />
        <div className="flex gap-[24px] sm:gap-[41px] mt-10 overflow-x-auto">
          {projectsInfo.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
