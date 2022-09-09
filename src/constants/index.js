import { dropdown, projects } from "../assets";

const navLinks = [
  {
    id: "home",
    name: "Home",
    link: "/",
    active: true,
  },
  {
    id: "about",
    name: "about",
    link: "/",
    active: false,
  },
  {
    id: "projects",
    name: "Projects",
    link: "/",
    img: dropdown,
    active: false,
  },
  {
    id: "resume",
    name: "My Résumé",
    link: "/",
    active: false,
  },
];

const projectsDropdown = [
  {
    id: 1,
    name: "Case Studies",
    img: projects,
  },
  {
    id: 2,
    name: "Dribble Shots",
    img: projects,
  },
  {
    id: 3,
    name: "3D & Illus",
    img: projects,
  },
];

const projectsInfo = [
  {
    id: 1,
    name: "Spark Card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: "",
  },
  {
    id: 2,
    name: "Dollar Africa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: "",
  },
  {
    id: 3,
    name: "Vella Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: "",
  },
];

const styles = {
  sectionDefault:
    "bg-white dark:bg-bg_dark text-brand-black dark:text-white w-full px-[24px] sm:px-[2.5%] md:px-[5%] lg:px-[10%] ease-linear transition-colors duration-500",
};

export { navLinks, projectsDropdown, projectsInfo, styles };
