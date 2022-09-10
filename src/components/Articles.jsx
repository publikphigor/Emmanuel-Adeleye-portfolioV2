import { articlesInfo, styles } from "../constants";
import { link_out, star_left, star_right } from "../assets";
import { SectionHeading } from "../components";

function Article({ name, date, category, excerpts, link }) {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left w-full rounded-2xl border border-brand-gray-200 dark:border-brand-gray-300 mb-[24px] md:mb-[40px] bg-white dark:bg-bg_dark  transition-colors duration-500 ease-linear">
      <div className="w-full md:w-1/2 flex-shrink-0 border-b md:border-r md:border-b-0 border-brand-gray-200 dark:border-brand-gray-300 py-[24px] md:py-[40px] px-[16px] md:px-[24px]">
        <h3 className="text-[12px] md:text-[16px] text-brand-gray uppercase mb-[8px] md:mb-[16px] font-medium">
          {category} / {date}
        </h3>
        <h1 className="font-normal font-mangolaine text-[20px] md:text-[40px]">{name}</h1>
      </div>
      <div className="w-full md:w-1/2 flex-shrink-0 py-[24px] md:py-[40px] px-[16px] md:px-[24px]">
        <p className="text-brand-gray font-normal leading-[1.4] text-[14px] md:text-[16px] mb-[8px] md:mb-[16px]">
          {excerpts}
        </p>
        <a
          href={link}
          className="text-brand-black dark:text-brand-gray uppercase font-medium text-[12px] md:text-[16px]"
        >
          Continue reading
        </a>
      </div>
    </div>
  );
}

const Articles = () => {
  return (
    <section className="w-full relative  z-[9]" id="articles">
      {/* {Laugh memoji on the left} */}
      <div className="absolute block w-full h-1/2 bg-[length:100px] bg-[center_left]  bg-no-repeat bg-fixed bg-laugh z-[10]"></div>
      {/* <img
        className="absolute top-0 lg:top-[230px] lg:left-[40px] object-contain left-0 block w-[100px] md:w-[150px]"
        src={laugh}
        alt="Emmanuel Adeleye Portfolio"
      /> */}
      {/* {Laugh memoji on the right} */}
      <div className="absolute block w-full h-full bg-[length:100px] bg-[center_right] bg-star_right bg-no-repeat bg-fixed"></div>
      {/* {<img className="" src={star} alt="Emmanuel Adeleye Portfolio" />} */}
      <div className={`${styles.sectionDefault}`}>
        <>
          <SectionHeading h1="Articles" h2="Articles" />
          <div className="mt-[24px] md:mt-[40px] w-full relative  z-[11]">
            {articlesInfo.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </div>
          <div className="mt-[32px] md:mt-[48px]">
            <a
              className="uppercase flex items-center justify-center gap-[16px] md:gap-[24px] font-medium text-[12px] md:text-[16px] text-brand-gray"
              href="/"
            >
              Read More on Medium
              <img src={link_out} alt="Read More on Medium" className="w-[32px] lg:w-[40px]" />
            </a>
          </div>
        </>
      </div>
    </section>
  );
};

export default Articles;
