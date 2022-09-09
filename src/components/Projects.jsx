import { projectsInfo } from "../constants";
import { styles } from "../constants";
import { link_right } from "../assets";

function Project({ img, link, name, description }) {
  return (
    <div className="flex-shrink-0 w-auto text-center">
      <div className="h-[300px] w-[300px] border rounded-2xl border-brand-gray-200 dark:border-brand-gray-300 mb-[24px] mx-auto overflow-hidden">
        <img className="block w-full h-full object-contain" src={img} />
      </div>
      <div>
        <h3 className="uppercase font-manrope text-xl text-brand-gray-200 dark:text-brand-gray-300">
          Case Study
        </h3>
        <h1 className="font-normal font-mangolaine text-[40px] my-4">{name}</h1>
        <p className="leading-[1.4] text-brand-gray text-center max-w-[312px]">{description}</p>
        <a
          href={link}
          className="flex items-center text-brand-black dark:text-brand-gray uppercase justify-center mt-[20px]"
        >
          View Case Study
          <img src={link_right} className="w-[20px] object-contain ml-3" />
        </a>
      </div>
    </div>
  );
}
const Projects = () => {
  return (
    <section id="projects" className={`${styles.sectionDefault} mt-[64px]`}>
      <div className="border-[0.5px] border-brand-gray-200 dark:border-brand-gray-300 py-[40px] px-[24px]">
        <h2 className="uppercase font-semibold font-manrope text-[24px] text-center">
          Featured Projects
        </h2>
        <h1 className="text-[96px] font-mangolaine text-brand-gray-200 dark:text-brand-gray-300 text-center uppercase leading-[0.8]">
          Projects
        </h1>
        <div className="flex gap-[41px] mt-10">
          {projectsInfo.map((project) => {
            return <Project id={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
