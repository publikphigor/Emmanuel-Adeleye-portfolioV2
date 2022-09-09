import { projects } from "../assets";
import { projectsDropdown } from "../constants";

const NavbarDropdown = ({ toggle, setToggle }) => {
  return (
    <div
      className={`hidden lg:flex justify-between items-center w-[80%] mx-auto fixed z-[10] left-[50%] -translate-x-[50%] top-[120px] p-[32px] bg-white transition-opacity duration-500 dark:bg-bg_dark text-black dark:text-white ${
        toggle ? "opacity-100" : "opacity-0"
      }`}
      onMouseLeave={() => setToggle(false)}
    >
      {projectsDropdown.map((project) => (
        <div
          className="border-[0.5px] border-[#1c1c1c] rounded-[16px] p-[16px] max-h-[270px] max-w-[280px]"
          key={project.id}
        >
          <h1 className="text-center font-manrope font-normal uppercase text-[24px] mb-[36px]">
            {project.name}
          </h1>
          <div className="w-5/6">
            <img src={project.img} alt={project.name} className="w-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarDropdown;
