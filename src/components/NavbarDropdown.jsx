import { projectsDropdown } from "../constants";

const NavbarDropdown = ({ toggle, setToggle }) => {
  return (
    <div
      className={`hidden  justify-between items-center w-[68%] mx-auto fixed z-[10] left-[50%] -translate-x-[50%] top-[120px] p-[32px] bg-white transition-opacity duration-500 dark:bg-bg_dark text-black dark:text-white ${
        toggle ? "opacity-100 lg:flex" : "opacity-0"
      }`}
      onMouseLeave={() => setToggle(false)}
    >
      {projectsDropdown.map((project) => (
        <div
          className="border-[0.5px] border-brand-gray-200 dark:border-brand-gray-300 rounded-[16px] py-[16px] max-h-[270px] max-w-[30%]"
          key={project.id}
        >
          <h1 className="text-center font-manrope font-normal uppercase text-[24px] mb-[36px] leading-[1]">
            {project.name}
          </h1>
          <div className="w-5/6 mx-auto">
            <img src={project.img} alt={project.name} className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarDropdown;
