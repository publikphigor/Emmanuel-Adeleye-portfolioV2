import {
  emmah,
  arrow_light,
  arrow_dark,
  hero_text_dark,
  hero_text_light,
  outline_dark,
  outline_light,
} from "../assets";
import { styles } from "../constants";

const Hero = ({ theme }) => {
  return (
    <section className={`${styles.sectionDefault} relative mt-[130px]`} id="hero">
      <div className="w-[30px] h-[30px] rounded-full border border-bg_dark dark:border-white flex justify-center items-center absolute top-0 lg:right-[30%] right-[10%]">
        <span className="block h-[14px] w-[14px] rounded-full bg-bg_dark dark:bg-white"></span>
      </div>
      <div className="w-full overflow-hidden">
        <img className="block w-[220px] mx-auto" src={emmah} alt="Emmanuel Adeleye" />
        <h1 className="text-center font-mangolaine text-[20px] sm:text-[40px] uppercase">
          Hey, I'm Emmanuel
        </h1>
        <h1 className="text-center font-mangolaine text-[20px] sm:text-[40px] uppercase flex items-center justify-center gap-3">
          <span>A Product</span>
          <span className="sm:w-[21px] sm:h-[21px] w-[10px] h-[10px] inline-block rounded-full bg-brand-primary" />{" "}
          <span>Designer (UI/UX)</span>
        </h1>
        <p className="font-normal font-manrope text-[14px] sm:text-[16px] text-center text-brand-gray">
          I love creating user-friendly products for ambitious businesses. <br />
          Currently working remotely from Nigeria.
        </p>
      </div>
      <a className="block w-[139px] h-[139px] mx-auto mt-[64px] relative" href="/">
        <img
          src={theme ? outline_dark : outline_light}
          alt="Emmanuel Adeleye"
          className="absolute top-[50%] left-[50%] w-full h-full block -translate-x-[50%] -translate-y-[50%]"
        />
        <img
          src={theme ? hero_text_dark : hero_text_light}
          alt="Emmanuel Adeleye"
          className="absolute top-[50%] left-[50%] w-[120px] h-[118px] block -translate-x-[50%] -translate-y-[50%]"
        />
        <img
          src={theme ? arrow_dark : arrow_light}
          alt="Emmanuel Adeleye"
          className="absolute top-[50%] left-[50%] w-[48px] h-[42px] block -translate-x-[50%] -translate-y-[50%]"
        />
      </a>
    </section>
  );
};

export default Hero;
