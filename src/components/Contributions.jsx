import { SectionHeading } from "../components";
import { styles, contributionsInfo } from "../constants";
import { star, idea } from "../assets";

// {Dynamic component to render each contribution from contributionsInfo data.}
function Contribution({ name, description, link, img }) {
  return (
    <div className="relative flex-shrink-0 w-full md:w-[47.5%] rounded-2xl border border-brand-gray-200 dark:border-brand-gray-300 py-[24px] px-[16px] md:px-[24px]">
      <div>
        <h2 className="font-normal font-mangolaine text-[20px] md:text-[40px]">{name}</h2>
        <p className="text-[14px] md:text-[16px] text-brand-gray font-manrope leading-[1.4] mt-[16px] font-normal">
          {description}
        </p>
      </div>
      <a
        href={link}
        className="block absolute w-[24px] h-[24px] md:w-[40px] md:h-[40px] right-[24px] top-[24px] z-10"
      >
        <img src={img} alt="Link Out" className="block w-full h-full object-contain" />
      </a>
    </div>
  );
}

const Contributions = () => {
  return (
    <section className="w-full relative" id="contributions">
      <img
        className="absolute top-0 right-0 block w-[70px] md:w-[100px]"
        src={idea}
        alt="Emmanuel Adeleye Portfolio"
      />
      <img
        className="absolute top-1/2 left-0 -translate-y-1/2 block w-[70px] md:w-[100px]"
        src={star}
        alt="Emmanuel Adeleye Portfolio"
      />
      <div className={`${styles.sectionDefault}`}>
        <>
          <SectionHeading h1="Contributions" h2="Contributions" />
          <div className="flex flex-wrap gap-[24px] md:gap-[32px] justify-between mt-[40px]">
            {contributionsInfo.map((item) => (
              <Contribution key={item.id} {...item} />
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default Contributions;
