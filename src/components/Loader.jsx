import { loader, outline_light, outline_dark } from "../assets";

const Loader = ({ theme }) => {
  return (
    <div className="w-full h-screen bg-white dark:bg-bg_dark flex items-center justify-center">
      <div className="relative w-[140px] h-[140px] mx-auto">
        <img
          src={theme ? outline_dark : outline_light}
          className="absolute w-full h-full object-contain top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        />
        <img
          src={loader}
          className="absolute w-[80px] h-[80px] object-contain top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        />
      </div>
    </div>
  );
};

export default Loader;
