/**
 *
 * This file contains the data displayed on the UI. It can be easily edited without altering the code and it updates autoatically on the UI.
 *
 */

// Importing images
import { dropdown, projects, link_out } from "../assets";

// Drives the main navigation menu
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

// Drives the dropdown of projects.
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

// Drives the projects section
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

// Drives the contributions section
const contributionsInfo = [
  {
    id: 1,
    name: "App Nav. Kits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: link_out,
  },

  {
    id: 2,
    name: "Glass Icons",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: link_out,
  },

  {
    id: 3,
    name: "Low-Fi Kits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: link_out,
  },

  {
    id: 4,
    name: "Explore More",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
    img: link_out,
  },
];

// Drives the articles section
const articlesInfo = [
  {
    id: 1,
    name: "Best Figma Plugins For Creating Design System",
    date: "June 12, 2022",
    category: "UI/UX Design",
    excerpts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
  },

  {
    id: 2,
    name: "Best Figma Plugins For Creating Design System",
    date: "June 12, 2022",
    category: "UI/UX Design",
    excerpts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
  },

  {
    id: 3,
    name: "Best Figma Plugins For Creating Design System",
    date: "June 12, 2022",
    category: "UI/UX Design",
    excerpts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor metus, at varius arcu eget pharetra, diam dapibus. Massa diam cras eget urna donec orci.",
    link: "/",
  },
];

// Drives the naviagtion menu on the footer
const footerLinks = [
  {
    id: 1,
    name: "Medium",
    link: "/",
  },

  {
    id: 2,
    name: "Behance",
    link: "/",
  },

  {
    id: 3,
    name: "Dribble",
    link: "/",
  },

  {
    id: 4,
    name: "Linkedin",
    link: "/",
  },
];

// TailwindCSS classes to be applied to all sections for uniformity.
const styles = {
  sectionDefault:
    "bg-white dark:bg-bg_dark text-brand-black dark:text-white w-full px-[16px] md:px-[4%] lg:px-[16%] ease-linear transition-colors duration-500 mt-[100px]",
};

// Export all as a single object
export {
  navLinks,
  projectsDropdown,
  projectsInfo,
  contributionsInfo,
  articlesInfo,
  footerLinks,
  styles,
};
