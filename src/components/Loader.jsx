import {
  loader,
  outline_light,
  outline_dark,
  loader_text_dark,
  loader_text_light,
} from "../assets";

const Loader = ({ theme }) => {
  return (
    <div className="w-full h-screen bg-white dark:bg-bg_dark flex items-center justify-center">
      <div className="relative w-[140px] h-[140px] mx-auto">
        <img
          src={theme ? outline_dark : outline_light}
          alt="Loader Image"
          className="absolute w-full h-full object-contain top-1/2 left-1/2 loader_outline"
        />
        <img
          src={theme ? loader_text_dark : loader_text_light}
          alt="Loader Image"
          className="absolute w-[120px] h-[120px] object-contain top-1/2 left-1/2 loader_text"
        />
        <img
          src={loader}
          alt="Loader Image"
          className="absolute w-[80px] h-[80px] object-contain top-1/2 left-1/2 loader_image"
        />
      </div>
    </div>
  );
};

export default Loader;
