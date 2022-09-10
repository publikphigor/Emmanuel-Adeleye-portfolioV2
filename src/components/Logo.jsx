import { logo_dark, logo_light } from "../assets";

const Logo = ({ theme }) => {
  return (
    <div className="w-[74px] sm:w-[100px] lg:w-[132px]">
      <img
        alt="Emmanuel Adeleye Logo"
        src={theme ? logo_dark : logo_light}
        className="w-full block object-contain mx-auto"
      />
    </div>
  );
};

export default Logo;
