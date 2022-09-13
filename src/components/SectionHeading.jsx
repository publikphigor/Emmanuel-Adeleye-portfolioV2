// Component for the heading of each section that's uniform
const SectionHeading = ({ h1, h2 }) => {
  return (
    <>
      <h2 className="uppercase font-semibold font-manrope text-base sm:text-[24px] text-center leading-none">
        {h1}
      </h2>
      <h1 className="text-[40px] sm:text-[96px] font-mangolaine text-brand-gray-200 dark:text-brand-gray-300 text-center uppercase leading-[0.8]">
        {h2}
      </h1>
    </>
  );
};

export default SectionHeading;
